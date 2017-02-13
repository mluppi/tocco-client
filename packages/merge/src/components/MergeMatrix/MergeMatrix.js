import React from 'react'
import {intlShape} from 'react-intl'

import './MegerMatrix.scss'

import {HeaderRow, ToManyRelationRow, FieldRow, RelationRow} from './table-components'

const MergeMatrix = props => {
  const targetEntity = props.entities.find(e => e.pk === props.targetEntityPk)

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <HeaderRow
            entities={props.entities}
            changeTargetEntity={props.changeTargetEntity}
            selectSourceField={props.selectSourceField}
            targetEntityPk={props.targetEntityPk}
            intl={props.intl}
        />
        </thead>
        <tbody>
          {
          props.model.fields.map((field, idx) => {
            return (
              <FieldRow
                key={`fieldrow${idx}`}
                field={field}
                selections={props.selections}
                targetEntity={targetEntity}
                entities={props.entities}
                selectSourceField={props.selectSourceField}
              />
            )
          })
        }
          {
          props.model.relations.filter(r => !r.toMany).map((relation, idx) => {
            return (
              <RelationRow
                key={`relationrow${idx}`}
                relation={relation}
                selections={props.selections}
                targetEntity={targetEntity}
                entities={props.entities}
                selectSourceRelation={props.selectSourceRelation}
                toggleRelationMany={props.toggleRelationMany}
              />
            )
          })
        }
          {
          props.model.relations.filter(r => r.toMany).map((relation, idx) => {
            return (
              <ToManyRelationRow
                key={`relationrow${idx}`}
                relation={relation}
                selections={props.selections}
                targetEntity={targetEntity}
                entities={props.entities}
                toggleRelationMany={props.toggleRelationMany}
              />
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

MergeMatrix.propTypes = {
  entities: React.PropTypes.array.isRequired,
  model: React.PropTypes.object.isRequired,
  targetEntityPk: React.PropTypes.string,
  selections: React.PropTypes.object,
  changeTargetEntity: React.PropTypes.func.isRequired,
  selectSourceField: React.PropTypes.func.isRequired,
  selectSourceRelation: React.PropTypes.func.isRequired,
  toggleRelationMany: React.PropTypes.func.isRequired,
  intl: intlShape.isRequired
}

export default MergeMatrix
