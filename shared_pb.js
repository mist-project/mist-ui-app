// source: shared.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var auth_pb = require('./auth_pb.js');
goog.object.extend(proto, auth_pb);
goog.exportSymbol('proto.api.v1.shared.ActionType', null, global);
goog.exportSymbol('proto.api.v1.shared.IOMessage', null, global);
goog.exportSymbol('proto.api.v1.shared.IOMessage.DataCase', null, global);
goog.exportSymbol('proto.api.v1.shared.Input', null, global);
goog.exportSymbol('proto.api.v1.shared.Input.DataCase', null, global);
goog.exportSymbol('proto.api.v1.shared.Meta', null, global);
goog.exportSymbol('proto.api.v1.shared.Output', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1.shared.Meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1.shared.Meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1.shared.Meta.displayName = 'proto.api.v1.shared.Meta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1.shared.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.v1.shared.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1.shared.Output.displayName = 'proto.api.v1.shared.Output';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1.shared.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1.shared.Input.oneofGroups_);
};
goog.inherits(proto.api.v1.shared.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1.shared.Input.displayName = 'proto.api.v1.shared.Input';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.v1.shared.IOMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.api.v1.shared.IOMessage.oneofGroups_);
};
goog.inherits(proto.api.v1.shared.IOMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.v1.shared.IOMessage.displayName = 'proto.api.v1.shared.IOMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1.shared.Meta.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1.shared.Meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1.shared.Meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.Meta.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1.shared.Meta}
 */
proto.api.v1.shared.Meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1.shared.Meta;
  return proto.api.v1.shared.Meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1.shared.Meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1.shared.Meta}
 */
proto.api.v1.shared.Meta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.v1.shared.ActionType} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1.shared.Meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1.shared.Meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1.shared.Meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.Meta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ActionType action = 1;
 * @return {!proto.api.v1.shared.ActionType}
 */
proto.api.v1.shared.Meta.prototype.getAction = function() {
  return /** @type {!proto.api.v1.shared.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.api.v1.shared.ActionType} value
 * @return {!proto.api.v1.shared.Meta} returns this
 */
proto.api.v1.shared.Meta.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1.shared.Output.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1.shared.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1.shared.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.Output.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1.shared.Output}
 */
proto.api.v1.shared.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1.shared.Output;
  return proto.api.v1.shared.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1.shared.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1.shared.Output}
 */
proto.api.v1.shared.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1.shared.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1.shared.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1.shared.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1.shared.Input.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.api.v1.shared.Input.DataCase = {
  DATA_NOT_SET: 0,
  UPDATE_JWT_TOKEN: 1
};

/**
 * @return {proto.api.v1.shared.Input.DataCase}
 */
proto.api.v1.shared.Input.prototype.getDataCase = function() {
  return /** @type {proto.api.v1.shared.Input.DataCase} */(jspb.Message.computeOneofCase(this, proto.api.v1.shared.Input.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1.shared.Input.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1.shared.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1.shared.Input} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateJwtToken: (f = msg.getUpdateJwtToken()) && auth_pb.UpdateJwtToken.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1.shared.Input}
 */
proto.api.v1.shared.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1.shared.Input;
  return proto.api.v1.shared.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1.shared.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1.shared.Input}
 */
proto.api.v1.shared.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new auth_pb.UpdateJwtToken;
      reader.readMessage(value,auth_pb.UpdateJwtToken.deserializeBinaryFromReader);
      msg.setUpdateJwtToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1.shared.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1.shared.Input.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1.shared.Input} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.Input.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateJwtToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      auth_pb.UpdateJwtToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional api.v1.auth.UpdateJwtToken update_jwt_token = 1;
 * @return {?proto.api.v1.auth.UpdateJwtToken}
 */
proto.api.v1.shared.Input.prototype.getUpdateJwtToken = function() {
  return /** @type{?proto.api.v1.auth.UpdateJwtToken} */ (
    jspb.Message.getWrapperField(this, auth_pb.UpdateJwtToken, 1));
};


/**
 * @param {?proto.api.v1.auth.UpdateJwtToken|undefined} value
 * @return {!proto.api.v1.shared.Input} returns this
*/
proto.api.v1.shared.Input.prototype.setUpdateJwtToken = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.api.v1.shared.Input.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1.shared.Input} returns this
 */
proto.api.v1.shared.Input.prototype.clearUpdateJwtToken = function() {
  return this.setUpdateJwtToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1.shared.Input.prototype.hasUpdateJwtToken = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.api.v1.shared.IOMessage.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.api.v1.shared.IOMessage.DataCase = {
  DATA_NOT_SET: 0,
  INPUT: 2,
  OUTPUT: 3
};

/**
 * @return {proto.api.v1.shared.IOMessage.DataCase}
 */
proto.api.v1.shared.IOMessage.prototype.getDataCase = function() {
  return /** @type {proto.api.v1.shared.IOMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.api.v1.shared.IOMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.v1.shared.IOMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.api.v1.shared.IOMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.v1.shared.IOMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.IOMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.api.v1.shared.Meta.toObject(includeInstance, f),
    input: (f = msg.getInput()) && proto.api.v1.shared.Input.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && proto.api.v1.shared.Output.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.v1.shared.IOMessage}
 */
proto.api.v1.shared.IOMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.v1.shared.IOMessage;
  return proto.api.v1.shared.IOMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.v1.shared.IOMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.v1.shared.IOMessage}
 */
proto.api.v1.shared.IOMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.v1.shared.Meta;
      reader.readMessage(value,proto.api.v1.shared.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.api.v1.shared.Input;
      reader.readMessage(value,proto.api.v1.shared.Input.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 3:
      var value = new proto.api.v1.shared.Output;
      reader.readMessage(value,proto.api.v1.shared.Output.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.v1.shared.IOMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.v1.shared.IOMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.v1.shared.IOMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.v1.shared.IOMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.v1.shared.Meta.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.v1.shared.Input.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.api.v1.shared.Output.serializeBinaryToWriter
    );
  }
};


/**
 * optional Meta meta = 1;
 * @return {?proto.api.v1.shared.Meta}
 */
proto.api.v1.shared.IOMessage.prototype.getMeta = function() {
  return /** @type{?proto.api.v1.shared.Meta} */ (
    jspb.Message.getWrapperField(this, proto.api.v1.shared.Meta, 1));
};


/**
 * @param {?proto.api.v1.shared.Meta|undefined} value
 * @return {!proto.api.v1.shared.IOMessage} returns this
*/
proto.api.v1.shared.IOMessage.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1.shared.IOMessage} returns this
 */
proto.api.v1.shared.IOMessage.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1.shared.IOMessage.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Input input = 2;
 * @return {?proto.api.v1.shared.Input}
 */
proto.api.v1.shared.IOMessage.prototype.getInput = function() {
  return /** @type{?proto.api.v1.shared.Input} */ (
    jspb.Message.getWrapperField(this, proto.api.v1.shared.Input, 2));
};


/**
 * @param {?proto.api.v1.shared.Input|undefined} value
 * @return {!proto.api.v1.shared.IOMessage} returns this
*/
proto.api.v1.shared.IOMessage.prototype.setInput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.api.v1.shared.IOMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1.shared.IOMessage} returns this
 */
proto.api.v1.shared.IOMessage.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1.shared.IOMessage.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Output output = 3;
 * @return {?proto.api.v1.shared.Output}
 */
proto.api.v1.shared.IOMessage.prototype.getOutput = function() {
  return /** @type{?proto.api.v1.shared.Output} */ (
    jspb.Message.getWrapperField(this, proto.api.v1.shared.Output, 3));
};


/**
 * @param {?proto.api.v1.shared.Output|undefined} value
 * @return {!proto.api.v1.shared.IOMessage} returns this
*/
proto.api.v1.shared.IOMessage.prototype.setOutput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.api.v1.shared.IOMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.v1.shared.IOMessage} returns this
 */
proto.api.v1.shared.IOMessage.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.v1.shared.IOMessage.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.api.v1.shared.ActionType = {
  GET: 0,
  LIST: 1,
  CREATE: 2,
  UPDATE: 3,
  DELETE: 4,
  NOTIFICATION: 5
};

goog.object.extend(exports, proto.api.v1.shared);
