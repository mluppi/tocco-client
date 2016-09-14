import createMergeResult, {getMergeMatrixResult, getMergeStrategyResult} from './MergeActionResult'

describe('merge-action', () => {
  describe('utils ', () => {
    describe('MergeActionResult', () => {
      it('should map modelName', () => {
        var state = {
          model: {modelName: 'User'},
          entities: [],
          selections: {}
        }

        var result = getMergeMatrixResult(state)

        result.should.have.property('modelName')
        result.modelName.should.equal('User');

      })

      it('should set sourceEntities without including target', () => {
        var state = {
          model: {modelName: 'User'},
          targetEntityPk: '2',
          entities: [{pk: '1'}, {pk: '2'}, {pk: '3'}],
          selections: {}
        }

        var result = getMergeMatrixResult(state)

        result.should.have.property('sourceEntities')
        result.sourceEntities.should.eql(['1', '3'])
      })

      it('should map fields and exclude target entity selections', () => {
        var state = {
          model: {modelName: 'User'},
          entities: [{pk: '1'}, {pk: '2'}],
          targetEntityPk: '1',
          selections: {
            fields: {
              firstname: '1',
              lastname: '2'
            }
          }
        }

        var result = getMergeMatrixResult(state)

        result.should.have.property('data')
        result.data.should.have.property('fields')
        result.data.fields.should.have.length(1)
        result.data.fields[0].should.eql(
          {name: 'lastname', pk: '2'}
        )
      })

      it('should map relations and exclude target entity selections', () => {
        var state = {
          model: {modelName: 'User'},
          entities: [
            {pk: '113'},
            {pk: '114', relations: {rel_b: {values: [{pk: '44'}]}}}],
          targetEntityPk: '113',
          selections: {
            relations: {
              rel_a: '113',
              rel_b: '114'
            }
          }
        }


        var result = getMergeMatrixResult(state)

        result.should.have.property('data')
        result.data.should.have.property('relations')
        result.data.relations.should.have.length(1)

        result.data.relations[0].should.eql(
          {name: 'rel_b', keys: ['44']}
        )
      })

      it('should map to many relations', () => {
        var state = {
          model: {modelName: 'User'},
          entities: [
            {pk: '113'},
            {pk: '114'}],
          targetEntityPk: '113',
          selections: {
            toManyRelations: {
              rel_c: {
                113: ['33', '34'],
                114: ['33', '35']
              },
              rel_d: {
                113: [],
                114: ['33', '34']
              }
            }
          }
        }


        var result = getMergeMatrixResult(state)

        result.should.have.property('data')
        result.data.should.have.property('toManyRelations')
        result.data.toManyRelations.should.have.length(2)


        result.data.toManyRelations[0].should.eql(
          {
            name: 'rel_c',
            keys: ['33', '34']
          }
        )
        result.data.toManyRelations[1].should.eql(
          {
            name: 'rel_d',
            keys: []
          }
        )
      })

      it('should set isCopyRemainingRelations', () => {
        var state = {
          strategies: {
            copyRelations: true
          }
        }

        var result = getMergeStrategyResult(state)

        result.should.have.property('isCopyRemainingRelations')
        result.isCopyRemainingRelations.should.be.true
      })

      it('should set sourceEntityConfig delete flag', () => {
        var state = {
          strategies: {
            sourceEntityAction: 'something'
          }
        }

        var result = getMergeStrategyResult(state)

        result.should.have.property('sourceEntityConfig')
        result.sourceEntityConfig.should.have.property('deleteSourceEntities')
        result.sourceEntityConfig.deleteSourceEntities.should.be.false

        var state2 = {
          strategies: {
            sourceEntityAction: 'delete'
          }
        }

        result = getMergeStrategyResult(state2)
        result.sourceEntityConfig.deleteSourceEntities.should.be.true
      })

      it('should set edit values', () => {
        var state = {

          strategies: {
            sourceEntityAction: 'edit'
          },
          editOptions: [
            {
              type: 'set-field-source-entity-strategy',
              active: true,
              name: 'firstname',
              value: 'delete'
            },
            {
              type: 'set-field-source-entity-strategy',
              active: false,
              name: 'lastname',
              value: 'delete'
            }
          ]
        }

        var result = getMergeStrategyResult(state)

        result.should.have.property('sourceEntityConfig')
        result.sourceEntityConfig.should.have.property('updateValues')

        result.sourceEntityConfig.updateValues.length.should.eql(1)

      })

      it('should  set emtpy edit values if other action', () => {
        var state = {

          strategies: {
            sourceEntityAction: 'noAction'
          },
          editOptions: [
            {
              type: 'set-field-source-entity-strategy',
              active: true,
              name: 'firstname',
              value: 'delete'
            }
          ]
        }

        var result = getMergeStrategyResult(state)

        result.should.have.property('sourceEntityConfig')
        result.sourceEntityConfig.should.have.property('updateValues')
        result.sourceEntityConfig.updateValues.length.should.eql(0)
      })
    })
  })
})
