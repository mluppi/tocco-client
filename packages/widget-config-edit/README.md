# Widget Config Edit

Action that opens the edit view of a related specific widget config of a Widget_config entity.

## Embedding

React-registry name: `widget-config-edit`

### Inputs

| Name                            | Mandatory   | Description                                                                                                                                                                                               | Type     | Default-Value              |
|-------------------------------- | :---------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| -------- | ---------------------------|
| `selection`                     | *           | Selection of Widget_config (only type `ID` supported and requires exactly one key)                                                                                                                                | Object   |                            |


### Events

| Name                   | Description
|------------------------|------------
| `onSuccess`            | Is fired if edited config was saved successfully
| `emitAction`           | Is fired when an action is emitted
