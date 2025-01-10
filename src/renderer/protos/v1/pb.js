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
                 * @property {api.v1.server.ICreateAppserverRequest|null} [createAppserver] Input createAppserver
                 * @property {api.v1.server.IDeleteAppserverRequest|null} [deleteAppserver] Input deleteAppserver
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
                 * @member {api.v1.server.ICreateAppserverRequest|null|undefined} createAppserver
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Input.prototype.createAppserver = null;

                /**
                 * Input deleteAppserver.
                 * @member {api.v1.server.IDeleteAppserverRequest|null|undefined} deleteAppserver
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
                        $root.api.v1.server.CreateAppserverRequest.encode(message.createAppserver, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.deleteAppserver != null && Object.hasOwnProperty.call(message, "deleteAppserver"))
                        $root.api.v1.server.DeleteAppserverRequest.encode(message.deleteAppserver, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                                message.createAppserver = $root.api.v1.server.CreateAppserverRequest.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.deleteAppserver = $root.api.v1.server.DeleteAppserverRequest.decode(reader, reader.uint32());
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
                            let error = $root.api.v1.server.CreateAppserverRequest.verify(message.createAppserver);
                            if (error)
                                return "createAppserver." + error;
                        }
                    }
                    if (message.deleteAppserver != null && message.hasOwnProperty("deleteAppserver")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.server.DeleteAppserverRequest.verify(message.deleteAppserver);
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
                        message.createAppserver = $root.api.v1.server.CreateAppserverRequest.fromObject(object.createAppserver);
                    }
                    if (object.deleteAppserver != null) {
                        if (typeof object.deleteAppserver !== "object")
                            throw TypeError(".api.v1.messages.Input.deleteAppserver: object expected");
                        message.deleteAppserver = $root.api.v1.server.DeleteAppserverRequest.fromObject(object.deleteAppserver);
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
                        object.createAppserver = $root.api.v1.server.CreateAppserverRequest.toObject(message.createAppserver, options);
                        if (options.oneofs)
                            object.data = "createAppserver";
                    }
                    if (message.deleteAppserver != null && message.hasOwnProperty("deleteAppserver")) {
                        object.deleteAppserver = $root.api.v1.server.DeleteAppserverRequest.toObject(message.deleteAppserver, options);
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
                 * @property {api.v1.server.IGetUserAppserverSubsResponse|null} [appserverListing] Output appserverListing
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
                 * @member {api.v1.server.IGetUserAppserverSubsResponse|null|undefined} appserverListing
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
                        $root.api.v1.server.GetUserAppserverSubsResponse.encode(message.appserverListing, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                                message.appserverListing = $root.api.v1.server.GetUserAppserverSubsResponse.decode(reader, reader.uint32());
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
                            let error = $root.api.v1.server.GetUserAppserverSubsResponse.verify(message.appserverListing);
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
                        message.appserverListing = $root.api.v1.server.GetUserAppserverSubsResponse.fromObject(object.appserverListing);
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
                        object.appserverListing = $root.api.v1.server.GetUserAppserverSubsResponse.toObject(message.appserverListing, options);
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

            messages.AppserverDetailsResponse = (function() {

                /**
                 * Properties of an AppserverDetailsResponse.
                 * @memberof api.v1.messages
                 * @interface IAppserverDetailsResponse
                 * @property {api.v1.server.IAppserver|null} [appserver] AppserverDetailsResponse appserver
                 */

                /**
                 * Constructs a new AppserverDetailsResponse.
                 * @memberof api.v1.messages
                 * @classdesc Represents an AppserverDetailsResponse.
                 * @implements IAppserverDetailsResponse
                 * @constructor
                 * @param {api.v1.messages.IAppserverDetailsResponse=} [properties] Properties to set
                 */
                function AppserverDetailsResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppserverDetailsResponse appserver.
                 * @member {api.v1.server.IAppserver|null|undefined} appserver
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @instance
                 */
                AppserverDetailsResponse.prototype.appserver = null;

                /**
                 * Creates a new AppserverDetailsResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {api.v1.messages.IAppserverDetailsResponse=} [properties] Properties to set
                 * @returns {api.v1.messages.AppserverDetailsResponse} AppserverDetailsResponse instance
                 */
                AppserverDetailsResponse.create = function create(properties) {
                    return new AppserverDetailsResponse(properties);
                };

                /**
                 * Encodes the specified AppserverDetailsResponse message. Does not implicitly {@link api.v1.messages.AppserverDetailsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {api.v1.messages.IAppserverDetailsResponse} message AppserverDetailsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverDetailsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.server.Appserver.encode(message.appserver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverDetailsResponse message, length delimited. Does not implicitly {@link api.v1.messages.AppserverDetailsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {api.v1.messages.IAppserverDetailsResponse} message AppserverDetailsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverDetailsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.AppserverDetailsResponse} AppserverDetailsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverDetailsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.AppserverDetailsResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver = $root.api.v1.server.Appserver.decode(reader, reader.uint32());
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
                 * Decodes an AppserverDetailsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.AppserverDetailsResponse} AppserverDetailsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverDetailsResponse message.
                 * @function verify
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverDetailsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.server.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AppserverDetailsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.AppserverDetailsResponse} AppserverDetailsResponse
                 */
                AppserverDetailsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.AppserverDetailsResponse)
                        return object;
                    let message = new $root.api.v1.messages.AppserverDetailsResponse();
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.messages.AppserverDetailsResponse.appserver: object expected");
                        message.appserver = $root.api.v1.server.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverDetailsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {api.v1.messages.AppserverDetailsResponse} message AppserverDetailsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverDetailsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver = null;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.server.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this AppserverDetailsResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverDetailsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverDetailsResponse
                 * @function getTypeUrl
                 * @memberof api.v1.messages.AppserverDetailsResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverDetailsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.AppserverDetailsResponse";
                };

                return AppserverDetailsResponse;
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

            return messages;
        })();

        v1.server = (function() {

            /**
             * Namespace server.
             * @memberof api.v1
             * @namespace
             */
            const server = {};

            server.ServerService = (function() {

                /**
                 * Constructs a new ServerService service.
                 * @memberof api.v1.server
                 * @classdesc Represents a ServerService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function ServerService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (ServerService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ServerService;

                /**
                 * Creates new ServerService service using the specified rpc implementation.
                 * @function create
                 * @memberof api.v1.server.ServerService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {ServerService} RPC service. Useful where requests and/or responses are streamed.
                 */
                ServerService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link api.v1.server.ServerService#createAppserver}.
                 * @memberof api.v1.server.ServerService
                 * @typedef CreateAppserverCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.CreateAppserverResponse} [response] CreateAppserverResponse
                 */

                /**
                 * Calls CreateAppserver.
                 * @function createAppserver
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverRequest} request CreateAppserverRequest message or plain object
                 * @param {api.v1.server.ServerService.CreateAppserverCallback} callback Node-style callback called with the error, if any, and CreateAppserverResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.createAppserver = function createAppserver(request, callback) {
                    return this.rpcCall(createAppserver, $root.api.v1.server.CreateAppserverRequest, $root.api.v1.server.CreateAppserverResponse, request, callback);
                }, "name", { value: "CreateAppserver" });

                /**
                 * Calls CreateAppserver.
                 * @function createAppserver
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverRequest} request CreateAppserverRequest message or plain object
                 * @returns {Promise<api.v1.server.CreateAppserverResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#getByIdAppserver}.
                 * @memberof api.v1.server.ServerService
                 * @typedef GetByIdAppserverCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.GetByIdAppserverResponse} [response] GetByIdAppserverResponse
                 */

                /**
                 * Calls GetByIdAppserver.
                 * @function getByIdAppserver
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IGetByIdAppserverRequest} request GetByIdAppserverRequest message or plain object
                 * @param {api.v1.server.ServerService.GetByIdAppserverCallback} callback Node-style callback called with the error, if any, and GetByIdAppserverResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.getByIdAppserver = function getByIdAppserver(request, callback) {
                    return this.rpcCall(getByIdAppserver, $root.api.v1.server.GetByIdAppserverRequest, $root.api.v1.server.GetByIdAppserverResponse, request, callback);
                }, "name", { value: "GetByIdAppserver" });

                /**
                 * Calls GetByIdAppserver.
                 * @function getByIdAppserver
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IGetByIdAppserverRequest} request GetByIdAppserverRequest message or plain object
                 * @returns {Promise<api.v1.server.GetByIdAppserverResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#listAppservers}.
                 * @memberof api.v1.server.ServerService
                 * @typedef ListAppserversCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.ListAppserversResponse} [response] ListAppserversResponse
                 */

                /**
                 * Calls ListAppservers.
                 * @function listAppservers
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IListAppserversRequest} request ListAppserversRequest message or plain object
                 * @param {api.v1.server.ServerService.ListAppserversCallback} callback Node-style callback called with the error, if any, and ListAppserversResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.listAppservers = function listAppservers(request, callback) {
                    return this.rpcCall(listAppservers, $root.api.v1.server.ListAppserversRequest, $root.api.v1.server.ListAppserversResponse, request, callback);
                }, "name", { value: "ListAppservers" });

                /**
                 * Calls ListAppservers.
                 * @function listAppservers
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IListAppserversRequest} request ListAppserversRequest message or plain object
                 * @returns {Promise<api.v1.server.ListAppserversResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#deleteAppserver}.
                 * @memberof api.v1.server.ServerService
                 * @typedef DeleteAppserverCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.DeleteAppserverResponse} [response] DeleteAppserverResponse
                 */

                /**
                 * Calls DeleteAppserver.
                 * @function deleteAppserver
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverRequest} request DeleteAppserverRequest message or plain object
                 * @param {api.v1.server.ServerService.DeleteAppserverCallback} callback Node-style callback called with the error, if any, and DeleteAppserverResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.deleteAppserver = function deleteAppserver(request, callback) {
                    return this.rpcCall(deleteAppserver, $root.api.v1.server.DeleteAppserverRequest, $root.api.v1.server.DeleteAppserverResponse, request, callback);
                }, "name", { value: "DeleteAppserver" });

                /**
                 * Calls DeleteAppserver.
                 * @function deleteAppserver
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverRequest} request DeleteAppserverRequest message or plain object
                 * @returns {Promise<api.v1.server.DeleteAppserverResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#createAppserverSub}.
                 * @memberof api.v1.server.ServerService
                 * @typedef CreateAppserverSubCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.CreateAppserverSubResponse} [response] CreateAppserverSubResponse
                 */

                /**
                 * Calls CreateAppserverSub.
                 * @function createAppserverSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverSubRequest} request CreateAppserverSubRequest message or plain object
                 * @param {api.v1.server.ServerService.CreateAppserverSubCallback} callback Node-style callback called with the error, if any, and CreateAppserverSubResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.createAppserverSub = function createAppserverSub(request, callback) {
                    return this.rpcCall(createAppserverSub, $root.api.v1.server.CreateAppserverSubRequest, $root.api.v1.server.CreateAppserverSubResponse, request, callback);
                }, "name", { value: "CreateAppserverSub" });

                /**
                 * Calls CreateAppserverSub.
                 * @function createAppserverSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverSubRequest} request CreateAppserverSubRequest message or plain object
                 * @returns {Promise<api.v1.server.CreateAppserverSubResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#getUserAppserverSubs}.
                 * @memberof api.v1.server.ServerService
                 * @typedef GetUserAppserverSubsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.GetUserAppserverSubsResponse} [response] GetUserAppserverSubsResponse
                 */

                /**
                 * Calls GetUserAppserverSubs.
                 * @function getUserAppserverSubs
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IGetUserAppserverSubsRequest} request GetUserAppserverSubsRequest message or plain object
                 * @param {api.v1.server.ServerService.GetUserAppserverSubsCallback} callback Node-style callback called with the error, if any, and GetUserAppserverSubsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.getUserAppserverSubs = function getUserAppserverSubs(request, callback) {
                    return this.rpcCall(getUserAppserverSubs, $root.api.v1.server.GetUserAppserverSubsRequest, $root.api.v1.server.GetUserAppserverSubsResponse, request, callback);
                }, "name", { value: "GetUserAppserverSubs" });

                /**
                 * Calls GetUserAppserverSubs.
                 * @function getUserAppserverSubs
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IGetUserAppserverSubsRequest} request GetUserAppserverSubsRequest message or plain object
                 * @returns {Promise<api.v1.server.GetUserAppserverSubsResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#deleteAppserverSub}.
                 * @memberof api.v1.server.ServerService
                 * @typedef DeleteAppserverSubCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.DeleteAppserverSubResponse} [response] DeleteAppserverSubResponse
                 */

                /**
                 * Calls DeleteAppserverSub.
                 * @function deleteAppserverSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverSubRequest} request DeleteAppserverSubRequest message or plain object
                 * @param {api.v1.server.ServerService.DeleteAppserverSubCallback} callback Node-style callback called with the error, if any, and DeleteAppserverSubResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.deleteAppserverSub = function deleteAppserverSub(request, callback) {
                    return this.rpcCall(deleteAppserverSub, $root.api.v1.server.DeleteAppserverSubRequest, $root.api.v1.server.DeleteAppserverSubResponse, request, callback);
                }, "name", { value: "DeleteAppserverSub" });

                /**
                 * Calls DeleteAppserverSub.
                 * @function deleteAppserverSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverSubRequest} request DeleteAppserverSubRequest message or plain object
                 * @returns {Promise<api.v1.server.DeleteAppserverSubResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#createAppserverRole}.
                 * @memberof api.v1.server.ServerService
                 * @typedef CreateAppserverRoleCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.CreateAppserverRoleResponse} [response] CreateAppserverRoleResponse
                 */

                /**
                 * Calls CreateAppserverRole.
                 * @function createAppserverRole
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverRoleRequest} request CreateAppserverRoleRequest message or plain object
                 * @param {api.v1.server.ServerService.CreateAppserverRoleCallback} callback Node-style callback called with the error, if any, and CreateAppserverRoleResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.createAppserverRole = function createAppserverRole(request, callback) {
                    return this.rpcCall(createAppserverRole, $root.api.v1.server.CreateAppserverRoleRequest, $root.api.v1.server.CreateAppserverRoleResponse, request, callback);
                }, "name", { value: "CreateAppserverRole" });

                /**
                 * Calls CreateAppserverRole.
                 * @function createAppserverRole
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverRoleRequest} request CreateAppserverRoleRequest message or plain object
                 * @returns {Promise<api.v1.server.CreateAppserverRoleResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#getAllAppserverRoles}.
                 * @memberof api.v1.server.ServerService
                 * @typedef GetAllAppserverRolesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.GetAllAppserverRolesResponse} [response] GetAllAppserverRolesResponse
                 */

                /**
                 * Calls GetAllAppserverRoles.
                 * @function getAllAppserverRoles
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IGetAllAppserverRolesRequest} request GetAllAppserverRolesRequest message or plain object
                 * @param {api.v1.server.ServerService.GetAllAppserverRolesCallback} callback Node-style callback called with the error, if any, and GetAllAppserverRolesResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.getAllAppserverRoles = function getAllAppserverRoles(request, callback) {
                    return this.rpcCall(getAllAppserverRoles, $root.api.v1.server.GetAllAppserverRolesRequest, $root.api.v1.server.GetAllAppserverRolesResponse, request, callback);
                }, "name", { value: "GetAllAppserverRoles" });

                /**
                 * Calls GetAllAppserverRoles.
                 * @function getAllAppserverRoles
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IGetAllAppserverRolesRequest} request GetAllAppserverRolesRequest message or plain object
                 * @returns {Promise<api.v1.server.GetAllAppserverRolesResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#deleteAppserverRole}.
                 * @memberof api.v1.server.ServerService
                 * @typedef DeleteAppserverRoleCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.DeleteAppserverRoleResponse} [response] DeleteAppserverRoleResponse
                 */

                /**
                 * Calls DeleteAppserverRole.
                 * @function deleteAppserverRole
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverRoleRequest} request DeleteAppserverRoleRequest message or plain object
                 * @param {api.v1.server.ServerService.DeleteAppserverRoleCallback} callback Node-style callback called with the error, if any, and DeleteAppserverRoleResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.deleteAppserverRole = function deleteAppserverRole(request, callback) {
                    return this.rpcCall(deleteAppserverRole, $root.api.v1.server.DeleteAppserverRoleRequest, $root.api.v1.server.DeleteAppserverRoleResponse, request, callback);
                }, "name", { value: "DeleteAppserverRole" });

                /**
                 * Calls DeleteAppserverRole.
                 * @function deleteAppserverRole
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverRoleRequest} request DeleteAppserverRoleRequest message or plain object
                 * @returns {Promise<api.v1.server.DeleteAppserverRoleResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#createAppserverRoleSub}.
                 * @memberof api.v1.server.ServerService
                 * @typedef CreateAppserverRoleSubCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.CreateAppserverRoleSubResponse} [response] CreateAppserverRoleSubResponse
                 */

                /**
                 * Calls CreateAppserverRoleSub.
                 * @function createAppserverRoleSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverRoleSubRequest} request CreateAppserverRoleSubRequest message or plain object
                 * @param {api.v1.server.ServerService.CreateAppserverRoleSubCallback} callback Node-style callback called with the error, if any, and CreateAppserverRoleSubResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.createAppserverRoleSub = function createAppserverRoleSub(request, callback) {
                    return this.rpcCall(createAppserverRoleSub, $root.api.v1.server.CreateAppserverRoleSubRequest, $root.api.v1.server.CreateAppserverRoleSubResponse, request, callback);
                }, "name", { value: "CreateAppserverRoleSub" });

                /**
                 * Calls CreateAppserverRoleSub.
                 * @function createAppserverRoleSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.ICreateAppserverRoleSubRequest} request CreateAppserverRoleSubRequest message or plain object
                 * @returns {Promise<api.v1.server.CreateAppserverRoleSubResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.server.ServerService#deleteAppserverRoleSub}.
                 * @memberof api.v1.server.ServerService
                 * @typedef DeleteAppserverRoleSubCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.server.DeleteAppserverRoleSubResponse} [response] DeleteAppserverRoleSubResponse
                 */

                /**
                 * Calls DeleteAppserverRoleSub.
                 * @function deleteAppserverRoleSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverRoleSubRequest} request DeleteAppserverRoleSubRequest message or plain object
                 * @param {api.v1.server.ServerService.DeleteAppserverRoleSubCallback} callback Node-style callback called with the error, if any, and DeleteAppserverRoleSubResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ServerService.prototype.deleteAppserverRoleSub = function deleteAppserverRoleSub(request, callback) {
                    return this.rpcCall(deleteAppserverRoleSub, $root.api.v1.server.DeleteAppserverRoleSubRequest, $root.api.v1.server.DeleteAppserverRoleSubResponse, request, callback);
                }, "name", { value: "DeleteAppserverRoleSub" });

                /**
                 * Calls DeleteAppserverRoleSub.
                 * @function deleteAppserverRoleSub
                 * @memberof api.v1.server.ServerService
                 * @instance
                 * @param {api.v1.server.IDeleteAppserverRoleSubRequest} request DeleteAppserverRoleSubRequest message or plain object
                 * @returns {Promise<api.v1.server.DeleteAppserverRoleSubResponse>} Promise
                 * @variation 2
                 */

                return ServerService;
            })();

            server.Appserver = (function() {

                /**
                 * Properties of an Appserver.
                 * @memberof api.v1.server
                 * @interface IAppserver
                 * @property {string|null} [id] Appserver id
                 * @property {string|null} [name] Appserver name
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Appserver createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Appserver updatedAt
                 */

                /**
                 * Constructs a new Appserver.
                 * @memberof api.v1.server
                 * @classdesc Represents an Appserver.
                 * @implements IAppserver
                 * @constructor
                 * @param {api.v1.server.IAppserver=} [properties] Properties to set
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
                 * @memberof api.v1.server.Appserver
                 * @instance
                 */
                Appserver.prototype.id = "";

                /**
                 * Appserver name.
                 * @member {string} name
                 * @memberof api.v1.server.Appserver
                 * @instance
                 */
                Appserver.prototype.name = "";

                /**
                 * Appserver createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof api.v1.server.Appserver
                 * @instance
                 */
                Appserver.prototype.createdAt = null;

                /**
                 * Appserver updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof api.v1.server.Appserver
                 * @instance
                 */
                Appserver.prototype.updatedAt = null;

                /**
                 * Creates a new Appserver instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {api.v1.server.IAppserver=} [properties] Properties to set
                 * @returns {api.v1.server.Appserver} Appserver instance
                 */
                Appserver.create = function create(properties) {
                    return new Appserver(properties);
                };

                /**
                 * Encodes the specified Appserver message. Does not implicitly {@link api.v1.server.Appserver.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {api.v1.server.IAppserver} message Appserver message or plain object to encode
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
                 * Encodes the specified Appserver message, length delimited. Does not implicitly {@link api.v1.server.Appserver.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {api.v1.server.IAppserver} message Appserver message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Appserver.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Appserver message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.Appserver} Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Appserver.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.Appserver();
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
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.Appserver} Appserver
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
                 * @memberof api.v1.server.Appserver
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
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.Appserver} Appserver
                 */
                Appserver.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.Appserver)
                        return object;
                    let message = new $root.api.v1.server.Appserver();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".api.v1.server.Appserver.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".api.v1.server.Appserver.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Appserver message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {api.v1.server.Appserver} message Appserver
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
                 * @memberof api.v1.server.Appserver
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Appserver.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Appserver
                 * @function getTypeUrl
                 * @memberof api.v1.server.Appserver
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Appserver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.Appserver";
                };

                return Appserver;
            })();

            server.AppserverSub = (function() {

                /**
                 * Properties of an AppserverSub.
                 * @memberof api.v1.server
                 * @interface IAppserverSub
                 * @property {string|null} [id] AppserverSub id
                 * @property {string|null} [appserverId] AppserverSub appserverId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] AppserverSub createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] AppserverSub updatedAt
                 */

                /**
                 * Constructs a new AppserverSub.
                 * @memberof api.v1.server
                 * @classdesc Represents an AppserverSub.
                 * @implements IAppserverSub
                 * @constructor
                 * @param {api.v1.server.IAppserverSub=} [properties] Properties to set
                 */
                function AppserverSub(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppserverSub id.
                 * @member {string} id
                 * @memberof api.v1.server.AppserverSub
                 * @instance
                 */
                AppserverSub.prototype.id = "";

                /**
                 * AppserverSub appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.server.AppserverSub
                 * @instance
                 */
                AppserverSub.prototype.appserverId = "";

                /**
                 * AppserverSub createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof api.v1.server.AppserverSub
                 * @instance
                 */
                AppserverSub.prototype.createdAt = null;

                /**
                 * AppserverSub updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof api.v1.server.AppserverSub
                 * @instance
                 */
                AppserverSub.prototype.updatedAt = null;

                /**
                 * Creates a new AppserverSub instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {api.v1.server.IAppserverSub=} [properties] Properties to set
                 * @returns {api.v1.server.AppserverSub} AppserverSub instance
                 */
                AppserverSub.create = function create(properties) {
                    return new AppserverSub(properties);
                };

                /**
                 * Encodes the specified AppserverSub message. Does not implicitly {@link api.v1.server.AppserverSub.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {api.v1.server.IAppserverSub} message AppserverSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverSub.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserverId);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverSub message, length delimited. Does not implicitly {@link api.v1.server.AppserverSub.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {api.v1.server.IAppserverSub} message AppserverSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverSub.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverSub message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.AppserverSub} AppserverSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverSub.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.AppserverSub();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserverId = reader.string();
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
                 * Decodes an AppserverSub message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.AppserverSub} AppserverSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverSub.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverSub message.
                 * @function verify
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverSub.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
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
                 * Creates an AppserverSub message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.AppserverSub} AppserverSub
                 */
                AppserverSub.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.AppserverSub)
                        return object;
                    let message = new $root.api.v1.server.AppserverSub();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".api.v1.server.AppserverSub.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".api.v1.server.AppserverSub.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverSub message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {api.v1.server.AppserverSub} message AppserverSub
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverSub.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.appserverId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this AppserverSub to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.AppserverSub
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverSub.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverSub
                 * @function getTypeUrl
                 * @memberof api.v1.server.AppserverSub
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.AppserverSub";
                };

                return AppserverSub;
            })();

            server.AppserverAndSub = (function() {

                /**
                 * Properties of an AppserverAndSub.
                 * @memberof api.v1.server
                 * @interface IAppserverAndSub
                 * @property {string|null} [subId] AppserverAndSub subId
                 * @property {api.v1.server.IAppserver|null} [appserver] AppserverAndSub appserver
                 */

                /**
                 * Constructs a new AppserverAndSub.
                 * @memberof api.v1.server
                 * @classdesc Represents an AppserverAndSub.
                 * @implements IAppserverAndSub
                 * @constructor
                 * @param {api.v1.server.IAppserverAndSub=} [properties] Properties to set
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
                 * @memberof api.v1.server.AppserverAndSub
                 * @instance
                 */
                AppserverAndSub.prototype.subId = "";

                /**
                 * AppserverAndSub appserver.
                 * @member {api.v1.server.IAppserver|null|undefined} appserver
                 * @memberof api.v1.server.AppserverAndSub
                 * @instance
                 */
                AppserverAndSub.prototype.appserver = null;

                /**
                 * Creates a new AppserverAndSub instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {api.v1.server.IAppserverAndSub=} [properties] Properties to set
                 * @returns {api.v1.server.AppserverAndSub} AppserverAndSub instance
                 */
                AppserverAndSub.create = function create(properties) {
                    return new AppserverAndSub(properties);
                };

                /**
                 * Encodes the specified AppserverAndSub message. Does not implicitly {@link api.v1.server.AppserverAndSub.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {api.v1.server.IAppserverAndSub} message AppserverAndSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverAndSub.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.subId != null && Object.hasOwnProperty.call(message, "subId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subId);
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.server.Appserver.encode(message.appserver, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverAndSub message, length delimited. Does not implicitly {@link api.v1.server.AppserverAndSub.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {api.v1.server.IAppserverAndSub} message AppserverAndSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverAndSub.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverAndSub message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.AppserverAndSub} AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverAndSub.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.AppserverAndSub();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.subId = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserver = $root.api.v1.server.Appserver.decode(reader, reader.uint32());
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
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.AppserverAndSub} AppserverAndSub
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
                 * @memberof api.v1.server.AppserverAndSub
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
                        let error = $root.api.v1.server.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AppserverAndSub message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.AppserverAndSub} AppserverAndSub
                 */
                AppserverAndSub.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.AppserverAndSub)
                        return object;
                    let message = new $root.api.v1.server.AppserverAndSub();
                    if (object.subId != null)
                        message.subId = String(object.subId);
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.server.AppserverAndSub.appserver: object expected");
                        message.appserver = $root.api.v1.server.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverAndSub message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {api.v1.server.AppserverAndSub} message AppserverAndSub
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
                        object.appserver = $root.api.v1.server.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this AppserverAndSub to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.AppserverAndSub
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverAndSub.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverAndSub
                 * @function getTypeUrl
                 * @memberof api.v1.server.AppserverAndSub
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverAndSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.AppserverAndSub";
                };

                return AppserverAndSub;
            })();

            server.AppserverRole = (function() {

                /**
                 * Properties of an AppserverRole.
                 * @memberof api.v1.server
                 * @interface IAppserverRole
                 * @property {string|null} [id] AppserverRole id
                 * @property {string|null} [name] AppserverRole name
                 * @property {string|null} [appserverId] AppserverRole appserverId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] AppserverRole createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] AppserverRole updatedAt
                 */

                /**
                 * Constructs a new AppserverRole.
                 * @memberof api.v1.server
                 * @classdesc Represents an AppserverRole.
                 * @implements IAppserverRole
                 * @constructor
                 * @param {api.v1.server.IAppserverRole=} [properties] Properties to set
                 */
                function AppserverRole(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppserverRole id.
                 * @member {string} id
                 * @memberof api.v1.server.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.id = "";

                /**
                 * AppserverRole name.
                 * @member {string} name
                 * @memberof api.v1.server.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.name = "";

                /**
                 * AppserverRole appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.server.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.appserverId = "";

                /**
                 * AppserverRole createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof api.v1.server.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.createdAt = null;

                /**
                 * AppserverRole updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof api.v1.server.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.updatedAt = null;

                /**
                 * Creates a new AppserverRole instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {api.v1.server.IAppserverRole=} [properties] Properties to set
                 * @returns {api.v1.server.AppserverRole} AppserverRole instance
                 */
                AppserverRole.create = function create(properties) {
                    return new AppserverRole(properties);
                };

                /**
                 * Encodes the specified AppserverRole message. Does not implicitly {@link api.v1.server.AppserverRole.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {api.v1.server.IAppserverRole} message AppserverRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverRole.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appserverId);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverRole message, length delimited. Does not implicitly {@link api.v1.server.AppserverRole.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {api.v1.server.IAppserverRole} message AppserverRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverRole.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverRole message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.AppserverRole} AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverRole.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.AppserverRole();
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
                                message.appserverId = reader.string();
                                break;
                            }
                        case 4: {
                                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
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
                 * Decodes an AppserverRole message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.AppserverRole} AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverRole.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverRole message.
                 * @function verify
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverRole.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
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
                 * Creates an AppserverRole message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.AppserverRole} AppserverRole
                 */
                AppserverRole.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.AppserverRole)
                        return object;
                    let message = new $root.api.v1.server.AppserverRole();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".api.v1.server.AppserverRole.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".api.v1.server.AppserverRole.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverRole message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {api.v1.server.AppserverRole} message AppserverRole
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverRole.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.appserverId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this AppserverRole to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.AppserverRole
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverRole.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverRole
                 * @function getTypeUrl
                 * @memberof api.v1.server.AppserverRole
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.AppserverRole";
                };

                return AppserverRole;
            })();

            server.AppserverRoleSub = (function() {

                /**
                 * Properties of an AppserverRoleSub.
                 * @memberof api.v1.server
                 * @interface IAppserverRoleSub
                 * @property {string|null} [id] AppserverRoleSub id
                 * @property {string|null} [appserverRoleId] AppserverRoleSub appserverRoleId
                 * @property {string|null} [appserverSubId] AppserverRoleSub appserverSubId
                 */

                /**
                 * Constructs a new AppserverRoleSub.
                 * @memberof api.v1.server
                 * @classdesc Represents an AppserverRoleSub.
                 * @implements IAppserverRoleSub
                 * @constructor
                 * @param {api.v1.server.IAppserverRoleSub=} [properties] Properties to set
                 */
                function AppserverRoleSub(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppserverRoleSub id.
                 * @member {string} id
                 * @memberof api.v1.server.AppserverRoleSub
                 * @instance
                 */
                AppserverRoleSub.prototype.id = "";

                /**
                 * AppserverRoleSub appserverRoleId.
                 * @member {string} appserverRoleId
                 * @memberof api.v1.server.AppserverRoleSub
                 * @instance
                 */
                AppserverRoleSub.prototype.appserverRoleId = "";

                /**
                 * AppserverRoleSub appserverSubId.
                 * @member {string} appserverSubId
                 * @memberof api.v1.server.AppserverRoleSub
                 * @instance
                 */
                AppserverRoleSub.prototype.appserverSubId = "";

                /**
                 * Creates a new AppserverRoleSub instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {api.v1.server.IAppserverRoleSub=} [properties] Properties to set
                 * @returns {api.v1.server.AppserverRoleSub} AppserverRoleSub instance
                 */
                AppserverRoleSub.create = function create(properties) {
                    return new AppserverRoleSub(properties);
                };

                /**
                 * Encodes the specified AppserverRoleSub message. Does not implicitly {@link api.v1.server.AppserverRoleSub.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {api.v1.server.IAppserverRoleSub} message AppserverRoleSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverRoleSub.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.appserverRoleId != null && Object.hasOwnProperty.call(message, "appserverRoleId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserverRoleId);
                    if (message.appserverSubId != null && Object.hasOwnProperty.call(message, "appserverSubId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appserverSubId);
                    return writer;
                };

                /**
                 * Encodes the specified AppserverRoleSub message, length delimited. Does not implicitly {@link api.v1.server.AppserverRoleSub.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {api.v1.server.IAppserverRoleSub} message AppserverRoleSub message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverRoleSub.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverRoleSub message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.AppserverRoleSub} AppserverRoleSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverRoleSub.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.AppserverRoleSub();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserverRoleId = reader.string();
                                break;
                            }
                        case 3: {
                                message.appserverSubId = reader.string();
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
                 * Decodes an AppserverRoleSub message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.AppserverRoleSub} AppserverRoleSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverRoleSub.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppserverRoleSub message.
                 * @function verify
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppserverRoleSub.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.appserverRoleId != null && message.hasOwnProperty("appserverRoleId"))
                        if (!$util.isString(message.appserverRoleId))
                            return "appserverRoleId: string expected";
                    if (message.appserverSubId != null && message.hasOwnProperty("appserverSubId"))
                        if (!$util.isString(message.appserverSubId))
                            return "appserverSubId: string expected";
                    return null;
                };

                /**
                 * Creates an AppserverRoleSub message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.AppserverRoleSub} AppserverRoleSub
                 */
                AppserverRoleSub.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.AppserverRoleSub)
                        return object;
                    let message = new $root.api.v1.server.AppserverRoleSub();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.appserverRoleId != null)
                        message.appserverRoleId = String(object.appserverRoleId);
                    if (object.appserverSubId != null)
                        message.appserverSubId = String(object.appserverSubId);
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverRoleSub message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {api.v1.server.AppserverRoleSub} message AppserverRoleSub
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppserverRoleSub.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.appserverRoleId = "";
                        object.appserverSubId = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.appserverRoleId != null && message.hasOwnProperty("appserverRoleId"))
                        object.appserverRoleId = message.appserverRoleId;
                    if (message.appserverSubId != null && message.hasOwnProperty("appserverSubId"))
                        object.appserverSubId = message.appserverSubId;
                    return object;
                };

                /**
                 * Converts this AppserverRoleSub to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.AppserverRoleSub
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverRoleSub.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverRoleSub
                 * @function getTypeUrl
                 * @memberof api.v1.server.AppserverRoleSub
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverRoleSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.AppserverRoleSub";
                };

                return AppserverRoleSub;
            })();

            server.CreateAppserverRequest = (function() {

                /**
                 * Properties of a CreateAppserverRequest.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverRequest
                 * @property {string|null} [name] CreateAppserverRequest name
                 */

                /**
                 * Constructs a new CreateAppserverRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverRequest.
                 * @implements ICreateAppserverRequest
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverRequest=} [properties] Properties to set
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
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @instance
                 */
                CreateAppserverRequest.prototype.name = "";

                /**
                 * Creates a new CreateAppserverRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRequest=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverRequest} CreateAppserverRequest instance
                 */
                CreateAppserverRequest.create = function create(properties) {
                    return new CreateAppserverRequest(properties);
                };

                /**
                 * Encodes the specified CreateAppserverRequest message. Does not implicitly {@link api.v1.server.CreateAppserverRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRequest} message CreateAppserverRequest message or plain object to encode
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
                 * Encodes the specified CreateAppserverRequest message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRequest} message CreateAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverRequest} CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverRequest();
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
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverRequest} CreateAppserverRequest
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
                 * @memberof api.v1.server.CreateAppserverRequest
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
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverRequest} CreateAppserverRequest
                 */
                CreateAppserverRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverRequest)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {api.v1.server.CreateAppserverRequest} message CreateAppserverRequest
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
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverRequest";
                };

                return CreateAppserverRequest;
            })();

            server.GetByIdAppserverRequest = (function() {

                /**
                 * Properties of a GetByIdAppserverRequest.
                 * @memberof api.v1.server
                 * @interface IGetByIdAppserverRequest
                 * @property {string|null} [id] GetByIdAppserverRequest id
                 */

                /**
                 * Constructs a new GetByIdAppserverRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a GetByIdAppserverRequest.
                 * @implements IGetByIdAppserverRequest
                 * @constructor
                 * @param {api.v1.server.IGetByIdAppserverRequest=} [properties] Properties to set
                 */
                function GetByIdAppserverRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdAppserverRequest id.
                 * @member {string} id
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @instance
                 */
                GetByIdAppserverRequest.prototype.id = "";

                /**
                 * Creates a new GetByIdAppserverRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {api.v1.server.IGetByIdAppserverRequest=} [properties] Properties to set
                 * @returns {api.v1.server.GetByIdAppserverRequest} GetByIdAppserverRequest instance
                 */
                GetByIdAppserverRequest.create = function create(properties) {
                    return new GetByIdAppserverRequest(properties);
                };

                /**
                 * Encodes the specified GetByIdAppserverRequest message. Does not implicitly {@link api.v1.server.GetByIdAppserverRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {api.v1.server.IGetByIdAppserverRequest} message GetByIdAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdAppserverRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdAppserverRequest message, length delimited. Does not implicitly {@link api.v1.server.GetByIdAppserverRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {api.v1.server.IGetByIdAppserverRequest} message GetByIdAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdAppserverRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.GetByIdAppserverRequest} GetByIdAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdAppserverRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.GetByIdAppserverRequest();
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
                 * Decodes a GetByIdAppserverRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.GetByIdAppserverRequest} GetByIdAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdAppserverRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdAppserverRequest message.
                 * @function verify
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdAppserverRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a GetByIdAppserverRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.GetByIdAppserverRequest} GetByIdAppserverRequest
                 */
                GetByIdAppserverRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.GetByIdAppserverRequest)
                        return object;
                    let message = new $root.api.v1.server.GetByIdAppserverRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdAppserverRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {api.v1.server.GetByIdAppserverRequest} message GetByIdAppserverRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdAppserverRequest.toObject = function toObject(message, options) {
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
                 * Converts this GetByIdAppserverRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdAppserverRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdAppserverRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.GetByIdAppserverRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.GetByIdAppserverRequest";
                };

                return GetByIdAppserverRequest;
            })();

            server.ListAppserversRequest = (function() {

                /**
                 * Properties of a ListAppserversRequest.
                 * @memberof api.v1.server
                 * @interface IListAppserversRequest
                 * @property {google.protobuf.IStringValue|null} [name] ListAppserversRequest name
                 */

                /**
                 * Constructs a new ListAppserversRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a ListAppserversRequest.
                 * @implements IListAppserversRequest
                 * @constructor
                 * @param {api.v1.server.IListAppserversRequest=} [properties] Properties to set
                 */
                function ListAppserversRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListAppserversRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof api.v1.server.ListAppserversRequest
                 * @instance
                 */
                ListAppserversRequest.prototype.name = null;

                /**
                 * Creates a new ListAppserversRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {api.v1.server.IListAppserversRequest=} [properties] Properties to set
                 * @returns {api.v1.server.ListAppserversRequest} ListAppserversRequest instance
                 */
                ListAppserversRequest.create = function create(properties) {
                    return new ListAppserversRequest(properties);
                };

                /**
                 * Encodes the specified ListAppserversRequest message. Does not implicitly {@link api.v1.server.ListAppserversRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {api.v1.server.IListAppserversRequest} message ListAppserversRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListAppserversRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListAppserversRequest message, length delimited. Does not implicitly {@link api.v1.server.ListAppserversRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {api.v1.server.IListAppserversRequest} message ListAppserversRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListAppserversRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListAppserversRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.ListAppserversRequest} ListAppserversRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListAppserversRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.ListAppserversRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
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
                 * Decodes a ListAppserversRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.ListAppserversRequest} ListAppserversRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListAppserversRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListAppserversRequest message.
                 * @function verify
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListAppserversRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        let error = $root.google.protobuf.StringValue.verify(message.name);
                        if (error)
                            return "name." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ListAppserversRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.ListAppserversRequest} ListAppserversRequest
                 */
                ListAppserversRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.ListAppserversRequest)
                        return object;
                    let message = new $root.api.v1.server.ListAppserversRequest();
                    if (object.name != null) {
                        if (typeof object.name !== "object")
                            throw TypeError(".api.v1.server.ListAppserversRequest.name: object expected");
                        message.name = $root.google.protobuf.StringValue.fromObject(object.name);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListAppserversRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {api.v1.server.ListAppserversRequest} message ListAppserversRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListAppserversRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.name = null;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = $root.google.protobuf.StringValue.toObject(message.name, options);
                    return object;
                };

                /**
                 * Converts this ListAppserversRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.ListAppserversRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListAppserversRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListAppserversRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.ListAppserversRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListAppserversRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.ListAppserversRequest";
                };

                return ListAppserversRequest;
            })();

            server.DeleteAppserverRequest = (function() {

                /**
                 * Properties of a DeleteAppserverRequest.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverRequest
                 * @property {string|null} [id] DeleteAppserverRequest id
                 */

                /**
                 * Constructs a new DeleteAppserverRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverRequest.
                 * @implements IDeleteAppserverRequest
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverRequest=} [properties] Properties to set
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
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @instance
                 */
                DeleteAppserverRequest.prototype.id = "";

                /**
                 * Creates a new DeleteAppserverRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRequest=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverRequest} DeleteAppserverRequest instance
                 */
                DeleteAppserverRequest.create = function create(properties) {
                    return new DeleteAppserverRequest(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverRequest message. Does not implicitly {@link api.v1.server.DeleteAppserverRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRequest} message DeleteAppserverRequest message or plain object to encode
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
                 * Encodes the specified DeleteAppserverRequest message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRequest} message DeleteAppserverRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverRequest} DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverRequest();
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
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverRequest} DeleteAppserverRequest
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
                 * @memberof api.v1.server.DeleteAppserverRequest
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
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverRequest} DeleteAppserverRequest
                 */
                DeleteAppserverRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverRequest)
                        return object;
                    let message = new $root.api.v1.server.DeleteAppserverRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteAppserverRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {api.v1.server.DeleteAppserverRequest} message DeleteAppserverRequest
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
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverRequest";
                };

                return DeleteAppserverRequest;
            })();

            server.CreateAppserverResponse = (function() {

                /**
                 * Properties of a CreateAppserverResponse.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverResponse
                 * @property {api.v1.server.IAppserver|null} [appserver] CreateAppserverResponse appserver
                 */

                /**
                 * Constructs a new CreateAppserverResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverResponse.
                 * @implements ICreateAppserverResponse
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverResponse=} [properties] Properties to set
                 */
                function CreateAppserverResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverResponse appserver.
                 * @member {api.v1.server.IAppserver|null|undefined} appserver
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @instance
                 */
                CreateAppserverResponse.prototype.appserver = null;

                /**
                 * Creates a new CreateAppserverResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverResponse=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverResponse} CreateAppserverResponse instance
                 */
                CreateAppserverResponse.create = function create(properties) {
                    return new CreateAppserverResponse(properties);
                };

                /**
                 * Encodes the specified CreateAppserverResponse message. Does not implicitly {@link api.v1.server.CreateAppserverResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverResponse} message CreateAppserverResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.server.Appserver.encode(message.appserver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverResponse message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverResponse} message CreateAppserverResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverResponse} CreateAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver = $root.api.v1.server.Appserver.decode(reader, reader.uint32());
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
                 * Decodes a CreateAppserverResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverResponse} CreateAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverResponse message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.server.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateAppserverResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverResponse} CreateAppserverResponse
                 */
                CreateAppserverResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverResponse)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverResponse();
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.server.CreateAppserverResponse.appserver: object expected");
                        message.appserver = $root.api.v1.server.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {api.v1.server.CreateAppserverResponse} message CreateAppserverResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver = null;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.server.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this CreateAppserverResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverResponse";
                };

                return CreateAppserverResponse;
            })();

            server.GetByIdAppserverResponse = (function() {

                /**
                 * Properties of a GetByIdAppserverResponse.
                 * @memberof api.v1.server
                 * @interface IGetByIdAppserverResponse
                 * @property {api.v1.server.IAppserver|null} [appserver] GetByIdAppserverResponse appserver
                 */

                /**
                 * Constructs a new GetByIdAppserverResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a GetByIdAppserverResponse.
                 * @implements IGetByIdAppserverResponse
                 * @constructor
                 * @param {api.v1.server.IGetByIdAppserverResponse=} [properties] Properties to set
                 */
                function GetByIdAppserverResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdAppserverResponse appserver.
                 * @member {api.v1.server.IAppserver|null|undefined} appserver
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @instance
                 */
                GetByIdAppserverResponse.prototype.appserver = null;

                /**
                 * Creates a new GetByIdAppserverResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {api.v1.server.IGetByIdAppserverResponse=} [properties] Properties to set
                 * @returns {api.v1.server.GetByIdAppserverResponse} GetByIdAppserverResponse instance
                 */
                GetByIdAppserverResponse.create = function create(properties) {
                    return new GetByIdAppserverResponse(properties);
                };

                /**
                 * Encodes the specified GetByIdAppserverResponse message. Does not implicitly {@link api.v1.server.GetByIdAppserverResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {api.v1.server.IGetByIdAppserverResponse} message GetByIdAppserverResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdAppserverResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.server.Appserver.encode(message.appserver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdAppserverResponse message, length delimited. Does not implicitly {@link api.v1.server.GetByIdAppserverResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {api.v1.server.IGetByIdAppserverResponse} message GetByIdAppserverResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdAppserverResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdAppserverResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.GetByIdAppserverResponse} GetByIdAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdAppserverResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.GetByIdAppserverResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver = $root.api.v1.server.Appserver.decode(reader, reader.uint32());
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
                 * Decodes a GetByIdAppserverResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.GetByIdAppserverResponse} GetByIdAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdAppserverResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdAppserverResponse message.
                 * @function verify
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdAppserverResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.server.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GetByIdAppserverResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.GetByIdAppserverResponse} GetByIdAppserverResponse
                 */
                GetByIdAppserverResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.GetByIdAppserverResponse)
                        return object;
                    let message = new $root.api.v1.server.GetByIdAppserverResponse();
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.server.GetByIdAppserverResponse.appserver: object expected");
                        message.appserver = $root.api.v1.server.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdAppserverResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {api.v1.server.GetByIdAppserverResponse} message GetByIdAppserverResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdAppserverResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver = null;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.server.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this GetByIdAppserverResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdAppserverResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdAppserverResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.GetByIdAppserverResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdAppserverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.GetByIdAppserverResponse";
                };

                return GetByIdAppserverResponse;
            })();

            server.ListAppserversResponse = (function() {

                /**
                 * Properties of a ListAppserversResponse.
                 * @memberof api.v1.server
                 * @interface IListAppserversResponse
                 * @property {Array.<api.v1.server.IAppserver>|null} [appservers] ListAppserversResponse appservers
                 */

                /**
                 * Constructs a new ListAppserversResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a ListAppserversResponse.
                 * @implements IListAppserversResponse
                 * @constructor
                 * @param {api.v1.server.IListAppserversResponse=} [properties] Properties to set
                 */
                function ListAppserversResponse(properties) {
                    this.appservers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListAppserversResponse appservers.
                 * @member {Array.<api.v1.server.IAppserver>} appservers
                 * @memberof api.v1.server.ListAppserversResponse
                 * @instance
                 */
                ListAppserversResponse.prototype.appservers = $util.emptyArray;

                /**
                 * Creates a new ListAppserversResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {api.v1.server.IListAppserversResponse=} [properties] Properties to set
                 * @returns {api.v1.server.ListAppserversResponse} ListAppserversResponse instance
                 */
                ListAppserversResponse.create = function create(properties) {
                    return new ListAppserversResponse(properties);
                };

                /**
                 * Encodes the specified ListAppserversResponse message. Does not implicitly {@link api.v1.server.ListAppserversResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {api.v1.server.IListAppserversResponse} message ListAppserversResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListAppserversResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appservers != null && message.appservers.length)
                        for (let i = 0; i < message.appservers.length; ++i)
                            $root.api.v1.server.Appserver.encode(message.appservers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListAppserversResponse message, length delimited. Does not implicitly {@link api.v1.server.ListAppserversResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {api.v1.server.IListAppserversResponse} message ListAppserversResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListAppserversResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListAppserversResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.ListAppserversResponse} ListAppserversResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListAppserversResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.ListAppserversResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appservers && message.appservers.length))
                                    message.appservers = [];
                                message.appservers.push($root.api.v1.server.Appserver.decode(reader, reader.uint32()));
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
                 * Decodes a ListAppserversResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.ListAppserversResponse} ListAppserversResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListAppserversResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListAppserversResponse message.
                 * @function verify
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListAppserversResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appservers != null && message.hasOwnProperty("appservers")) {
                        if (!Array.isArray(message.appservers))
                            return "appservers: array expected";
                        for (let i = 0; i < message.appservers.length; ++i) {
                            let error = $root.api.v1.server.Appserver.verify(message.appservers[i]);
                            if (error)
                                return "appservers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListAppserversResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.ListAppserversResponse} ListAppserversResponse
                 */
                ListAppserversResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.ListAppserversResponse)
                        return object;
                    let message = new $root.api.v1.server.ListAppserversResponse();
                    if (object.appservers) {
                        if (!Array.isArray(object.appservers))
                            throw TypeError(".api.v1.server.ListAppserversResponse.appservers: array expected");
                        message.appservers = [];
                        for (let i = 0; i < object.appservers.length; ++i) {
                            if (typeof object.appservers[i] !== "object")
                                throw TypeError(".api.v1.server.ListAppserversResponse.appservers: object expected");
                            message.appservers[i] = $root.api.v1.server.Appserver.fromObject(object.appservers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListAppserversResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {api.v1.server.ListAppserversResponse} message ListAppserversResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListAppserversResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appservers = [];
                    if (message.appservers && message.appservers.length) {
                        object.appservers = [];
                        for (let j = 0; j < message.appservers.length; ++j)
                            object.appservers[j] = $root.api.v1.server.Appserver.toObject(message.appservers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListAppserversResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.ListAppserversResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListAppserversResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListAppserversResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.ListAppserversResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListAppserversResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.ListAppserversResponse";
                };

                return ListAppserversResponse;
            })();

            server.DeleteAppserverResponse = (function() {

                /**
                 * Properties of a DeleteAppserverResponse.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverResponse
                 */

                /**
                 * Constructs a new DeleteAppserverResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverResponse.
                 * @implements IDeleteAppserverResponse
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverResponse=} [properties] Properties to set
                 */
                function DeleteAppserverResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteAppserverResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverResponse=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverResponse} DeleteAppserverResponse instance
                 */
                DeleteAppserverResponse.create = function create(properties) {
                    return new DeleteAppserverResponse(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverResponse message. Does not implicitly {@link api.v1.server.DeleteAppserverResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverResponse} message DeleteAppserverResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverResponse message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverResponse} message DeleteAppserverResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverResponse} DeleteAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverResponse();
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
                 * Decodes a DeleteAppserverResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverResponse} DeleteAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverResponse message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverResponse} DeleteAppserverResponse
                 */
                DeleteAppserverResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverResponse)
                        return object;
                    return new $root.api.v1.server.DeleteAppserverResponse();
                };

                /**
                 * Creates a plain object from a DeleteAppserverResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {api.v1.server.DeleteAppserverResponse} message DeleteAppserverResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteAppserverResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverResponse";
                };

                return DeleteAppserverResponse;
            })();

            server.CreateAppserverSubRequest = (function() {

                /**
                 * Properties of a CreateAppserverSubRequest.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverSubRequest
                 * @property {string|null} [appserverId] CreateAppserverSubRequest appserverId
                 */

                /**
                 * Constructs a new CreateAppserverSubRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverSubRequest.
                 * @implements ICreateAppserverSubRequest
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverSubRequest=} [properties] Properties to set
                 */
                function CreateAppserverSubRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverSubRequest appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @instance
                 */
                CreateAppserverSubRequest.prototype.appserverId = "";

                /**
                 * Creates a new CreateAppserverSubRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverSubRequest=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverSubRequest} CreateAppserverSubRequest instance
                 */
                CreateAppserverSubRequest.create = function create(properties) {
                    return new CreateAppserverSubRequest(properties);
                };

                /**
                 * Encodes the specified CreateAppserverSubRequest message. Does not implicitly {@link api.v1.server.CreateAppserverSubRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverSubRequest} message CreateAppserverSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverSubRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appserverId);
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverSubRequest message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverSubRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverSubRequest} message CreateAppserverSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverSubRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverSubRequest} CreateAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverSubRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverSubRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverId = reader.string();
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
                 * Decodes a CreateAppserverSubRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverSubRequest} CreateAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverSubRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverSubRequest message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverSubRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
                    return null;
                };

                /**
                 * Creates a CreateAppserverSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverSubRequest} CreateAppserverSubRequest
                 */
                CreateAppserverSubRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverSubRequest)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverSubRequest();
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverSubRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {api.v1.server.CreateAppserverSubRequest} message CreateAppserverSubRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverSubRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserverId = "";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    return object;
                };

                /**
                 * Converts this CreateAppserverSubRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverSubRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverSubRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverSubRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverSubRequest";
                };

                return CreateAppserverSubRequest;
            })();

            server.GetUserAppserverSubsRequest = (function() {

                /**
                 * Properties of a GetUserAppserverSubsRequest.
                 * @memberof api.v1.server
                 * @interface IGetUserAppserverSubsRequest
                 */

                /**
                 * Constructs a new GetUserAppserverSubsRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a GetUserAppserverSubsRequest.
                 * @implements IGetUserAppserverSubsRequest
                 * @constructor
                 * @param {api.v1.server.IGetUserAppserverSubsRequest=} [properties] Properties to set
                 */
                function GetUserAppserverSubsRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new GetUserAppserverSubsRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {api.v1.server.IGetUserAppserverSubsRequest=} [properties] Properties to set
                 * @returns {api.v1.server.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest instance
                 */
                GetUserAppserverSubsRequest.create = function create(properties) {
                    return new GetUserAppserverSubsRequest(properties);
                };

                /**
                 * Encodes the specified GetUserAppserverSubsRequest message. Does not implicitly {@link api.v1.server.GetUserAppserverSubsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {api.v1.server.IGetUserAppserverSubsRequest} message GetUserAppserverSubsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetUserAppserverSubsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified GetUserAppserverSubsRequest message, length delimited. Does not implicitly {@link api.v1.server.GetUserAppserverSubsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {api.v1.server.IGetUserAppserverSubsRequest} message GetUserAppserverSubsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetUserAppserverSubsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetUserAppserverSubsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetUserAppserverSubsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.GetUserAppserverSubsRequest();
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
                 * Decodes a GetUserAppserverSubsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetUserAppserverSubsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetUserAppserverSubsRequest message.
                 * @function verify
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetUserAppserverSubsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a GetUserAppserverSubsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest
                 */
                GetUserAppserverSubsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.GetUserAppserverSubsRequest)
                        return object;
                    return new $root.api.v1.server.GetUserAppserverSubsRequest();
                };

                /**
                 * Creates a plain object from a GetUserAppserverSubsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {api.v1.server.GetUserAppserverSubsRequest} message GetUserAppserverSubsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetUserAppserverSubsRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this GetUserAppserverSubsRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetUserAppserverSubsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetUserAppserverSubsRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.GetUserAppserverSubsRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetUserAppserverSubsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.GetUserAppserverSubsRequest";
                };

                return GetUserAppserverSubsRequest;
            })();

            server.DeleteAppserverSubRequest = (function() {

                /**
                 * Properties of a DeleteAppserverSubRequest.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverSubRequest
                 * @property {string|null} [id] DeleteAppserverSubRequest id
                 */

                /**
                 * Constructs a new DeleteAppserverSubRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverSubRequest.
                 * @implements IDeleteAppserverSubRequest
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverSubRequest=} [properties] Properties to set
                 */
                function DeleteAppserverSubRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteAppserverSubRequest id.
                 * @member {string} id
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @instance
                 */
                DeleteAppserverSubRequest.prototype.id = "";

                /**
                 * Creates a new DeleteAppserverSubRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverSubRequest=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverSubRequest} DeleteAppserverSubRequest instance
                 */
                DeleteAppserverSubRequest.create = function create(properties) {
                    return new DeleteAppserverSubRequest(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverSubRequest message. Does not implicitly {@link api.v1.server.DeleteAppserverSubRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverSubRequest} message DeleteAppserverSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverSubRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverSubRequest message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverSubRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverSubRequest} message DeleteAppserverSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverSubRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverSubRequest} DeleteAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverSubRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverSubRequest();
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
                 * Decodes a DeleteAppserverSubRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverSubRequest} DeleteAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverSubRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverSubRequest message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverSubRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverSubRequest} DeleteAppserverSubRequest
                 */
                DeleteAppserverSubRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverSubRequest)
                        return object;
                    let message = new $root.api.v1.server.DeleteAppserverSubRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteAppserverSubRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {api.v1.server.DeleteAppserverSubRequest} message DeleteAppserverSubRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverSubRequest.toObject = function toObject(message, options) {
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
                 * Converts this DeleteAppserverSubRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverSubRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverSubRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverSubRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverSubRequest";
                };

                return DeleteAppserverSubRequest;
            })();

            server.CreateAppserverSubResponse = (function() {

                /**
                 * Properties of a CreateAppserverSubResponse.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverSubResponse
                 * @property {api.v1.server.IAppserverSub|null} [appserverSub] CreateAppserverSubResponse appserverSub
                 */

                /**
                 * Constructs a new CreateAppserverSubResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverSubResponse.
                 * @implements ICreateAppserverSubResponse
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverSubResponse=} [properties] Properties to set
                 */
                function CreateAppserverSubResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverSubResponse appserverSub.
                 * @member {api.v1.server.IAppserverSub|null|undefined} appserverSub
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @instance
                 */
                CreateAppserverSubResponse.prototype.appserverSub = null;

                /**
                 * Creates a new CreateAppserverSubResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverSubResponse=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverSubResponse} CreateAppserverSubResponse instance
                 */
                CreateAppserverSubResponse.create = function create(properties) {
                    return new CreateAppserverSubResponse(properties);
                };

                /**
                 * Encodes the specified CreateAppserverSubResponse message. Does not implicitly {@link api.v1.server.CreateAppserverSubResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverSubResponse} message CreateAppserverSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverSubResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverSub != null && Object.hasOwnProperty.call(message, "appserverSub"))
                        $root.api.v1.server.AppserverSub.encode(message.appserverSub, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverSubResponse message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverSubResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverSubResponse} message CreateAppserverSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverSubResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverSubResponse} CreateAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverSubResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverSubResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverSub = $root.api.v1.server.AppserverSub.decode(reader, reader.uint32());
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
                 * Decodes a CreateAppserverSubResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverSubResponse} CreateAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverSubResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverSubResponse message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverSubResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverSub != null && message.hasOwnProperty("appserverSub")) {
                        let error = $root.api.v1.server.AppserverSub.verify(message.appserverSub);
                        if (error)
                            return "appserverSub." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateAppserverSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverSubResponse} CreateAppserverSubResponse
                 */
                CreateAppserverSubResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverSubResponse)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverSubResponse();
                    if (object.appserverSub != null) {
                        if (typeof object.appserverSub !== "object")
                            throw TypeError(".api.v1.server.CreateAppserverSubResponse.appserverSub: object expected");
                        message.appserverSub = $root.api.v1.server.AppserverSub.fromObject(object.appserverSub);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverSubResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {api.v1.server.CreateAppserverSubResponse} message CreateAppserverSubResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverSubResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserverSub = null;
                    if (message.appserverSub != null && message.hasOwnProperty("appserverSub"))
                        object.appserverSub = $root.api.v1.server.AppserverSub.toObject(message.appserverSub, options);
                    return object;
                };

                /**
                 * Converts this CreateAppserverSubResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverSubResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverSubResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverSubResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverSubResponse";
                };

                return CreateAppserverSubResponse;
            })();

            server.GetUserAppserverSubsResponse = (function() {

                /**
                 * Properties of a GetUserAppserverSubsResponse.
                 * @memberof api.v1.server
                 * @interface IGetUserAppserverSubsResponse
                 * @property {Array.<api.v1.server.IAppserverAndSub>|null} [appservers] GetUserAppserverSubsResponse appservers
                 */

                /**
                 * Constructs a new GetUserAppserverSubsResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a GetUserAppserverSubsResponse.
                 * @implements IGetUserAppserverSubsResponse
                 * @constructor
                 * @param {api.v1.server.IGetUserAppserverSubsResponse=} [properties] Properties to set
                 */
                function GetUserAppserverSubsResponse(properties) {
                    this.appservers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetUserAppserverSubsResponse appservers.
                 * @member {Array.<api.v1.server.IAppserverAndSub>} appservers
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @instance
                 */
                GetUserAppserverSubsResponse.prototype.appservers = $util.emptyArray;

                /**
                 * Creates a new GetUserAppserverSubsResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {api.v1.server.IGetUserAppserverSubsResponse=} [properties] Properties to set
                 * @returns {api.v1.server.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse instance
                 */
                GetUserAppserverSubsResponse.create = function create(properties) {
                    return new GetUserAppserverSubsResponse(properties);
                };

                /**
                 * Encodes the specified GetUserAppserverSubsResponse message. Does not implicitly {@link api.v1.server.GetUserAppserverSubsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {api.v1.server.IGetUserAppserverSubsResponse} message GetUserAppserverSubsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetUserAppserverSubsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appservers != null && message.appservers.length)
                        for (let i = 0; i < message.appservers.length; ++i)
                            $root.api.v1.server.AppserverAndSub.encode(message.appservers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetUserAppserverSubsResponse message, length delimited. Does not implicitly {@link api.v1.server.GetUserAppserverSubsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {api.v1.server.IGetUserAppserverSubsResponse} message GetUserAppserverSubsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetUserAppserverSubsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetUserAppserverSubsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetUserAppserverSubsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.GetUserAppserverSubsResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appservers && message.appservers.length))
                                    message.appservers = [];
                                message.appservers.push($root.api.v1.server.AppserverAndSub.decode(reader, reader.uint32()));
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
                 * Decodes a GetUserAppserverSubsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetUserAppserverSubsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetUserAppserverSubsResponse message.
                 * @function verify
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetUserAppserverSubsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appservers != null && message.hasOwnProperty("appservers")) {
                        if (!Array.isArray(message.appservers))
                            return "appservers: array expected";
                        for (let i = 0; i < message.appservers.length; ++i) {
                            let error = $root.api.v1.server.AppserverAndSub.verify(message.appservers[i]);
                            if (error)
                                return "appservers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a GetUserAppserverSubsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse
                 */
                GetUserAppserverSubsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.GetUserAppserverSubsResponse)
                        return object;
                    let message = new $root.api.v1.server.GetUserAppserverSubsResponse();
                    if (object.appservers) {
                        if (!Array.isArray(object.appservers))
                            throw TypeError(".api.v1.server.GetUserAppserverSubsResponse.appservers: array expected");
                        message.appservers = [];
                        for (let i = 0; i < object.appservers.length; ++i) {
                            if (typeof object.appservers[i] !== "object")
                                throw TypeError(".api.v1.server.GetUserAppserverSubsResponse.appservers: object expected");
                            message.appservers[i] = $root.api.v1.server.AppserverAndSub.fromObject(object.appservers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetUserAppserverSubsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {api.v1.server.GetUserAppserverSubsResponse} message GetUserAppserverSubsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetUserAppserverSubsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appservers = [];
                    if (message.appservers && message.appservers.length) {
                        object.appservers = [];
                        for (let j = 0; j < message.appservers.length; ++j)
                            object.appservers[j] = $root.api.v1.server.AppserverAndSub.toObject(message.appservers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this GetUserAppserverSubsResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetUserAppserverSubsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetUserAppserverSubsResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.GetUserAppserverSubsResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetUserAppserverSubsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.GetUserAppserverSubsResponse";
                };

                return GetUserAppserverSubsResponse;
            })();

            server.DeleteAppserverSubResponse = (function() {

                /**
                 * Properties of a DeleteAppserverSubResponse.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverSubResponse
                 */

                /**
                 * Constructs a new DeleteAppserverSubResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverSubResponse.
                 * @implements IDeleteAppserverSubResponse
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverSubResponse=} [properties] Properties to set
                 */
                function DeleteAppserverSubResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteAppserverSubResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverSubResponse=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverSubResponse} DeleteAppserverSubResponse instance
                 */
                DeleteAppserverSubResponse.create = function create(properties) {
                    return new DeleteAppserverSubResponse(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverSubResponse message. Does not implicitly {@link api.v1.server.DeleteAppserverSubResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverSubResponse} message DeleteAppserverSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverSubResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverSubResponse message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverSubResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverSubResponse} message DeleteAppserverSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverSubResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverSubResponse} DeleteAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverSubResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverSubResponse();
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
                 * Decodes a DeleteAppserverSubResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverSubResponse} DeleteAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverSubResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverSubResponse message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverSubResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverSubResponse} DeleteAppserverSubResponse
                 */
                DeleteAppserverSubResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverSubResponse)
                        return object;
                    return new $root.api.v1.server.DeleteAppserverSubResponse();
                };

                /**
                 * Creates a plain object from a DeleteAppserverSubResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {api.v1.server.DeleteAppserverSubResponse} message DeleteAppserverSubResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverSubResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteAppserverSubResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverSubResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverSubResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverSubResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverSubResponse";
                };

                return DeleteAppserverSubResponse;
            })();

            server.CreateAppserverRoleRequest = (function() {

                /**
                 * Properties of a CreateAppserverRoleRequest.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverRoleRequest
                 * @property {string|null} [appserverId] CreateAppserverRoleRequest appserverId
                 * @property {string|null} [name] CreateAppserverRoleRequest name
                 */

                /**
                 * Constructs a new CreateAppserverRoleRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverRoleRequest.
                 * @implements ICreateAppserverRoleRequest
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverRoleRequest=} [properties] Properties to set
                 */
                function CreateAppserverRoleRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverRoleRequest appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @instance
                 */
                CreateAppserverRoleRequest.prototype.appserverId = "";

                /**
                 * CreateAppserverRoleRequest name.
                 * @member {string} name
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @instance
                 */
                CreateAppserverRoleRequest.prototype.name = "";

                /**
                 * Creates a new CreateAppserverRoleRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleRequest=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverRoleRequest} CreateAppserverRoleRequest instance
                 */
                CreateAppserverRoleRequest.create = function create(properties) {
                    return new CreateAppserverRoleRequest(properties);
                };

                /**
                 * Encodes the specified CreateAppserverRoleRequest message. Does not implicitly {@link api.v1.server.CreateAppserverRoleRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleRequest} message CreateAppserverRoleRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appserverId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverRoleRequest message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverRoleRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleRequest} message CreateAppserverRoleRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverRoleRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverRoleRequest} CreateAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverRoleRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverId = reader.string();
                                break;
                            }
                        case 2: {
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
                 * Decodes a CreateAppserverRoleRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverRoleRequest} CreateAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverRoleRequest message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverRoleRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a CreateAppserverRoleRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverRoleRequest} CreateAppserverRoleRequest
                 */
                CreateAppserverRoleRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverRoleRequest)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverRoleRequest();
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverRoleRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.CreateAppserverRoleRequest} message CreateAppserverRoleRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverRoleRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.appserverId = "";
                        object.name = "";
                    }
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this CreateAppserverRoleRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverRoleRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverRoleRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverRoleRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverRoleRequest";
                };

                return CreateAppserverRoleRequest;
            })();

            server.GetAllAppserverRolesRequest = (function() {

                /**
                 * Properties of a GetAllAppserverRolesRequest.
                 * @memberof api.v1.server
                 * @interface IGetAllAppserverRolesRequest
                 * @property {string|null} [appserverId] GetAllAppserverRolesRequest appserverId
                 */

                /**
                 * Constructs a new GetAllAppserverRolesRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a GetAllAppserverRolesRequest.
                 * @implements IGetAllAppserverRolesRequest
                 * @constructor
                 * @param {api.v1.server.IGetAllAppserverRolesRequest=} [properties] Properties to set
                 */
                function GetAllAppserverRolesRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetAllAppserverRolesRequest appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @instance
                 */
                GetAllAppserverRolesRequest.prototype.appserverId = "";

                /**
                 * Creates a new GetAllAppserverRolesRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {api.v1.server.IGetAllAppserverRolesRequest=} [properties] Properties to set
                 * @returns {api.v1.server.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest instance
                 */
                GetAllAppserverRolesRequest.create = function create(properties) {
                    return new GetAllAppserverRolesRequest(properties);
                };

                /**
                 * Encodes the specified GetAllAppserverRolesRequest message. Does not implicitly {@link api.v1.server.GetAllAppserverRolesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {api.v1.server.IGetAllAppserverRolesRequest} message GetAllAppserverRolesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAllAppserverRolesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appserverId);
                    return writer;
                };

                /**
                 * Encodes the specified GetAllAppserverRolesRequest message, length delimited. Does not implicitly {@link api.v1.server.GetAllAppserverRolesRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {api.v1.server.IGetAllAppserverRolesRequest} message GetAllAppserverRolesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAllAppserverRolesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetAllAppserverRolesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAllAppserverRolesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.GetAllAppserverRolesRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverId = reader.string();
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
                 * Decodes a GetAllAppserverRolesRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAllAppserverRolesRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetAllAppserverRolesRequest message.
                 * @function verify
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAllAppserverRolesRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
                    return null;
                };

                /**
                 * Creates a GetAllAppserverRolesRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest
                 */
                GetAllAppserverRolesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.GetAllAppserverRolesRequest)
                        return object;
                    let message = new $root.api.v1.server.GetAllAppserverRolesRequest();
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    return message;
                };

                /**
                 * Creates a plain object from a GetAllAppserverRolesRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {api.v1.server.GetAllAppserverRolesRequest} message GetAllAppserverRolesRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAllAppserverRolesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserverId = "";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    return object;
                };

                /**
                 * Converts this GetAllAppserverRolesRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAllAppserverRolesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetAllAppserverRolesRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.GetAllAppserverRolesRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetAllAppserverRolesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.GetAllAppserverRolesRequest";
                };

                return GetAllAppserverRolesRequest;
            })();

            server.DeleteAppserverRoleRequest = (function() {

                /**
                 * Properties of a DeleteAppserverRoleRequest.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverRoleRequest
                 * @property {string|null} [id] DeleteAppserverRoleRequest id
                 */

                /**
                 * Constructs a new DeleteAppserverRoleRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverRoleRequest.
                 * @implements IDeleteAppserverRoleRequest
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverRoleRequest=} [properties] Properties to set
                 */
                function DeleteAppserverRoleRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteAppserverRoleRequest id.
                 * @member {string} id
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @instance
                 */
                DeleteAppserverRoleRequest.prototype.id = "";

                /**
                 * Creates a new DeleteAppserverRoleRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleRequest=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest instance
                 */
                DeleteAppserverRoleRequest.create = function create(properties) {
                    return new DeleteAppserverRoleRequest(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverRoleRequest message. Does not implicitly {@link api.v1.server.DeleteAppserverRoleRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleRequest} message DeleteAppserverRoleRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverRoleRequest message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverRoleRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleRequest} message DeleteAppserverRoleRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverRoleRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverRoleRequest();
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
                 * Decodes a DeleteAppserverRoleRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverRoleRequest message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverRoleRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverRoleRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest
                 */
                DeleteAppserverRoleRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverRoleRequest)
                        return object;
                    let message = new $root.api.v1.server.DeleteAppserverRoleRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteAppserverRoleRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {api.v1.server.DeleteAppserverRoleRequest} message DeleteAppserverRoleRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverRoleRequest.toObject = function toObject(message, options) {
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
                 * Converts this DeleteAppserverRoleRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverRoleRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverRoleRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverRoleRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverRoleRequest";
                };

                return DeleteAppserverRoleRequest;
            })();

            server.CreateAppserverRoleResponse = (function() {

                /**
                 * Properties of a CreateAppserverRoleResponse.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverRoleResponse
                 * @property {api.v1.server.IAppserverRole|null} [appserverRole] CreateAppserverRoleResponse appserverRole
                 */

                /**
                 * Constructs a new CreateAppserverRoleResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverRoleResponse.
                 * @implements ICreateAppserverRoleResponse
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverRoleResponse=} [properties] Properties to set
                 */
                function CreateAppserverRoleResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverRoleResponse appserverRole.
                 * @member {api.v1.server.IAppserverRole|null|undefined} appserverRole
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @instance
                 */
                CreateAppserverRoleResponse.prototype.appserverRole = null;

                /**
                 * Creates a new CreateAppserverRoleResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleResponse=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverRoleResponse} CreateAppserverRoleResponse instance
                 */
                CreateAppserverRoleResponse.create = function create(properties) {
                    return new CreateAppserverRoleResponse(properties);
                };

                /**
                 * Encodes the specified CreateAppserverRoleResponse message. Does not implicitly {@link api.v1.server.CreateAppserverRoleResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleResponse} message CreateAppserverRoleResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverRole != null && Object.hasOwnProperty.call(message, "appserverRole"))
                        $root.api.v1.server.AppserverRole.encode(message.appserverRole, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverRoleResponse message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverRoleResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleResponse} message CreateAppserverRoleResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverRoleResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverRoleResponse} CreateAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverRoleResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverRole = $root.api.v1.server.AppserverRole.decode(reader, reader.uint32());
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
                 * Decodes a CreateAppserverRoleResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverRoleResponse} CreateAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverRoleResponse message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverRoleResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverRole != null && message.hasOwnProperty("appserverRole")) {
                        let error = $root.api.v1.server.AppserverRole.verify(message.appserverRole);
                        if (error)
                            return "appserverRole." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateAppserverRoleResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverRoleResponse} CreateAppserverRoleResponse
                 */
                CreateAppserverRoleResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverRoleResponse)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverRoleResponse();
                    if (object.appserverRole != null) {
                        if (typeof object.appserverRole !== "object")
                            throw TypeError(".api.v1.server.CreateAppserverRoleResponse.appserverRole: object expected");
                        message.appserverRole = $root.api.v1.server.AppserverRole.fromObject(object.appserverRole);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverRoleResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.CreateAppserverRoleResponse} message CreateAppserverRoleResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverRoleResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserverRole = null;
                    if (message.appserverRole != null && message.hasOwnProperty("appserverRole"))
                        object.appserverRole = $root.api.v1.server.AppserverRole.toObject(message.appserverRole, options);
                    return object;
                };

                /**
                 * Converts this CreateAppserverRoleResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverRoleResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverRoleResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverRoleResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverRoleResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverRoleResponse";
                };

                return CreateAppserverRoleResponse;
            })();

            server.GetAllAppserverRolesResponse = (function() {

                /**
                 * Properties of a GetAllAppserverRolesResponse.
                 * @memberof api.v1.server
                 * @interface IGetAllAppserverRolesResponse
                 * @property {Array.<api.v1.server.IAppserverRole>|null} [appserverRoles] GetAllAppserverRolesResponse appserverRoles
                 */

                /**
                 * Constructs a new GetAllAppserverRolesResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a GetAllAppserverRolesResponse.
                 * @implements IGetAllAppserverRolesResponse
                 * @constructor
                 * @param {api.v1.server.IGetAllAppserverRolesResponse=} [properties] Properties to set
                 */
                function GetAllAppserverRolesResponse(properties) {
                    this.appserverRoles = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetAllAppserverRolesResponse appserverRoles.
                 * @member {Array.<api.v1.server.IAppserverRole>} appserverRoles
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @instance
                 */
                GetAllAppserverRolesResponse.prototype.appserverRoles = $util.emptyArray;

                /**
                 * Creates a new GetAllAppserverRolesResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {api.v1.server.IGetAllAppserverRolesResponse=} [properties] Properties to set
                 * @returns {api.v1.server.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse instance
                 */
                GetAllAppserverRolesResponse.create = function create(properties) {
                    return new GetAllAppserverRolesResponse(properties);
                };

                /**
                 * Encodes the specified GetAllAppserverRolesResponse message. Does not implicitly {@link api.v1.server.GetAllAppserverRolesResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {api.v1.server.IGetAllAppserverRolesResponse} message GetAllAppserverRolesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAllAppserverRolesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverRoles != null && message.appserverRoles.length)
                        for (let i = 0; i < message.appserverRoles.length; ++i)
                            $root.api.v1.server.AppserverRole.encode(message.appserverRoles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetAllAppserverRolesResponse message, length delimited. Does not implicitly {@link api.v1.server.GetAllAppserverRolesResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {api.v1.server.IGetAllAppserverRolesResponse} message GetAllAppserverRolesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetAllAppserverRolesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetAllAppserverRolesResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAllAppserverRolesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.GetAllAppserverRolesResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appserverRoles && message.appserverRoles.length))
                                    message.appserverRoles = [];
                                message.appserverRoles.push($root.api.v1.server.AppserverRole.decode(reader, reader.uint32()));
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
                 * Decodes a GetAllAppserverRolesResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetAllAppserverRolesResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetAllAppserverRolesResponse message.
                 * @function verify
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetAllAppserverRolesResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverRoles != null && message.hasOwnProperty("appserverRoles")) {
                        if (!Array.isArray(message.appserverRoles))
                            return "appserverRoles: array expected";
                        for (let i = 0; i < message.appserverRoles.length; ++i) {
                            let error = $root.api.v1.server.AppserverRole.verify(message.appserverRoles[i]);
                            if (error)
                                return "appserverRoles." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a GetAllAppserverRolesResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse
                 */
                GetAllAppserverRolesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.GetAllAppserverRolesResponse)
                        return object;
                    let message = new $root.api.v1.server.GetAllAppserverRolesResponse();
                    if (object.appserverRoles) {
                        if (!Array.isArray(object.appserverRoles))
                            throw TypeError(".api.v1.server.GetAllAppserverRolesResponse.appserverRoles: array expected");
                        message.appserverRoles = [];
                        for (let i = 0; i < object.appserverRoles.length; ++i) {
                            if (typeof object.appserverRoles[i] !== "object")
                                throw TypeError(".api.v1.server.GetAllAppserverRolesResponse.appserverRoles: object expected");
                            message.appserverRoles[i] = $root.api.v1.server.AppserverRole.fromObject(object.appserverRoles[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetAllAppserverRolesResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {api.v1.server.GetAllAppserverRolesResponse} message GetAllAppserverRolesResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetAllAppserverRolesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appserverRoles = [];
                    if (message.appserverRoles && message.appserverRoles.length) {
                        object.appserverRoles = [];
                        for (let j = 0; j < message.appserverRoles.length; ++j)
                            object.appserverRoles[j] = $root.api.v1.server.AppserverRole.toObject(message.appserverRoles[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this GetAllAppserverRolesResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetAllAppserverRolesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetAllAppserverRolesResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.GetAllAppserverRolesResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetAllAppserverRolesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.GetAllAppserverRolesResponse";
                };

                return GetAllAppserverRolesResponse;
            })();

            server.DeleteAppserverRoleResponse = (function() {

                /**
                 * Properties of a DeleteAppserverRoleResponse.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverRoleResponse
                 */

                /**
                 * Constructs a new DeleteAppserverRoleResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverRoleResponse.
                 * @implements IDeleteAppserverRoleResponse
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverRoleResponse=} [properties] Properties to set
                 */
                function DeleteAppserverRoleResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteAppserverRoleResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleResponse=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse instance
                 */
                DeleteAppserverRoleResponse.create = function create(properties) {
                    return new DeleteAppserverRoleResponse(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverRoleResponse message. Does not implicitly {@link api.v1.server.DeleteAppserverRoleResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleResponse} message DeleteAppserverRoleResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverRoleResponse message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverRoleResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleResponse} message DeleteAppserverRoleResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverRoleResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverRoleResponse();
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
                 * Decodes a DeleteAppserverRoleResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverRoleResponse message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverRoleResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverRoleResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse
                 */
                DeleteAppserverRoleResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverRoleResponse)
                        return object;
                    return new $root.api.v1.server.DeleteAppserverRoleResponse();
                };

                /**
                 * Creates a plain object from a DeleteAppserverRoleResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {api.v1.server.DeleteAppserverRoleResponse} message DeleteAppserverRoleResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverRoleResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteAppserverRoleResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverRoleResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverRoleResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverRoleResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverRoleResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverRoleResponse";
                };

                return DeleteAppserverRoleResponse;
            })();

            server.CreateAppserverRoleSubRequest = (function() {

                /**
                 * Properties of a CreateAppserverRoleSubRequest.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverRoleSubRequest
                 * @property {string|null} [appserverRoleId] CreateAppserverRoleSubRequest appserverRoleId
                 * @property {string|null} [appserverSubId] CreateAppserverRoleSubRequest appserverSubId
                 */

                /**
                 * Constructs a new CreateAppserverRoleSubRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverRoleSubRequest.
                 * @implements ICreateAppserverRoleSubRequest
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverRoleSubRequest=} [properties] Properties to set
                 */
                function CreateAppserverRoleSubRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverRoleSubRequest appserverRoleId.
                 * @member {string} appserverRoleId
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @instance
                 */
                CreateAppserverRoleSubRequest.prototype.appserverRoleId = "";

                /**
                 * CreateAppserverRoleSubRequest appserverSubId.
                 * @member {string} appserverSubId
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @instance
                 */
                CreateAppserverRoleSubRequest.prototype.appserverSubId = "";

                /**
                 * Creates a new CreateAppserverRoleSubRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleSubRequest=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest instance
                 */
                CreateAppserverRoleSubRequest.create = function create(properties) {
                    return new CreateAppserverRoleSubRequest(properties);
                };

                /**
                 * Encodes the specified CreateAppserverRoleSubRequest message. Does not implicitly {@link api.v1.server.CreateAppserverRoleSubRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleSubRequest} message CreateAppserverRoleSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleSubRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverRoleId != null && Object.hasOwnProperty.call(message, "appserverRoleId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appserverRoleId);
                    if (message.appserverSubId != null && Object.hasOwnProperty.call(message, "appserverSubId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserverSubId);
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverRoleSubRequest message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverRoleSubRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleSubRequest} message CreateAppserverRoleSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverRoleSubRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleSubRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverRoleSubRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverRoleId = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserverSubId = reader.string();
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
                 * Decodes a CreateAppserverRoleSubRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleSubRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverRoleSubRequest message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverRoleSubRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverRoleId != null && message.hasOwnProperty("appserverRoleId"))
                        if (!$util.isString(message.appserverRoleId))
                            return "appserverRoleId: string expected";
                    if (message.appserverSubId != null && message.hasOwnProperty("appserverSubId"))
                        if (!$util.isString(message.appserverSubId))
                            return "appserverSubId: string expected";
                    return null;
                };

                /**
                 * Creates a CreateAppserverRoleSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest
                 */
                CreateAppserverRoleSubRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverRoleSubRequest)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverRoleSubRequest();
                    if (object.appserverRoleId != null)
                        message.appserverRoleId = String(object.appserverRoleId);
                    if (object.appserverSubId != null)
                        message.appserverSubId = String(object.appserverSubId);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverRoleSubRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.CreateAppserverRoleSubRequest} message CreateAppserverRoleSubRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverRoleSubRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.appserverRoleId = "";
                        object.appserverSubId = "";
                    }
                    if (message.appserverRoleId != null && message.hasOwnProperty("appserverRoleId"))
                        object.appserverRoleId = message.appserverRoleId;
                    if (message.appserverSubId != null && message.hasOwnProperty("appserverSubId"))
                        object.appserverSubId = message.appserverSubId;
                    return object;
                };

                /**
                 * Converts this CreateAppserverRoleSubRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverRoleSubRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverRoleSubRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverRoleSubRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverRoleSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverRoleSubRequest";
                };

                return CreateAppserverRoleSubRequest;
            })();

            server.DeleteAppserverRoleSubRequest = (function() {

                /**
                 * Properties of a DeleteAppserverRoleSubRequest.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverRoleSubRequest
                 * @property {string|null} [id] DeleteAppserverRoleSubRequest id
                 */

                /**
                 * Constructs a new DeleteAppserverRoleSubRequest.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverRoleSubRequest.
                 * @implements IDeleteAppserverRoleSubRequest
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverRoleSubRequest=} [properties] Properties to set
                 */
                function DeleteAppserverRoleSubRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteAppserverRoleSubRequest id.
                 * @member {string} id
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @instance
                 */
                DeleteAppserverRoleSubRequest.prototype.id = "";

                /**
                 * Creates a new DeleteAppserverRoleSubRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleSubRequest=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest instance
                 */
                DeleteAppserverRoleSubRequest.create = function create(properties) {
                    return new DeleteAppserverRoleSubRequest(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverRoleSubRequest message. Does not implicitly {@link api.v1.server.DeleteAppserverRoleSubRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleSubRequest} message DeleteAppserverRoleSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleSubRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverRoleSubRequest message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverRoleSubRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleSubRequest} message DeleteAppserverRoleSubRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverRoleSubRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleSubRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverRoleSubRequest();
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
                 * Decodes a DeleteAppserverRoleSubRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleSubRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverRoleSubRequest message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverRoleSubRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverRoleSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest
                 */
                DeleteAppserverRoleSubRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverRoleSubRequest)
                        return object;
                    let message = new $root.api.v1.server.DeleteAppserverRoleSubRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteAppserverRoleSubRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {api.v1.server.DeleteAppserverRoleSubRequest} message DeleteAppserverRoleSubRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverRoleSubRequest.toObject = function toObject(message, options) {
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
                 * Converts this DeleteAppserverRoleSubRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverRoleSubRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverRoleSubRequest
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverRoleSubRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverRoleSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverRoleSubRequest";
                };

                return DeleteAppserverRoleSubRequest;
            })();

            server.CreateAppserverRoleSubResponse = (function() {

                /**
                 * Properties of a CreateAppserverRoleSubResponse.
                 * @memberof api.v1.server
                 * @interface ICreateAppserverRoleSubResponse
                 * @property {api.v1.server.IAppserverRoleSub|null} [appserverRoleSub] CreateAppserverRoleSubResponse appserverRoleSub
                 */

                /**
                 * Constructs a new CreateAppserverRoleSubResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a CreateAppserverRoleSubResponse.
                 * @implements ICreateAppserverRoleSubResponse
                 * @constructor
                 * @param {api.v1.server.ICreateAppserverRoleSubResponse=} [properties] Properties to set
                 */
                function CreateAppserverRoleSubResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateAppserverRoleSubResponse appserverRoleSub.
                 * @member {api.v1.server.IAppserverRoleSub|null|undefined} appserverRoleSub
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @instance
                 */
                CreateAppserverRoleSubResponse.prototype.appserverRoleSub = null;

                /**
                 * Creates a new CreateAppserverRoleSubResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleSubResponse=} [properties] Properties to set
                 * @returns {api.v1.server.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse instance
                 */
                CreateAppserverRoleSubResponse.create = function create(properties) {
                    return new CreateAppserverRoleSubResponse(properties);
                };

                /**
                 * Encodes the specified CreateAppserverRoleSubResponse message. Does not implicitly {@link api.v1.server.CreateAppserverRoleSubResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleSubResponse} message CreateAppserverRoleSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleSubResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserverRoleSub != null && Object.hasOwnProperty.call(message, "appserverRoleSub"))
                        $root.api.v1.server.AppserverRoleSub.encode(message.appserverRoleSub, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateAppserverRoleSubResponse message, length delimited. Does not implicitly {@link api.v1.server.CreateAppserverRoleSubResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.ICreateAppserverRoleSubResponse} message CreateAppserverRoleSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateAppserverRoleSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateAppserverRoleSubResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleSubResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.CreateAppserverRoleSubResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserverRoleSub = $root.api.v1.server.AppserverRoleSub.decode(reader, reader.uint32());
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
                 * Decodes a CreateAppserverRoleSubResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateAppserverRoleSubResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateAppserverRoleSubResponse message.
                 * @function verify
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateAppserverRoleSubResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserverRoleSub != null && message.hasOwnProperty("appserverRoleSub")) {
                        let error = $root.api.v1.server.AppserverRoleSub.verify(message.appserverRoleSub);
                        if (error)
                            return "appserverRoleSub." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateAppserverRoleSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse
                 */
                CreateAppserverRoleSubResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.CreateAppserverRoleSubResponse)
                        return object;
                    let message = new $root.api.v1.server.CreateAppserverRoleSubResponse();
                    if (object.appserverRoleSub != null) {
                        if (typeof object.appserverRoleSub !== "object")
                            throw TypeError(".api.v1.server.CreateAppserverRoleSubResponse.appserverRoleSub: object expected");
                        message.appserverRoleSub = $root.api.v1.server.AppserverRoleSub.fromObject(object.appserverRoleSub);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateAppserverRoleSubResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.CreateAppserverRoleSubResponse} message CreateAppserverRoleSubResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateAppserverRoleSubResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserverRoleSub = null;
                    if (message.appserverRoleSub != null && message.hasOwnProperty("appserverRoleSub"))
                        object.appserverRoleSub = $root.api.v1.server.AppserverRoleSub.toObject(message.appserverRoleSub, options);
                    return object;
                };

                /**
                 * Converts this CreateAppserverRoleSubResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateAppserverRoleSubResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateAppserverRoleSubResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.CreateAppserverRoleSubResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateAppserverRoleSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.CreateAppserverRoleSubResponse";
                };

                return CreateAppserverRoleSubResponse;
            })();

            server.DeleteAppserverRoleSubResponse = (function() {

                /**
                 * Properties of a DeleteAppserverRoleSubResponse.
                 * @memberof api.v1.server
                 * @interface IDeleteAppserverRoleSubResponse
                 */

                /**
                 * Constructs a new DeleteAppserverRoleSubResponse.
                 * @memberof api.v1.server
                 * @classdesc Represents a DeleteAppserverRoleSubResponse.
                 * @implements IDeleteAppserverRoleSubResponse
                 * @constructor
                 * @param {api.v1.server.IDeleteAppserverRoleSubResponse=} [properties] Properties to set
                 */
                function DeleteAppserverRoleSubResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteAppserverRoleSubResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleSubResponse=} [properties] Properties to set
                 * @returns {api.v1.server.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse instance
                 */
                DeleteAppserverRoleSubResponse.create = function create(properties) {
                    return new DeleteAppserverRoleSubResponse(properties);
                };

                /**
                 * Encodes the specified DeleteAppserverRoleSubResponse message. Does not implicitly {@link api.v1.server.DeleteAppserverRoleSubResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleSubResponse} message DeleteAppserverRoleSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleSubResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteAppserverRoleSubResponse message, length delimited. Does not implicitly {@link api.v1.server.DeleteAppserverRoleSubResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.IDeleteAppserverRoleSubResponse} message DeleteAppserverRoleSubResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteAppserverRoleSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteAppserverRoleSubResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.server.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleSubResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.server.DeleteAppserverRoleSubResponse();
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
                 * Decodes a DeleteAppserverRoleSubResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.server.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteAppserverRoleSubResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteAppserverRoleSubResponse message.
                 * @function verify
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteAppserverRoleSubResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteAppserverRoleSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.server.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse
                 */
                DeleteAppserverRoleSubResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.server.DeleteAppserverRoleSubResponse)
                        return object;
                    return new $root.api.v1.server.DeleteAppserverRoleSubResponse();
                };

                /**
                 * Creates a plain object from a DeleteAppserverRoleSubResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {api.v1.server.DeleteAppserverRoleSubResponse} message DeleteAppserverRoleSubResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteAppserverRoleSubResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteAppserverRoleSubResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteAppserverRoleSubResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteAppserverRoleSubResponse
                 * @function getTypeUrl
                 * @memberof api.v1.server.DeleteAppserverRoleSubResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteAppserverRoleSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.server.DeleteAppserverRoleSubResponse";
                };

                return DeleteAppserverRoleSubResponse;
            })();

            return server;
        })();

        v1.channel = (function() {

            /**
             * Namespace channel.
             * @memberof api.v1
             * @namespace
             */
            const channel = {};

            channel.ChannelService = (function() {

                /**
                 * Constructs a new ChannelService service.
                 * @memberof api.v1.channel
                 * @classdesc Represents a ChannelService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function ChannelService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (ChannelService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChannelService;

                /**
                 * Creates new ChannelService service using the specified rpc implementation.
                 * @function create
                 * @memberof api.v1.channel.ChannelService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {ChannelService} RPC service. Useful where requests and/or responses are streamed.
                 */
                ChannelService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#createChannel}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef CreateChannelCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.CreateChannelResponse} [response] CreateChannelResponse
                 */

                /**
                 * Calls CreateChannel.
                 * @function createChannel
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.ICreateChannelRequest} request CreateChannelRequest message or plain object
                 * @param {api.v1.channel.ChannelService.CreateChannelCallback} callback Node-style callback called with the error, if any, and CreateChannelResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.createChannel = function createChannel(request, callback) {
                    return this.rpcCall(createChannel, $root.api.v1.channel.CreateChannelRequest, $root.api.v1.channel.CreateChannelResponse, request, callback);
                }, "name", { value: "CreateChannel" });

                /**
                 * Calls CreateChannel.
                 * @function createChannel
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.ICreateChannelRequest} request CreateChannelRequest message or plain object
                 * @returns {Promise<api.v1.channel.CreateChannelResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#getByIdChannel}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef GetByIdChannelCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.GetByIdChannelResponse} [response] GetByIdChannelResponse
                 */

                /**
                 * Calls GetByIdChannel.
                 * @function getByIdChannel
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IGetByIdChannelRequest} request GetByIdChannelRequest message or plain object
                 * @param {api.v1.channel.ChannelService.GetByIdChannelCallback} callback Node-style callback called with the error, if any, and GetByIdChannelResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.getByIdChannel = function getByIdChannel(request, callback) {
                    return this.rpcCall(getByIdChannel, $root.api.v1.channel.GetByIdChannelRequest, $root.api.v1.channel.GetByIdChannelResponse, request, callback);
                }, "name", { value: "GetByIdChannel" });

                /**
                 * Calls GetByIdChannel.
                 * @function getByIdChannel
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IGetByIdChannelRequest} request GetByIdChannelRequest message or plain object
                 * @returns {Promise<api.v1.channel.GetByIdChannelResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#listChannels}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef ListChannelsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.ListChannelsResponse} [response] ListChannelsResponse
                 */

                /**
                 * Calls ListChannels.
                 * @function listChannels
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IListChannelsRequest} request ListChannelsRequest message or plain object
                 * @param {api.v1.channel.ChannelService.ListChannelsCallback} callback Node-style callback called with the error, if any, and ListChannelsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.listChannels = function listChannels(request, callback) {
                    return this.rpcCall(listChannels, $root.api.v1.channel.ListChannelsRequest, $root.api.v1.channel.ListChannelsResponse, request, callback);
                }, "name", { value: "ListChannels" });

                /**
                 * Calls ListChannels.
                 * @function listChannels
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IListChannelsRequest} request ListChannelsRequest message or plain object
                 * @returns {Promise<api.v1.channel.ListChannelsResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#deleteChannel}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef DeleteChannelCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.DeleteChannelResponse} [response] DeleteChannelResponse
                 */

                /**
                 * Calls DeleteChannel.
                 * @function deleteChannel
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IDeleteChannelRequest} request DeleteChannelRequest message or plain object
                 * @param {api.v1.channel.ChannelService.DeleteChannelCallback} callback Node-style callback called with the error, if any, and DeleteChannelResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.deleteChannel = function deleteChannel(request, callback) {
                    return this.rpcCall(deleteChannel, $root.api.v1.channel.DeleteChannelRequest, $root.api.v1.channel.DeleteChannelResponse, request, callback);
                }, "name", { value: "DeleteChannel" });

                /**
                 * Calls DeleteChannel.
                 * @function deleteChannel
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IDeleteChannelRequest} request DeleteChannelRequest message or plain object
                 * @returns {Promise<api.v1.channel.DeleteChannelResponse>} Promise
                 * @variation 2
                 */

                return ChannelService;
            })();

            channel.Channel = (function() {

                /**
                 * Properties of a Channel.
                 * @memberof api.v1.channel
                 * @interface IChannel
                 * @property {string|null} [id] Channel id
                 * @property {string|null} [name] Channel name
                 * @property {string|null} [appserverId] Channel appserverId
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Channel createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] Channel updatedAt
                 */

                /**
                 * Constructs a new Channel.
                 * @memberof api.v1.channel
                 * @classdesc Represents a Channel.
                 * @implements IChannel
                 * @constructor
                 * @param {api.v1.channel.IChannel=} [properties] Properties to set
                 */
                function Channel(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Channel id.
                 * @member {string} id
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.id = "";

                /**
                 * Channel name.
                 * @member {string} name
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.name = "";

                /**
                 * Channel appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.appserverId = "";

                /**
                 * Channel createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.createdAt = null;

                /**
                 * Channel updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.updatedAt = null;

                /**
                 * Creates a new Channel instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {api.v1.channel.IChannel=} [properties] Properties to set
                 * @returns {api.v1.channel.Channel} Channel instance
                 */
                Channel.create = function create(properties) {
                    return new Channel(properties);
                };

                /**
                 * Encodes the specified Channel message. Does not implicitly {@link api.v1.channel.Channel.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {api.v1.channel.IChannel} message Channel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Channel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appserverId);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Channel message, length delimited. Does not implicitly {@link api.v1.channel.Channel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {api.v1.channel.IChannel} message Channel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Channel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Channel message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.Channel} Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Channel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.Channel();
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
                                message.appserverId = reader.string();
                                break;
                            }
                        case 4: {
                                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
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
                 * Decodes a Channel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.Channel} Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Channel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Channel message.
                 * @function verify
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Channel.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
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
                 * Creates a Channel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.Channel} Channel
                 */
                Channel.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.Channel)
                        return object;
                    let message = new $root.api.v1.channel.Channel();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".api.v1.channel.Channel.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".api.v1.channel.Channel.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Channel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {api.v1.channel.Channel} message Channel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Channel.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.appserverId = "";
                        object.createdAt = null;
                        object.updatedAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    return object;
                };

                /**
                 * Converts this Channel to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.Channel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Channel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Channel
                 * @function getTypeUrl
                 * @memberof api.v1.channel.Channel
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Channel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.Channel";
                };

                return Channel;
            })();

            channel.CreateChannelRequest = (function() {

                /**
                 * Properties of a CreateChannelRequest.
                 * @memberof api.v1.channel
                 * @interface ICreateChannelRequest
                 * @property {string|null} [name] CreateChannelRequest name
                 * @property {string|null} [appserverId] CreateChannelRequest appserverId
                 */

                /**
                 * Constructs a new CreateChannelRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a CreateChannelRequest.
                 * @implements ICreateChannelRequest
                 * @constructor
                 * @param {api.v1.channel.ICreateChannelRequest=} [properties] Properties to set
                 */
                function CreateChannelRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateChannelRequest name.
                 * @member {string} name
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @instance
                 */
                CreateChannelRequest.prototype.name = "";

                /**
                 * CreateChannelRequest appserverId.
                 * @member {string} appserverId
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @instance
                 */
                CreateChannelRequest.prototype.appserverId = "";

                /**
                 * Creates a new CreateChannelRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {api.v1.channel.ICreateChannelRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.CreateChannelRequest} CreateChannelRequest instance
                 */
                CreateChannelRequest.create = function create(properties) {
                    return new CreateChannelRequest(properties);
                };

                /**
                 * Encodes the specified CreateChannelRequest message. Does not implicitly {@link api.v1.channel.CreateChannelRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {api.v1.channel.ICreateChannelRequest} message CreateChannelRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateChannelRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserverId);
                    return writer;
                };

                /**
                 * Encodes the specified CreateChannelRequest message, length delimited. Does not implicitly {@link api.v1.channel.CreateChannelRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {api.v1.channel.ICreateChannelRequest} message CreateChannelRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateChannelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateChannelRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.CreateChannelRequest} CreateChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateChannelRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.CreateChannelRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserverId = reader.string();
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
                 * Decodes a CreateChannelRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.CreateChannelRequest} CreateChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateChannelRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateChannelRequest message.
                 * @function verify
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateChannelRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        if (!$util.isString(message.appserverId))
                            return "appserverId: string expected";
                    return null;
                };

                /**
                 * Creates a CreateChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.CreateChannelRequest} CreateChannelRequest
                 */
                CreateChannelRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.CreateChannelRequest)
                        return object;
                    let message = new $root.api.v1.channel.CreateChannelRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.appserverId != null)
                        message.appserverId = String(object.appserverId);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateChannelRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {api.v1.channel.CreateChannelRequest} message CreateChannelRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateChannelRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.appserverId = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = message.appserverId;
                    return object;
                };

                /**
                 * Converts this CreateChannelRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateChannelRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateChannelRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.CreateChannelRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateChannelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.CreateChannelRequest";
                };

                return CreateChannelRequest;
            })();

            channel.GetByIdChannelRequest = (function() {

                /**
                 * Properties of a GetByIdChannelRequest.
                 * @memberof api.v1.channel
                 * @interface IGetByIdChannelRequest
                 * @property {string|null} [id] GetByIdChannelRequest id
                 */

                /**
                 * Constructs a new GetByIdChannelRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a GetByIdChannelRequest.
                 * @implements IGetByIdChannelRequest
                 * @constructor
                 * @param {api.v1.channel.IGetByIdChannelRequest=} [properties] Properties to set
                 */
                function GetByIdChannelRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdChannelRequest id.
                 * @member {string} id
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @instance
                 */
                GetByIdChannelRequest.prototype.id = "";

                /**
                 * Creates a new GetByIdChannelRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {api.v1.channel.IGetByIdChannelRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.GetByIdChannelRequest} GetByIdChannelRequest instance
                 */
                GetByIdChannelRequest.create = function create(properties) {
                    return new GetByIdChannelRequest(properties);
                };

                /**
                 * Encodes the specified GetByIdChannelRequest message. Does not implicitly {@link api.v1.channel.GetByIdChannelRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {api.v1.channel.IGetByIdChannelRequest} message GetByIdChannelRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdChannelRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdChannelRequest message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdChannelRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {api.v1.channel.IGetByIdChannelRequest} message GetByIdChannelRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdChannelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdChannelRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.GetByIdChannelRequest} GetByIdChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdChannelRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.GetByIdChannelRequest();
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
                 * Decodes a GetByIdChannelRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.GetByIdChannelRequest} GetByIdChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdChannelRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdChannelRequest message.
                 * @function verify
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdChannelRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a GetByIdChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.GetByIdChannelRequest} GetByIdChannelRequest
                 */
                GetByIdChannelRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.GetByIdChannelRequest)
                        return object;
                    let message = new $root.api.v1.channel.GetByIdChannelRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdChannelRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {api.v1.channel.GetByIdChannelRequest} message GetByIdChannelRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdChannelRequest.toObject = function toObject(message, options) {
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
                 * Converts this GetByIdChannelRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdChannelRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdChannelRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.GetByIdChannelRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdChannelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.GetByIdChannelRequest";
                };

                return GetByIdChannelRequest;
            })();

            channel.ListChannelsRequest = (function() {

                /**
                 * Properties of a ListChannelsRequest.
                 * @memberof api.v1.channel
                 * @interface IListChannelsRequest
                 * @property {google.protobuf.IStringValue|null} [name] ListChannelsRequest name
                 * @property {google.protobuf.IStringValue|null} [appserverId] ListChannelsRequest appserverId
                 */

                /**
                 * Constructs a new ListChannelsRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a ListChannelsRequest.
                 * @implements IListChannelsRequest
                 * @constructor
                 * @param {api.v1.channel.IListChannelsRequest=} [properties] Properties to set
                 */
                function ListChannelsRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListChannelsRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @instance
                 */
                ListChannelsRequest.prototype.name = null;

                /**
                 * ListChannelsRequest appserverId.
                 * @member {google.protobuf.IStringValue|null|undefined} appserverId
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @instance
                 */
                ListChannelsRequest.prototype.appserverId = null;

                /**
                 * Creates a new ListChannelsRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {api.v1.channel.IListChannelsRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.ListChannelsRequest} ListChannelsRequest instance
                 */
                ListChannelsRequest.create = function create(properties) {
                    return new ListChannelsRequest(properties);
                };

                /**
                 * Encodes the specified ListChannelsRequest message. Does not implicitly {@link api.v1.channel.ListChannelsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {api.v1.channel.IListChannelsRequest} message ListChannelsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListChannelsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.appserverId != null && Object.hasOwnProperty.call(message, "appserverId"))
                        $root.google.protobuf.StringValue.encode(message.appserverId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link api.v1.channel.ListChannelsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {api.v1.channel.IListChannelsRequest} message ListChannelsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListChannelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListChannelsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.ListChannelsRequest} ListChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListChannelsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.ListChannelsRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.appserverId = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
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
                 * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.ListChannelsRequest} ListChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListChannelsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListChannelsRequest message.
                 * @function verify
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListChannelsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        let error = $root.google.protobuf.StringValue.verify(message.name);
                        if (error)
                            return "name." + error;
                    }
                    if (message.appserverId != null && message.hasOwnProperty("appserverId")) {
                        let error = $root.google.protobuf.StringValue.verify(message.appserverId);
                        if (error)
                            return "appserverId." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.ListChannelsRequest} ListChannelsRequest
                 */
                ListChannelsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.ListChannelsRequest)
                        return object;
                    let message = new $root.api.v1.channel.ListChannelsRequest();
                    if (object.name != null) {
                        if (typeof object.name !== "object")
                            throw TypeError(".api.v1.channel.ListChannelsRequest.name: object expected");
                        message.name = $root.google.protobuf.StringValue.fromObject(object.name);
                    }
                    if (object.appserverId != null) {
                        if (typeof object.appserverId !== "object")
                            throw TypeError(".api.v1.channel.ListChannelsRequest.appserverId: object expected");
                        message.appserverId = $root.google.protobuf.StringValue.fromObject(object.appserverId);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {api.v1.channel.ListChannelsRequest} message ListChannelsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListChannelsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = null;
                        object.appserverId = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = $root.google.protobuf.StringValue.toObject(message.name, options);
                    if (message.appserverId != null && message.hasOwnProperty("appserverId"))
                        object.appserverId = $root.google.protobuf.StringValue.toObject(message.appserverId, options);
                    return object;
                };

                /**
                 * Converts this ListChannelsRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListChannelsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListChannelsRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.ListChannelsRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListChannelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.ListChannelsRequest";
                };

                return ListChannelsRequest;
            })();

            channel.DeleteChannelRequest = (function() {

                /**
                 * Properties of a DeleteChannelRequest.
                 * @memberof api.v1.channel
                 * @interface IDeleteChannelRequest
                 * @property {string|null} [id] DeleteChannelRequest id
                 */

                /**
                 * Constructs a new DeleteChannelRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a DeleteChannelRequest.
                 * @implements IDeleteChannelRequest
                 * @constructor
                 * @param {api.v1.channel.IDeleteChannelRequest=} [properties] Properties to set
                 */
                function DeleteChannelRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteChannelRequest id.
                 * @member {string} id
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @instance
                 */
                DeleteChannelRequest.prototype.id = "";

                /**
                 * Creates a new DeleteChannelRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {api.v1.channel.IDeleteChannelRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.DeleteChannelRequest} DeleteChannelRequest instance
                 */
                DeleteChannelRequest.create = function create(properties) {
                    return new DeleteChannelRequest(properties);
                };

                /**
                 * Encodes the specified DeleteChannelRequest message. Does not implicitly {@link api.v1.channel.DeleteChannelRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {api.v1.channel.IDeleteChannelRequest} message DeleteChannelRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteChannelRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteChannelRequest message, length delimited. Does not implicitly {@link api.v1.channel.DeleteChannelRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {api.v1.channel.IDeleteChannelRequest} message DeleteChannelRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteChannelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteChannelRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.DeleteChannelRequest} DeleteChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteChannelRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.DeleteChannelRequest();
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
                 * Decodes a DeleteChannelRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.DeleteChannelRequest} DeleteChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteChannelRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteChannelRequest message.
                 * @function verify
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteChannelRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.DeleteChannelRequest} DeleteChannelRequest
                 */
                DeleteChannelRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.DeleteChannelRequest)
                        return object;
                    let message = new $root.api.v1.channel.DeleteChannelRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteChannelRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {api.v1.channel.DeleteChannelRequest} message DeleteChannelRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteChannelRequest.toObject = function toObject(message, options) {
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
                 * Converts this DeleteChannelRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteChannelRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteChannelRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.DeleteChannelRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteChannelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.DeleteChannelRequest";
                };

                return DeleteChannelRequest;
            })();

            channel.CreateChannelResponse = (function() {

                /**
                 * Properties of a CreateChannelResponse.
                 * @memberof api.v1.channel
                 * @interface ICreateChannelResponse
                 * @property {api.v1.channel.IChannel|null} [channel] CreateChannelResponse channel
                 */

                /**
                 * Constructs a new CreateChannelResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a CreateChannelResponse.
                 * @implements ICreateChannelResponse
                 * @constructor
                 * @param {api.v1.channel.ICreateChannelResponse=} [properties] Properties to set
                 */
                function CreateChannelResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateChannelResponse channel.
                 * @member {api.v1.channel.IChannel|null|undefined} channel
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @instance
                 */
                CreateChannelResponse.prototype.channel = null;

                /**
                 * Creates a new CreateChannelResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {api.v1.channel.ICreateChannelResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.CreateChannelResponse} CreateChannelResponse instance
                 */
                CreateChannelResponse.create = function create(properties) {
                    return new CreateChannelResponse(properties);
                };

                /**
                 * Encodes the specified CreateChannelResponse message. Does not implicitly {@link api.v1.channel.CreateChannelResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {api.v1.channel.ICreateChannelResponse} message CreateChannelResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateChannelResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                        $root.api.v1.channel.Channel.encode(message.channel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateChannelResponse message, length delimited. Does not implicitly {@link api.v1.channel.CreateChannelResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {api.v1.channel.ICreateChannelResponse} message CreateChannelResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateChannelResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateChannelResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.CreateChannelResponse} CreateChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateChannelResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.CreateChannelResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.channel = $root.api.v1.channel.Channel.decode(reader, reader.uint32());
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
                 * Decodes a CreateChannelResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.CreateChannelResponse} CreateChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateChannelResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateChannelResponse message.
                 * @function verify
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateChannelResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.channel != null && message.hasOwnProperty("channel")) {
                        let error = $root.api.v1.channel.Channel.verify(message.channel);
                        if (error)
                            return "channel." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateChannelResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.CreateChannelResponse} CreateChannelResponse
                 */
                CreateChannelResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.CreateChannelResponse)
                        return object;
                    let message = new $root.api.v1.channel.CreateChannelResponse();
                    if (object.channel != null) {
                        if (typeof object.channel !== "object")
                            throw TypeError(".api.v1.channel.CreateChannelResponse.channel: object expected");
                        message.channel = $root.api.v1.channel.Channel.fromObject(object.channel);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateChannelResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {api.v1.channel.CreateChannelResponse} message CreateChannelResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateChannelResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.channel = null;
                    if (message.channel != null && message.hasOwnProperty("channel"))
                        object.channel = $root.api.v1.channel.Channel.toObject(message.channel, options);
                    return object;
                };

                /**
                 * Converts this CreateChannelResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateChannelResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateChannelResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.CreateChannelResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateChannelResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.CreateChannelResponse";
                };

                return CreateChannelResponse;
            })();

            channel.GetByIdChannelResponse = (function() {

                /**
                 * Properties of a GetByIdChannelResponse.
                 * @memberof api.v1.channel
                 * @interface IGetByIdChannelResponse
                 * @property {api.v1.channel.IChannel|null} [channel] GetByIdChannelResponse channel
                 */

                /**
                 * Constructs a new GetByIdChannelResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a GetByIdChannelResponse.
                 * @implements IGetByIdChannelResponse
                 * @constructor
                 * @param {api.v1.channel.IGetByIdChannelResponse=} [properties] Properties to set
                 */
                function GetByIdChannelResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdChannelResponse channel.
                 * @member {api.v1.channel.IChannel|null|undefined} channel
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @instance
                 */
                GetByIdChannelResponse.prototype.channel = null;

                /**
                 * Creates a new GetByIdChannelResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {api.v1.channel.IGetByIdChannelResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.GetByIdChannelResponse} GetByIdChannelResponse instance
                 */
                GetByIdChannelResponse.create = function create(properties) {
                    return new GetByIdChannelResponse(properties);
                };

                /**
                 * Encodes the specified GetByIdChannelResponse message. Does not implicitly {@link api.v1.channel.GetByIdChannelResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {api.v1.channel.IGetByIdChannelResponse} message GetByIdChannelResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdChannelResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                        $root.api.v1.channel.Channel.encode(message.channel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdChannelResponse message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdChannelResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {api.v1.channel.IGetByIdChannelResponse} message GetByIdChannelResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdChannelResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdChannelResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.GetByIdChannelResponse} GetByIdChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdChannelResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.GetByIdChannelResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.channel = $root.api.v1.channel.Channel.decode(reader, reader.uint32());
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
                 * Decodes a GetByIdChannelResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.GetByIdChannelResponse} GetByIdChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdChannelResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdChannelResponse message.
                 * @function verify
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdChannelResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.channel != null && message.hasOwnProperty("channel")) {
                        let error = $root.api.v1.channel.Channel.verify(message.channel);
                        if (error)
                            return "channel." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GetByIdChannelResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.GetByIdChannelResponse} GetByIdChannelResponse
                 */
                GetByIdChannelResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.GetByIdChannelResponse)
                        return object;
                    let message = new $root.api.v1.channel.GetByIdChannelResponse();
                    if (object.channel != null) {
                        if (typeof object.channel !== "object")
                            throw TypeError(".api.v1.channel.GetByIdChannelResponse.channel: object expected");
                        message.channel = $root.api.v1.channel.Channel.fromObject(object.channel);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdChannelResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {api.v1.channel.GetByIdChannelResponse} message GetByIdChannelResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdChannelResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.channel = null;
                    if (message.channel != null && message.hasOwnProperty("channel"))
                        object.channel = $root.api.v1.channel.Channel.toObject(message.channel, options);
                    return object;
                };

                /**
                 * Converts this GetByIdChannelResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdChannelResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdChannelResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.GetByIdChannelResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdChannelResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.GetByIdChannelResponse";
                };

                return GetByIdChannelResponse;
            })();

            channel.ListChannelsResponse = (function() {

                /**
                 * Properties of a ListChannelsResponse.
                 * @memberof api.v1.channel
                 * @interface IListChannelsResponse
                 * @property {Array.<api.v1.channel.IChannel>|null} [channels] ListChannelsResponse channels
                 */

                /**
                 * Constructs a new ListChannelsResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a ListChannelsResponse.
                 * @implements IListChannelsResponse
                 * @constructor
                 * @param {api.v1.channel.IListChannelsResponse=} [properties] Properties to set
                 */
                function ListChannelsResponse(properties) {
                    this.channels = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListChannelsResponse channels.
                 * @member {Array.<api.v1.channel.IChannel>} channels
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @instance
                 */
                ListChannelsResponse.prototype.channels = $util.emptyArray;

                /**
                 * Creates a new ListChannelsResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {api.v1.channel.IListChannelsResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.ListChannelsResponse} ListChannelsResponse instance
                 */
                ListChannelsResponse.create = function create(properties) {
                    return new ListChannelsResponse(properties);
                };

                /**
                 * Encodes the specified ListChannelsResponse message. Does not implicitly {@link api.v1.channel.ListChannelsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {api.v1.channel.IListChannelsResponse} message ListChannelsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListChannelsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channels != null && message.channels.length)
                        for (let i = 0; i < message.channels.length; ++i)
                            $root.api.v1.channel.Channel.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link api.v1.channel.ListChannelsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {api.v1.channel.IListChannelsResponse} message ListChannelsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListChannelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListChannelsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.ListChannelsResponse} ListChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListChannelsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.ListChannelsResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.channels && message.channels.length))
                                    message.channels = [];
                                message.channels.push($root.api.v1.channel.Channel.decode(reader, reader.uint32()));
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
                 * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.ListChannelsResponse} ListChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListChannelsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListChannelsResponse message.
                 * @function verify
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListChannelsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.channels != null && message.hasOwnProperty("channels")) {
                        if (!Array.isArray(message.channels))
                            return "channels: array expected";
                        for (let i = 0; i < message.channels.length; ++i) {
                            let error = $root.api.v1.channel.Channel.verify(message.channels[i]);
                            if (error)
                                return "channels." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.ListChannelsResponse} ListChannelsResponse
                 */
                ListChannelsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.ListChannelsResponse)
                        return object;
                    let message = new $root.api.v1.channel.ListChannelsResponse();
                    if (object.channels) {
                        if (!Array.isArray(object.channels))
                            throw TypeError(".api.v1.channel.ListChannelsResponse.channels: array expected");
                        message.channels = [];
                        for (let i = 0; i < object.channels.length; ++i) {
                            if (typeof object.channels[i] !== "object")
                                throw TypeError(".api.v1.channel.ListChannelsResponse.channels: object expected");
                            message.channels[i] = $root.api.v1.channel.Channel.fromObject(object.channels[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {api.v1.channel.ListChannelsResponse} message ListChannelsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListChannelsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.channels = [];
                    if (message.channels && message.channels.length) {
                        object.channels = [];
                        for (let j = 0; j < message.channels.length; ++j)
                            object.channels[j] = $root.api.v1.channel.Channel.toObject(message.channels[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListChannelsResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListChannelsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListChannelsResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.ListChannelsResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListChannelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.ListChannelsResponse";
                };

                return ListChannelsResponse;
            })();

            channel.DeleteChannelResponse = (function() {

                /**
                 * Properties of a DeleteChannelResponse.
                 * @memberof api.v1.channel
                 * @interface IDeleteChannelResponse
                 */

                /**
                 * Constructs a new DeleteChannelResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a DeleteChannelResponse.
                 * @implements IDeleteChannelResponse
                 * @constructor
                 * @param {api.v1.channel.IDeleteChannelResponse=} [properties] Properties to set
                 */
                function DeleteChannelResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteChannelResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {api.v1.channel.IDeleteChannelResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.DeleteChannelResponse} DeleteChannelResponse instance
                 */
                DeleteChannelResponse.create = function create(properties) {
                    return new DeleteChannelResponse(properties);
                };

                /**
                 * Encodes the specified DeleteChannelResponse message. Does not implicitly {@link api.v1.channel.DeleteChannelResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {api.v1.channel.IDeleteChannelResponse} message DeleteChannelResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteChannelResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteChannelResponse message, length delimited. Does not implicitly {@link api.v1.channel.DeleteChannelResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {api.v1.channel.IDeleteChannelResponse} message DeleteChannelResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteChannelResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteChannelResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.DeleteChannelResponse} DeleteChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteChannelResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.DeleteChannelResponse();
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
                 * Decodes a DeleteChannelResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.DeleteChannelResponse} DeleteChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteChannelResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteChannelResponse message.
                 * @function verify
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteChannelResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteChannelResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.DeleteChannelResponse} DeleteChannelResponse
                 */
                DeleteChannelResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.DeleteChannelResponse)
                        return object;
                    return new $root.api.v1.channel.DeleteChannelResponse();
                };

                /**
                 * Creates a plain object from a DeleteChannelResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {api.v1.channel.DeleteChannelResponse} message DeleteChannelResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteChannelResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteChannelResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteChannelResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteChannelResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.DeleteChannelResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteChannelResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.DeleteChannelResponse";
                };

                return DeleteChannelResponse;
            })();

            return channel;
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
