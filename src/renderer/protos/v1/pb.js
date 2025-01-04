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

        v1.auth = (function() {

            /**
             * Namespace auth.
             * @memberof api.v1
             * @namespace
             */
            const auth = {};

            auth.UpdateJwtToken = (function() {

                /**
                 * Properties of an UpdateJwtToken.
                 * @memberof api.v1.auth
                 * @interface IUpdateJwtToken
                 * @property {string|null} [access] UpdateJwtToken access
                 */

                /**
                 * Constructs a new UpdateJwtToken.
                 * @memberof api.v1.auth
                 * @classdesc Represents an UpdateJwtToken.
                 * @implements IUpdateJwtToken
                 * @constructor
                 * @param {api.v1.auth.IUpdateJwtToken=} [properties] Properties to set
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
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @instance
                 */
                UpdateJwtToken.prototype.access = "";

                /**
                 * Creates a new UpdateJwtToken instance using the specified properties.
                 * @function create
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {api.v1.auth.IUpdateJwtToken=} [properties] Properties to set
                 * @returns {api.v1.auth.UpdateJwtToken} UpdateJwtToken instance
                 */
                UpdateJwtToken.create = function create(properties) {
                    return new UpdateJwtToken(properties);
                };

                /**
                 * Encodes the specified UpdateJwtToken message. Does not implicitly {@link api.v1.auth.UpdateJwtToken.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {api.v1.auth.IUpdateJwtToken} message UpdateJwtToken message or plain object to encode
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
                 * Encodes the specified UpdateJwtToken message, length delimited. Does not implicitly {@link api.v1.auth.UpdateJwtToken.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {api.v1.auth.IUpdateJwtToken} message UpdateJwtToken message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UpdateJwtToken.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.auth.UpdateJwtToken} UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UpdateJwtToken.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.auth.UpdateJwtToken();
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
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.auth.UpdateJwtToken} UpdateJwtToken
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
                 * @memberof api.v1.auth.UpdateJwtToken
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
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.auth.UpdateJwtToken} UpdateJwtToken
                 */
                UpdateJwtToken.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.auth.UpdateJwtToken)
                        return object;
                    let message = new $root.api.v1.auth.UpdateJwtToken();
                    if (object.access != null)
                        message.access = String(object.access);
                    return message;
                };

                /**
                 * Creates a plain object from an UpdateJwtToken message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {api.v1.auth.UpdateJwtToken} message UpdateJwtToken
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
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UpdateJwtToken.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UpdateJwtToken
                 * @function getTypeUrl
                 * @memberof api.v1.auth.UpdateJwtToken
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UpdateJwtToken.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.auth.UpdateJwtToken";
                };

                return UpdateJwtToken;
            })();

            return auth;
        })();

        v1.shared = (function() {

            /**
             * Namespace shared.
             * @memberof api.v1
             * @namespace
             */
            const shared = {};

            /**
             * ActionType enum.
             * @name api.v1.shared.ActionType
             * @enum {number}
             * @property {number} GET=0 GET value
             * @property {number} LIST=1 LIST value
             * @property {number} CREATE=2 CREATE value
             * @property {number} UPDATE=3 UPDATE value
             * @property {number} DELETE=4 DELETE value
             * @property {number} NOTIFICATION=5 NOTIFICATION value
             */
            shared.ActionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "GET"] = 0;
                values[valuesById[1] = "LIST"] = 1;
                values[valuesById[2] = "CREATE"] = 2;
                values[valuesById[3] = "UPDATE"] = 3;
                values[valuesById[4] = "DELETE"] = 4;
                values[valuesById[5] = "NOTIFICATION"] = 5;
                return values;
            })();

            shared.Meta = (function() {

                /**
                 * Properties of a Meta.
                 * @memberof api.v1.shared
                 * @interface IMeta
                 * @property {api.v1.shared.ActionType|null} [action] Meta action
                 */

                /**
                 * Constructs a new Meta.
                 * @memberof api.v1.shared
                 * @classdesc Represents a Meta.
                 * @implements IMeta
                 * @constructor
                 * @param {api.v1.shared.IMeta=} [properties] Properties to set
                 */
                function Meta(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Meta action.
                 * @member {api.v1.shared.ActionType} action
                 * @memberof api.v1.shared.Meta
                 * @instance
                 */
                Meta.prototype.action = 0;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @function create
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {api.v1.shared.IMeta=} [properties] Properties to set
                 * @returns {api.v1.shared.Meta} Meta instance
                 */
                Meta.create = function create(properties) {
                    return new Meta(properties);
                };

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link api.v1.shared.Meta.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {api.v1.shared.IMeta} message Meta message or plain object to encode
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
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link api.v1.shared.Meta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {api.v1.shared.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.shared.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.shared.Meta();
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
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.shared.Meta} Meta
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
                 * @memberof api.v1.shared.Meta
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
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.shared.Meta} Meta
                 */
                Meta.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.shared.Meta)
                        return object;
                    let message = new $root.api.v1.shared.Meta();
                    switch (object.action) {
                    default:
                        if (typeof object.action === "number") {
                            message.action = object.action;
                            break;
                        }
                        break;
                    case "GET":
                    case 0:
                        message.action = 0;
                        break;
                    case "LIST":
                    case 1:
                        message.action = 1;
                        break;
                    case "CREATE":
                    case 2:
                        message.action = 2;
                        break;
                    case "UPDATE":
                    case 3:
                        message.action = 3;
                        break;
                    case "DELETE":
                    case 4:
                        message.action = 4;
                        break;
                    case "NOTIFICATION":
                    case 5:
                        message.action = 5;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {api.v1.shared.Meta} message Meta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Meta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.action = options.enums === String ? "GET" : 0;
                    if (message.action != null && message.hasOwnProperty("action"))
                        object.action = options.enums === String ? $root.api.v1.shared.ActionType[message.action] === undefined ? message.action : $root.api.v1.shared.ActionType[message.action] : message.action;
                    return object;
                };

                /**
                 * Converts this Meta to JSON.
                 * @function toJSON
                 * @memberof api.v1.shared.Meta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Meta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Meta
                 * @function getTypeUrl
                 * @memberof api.v1.shared.Meta
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Meta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.shared.Meta";
                };

                return Meta;
            })();

            shared.Output = (function() {

                /**
                 * Properties of an Output.
                 * @memberof api.v1.shared
                 * @interface IOutput
                 */

                /**
                 * Constructs a new Output.
                 * @memberof api.v1.shared
                 * @classdesc Represents an Output.
                 * @implements IOutput
                 * @constructor
                 * @param {api.v1.shared.IOutput=} [properties] Properties to set
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
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {api.v1.shared.IOutput=} [properties] Properties to set
                 * @returns {api.v1.shared.Output} Output instance
                 */
                Output.create = function create(properties) {
                    return new Output(properties);
                };

                /**
                 * Encodes the specified Output message. Does not implicitly {@link api.v1.shared.Output.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {api.v1.shared.IOutput} message Output message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Output.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Output message, length delimited. Does not implicitly {@link api.v1.shared.Output.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {api.v1.shared.IOutput} message Output message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Output.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.shared.Output} Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Output.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.shared.Output();
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
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.shared.Output} Output
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
                 * @memberof api.v1.shared.Output
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
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.shared.Output} Output
                 */
                Output.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.shared.Output)
                        return object;
                    return new $root.api.v1.shared.Output();
                };

                /**
                 * Creates a plain object from an Output message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {api.v1.shared.Output} message Output
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Output.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Output to JSON.
                 * @function toJSON
                 * @memberof api.v1.shared.Output
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Output.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Output
                 * @function getTypeUrl
                 * @memberof api.v1.shared.Output
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.shared.Output";
                };

                return Output;
            })();

            shared.Input = (function() {

                /**
                 * Properties of an Input.
                 * @memberof api.v1.shared
                 * @interface IInput
                 * @property {api.v1.auth.IUpdateJwtToken|null} [updateJwtToken] Input updateJwtToken
                 */

                /**
                 * Constructs a new Input.
                 * @memberof api.v1.shared
                 * @classdesc Represents an Input.
                 * @implements IInput
                 * @constructor
                 * @param {api.v1.shared.IInput=} [properties] Properties to set
                 */
                function Input(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Input updateJwtToken.
                 * @member {api.v1.auth.IUpdateJwtToken|null|undefined} updateJwtToken
                 * @memberof api.v1.shared.Input
                 * @instance
                 */
                Input.prototype.updateJwtToken = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Input data.
                 * @member {"updateJwtToken"|undefined} data
                 * @memberof api.v1.shared.Input
                 * @instance
                 */
                Object.defineProperty(Input.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["updateJwtToken"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Input instance using the specified properties.
                 * @function create
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {api.v1.shared.IInput=} [properties] Properties to set
                 * @returns {api.v1.shared.Input} Input instance
                 */
                Input.create = function create(properties) {
                    return new Input(properties);
                };

                /**
                 * Encodes the specified Input message. Does not implicitly {@link api.v1.shared.Input.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {api.v1.shared.IInput} message Input message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Input.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.updateJwtToken != null && Object.hasOwnProperty.call(message, "updateJwtToken"))
                        $root.api.v1.auth.UpdateJwtToken.encode(message.updateJwtToken, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Input message, length delimited. Does not implicitly {@link api.v1.shared.Input.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {api.v1.shared.IInput} message Input message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Input.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.shared.Input} Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Input.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.shared.Input();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.updateJwtToken = $root.api.v1.auth.UpdateJwtToken.decode(reader, reader.uint32());
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
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.shared.Input} Input
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
                 * @memberof api.v1.shared.Input
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
                            let error = $root.api.v1.auth.UpdateJwtToken.verify(message.updateJwtToken);
                            if (error)
                                return "updateJwtToken." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an Input message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.shared.Input} Input
                 */
                Input.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.shared.Input)
                        return object;
                    let message = new $root.api.v1.shared.Input();
                    if (object.updateJwtToken != null) {
                        if (typeof object.updateJwtToken !== "object")
                            throw TypeError(".api.v1.shared.Input.updateJwtToken: object expected");
                        message.updateJwtToken = $root.api.v1.auth.UpdateJwtToken.fromObject(object.updateJwtToken);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Input message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {api.v1.shared.Input} message Input
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Input.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.updateJwtToken != null && message.hasOwnProperty("updateJwtToken")) {
                        object.updateJwtToken = $root.api.v1.auth.UpdateJwtToken.toObject(message.updateJwtToken, options);
                        if (options.oneofs)
                            object.data = "updateJwtToken";
                    }
                    return object;
                };

                /**
                 * Converts this Input to JSON.
                 * @function toJSON
                 * @memberof api.v1.shared.Input
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Input.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Input
                 * @function getTypeUrl
                 * @memberof api.v1.shared.Input
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.shared.Input";
                };

                return Input;
            })();

            shared.IOMessage = (function() {

                /**
                 * Properties of a IOMessage.
                 * @memberof api.v1.shared
                 * @interface IIOMessage
                 * @property {api.v1.shared.IMeta|null} [meta] IOMessage meta
                 * @property {api.v1.shared.IInput|null} [input] IOMessage input
                 * @property {api.v1.shared.IOutput|null} [output] IOMessage output
                 */

                /**
                 * Constructs a new IOMessage.
                 * @memberof api.v1.shared
                 * @classdesc Represents a IOMessage.
                 * @implements IIOMessage
                 * @constructor
                 * @param {api.v1.shared.IIOMessage=} [properties] Properties to set
                 */
                function IOMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * IOMessage meta.
                 * @member {api.v1.shared.IMeta|null|undefined} meta
                 * @memberof api.v1.shared.IOMessage
                 * @instance
                 */
                IOMessage.prototype.meta = null;

                /**
                 * IOMessage input.
                 * @member {api.v1.shared.IInput|null|undefined} input
                 * @memberof api.v1.shared.IOMessage
                 * @instance
                 */
                IOMessage.prototype.input = null;

                /**
                 * IOMessage output.
                 * @member {api.v1.shared.IOutput|null|undefined} output
                 * @memberof api.v1.shared.IOMessage
                 * @instance
                 */
                IOMessage.prototype.output = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * IOMessage data.
                 * @member {"input"|"output"|undefined} data
                 * @memberof api.v1.shared.IOMessage
                 * @instance
                 */
                Object.defineProperty(IOMessage.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["input", "output"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new IOMessage instance using the specified properties.
                 * @function create
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {api.v1.shared.IIOMessage=} [properties] Properties to set
                 * @returns {api.v1.shared.IOMessage} IOMessage instance
                 */
                IOMessage.create = function create(properties) {
                    return new IOMessage(properties);
                };

                /**
                 * Encodes the specified IOMessage message. Does not implicitly {@link api.v1.shared.IOMessage.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {api.v1.shared.IIOMessage} message IOMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IOMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                        $root.api.v1.shared.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                        $root.api.v1.shared.Input.encode(message.input, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                        $root.api.v1.shared.Output.encode(message.output, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified IOMessage message, length delimited. Does not implicitly {@link api.v1.shared.IOMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {api.v1.shared.IIOMessage} message IOMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                IOMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a IOMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.shared.IOMessage} IOMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IOMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.shared.IOMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.meta = $root.api.v1.shared.Meta.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.input = $root.api.v1.shared.Input.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.output = $root.api.v1.shared.Output.decode(reader, reader.uint32());
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
                 * Decodes a IOMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.shared.IOMessage} IOMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                IOMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a IOMessage message.
                 * @function verify
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                IOMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        let error = $root.api.v1.shared.Meta.verify(message.meta);
                        if (error)
                            return "meta." + error;
                    }
                    if (message.input != null && message.hasOwnProperty("input")) {
                        properties.data = 1;
                        {
                            let error = $root.api.v1.shared.Input.verify(message.input);
                            if (error)
                                return "input." + error;
                        }
                    }
                    if (message.output != null && message.hasOwnProperty("output")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.shared.Output.verify(message.output);
                            if (error)
                                return "output." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a IOMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.shared.IOMessage} IOMessage
                 */
                IOMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.shared.IOMessage)
                        return object;
                    let message = new $root.api.v1.shared.IOMessage();
                    if (object.meta != null) {
                        if (typeof object.meta !== "object")
                            throw TypeError(".api.v1.shared.IOMessage.meta: object expected");
                        message.meta = $root.api.v1.shared.Meta.fromObject(object.meta);
                    }
                    if (object.input != null) {
                        if (typeof object.input !== "object")
                            throw TypeError(".api.v1.shared.IOMessage.input: object expected");
                        message.input = $root.api.v1.shared.Input.fromObject(object.input);
                    }
                    if (object.output != null) {
                        if (typeof object.output !== "object")
                            throw TypeError(".api.v1.shared.IOMessage.output: object expected");
                        message.output = $root.api.v1.shared.Output.fromObject(object.output);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a IOMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {api.v1.shared.IOMessage} message IOMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                IOMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.meta = null;
                    if (message.meta != null && message.hasOwnProperty("meta"))
                        object.meta = $root.api.v1.shared.Meta.toObject(message.meta, options);
                    if (message.input != null && message.hasOwnProperty("input")) {
                        object.input = $root.api.v1.shared.Input.toObject(message.input, options);
                        if (options.oneofs)
                            object.data = "input";
                    }
                    if (message.output != null && message.hasOwnProperty("output")) {
                        object.output = $root.api.v1.shared.Output.toObject(message.output, options);
                        if (options.oneofs)
                            object.data = "output";
                    }
                    return object;
                };

                /**
                 * Converts this IOMessage to JSON.
                 * @function toJSON
                 * @memberof api.v1.shared.IOMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                IOMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for IOMessage
                 * @function getTypeUrl
                 * @memberof api.v1.shared.IOMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                IOMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.shared.IOMessage";
                };

                return IOMessage;
            })();

            return shared;
        })();

        return v1;
    })();

    return api;
})();

export { $root as default };
