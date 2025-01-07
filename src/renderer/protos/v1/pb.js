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
                 * @property {api.v1.messages.IAppserverListingRequest|null} [appserverListing] Input appserverListing
                 * @property {api.v1.messages.ICreateAppserverRequest|null} [createAppserver] Input createAppserver
                 * @property {api.v1.messages.IDeleteAppserverRequest|null} [deleteAppserver] Input deleteAppserver
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

                /**
                 * Input appserverListing.
                 * @member {api.v1.messages.IAppserverListingRequest|null|undefined} appserverListing
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Input.prototype.appserverListing = null;

                /**
                 * Input createAppserver.
                 * @member {api.v1.messages.ICreateAppserverRequest|null|undefined} createAppserver
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Input.prototype.createAppserver = null;

                /**
                 * Input deleteAppserver.
                 * @member {api.v1.messages.IDeleteAppserverRequest|null|undefined} deleteAppserver
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Input.prototype.deleteAppserver = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Input data.
                 * @member {"updateJwtToken"|"appserverListing"|"createAppserver"|"deleteAppserver"|undefined} data
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Object.defineProperty(Input.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["updateJwtToken", "appserverListing", "createAppserver", "deleteAppserver"]),
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
                    if (message.appserverListing != null && Object.hasOwnProperty.call(message, "appserverListing"))
                        $root.api.v1.messages.AppserverListingRequest.encode(message.appserverListing, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.createAppserver != null && Object.hasOwnProperty.call(message, "createAppserver"))
                        $root.api.v1.messages.CreateAppserverRequest.encode(message.createAppserver, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.deleteAppserver != null && Object.hasOwnProperty.call(message, "deleteAppserver"))
                        $root.api.v1.messages.DeleteAppserverRequest.encode(message.deleteAppserver, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                        case 2: {
                                message.appserverListing = $root.api.v1.messages.AppserverListingRequest.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.createAppserver = $root.api.v1.messages.CreateAppserverRequest.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.deleteAppserver = $root.api.v1.messages.DeleteAppserverRequest.decode(reader, reader.uint32());
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
                    if (message.appserverListing != null && message.hasOwnProperty("appserverListing")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.messages.AppserverListingRequest.verify(message.appserverListing);
                            if (error)
                                return "appserverListing." + error;
                        }
                    }
                    if (message.createAppserver != null && message.hasOwnProperty("createAppserver")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.messages.CreateAppserverRequest.verify(message.createAppserver);
                            if (error)
                                return "createAppserver." + error;
                        }
                    }
                    if (message.deleteAppserver != null && message.hasOwnProperty("deleteAppserver")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.messages.DeleteAppserverRequest.verify(message.deleteAppserver);
                            if (error)
                                return "deleteAppserver." + error;
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
                    if (object.appserverListing != null) {
                        if (typeof object.appserverListing !== "object")
                            throw TypeError(".api.v1.messages.Input.appserverListing: object expected");
                        message.appserverListing = $root.api.v1.messages.AppserverListingRequest.fromObject(object.appserverListing);
                    }
                    if (object.createAppserver != null) {
                        if (typeof object.createAppserver !== "object")
                            throw TypeError(".api.v1.messages.Input.createAppserver: object expected");
                        message.createAppserver = $root.api.v1.messages.CreateAppserverRequest.fromObject(object.createAppserver);
                    }
                    if (object.deleteAppserver != null) {
                        if (typeof object.deleteAppserver !== "object")
                            throw TypeError(".api.v1.messages.Input.deleteAppserver: object expected");
                        message.deleteAppserver = $root.api.v1.messages.DeleteAppserverRequest.fromObject(object.deleteAppserver);
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
                    if (message.appserverListing != null && message.hasOwnProperty("appserverListing")) {
                        object.appserverListing = $root.api.v1.messages.AppserverListingRequest.toObject(message.appserverListing, options);
                        if (options.oneofs)
                            object.data = "appserverListing";
                    }
                    if (message.createAppserver != null && message.hasOwnProperty("createAppserver")) {
                        object.createAppserver = $root.api.v1.messages.CreateAppserverRequest.toObject(message.createAppserver, options);
                        if (options.oneofs)
                            object.data = "createAppserver";
                    }
                    if (message.deleteAppserver != null && message.hasOwnProperty("deleteAppserver")) {
                        object.deleteAppserver = $root.api.v1.messages.DeleteAppserverRequest.toObject(message.deleteAppserver, options);
                        if (options.oneofs)
                            object.data = "deleteAppserver";
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
                 * @property {api.v1.messages.IAppserverListingResponse|null} [appserverListing] Output appserverListing
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
                 * Output appserverListing.
                 * @member {api.v1.messages.IAppserverListingResponse|null|undefined} appserverListing
                 * @memberof api.v1.messages.Output
                 * @instance
                 */
                Output.prototype.appserverListing = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Output data.
                 * @member {"appserverListing"|undefined} data
                 * @memberof api.v1.messages.Output
                 * @instance
                 */
                Object.defineProperty(Output.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["appserverListing"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

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
                    if (message.appserverListing != null && Object.hasOwnProperty.call(message, "appserverListing"))
                        $root.api.v1.messages.AppserverListingResponse.encode(message.appserverListing, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        case 1: {
                                message.appserverListing = $root.api.v1.messages.AppserverListingResponse.decode(reader, reader.uint32());
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
                    let properties = {};
                    if (message.appserverListing != null && message.hasOwnProperty("appserverListing")) {
                        properties.data = 1;
                        {
                            let error = $root.api.v1.messages.AppserverListingResponse.verify(message.appserverListing);
                            if (error)
                                return "appserverListing." + error;
                        }
                    }
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
                    let message = new $root.api.v1.messages.Output();
                    if (object.appserverListing != null) {
                        if (typeof object.appserverListing !== "object")
                            throw TypeError(".api.v1.messages.Output.appserverListing: object expected");
                        message.appserverListing = $root.api.v1.messages.AppserverListingResponse.fromObject(object.appserverListing);
                    }
                    return message;
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
                Output.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.appserverListing != null && message.hasOwnProperty("appserverListing")) {
                        object.appserverListing = $root.api.v1.messages.AppserverListingResponse.toObject(message.appserverListing, options);
                        if (options.oneofs)
                            object.data = "appserverListing";
                    }
                    return object;
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

            messages.Appserver = (function() {

                /**
                 * Properties of an Appserver.
                 * @memberof api.v1.messages
                 * @interface IAppserver
                 * @property {string|null} [id] Appserver id
                 * @property {string|null} [name] Appserver name
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Appserver createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Appserver updatedAt
                 */

                /**
                 * Constructs a new Appserver.
                 * @memberof api.v1.messages
                 * @classdesc Represents an Appserver.
                 * @implements IAppserver
                 * @constructor
                 * @param {api.v1.messages.IAppserver=} [properties] Properties to set
                 */
                function Appserver(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Appserver id.
                 * @member {string} id
                 * @memberof api.v1.messages.Appserver
                 * @instance
                 */
                Appserver.prototype.id = "";

                /**
                 * Appserver name.
                 * @member {string} name
                 * @memberof api.v1.messages.Appserver
                 * @instance
                 */
                Appserver.prototype.name = "";

                /**
                 * Appserver createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof api.v1.messages.Appserver
                 * @instance
                 */
                Appserver.prototype.createdAt = null;

                /**
                 * Appserver updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof api.v1.messages.Appserver
                 * @instance
                 */
                Appserver.prototype.updatedAt = null;

                /**
                 * Creates a new Appserver instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {api.v1.messages.IAppserver=} [properties] Properties to set
                 * @returns {api.v1.messages.Appserver} Appserver instance
                 */
                Appserver.create = function create(properties) {
                    return new Appserver(properties);
                };

                /**
                 * Encodes the specified Appserver message. Does not implicitly {@link api.v1.messages.Appserver.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {api.v1.messages.IAppserver} message Appserver message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Appserver.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Appserver message, length delimited. Does not implicitly {@link api.v1.messages.Appserver.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {api.v1.messages.IAppserver} message Appserver message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Appserver.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Appserver message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.Appserver} Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Appserver.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.Appserver();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                 * Decodes an Appserver message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.Appserver} Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Appserver.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Appserver message.
                 * @function verify
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Appserver.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Appserver message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.Appserver} Appserver
                 */
                Appserver.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.Appserver)
                        return object;
                    let message = new $root.api.v1.messages.Appserver();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".api.v1.messages.Appserver.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".api.v1.messages.Appserver.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Appserver message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {api.v1.messages.Appserver} message Appserver
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Appserver.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Appserver to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.Appserver
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Appserver.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Appserver
                 * @function getTypeUrl
                 * @memberof api.v1.messages.Appserver
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Appserver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.Appserver";
                };

                return Appserver;
            })();

            messages.AppserverAndSub = (function() {

                /**
                 * Properties of an AppserverAndSub.
                 * @memberof api.v1.messages
                 * @interface IAppserverAndSub
                 * @property {string|null} [subId] AppserverAndSub subId
                 * @property {api.v1.messages.IAppserver|null} [appserver] AppserverAndSub appserver
                 */

                /**
                 * Constructs a new AppserverAndSub.
                 * @memberof api.v1.messages
                 * @classdesc Represents an AppserverAndSub.
                 * @implements IAppserverAndSub
                 * @constructor
                 * @param {api.v1.messages.IAppserverAndSub=} [properties] Properties to set
                 */
                function AppserverAndSub(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppserverAndSub subId.
                 * @member {string} subId
                 * @memberof api.v1.messages.AppserverAndSub
                 * @instance
                 */
                AppserverAndSub.prototype.subId = "";

                /**
                 * AppserverAndSub appserver.
                 * @member {api.v1.messages.IAppserver|null|undefined} appserver
                 * @memberof api.v1.messages.AppserverAndSub
                 * @instance
                 */
                AppserverAndSub.prototype.appserver = null;

                /**
                 * Creates a new AppserverAndSub instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {api.v1.messages.IAppserverAndSub=} [properties] Properties to set
                 * @returns {api.v1.messages.AppserverAndSub} AppserverAndSub instance
                 */
                AppserverAndSub.create = function create(properties) {
                    return new AppserverAndSub(properties);
                };

                /**
                 * Encodes the specified AppserverAndSub message. Does not implicitly {@link api.v1.messages.AppserverAndSub.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {api.v1.messages.IAppserverAndSub} message AppserverAndSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverAndSub.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.subId != null && Object.hasOwnProperty.call(message, "subId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subId);
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.messages.Appserver.encode(message.appserver, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverAndSub message, length delimited. Does not implicitly {@link api.v1.messages.AppserverAndSub.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {api.v1.messages.IAppserverAndSub} message AppserverAndSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverAndSub.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverAndSub message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.AppserverAndSub} AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverAndSub.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.AppserverAndSub();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.subId = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserver = $root.api.v1.messages.Appserver.decode(reader, reader.uint32());
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
                 * Decodes an AppserverAndSub message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.AppserverAndSub} AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverAndSub.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverAndSub message.
                 * @function verify
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverAndSub.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.subId != null && message.hasOwnProperty("subId"))
                        if (!$util.isString(message.subId))
                            return "subId: string expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.messages.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AppserverAndSub message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.AppserverAndSub} AppserverAndSub
                 */
                AppserverAndSub.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.AppserverAndSub)
                        return object;
                    let message = new $root.api.v1.messages.AppserverAndSub();
                    if (object.subId != null)
                        message.subId = String(object.subId);
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.messages.AppserverAndSub.appserver: object expected");
                        message.appserver = $root.api.v1.messages.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverAndSub message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {api.v1.messages.AppserverAndSub} message AppserverAndSub
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverAndSub.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.subId = "";
                        object.appserver = null;
                    }
                    if (message.subId != null && message.hasOwnProperty("subId"))
                        object.subId = message.subId;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.messages.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this AppserverAndSub to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.AppserverAndSub
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverAndSub.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverAndSub
                 * @function getTypeUrl
                 * @memberof api.v1.messages.AppserverAndSub
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverAndSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.AppserverAndSub";
                };

                return AppserverAndSub;
            })();

            messages.AppserverListingRequest = (function() {

                /**
                 * Properties of an AppserverListingRequest.
                 * @memberof api.v1.messages
                 * @interface IAppserverListingRequest
                 */

                /**
                 * Constructs a new AppserverListingRequest.
                 * @memberof api.v1.messages
                 * @classdesc Represents an AppserverListingRequest.
                 * @implements IAppserverListingRequest
                 * @constructor
                 * @param {api.v1.messages.IAppserverListingRequest=} [properties] Properties to set
                 */
                function AppserverListingRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new AppserverListingRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {api.v1.messages.IAppserverListingRequest=} [properties] Properties to set
                 * @returns {api.v1.messages.AppserverListingRequest} AppserverListingRequest instance
                 */
                AppserverListingRequest.create = function create(properties) {
                    return new AppserverListingRequest(properties);
                };

                /**
                 * Encodes the specified AppserverListingRequest message. Does not implicitly {@link api.v1.messages.AppserverListingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {api.v1.messages.IAppserverListingRequest} message AppserverListingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverListingRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverListingRequest message, length delimited. Does not implicitly {@link api.v1.messages.AppserverListingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {api.v1.messages.IAppserverListingRequest} message AppserverListingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverListingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverListingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.AppserverListingRequest} AppserverListingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverListingRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.AppserverListingRequest();
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
                 * Decodes an AppserverListingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.AppserverListingRequest} AppserverListingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverListingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverListingRequest message.
                 * @function verify
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverListingRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates an AppserverListingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.AppserverListingRequest} AppserverListingRequest
                 */
                AppserverListingRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.AppserverListingRequest)
                        return object;
                    return new $root.api.v1.messages.AppserverListingRequest();
                };

                /**
                 * Creates a plain object from an AppserverListingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {api.v1.messages.AppserverListingRequest} message AppserverListingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverListingRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this AppserverListingRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverListingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverListingRequest
                 * @function getTypeUrl
                 * @memberof api.v1.messages.AppserverListingRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverListingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.AppserverListingRequest";
                };

                return AppserverListingRequest;
            })();

            messages.AppserverListingResponse = (function() {

                /**
                 * Properties of an AppserverListingResponse.
                 * @memberof api.v1.messages
                 * @interface IAppserverListingResponse
                 * @property {Array.<api.v1.messages.IAppserverAndSub>|null} [appservers] AppserverListingResponse appservers
                 */

                /**
                 * Constructs a new AppserverListingResponse.
                 * @memberof api.v1.messages
                 * @classdesc Represents an AppserverListingResponse.
                 * @implements IAppserverListingResponse
                 * @constructor
                 * @param {api.v1.messages.IAppserverListingResponse=} [properties] Properties to set
                 */
                function AppserverListingResponse(properties) {
                    this.appservers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppserverListingResponse appservers.
                 * @member {Array.<api.v1.messages.IAppserverAndSub>} appservers
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @instance
                 */
                AppserverListingResponse.prototype.appservers = $util.emptyArray;

                /**
                 * Creates a new AppserverListingResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {api.v1.messages.IAppserverListingResponse=} [properties] Properties to set
                 * @returns {api.v1.messages.AppserverListingResponse} AppserverListingResponse instance
                 */
                AppserverListingResponse.create = function create(properties) {
                    return new AppserverListingResponse(properties);
                };

                /**
                 * Encodes the specified AppserverListingResponse message. Does not implicitly {@link api.v1.messages.AppserverListingResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {api.v1.messages.IAppserverListingResponse} message AppserverListingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverListingResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appservers != null && message.appservers.length)
                        for (let i = 0; i < message.appservers.length; ++i)
                            $root.api.v1.messages.AppserverAndSub.encode(message.appservers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverListingResponse message, length delimited. Does not implicitly {@link api.v1.messages.AppserverListingResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {api.v1.messages.IAppserverListingResponse} message AppserverListingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverListingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverListingResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.AppserverListingResponse} AppserverListingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverListingResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.AppserverListingResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appservers && message.appservers.length))
                                    message.appservers = [];
                                message.appservers.push($root.api.v1.messages.AppserverAndSub.decode(reader, reader.uint32()));
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
                 * Decodes an AppserverListingResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.AppserverListingResponse} AppserverListingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverListingResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverListingResponse message.
                 * @function verify
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverListingResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appservers != null && message.hasOwnProperty("appservers")) {
                        if (!Array.isArray(message.appservers))
                            return "appservers: array expected";
                        for (let i = 0; i < message.appservers.length; ++i) {
                            let error = $root.api.v1.messages.AppserverAndSub.verify(message.appservers[i]);
                            if (error)
                                return "appservers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an AppserverListingResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.AppserverListingResponse} AppserverListingResponse
                 */
                AppserverListingResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.AppserverListingResponse)
                        return object;
                    let message = new $root.api.v1.messages.AppserverListingResponse();
                    if (object.appservers) {
                        if (!Array.isArray(object.appservers))
                            throw TypeError(".api.v1.messages.AppserverListingResponse.appservers: array expected");
                        message.appservers = [];
                        for (let i = 0; i < object.appservers.length; ++i) {
                            if (typeof object.appservers[i] !== "object")
                                throw TypeError(".api.v1.messages.AppserverListingResponse.appservers: object expected");
                            message.appservers[i] = $root.api.v1.messages.AppserverAndSub.fromObject(object.appservers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverListingResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {api.v1.messages.AppserverListingResponse} message AppserverListingResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverListingResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appservers = [];
                    if (message.appservers && message.appservers.length) {
                        object.appservers = [];
                        for (let j = 0; j < message.appservers.length; ++j)
                            object.appservers[j] = $root.api.v1.messages.AppserverAndSub.toObject(message.appservers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this AppserverListingResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverListingResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverListingResponse
                 * @function getTypeUrl
                 * @memberof api.v1.messages.AppserverListingResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverListingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.AppserverListingResponse";
                };

                return AppserverListingResponse;
            })();

            messages.CreateAppserverRequest = (function() {

                /**
                 * Properties of a CreateAppserverRequest.
                 * @memberof api.v1.messages
                 * @interface ICreateAppserverRequest
                 * @property {string|null} [name] CreateAppserverRequest name
                 */

                /**
                 * Constructs a new CreateAppserverRequest.
                 * @memberof api.v1.messages
                 * @classdesc Represents a CreateAppserverRequest.
                 * @implements ICreateAppserverRequest
                 * @constructor
                 * @param {api.v1.messages.ICreateAppserverRequest=} [properties] Properties to set
                 */
                function CreateAppserverRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverRequest name.
                 * @member {string} name
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @instance
                 */
                CreateAppserverRequest.prototype.name = "";

                /**
                 * Creates a new CreateAppserverRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {api.v1.messages.ICreateAppserverRequest=} [properties] Properties to set
                 * @returns {api.v1.messages.CreateAppserverRequest} CreateAppserverRequest instance
                 */
                CreateAppserverRequest.create = function create(properties) {
                    return new CreateAppserverRequest(properties);
                };

                /**
                 * Encodes the specified CreateAppserverRequest message. Does not implicitly {@link api.v1.messages.CreateAppserverRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {api.v1.messages.ICreateAppserverRequest} message CreateAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverRequest message, length delimited. Does not implicitly {@link api.v1.messages.CreateAppserverRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {api.v1.messages.ICreateAppserverRequest} message CreateAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.CreateAppserverRequest} CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.CreateAppserverRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
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
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.CreateAppserverRequest} CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverRequest message.
                 * @function verify
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a CreateAppserverRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.CreateAppserverRequest} CreateAppserverRequest
                 */
                CreateAppserverRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.CreateAppserverRequest)
                        return object;
                    let message = new $root.api.v1.messages.CreateAppserverRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {api.v1.messages.CreateAppserverRequest} message CreateAppserverRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this CreateAppserverRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverRequest
                 * @function getTypeUrl
                 * @memberof api.v1.messages.CreateAppserverRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.CreateAppserverRequest";
                };

                return CreateAppserverRequest;
            })();

            messages.DeleteAppserverRequest = (function() {

                /**
                 * Properties of a DeleteAppserverRequest.
                 * @memberof api.v1.messages
                 * @interface IDeleteAppserverRequest
                 * @property {string|null} [id] DeleteAppserverRequest id
                 */

                /**
                 * Constructs a new DeleteAppserverRequest.
                 * @memberof api.v1.messages
                 * @classdesc Represents a DeleteAppserverRequest.
                 * @implements IDeleteAppserverRequest
                 * @constructor
                 * @param {api.v1.messages.IDeleteAppserverRequest=} [properties] Properties to set
                 */
                function DeleteAppserverRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteAppserverRequest id.
                 * @member {string} id
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @instance
                 */
                DeleteAppserverRequest.prototype.id = "";

                /**
                 * Creates a new DeleteAppserverRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.messages.IDeleteAppserverRequest=} [properties] Properties to set
                 * @returns {api.v1.messages.DeleteAppserverRequest} DeleteAppserverRequest instance
                 */
                DeleteAppserverRequest.create = function create(properties) {
                    return new DeleteAppserverRequest(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverRequest message. Does not implicitly {@link api.v1.messages.DeleteAppserverRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.messages.IDeleteAppserverRequest} message DeleteAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverRequest message, length delimited. Does not implicitly {@link api.v1.messages.DeleteAppserverRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.messages.IDeleteAppserverRequest} message DeleteAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.DeleteAppserverRequest} DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.DeleteAppserverRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
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
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.DeleteAppserverRequest} DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverRequest message.
                 * @function verify
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.DeleteAppserverRequest} DeleteAppserverRequest
                 */
                DeleteAppserverRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.DeleteAppserverRequest)
                        return object;
                    let message = new $root.api.v1.messages.DeleteAppserverRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteAppserverRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.messages.DeleteAppserverRequest} message DeleteAppserverRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.id = "";
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    return object;
                };

                /**
                 * Converts this DeleteAppserverRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverRequest
                 * @function getTypeUrl
                 * @memberof api.v1.messages.DeleteAppserverRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.DeleteAppserverRequest";
                };

                return DeleteAppserverRequest;
            })();

            return messages;
        })();

        return v1;
    })();

    return api;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
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
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.double();
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
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoubleValue
             * @function getTypeUrl
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoubleValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DoubleValue";
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
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
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloatValue
             * @function getTypeUrl
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloatValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FloatValue";
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int64();
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
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int64Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int64Value";
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint64();
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
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt64Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt64Value";
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int32();
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
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int32Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int32Value";
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
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
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt32Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt32Value";
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bool();
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
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BoolValue
             * @function getTypeUrl
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BoolValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BoolValue";
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
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
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringValue
             * @function getTypeUrl
             * @memberof google.protobuf.StringValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.StringValue";
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bytes();
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
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BytesValue
             * @function getTypeUrl
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BytesValue";
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
