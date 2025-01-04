/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof api
         * @namespace
         */
        const v1 = {};

        v1.messages = (function() {

            /**
             * Namespace messages.
             * @memberof api.v1
             * @namespace
             */
            const messages = {};

            messages.InputMessage = (function() {

                /**
                 * Properties of an InputMessage.
                 * @memberof api.v1.messages
                 * @interface IInputMessage
                 * @property {api.v1.messages.IMeta|null} [meta] InputMessage meta
                 * @property {api.v1.messages.IInput|null} [input] InputMessage input
                 */

                /**
                 * Constructs a new InputMessage.
                 * @memberof api.v1.messages
                 * @classdesc Represents an InputMessage.
                 * @implements IInputMessage
                 * @constructor
                 * @param {api.v1.messages.IInputMessage=} [properties] Properties to set
                 */
                function InputMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * InputMessage meta.
                 * @member {api.v1.messages.IMeta|null|undefined} meta
                 * @memberof api.v1.messages.InputMessage
                 * @instance
                 */
                InputMessage.prototype.meta = null;

                /**
                 * InputMessage input.
                 * @member {api.v1.messages.IInput|null|undefined} input
                 * @memberof api.v1.messages.InputMessage
                 * @instance
                 */
                InputMessage.prototype.input = null;

                /**
                 * Creates a new InputMessage instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {api.v1.messages.IInputMessage=} [properties] Properties to set
                 * @returns {api.v1.messages.InputMessage} InputMessage instance
                 */
                InputMessage.create = function create(properties) {
                    return new InputMessage(properties);
                };

                /**
                 * Encodes the specified InputMessage message. Does not implicitly {@link api.v1.messages.InputMessage.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {api.v1.messages.IInputMessage} message InputMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InputMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                        $root.api.v1.messages.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                        $root.api.v1.messages.Input.encode(message.input, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified InputMessage message, length delimited. Does not implicitly {@link api.v1.messages.InputMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {api.v1.messages.IInputMessage} message InputMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InputMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an InputMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.InputMessage} InputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InputMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.InputMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.meta = $root.api.v1.messages.Meta.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.input = $root.api.v1.messages.Input.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an InputMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.InputMessage} InputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InputMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an InputMessage message.
                 * @function verify
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                InputMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        let error = $root.api.v1.messages.Meta.verify(message.meta);
                        if (error)
                            return "meta." + error;
                    }
                    if (message.input != null && message.hasOwnProperty("input")) {
                        let error = $root.api.v1.messages.Input.verify(message.input);
                        if (error)
                            return "input." + error;
                    }
                    return null;
                };

                /**
                 * Creates an InputMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.InputMessage} InputMessage
                 */
                InputMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.InputMessage)
                        return object;
                    let message = new $root.api.v1.messages.InputMessage();
                    if (object.meta != null) {
                        if (typeof object.meta !== "object")
                            throw TypeError(".api.v1.messages.InputMessage.meta: object expected");
                        message.meta = $root.api.v1.messages.Meta.fromObject(object.meta);
                    }
                    if (object.input != null) {
                        if (typeof object.input !== "object")
                            throw TypeError(".api.v1.messages.InputMessage.input: object expected");
                        message.input = $root.api.v1.messages.Input.fromObject(object.input);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an InputMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {api.v1.messages.InputMessage} message InputMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InputMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.meta = null;
                        object.input = null;
                    }
                    if (message.meta != null && message.hasOwnProperty("meta"))
                        object.meta = $root.api.v1.messages.Meta.toObject(message.meta, options);
                    if (message.input != null && message.hasOwnProperty("input"))
                        object.input = $root.api.v1.messages.Input.toObject(message.input, options);
                    return object;
                };

                /**
                 * Converts this InputMessage to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.InputMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                InputMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for InputMessage
                 * @function getTypeUrl
                 * @memberof api.v1.messages.InputMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                InputMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.InputMessage";
                };

                return InputMessage;
            })();

            messages.OutputMessage = (function() {

                /**
                 * Properties of an OutputMessage.
                 * @memberof api.v1.messages
                 * @interface IOutputMessage
                 * @property {api.v1.messages.IMeta|null} [meta] OutputMessage meta
                 * @property {api.v1.messages.IOutput|null} [output] OutputMessage output
                 */

                /**
                 * Constructs a new OutputMessage.
                 * @memberof api.v1.messages
                 * @classdesc Represents an OutputMessage.
                 * @implements IOutputMessage
                 * @constructor
                 * @param {api.v1.messages.IOutputMessage=} [properties] Properties to set
                 */
                function OutputMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OutputMessage meta.
                 * @member {api.v1.messages.IMeta|null|undefined} meta
                 * @memberof api.v1.messages.OutputMessage
                 * @instance
                 */
                OutputMessage.prototype.meta = null;

                /**
                 * OutputMessage output.
                 * @member {api.v1.messages.IOutput|null|undefined} output
                 * @memberof api.v1.messages.OutputMessage
                 * @instance
                 */
                OutputMessage.prototype.output = null;

                /**
                 * Creates a new OutputMessage instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {api.v1.messages.IOutputMessage=} [properties] Properties to set
                 * @returns {api.v1.messages.OutputMessage} OutputMessage instance
                 */
                OutputMessage.create = function create(properties) {
                    return new OutputMessage(properties);
                };

                /**
                 * Encodes the specified OutputMessage message. Does not implicitly {@link api.v1.messages.OutputMessage.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {api.v1.messages.IOutputMessage} message OutputMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OutputMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                        $root.api.v1.messages.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                        $root.api.v1.messages.Output.encode(message.output, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OutputMessage message, length delimited. Does not implicitly {@link api.v1.messages.OutputMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {api.v1.messages.IOutputMessage} message OutputMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OutputMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OutputMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.OutputMessage} OutputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OutputMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.OutputMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.meta = $root.api.v1.messages.Meta.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.output = $root.api.v1.messages.Output.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OutputMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.OutputMessage} OutputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OutputMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OutputMessage message.
                 * @function verify
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OutputMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        let error = $root.api.v1.messages.Meta.verify(message.meta);
                        if (error)
                            return "meta." + error;
                    }
                    if (message.output != null && message.hasOwnProperty("output")) {
                        let error = $root.api.v1.messages.Output.verify(message.output);
                        if (error)
                            return "output." + error;
                    }
                    return null;
                };

                /**
                 * Creates an OutputMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.OutputMessage} OutputMessage
                 */
                OutputMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.OutputMessage)
                        return object;
                    let message = new $root.api.v1.messages.OutputMessage();
                    if (object.meta != null) {
                        if (typeof object.meta !== "object")
                            throw TypeError(".api.v1.messages.OutputMessage.meta: object expected");
                        message.meta = $root.api.v1.messages.Meta.fromObject(object.meta);
                    }
                    if (object.output != null) {
                        if (typeof object.output !== "object")
                            throw TypeError(".api.v1.messages.OutputMessage.output: object expected");
                        message.output = $root.api.v1.messages.Output.fromObject(object.output);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OutputMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {api.v1.messages.OutputMessage} message OutputMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OutputMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.meta = null;
                        object.output = null;
                    }
                    if (message.meta != null && message.hasOwnProperty("meta"))
                        object.meta = $root.api.v1.messages.Meta.toObject(message.meta, options);
                    if (message.output != null && message.hasOwnProperty("output"))
                        object.output = $root.api.v1.messages.Output.toObject(message.output, options);
                    return object;
                };

                /**
                 * Converts this OutputMessage to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.OutputMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OutputMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OutputMessage
                 * @function getTypeUrl
                 * @memberof api.v1.messages.OutputMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OutputMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.OutputMessage";
                };

                return OutputMessage;
            })();

            messages.Meta = (function() {

                /**
                 * Properties of a Meta.
                 * @memberof api.v1.messages
                 * @interface IMeta
                 * @property {api.v1.messages.ActionType|null} [action] Meta action
                 */

                /**
                 * Constructs a new Meta.
                 * @memberof api.v1.messages
                 * @classdesc Represents a Meta.
                 * @implements IMeta
                 * @constructor
                 * @param {api.v1.messages.IMeta=} [properties] Properties to set
                 */
                function Meta(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Meta action.
                 * @member {api.v1.messages.ActionType} action
                 * @memberof api.v1.messages.Meta
                 * @instance
                 */
                Meta.prototype.action = 0;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {api.v1.messages.IMeta=} [properties] Properties to set
                 * @returns {api.v1.messages.Meta} Meta instance
                 */
                Meta.create = function create(properties) {
                    return new Meta(properties);
                };

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link api.v1.messages.Meta.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {api.v1.messages.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
                    return writer;
                };

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link api.v1.messages.Meta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {api.v1.messages.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.Meta();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.action = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Meta message.
                 * @function verify
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Meta.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.action != null && message.hasOwnProperty("action"))
                        switch (message.action) {
                        default:
                            return "action: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.Meta} Meta
                 */
                Meta.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.Meta)
                        return object;
                    let message = new $root.api.v1.messages.Meta();
                    switch (object.action) {
                    default:
                        if (typeof object.action === "number") {
                            message.action = object.action;
                            break;
                        }
                        break;
                    case "ACTION_TYPE_UNSPECIFIED":
                    case 0:
                        message.action = 0;
                        break;
                    case "ACTION_TYPE_GET":
                    case 1:
                        message.action = 1;
                        break;
                    case "ACTION_TYPE_LIST":
                    case 2:
                        message.action = 2;
                        break;
                    case "ACTION_TYPE_CREATE":
                    case 3:
                        message.action = 3;
                        break;
                    case "ACTION_TYPE_UPDATE":
                    case 4:
                        message.action = 4;
                        break;
                    case "ACTION_TYPE_DELETE":
                    case 5:
                        message.action = 5;
                        break;
                    case "ACTION_TYPE_NOTIFICATION":
                    case 6:
                        message.action = 6;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {api.v1.messages.Meta} message Meta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Meta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.action = options.enums === String ? "ACTION_TYPE_UNSPECIFIED" : 0;
                    if (message.action != null && message.hasOwnProperty("action"))
                        object.action = options.enums === String ? $root.api.v1.messages.ActionType[message.action] === undefined ? message.action : $root.api.v1.messages.ActionType[message.action] : message.action;
                    return object;
                };

                /**
                 * Converts this Meta to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.Meta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Meta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Meta
                 * @function getTypeUrl
                 * @memberof api.v1.messages.Meta
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Meta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.Meta";
                };

                return Meta;
            })();

            /**
             * ActionType enum.
             * @name api.v1.messages.ActionType
             * @enum {number}
             * @property {number} ACTION_TYPE_UNSPECIFIED=0 ACTION_TYPE_UNSPECIFIED value
             * @property {number} ACTION_TYPE_GET=1 ACTION_TYPE_GET value
             * @property {number} ACTION_TYPE_LIST=2 ACTION_TYPE_LIST value
             * @property {number} ACTION_TYPE_CREATE=3 ACTION_TYPE_CREATE value
             * @property {number} ACTION_TYPE_UPDATE=4 ACTION_TYPE_UPDATE value
             * @property {number} ACTION_TYPE_DELETE=5 ACTION_TYPE_DELETE value
             * @property {number} ACTION_TYPE_NOTIFICATION=6 ACTION_TYPE_NOTIFICATION value
             */
            messages.ActionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ACTION_TYPE_UNSPECIFIED"] = 0;
                values[valuesById[1] = "ACTION_TYPE_GET"] = 1;
                values[valuesById[2] = "ACTION_TYPE_LIST"] = 2;
                values[valuesById[3] = "ACTION_TYPE_CREATE"] = 3;
                values[valuesById[4] = "ACTION_TYPE_UPDATE"] = 4;
                values[valuesById[5] = "ACTION_TYPE_DELETE"] = 5;
                values[valuesById[6] = "ACTION_TYPE_NOTIFICATION"] = 6;
                return values;
            })();

            messages.Input = (function() {

                /**
                 * Properties of an Input.
                 * @memberof api.v1.messages
                 * @interface IInput
                 * @property {api.v1.messages.IUpdateJwtToken|null} [updateJwtToken] Input updateJwtToken
                 */

                /**
                 * Constructs a new Input.
                 * @memberof api.v1.messages
                 * @classdesc Represents an Input.
                 * @implements IInput
                 * @constructor
                 * @param {api.v1.messages.IInput=} [properties] Properties to set
                 */
                function Input(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Input updateJwtToken.
                 * @member {api.v1.messages.IUpdateJwtToken|null|undefined} updateJwtToken
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Input.prototype.updateJwtToken = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Input data.
                 * @member {"updateJwtToken"|undefined} data
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Object.defineProperty(Input.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["updateJwtToken"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Input instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {api.v1.messages.IInput=} [properties] Properties to set
                 * @returns {api.v1.messages.Input} Input instance
                 */
                Input.create = function create(properties) {
                    return new Input(properties);
                };

                /**
                 * Encodes the specified Input message. Does not implicitly {@link api.v1.messages.Input.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {api.v1.messages.IInput} message Input message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Input.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.updateJwtToken != null && Object.hasOwnProperty.call(message, "updateJwtToken"))
                        $root.api.v1.messages.UpdateJwtToken.encode(message.updateJwtToken, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Input message, length delimited. Does not implicitly {@link api.v1.messages.Input.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {api.v1.messages.IInput} message Input message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Input.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.Input} Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Input.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.Input();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.updateJwtToken = $root.api.v1.messages.UpdateJwtToken.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Input message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.Input} Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Input.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Input message.
                 * @function verify
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Input.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.updateJwtToken != null && message.hasOwnProperty("updateJwtToken")) {
                        properties.data = 1;
                        {
                            let error = $root.api.v1.messages.UpdateJwtToken.verify(message.updateJwtToken);
                            if (error)
                                return "updateJwtToken." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an Input message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.Input} Input
                 */
                Input.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.Input)
                        return object;
                    let message = new $root.api.v1.messages.Input();
                    if (object.updateJwtToken != null) {
                        if (typeof object.updateJwtToken !== "object")
                            throw TypeError(".api.v1.messages.Input.updateJwtToken: object expected");
                        message.updateJwtToken = $root.api.v1.messages.UpdateJwtToken.fromObject(object.updateJwtToken);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Input message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {api.v1.messages.Input} message Input
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Input.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.updateJwtToken != null && message.hasOwnProperty("updateJwtToken")) {
                        object.updateJwtToken = $root.api.v1.messages.UpdateJwtToken.toObject(message.updateJwtToken, options);
                        if (options.oneofs)
                            object.data = "updateJwtToken";
                    }
                    return object;
                };

                /**
                 * Converts this Input to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.Input
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Input.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Input
                 * @function getTypeUrl
                 * @memberof api.v1.messages.Input
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.Input";
                };

                return Input;
            })();

            messages.UpdateJwtToken = (function() {

                /**
                 * Properties of an UpdateJwtToken.
                 * @memberof api.v1.messages
                 * @interface IUpdateJwtToken
                 * @property {string|null} [access] UpdateJwtToken access
                 */

                /**
                 * Constructs a new UpdateJwtToken.
                 * @memberof api.v1.messages
                 * @classdesc Represents an UpdateJwtToken.
                 * @implements IUpdateJwtToken
                 * @constructor
                 * @param {api.v1.messages.IUpdateJwtToken=} [properties] Properties to set
                 */
                function UpdateJwtToken(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UpdateJwtToken access.
                 * @member {string} access
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @instance
                 */
                UpdateJwtToken.prototype.access = "";

                /**
                 * Creates a new UpdateJwtToken instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {api.v1.messages.IUpdateJwtToken=} [properties] Properties to set
                 * @returns {api.v1.messages.UpdateJwtToken} UpdateJwtToken instance
                 */
                UpdateJwtToken.create = function create(properties) {
                    return new UpdateJwtToken(properties);
                };

                /**
                 * Encodes the specified UpdateJwtToken message. Does not implicitly {@link api.v1.messages.UpdateJwtToken.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {api.v1.messages.IUpdateJwtToken} message UpdateJwtToken message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateJwtToken.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.access != null && Object.hasOwnProperty.call(message, "access"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.access);
                    return writer;
                };

                /**
                 * Encodes the specified UpdateJwtToken message, length delimited. Does not implicitly {@link api.v1.messages.UpdateJwtToken.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {api.v1.messages.IUpdateJwtToken} message UpdateJwtToken message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateJwtToken.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.UpdateJwtToken} UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateJwtToken.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.UpdateJwtToken();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.access = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.UpdateJwtToken} UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateJwtToken.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an UpdateJwtToken message.
                 * @function verify
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UpdateJwtToken.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.access != null && message.hasOwnProperty("access"))
                        if (!$util.isString(message.access))
                            return "access: string expected";
                    return null;
                };

                /**
                 * Creates an UpdateJwtToken message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.UpdateJwtToken} UpdateJwtToken
                 */
                UpdateJwtToken.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.UpdateJwtToken)
                        return object;
                    let message = new $root.api.v1.messages.UpdateJwtToken();
                    if (object.access != null)
                        message.access = String(object.access);
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateJwtToken message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {api.v1.messages.UpdateJwtToken} message UpdateJwtToken
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UpdateJwtToken.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.access = "";
                    if (message.access != null && message.hasOwnProperty("access"))
                        object.access = message.access;
                    return object;
                };

                /**
                 * Converts this UpdateJwtToken to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateJwtToken.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UpdateJwtToken
                 * @function getTypeUrl
                 * @memberof api.v1.messages.UpdateJwtToken
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UpdateJwtToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.UpdateJwtToken";
                };

                return UpdateJwtToken;
            })();

            messages.Output = (function() {

                /**
                 * Properties of an Output.
                 * @memberof api.v1.messages
                 * @interface IOutput
                 */

                /**
                 * Constructs a new Output.
                 * @memberof api.v1.messages
                 * @classdesc Represents an Output.
                 * @implements IOutput
                 * @constructor
                 * @param {api.v1.messages.IOutput=} [properties] Properties to set
                 */
                function Output(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Output instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {api.v1.messages.IOutput=} [properties] Properties to set
                 * @returns {api.v1.messages.Output} Output instance
                 */
                Output.create = function create(properties) {
                    return new Output(properties);
                };

                /**
                 * Encodes the specified Output message. Does not implicitly {@link api.v1.messages.Output.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {api.v1.messages.IOutput} message Output message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Output.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Output message, length delimited. Does not implicitly {@link api.v1.messages.Output.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {api.v1.messages.IOutput} message Output message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Output.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.Output} Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Output.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.Output();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Output message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.Output} Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Output.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Output message.
                 * @function verify
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Output.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates an Output message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.Output} Output
                 */
                Output.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.Output)
                        return object;
                    return new $root.api.v1.messages.Output();
                };

                /**
                 * Creates a plain object from an Output message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {api.v1.messages.Output} message Output
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Output.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Output to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.Output
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Output.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Output
                 * @function getTypeUrl
                 * @memberof api.v1.messages.Output
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.Output";
                };

                return Output;
            })();

            return messages;
        })();

        return v1;
    })();

    return api;
})();

export { $root as default };
