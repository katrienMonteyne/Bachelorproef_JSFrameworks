import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    modelNameFromPayloadType(name) {
        let withoutApiPrefix = name.replace("api_v1_", "");
        return this._super(withoutApiPrefix);
      },
    
      payloadTypeFromModelName(modelName) {
        let type = this._super(modelName);
        return `api_v1_${type}`;
      }
});