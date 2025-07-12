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

        v1.appuser = (function() {

            /**
             * Namespace appuser.
             * @memberof api.v1
             * @namespace
             */
            const appuser = {};

            appuser.AppuserService = (function() {

                /**
                 * Constructs a new AppuserService service.
                 * @memberof api.v1.appuser
                 * @classdesc Represents an AppuserService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function AppuserService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AppuserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AppuserService;

                /**
                 * Creates new AppuserService service using the specified rpc implementation.
                 * @function create
                 * @memberof api.v1.appuser.AppuserService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {AppuserService} RPC service. Useful where requests and/or responses are streamed.
                 */
                AppuserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link api.v1.appuser.AppuserService#create}.
                 * @memberof api.v1.appuser.AppuserService
                 * @typedef CreateCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appuser.CreateResponse} [response] CreateResponse
                 */

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.appuser.AppuserService
                 * @instance
                 * @param {api.v1.appuser.ICreateRequest} request CreateRequest message or plain object
                 * @param {api.v1.appuser.AppuserService.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppuserService.prototype.create = function create(request, callback) {
                    return this.rpcCall(create, $root.api.v1.appuser.CreateRequest, $root.api.v1.appuser.CreateResponse, request, callback);
                }, "name", { value: "Create" });

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.appuser.AppuserService
                 * @instance
                 * @param {api.v1.appuser.ICreateRequest} request CreateRequest message or plain object
                 * @returns {Promise<api.v1.appuser.CreateResponse>} Promise
                 * @variation 2
                 */

                return AppuserService;
            })();

            /**
             * AppUserStatus enum.
             * @name api.v1.appuser.AppUserStatus
             * @enum {number}
             * @property {number} APP_USER_STATUS_UNSPECIFIED=0 APP_USER_STATUS_UNSPECIFIED value
             * @property {number} APP_USER_STATUS_INACTIVE=1 APP_USER_STATUS_INACTIVE value
             * @property {number} APP_USER_STATUS_ONLINE=2 APP_USER_STATUS_ONLINE value
             * @property {number} APP_USER_STATUS_OFFLINE=3 APP_USER_STATUS_OFFLINE value
             * @property {number} APP_USER_STATUS_AWAY=4 APP_USER_STATUS_AWAY value
             */
            appuser.AppUserStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "APP_USER_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "APP_USER_STATUS_INACTIVE"] = 1;
                values[valuesById[2] = "APP_USER_STATUS_ONLINE"] = 2;
                values[valuesById[3] = "APP_USER_STATUS_OFFLINE"] = 3;
                values[valuesById[4] = "APP_USER_STATUS_AWAY"] = 4;
                return values;
            })();

            appuser.Appuser = (function() {

                /**
                 * Properties of an Appuser.
                 * @memberof api.v1.appuser
                 * @interface IAppuser
                 * @property {string|null} [id] Appuser id
                 * @property {string|null} [username] Appuser username
                 * @property {api.v1.appuser.AppUserStatus|null} [online_status] Appuser online_status
                 * @property {google.protobuf.ITimestamp|null} [created_at] Appuser created_at
                 * @property {google.protobuf.ITimestamp|null} [updated_at] Appuser updated_at
                 */

                /**
                 * Constructs a new Appuser.
                 * @memberof api.v1.appuser
                 * @classdesc Represents an Appuser.
                 * @implements IAppuser
                 * @constructor
                 * @param {api.v1.appuser.IAppuser=} [properties] Properties to set
                 */
                function Appuser(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Appuser id.
                 * @member {string} id
                 * @memberof api.v1.appuser.Appuser
                 * @instance
                 */
                Appuser.prototype.id = "";

                /**
                 * Appuser username.
                 * @member {string} username
                 * @memberof api.v1.appuser.Appuser
                 * @instance
                 */
                Appuser.prototype.username = "";

                /**
                 * Appuser online_status.
                 * @member {api.v1.appuser.AppUserStatus} online_status
                 * @memberof api.v1.appuser.Appuser
                 * @instance
                 */
                Appuser.prototype.online_status = 0;

                /**
                 * Appuser created_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} created_at
                 * @memberof api.v1.appuser.Appuser
                 * @instance
                 */
                Appuser.prototype.created_at = null;

                /**
                 * Appuser updated_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} updated_at
                 * @memberof api.v1.appuser.Appuser
                 * @instance
                 */
                Appuser.prototype.updated_at = null;

                /**
                 * Creates a new Appuser instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {api.v1.appuser.IAppuser=} [properties] Properties to set
                 * @returns {api.v1.appuser.Appuser} Appuser instance
                 */
                Appuser.create = function create(properties) {
                    return new Appuser(properties);
                };

                /**
                 * Encodes the specified Appuser message. Does not implicitly {@link api.v1.appuser.Appuser.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {api.v1.appuser.IAppuser} message Appuser message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Appuser.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    if (message.online_status != null && Object.hasOwnProperty.call(message, "online_status"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.online_status);
                    if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                        $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                        $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Appuser message, length delimited. Does not implicitly {@link api.v1.appuser.Appuser.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {api.v1.appuser.IAppuser} message Appuser message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Appuser.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Appuser message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appuser.Appuser} Appuser
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Appuser.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appuser.Appuser();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.username = reader.string();
                                break;
                            }
                        case 3: {
                                message.online_status = reader.int32();
                                break;
                            }
                        case 4: {
                                message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                 * Decodes an Appuser message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appuser.Appuser} Appuser
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Appuser.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Appuser message.
                 * @function verify
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Appuser.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.online_status != null && message.hasOwnProperty("online_status"))
                        switch (message.online_status) {
                        default:
                            return "online_status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.created_at != null && message.hasOwnProperty("created_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                        if (error)
                            return "created_at." + error;
                    }
                    if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                        if (error)
                            return "updated_at." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Appuser message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appuser.Appuser} Appuser
                 */
                Appuser.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appuser.Appuser)
                        return object;
                    let message = new $root.api.v1.appuser.Appuser();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.username != null)
                        message.username = String(object.username);
                    switch (object.online_status) {
                    default:
                        if (typeof object.online_status === "number") {
                            message.online_status = object.online_status;
                            break;
                        }
                        break;
                    case "APP_USER_STATUS_UNSPECIFIED":
                    case 0:
                        message.online_status = 0;
                        break;
                    case "APP_USER_STATUS_INACTIVE":
                    case 1:
                        message.online_status = 1;
                        break;
                    case "APP_USER_STATUS_ONLINE":
                    case 2:
                        message.online_status = 2;
                        break;
                    case "APP_USER_STATUS_OFFLINE":
                    case 3:
                        message.online_status = 3;
                        break;
                    case "APP_USER_STATUS_AWAY":
                    case 4:
                        message.online_status = 4;
                        break;
                    }
                    if (object.created_at != null) {
                        if (typeof object.created_at !== "object")
                            throw TypeError(".api.v1.appuser.Appuser.created_at: object expected");
                        message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
                    }
                    if (object.updated_at != null) {
                        if (typeof object.updated_at !== "object")
                            throw TypeError(".api.v1.appuser.Appuser.updated_at: object expected");
                        message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Appuser message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {api.v1.appuser.Appuser} message Appuser
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Appuser.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.username = "";
                        object.online_status = options.enums === String ? "APP_USER_STATUS_UNSPECIFIED" : 0;
                        object.created_at = null;
                        object.updated_at = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.online_status != null && message.hasOwnProperty("online_status"))
                        object.online_status = options.enums === String ? $root.api.v1.appuser.AppUserStatus[message.online_status] === undefined ? message.online_status : $root.api.v1.appuser.AppUserStatus[message.online_status] : message.online_status;
                    if (message.created_at != null && message.hasOwnProperty("created_at"))
                        object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
                    if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                        object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
                    return object;
                };

                /**
                 * Converts this Appuser to JSON.
                 * @function toJSON
                 * @memberof api.v1.appuser.Appuser
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Appuser.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Appuser
                 * @function getTypeUrl
                 * @memberof api.v1.appuser.Appuser
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Appuser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appuser.Appuser";
                };

                return Appuser;
            })();

            appuser.CreateRequest = (function() {

                /**
                 * Properties of a CreateRequest.
                 * @memberof api.v1.appuser
                 * @interface ICreateRequest
                 * @property {string|null} [id] CreateRequest id
                 * @property {string|null} [username] CreateRequest username
                 */

                /**
                 * Constructs a new CreateRequest.
                 * @memberof api.v1.appuser
                 * @classdesc Represents a CreateRequest.
                 * @implements ICreateRequest
                 * @constructor
                 * @param {api.v1.appuser.ICreateRequest=} [properties] Properties to set
                 */
                function CreateRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateRequest id.
                 * @member {string} id
                 * @memberof api.v1.appuser.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.id = "";

                /**
                 * CreateRequest username.
                 * @member {string} username
                 * @memberof api.v1.appuser.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.username = "";

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {api.v1.appuser.ICreateRequest=} [properties] Properties to set
                 * @returns {api.v1.appuser.CreateRequest} CreateRequest instance
                 */
                CreateRequest.create = function create(properties) {
                    return new CreateRequest(properties);
                };

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.appuser.CreateRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {api.v1.appuser.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    return writer;
                };

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.appuser.CreateRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {api.v1.appuser.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appuser.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appuser.CreateRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.username = reader.string();
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
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appuser.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateRequest message.
                 * @function verify
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    return null;
                };

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appuser.CreateRequest} CreateRequest
                 */
                CreateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appuser.CreateRequest)
                        return object;
                    let message = new $root.api.v1.appuser.CreateRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.username != null)
                        message.username = String(object.username);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {api.v1.appuser.CreateRequest} message CreateRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.username = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    return object;
                };

                /**
                 * Converts this CreateRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appuser.CreateRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appuser.CreateRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appuser.CreateRequest";
                };

                return CreateRequest;
            })();

            appuser.CreateResponse = (function() {

                /**
                 * Properties of a CreateResponse.
                 * @memberof api.v1.appuser
                 * @interface ICreateResponse
                 */

                /**
                 * Constructs a new CreateResponse.
                 * @memberof api.v1.appuser
                 * @classdesc Represents a CreateResponse.
                 * @implements ICreateResponse
                 * @constructor
                 * @param {api.v1.appuser.ICreateResponse=} [properties] Properties to set
                 */
                function CreateResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {api.v1.appuser.ICreateResponse=} [properties] Properties to set
                 * @returns {api.v1.appuser.CreateResponse} CreateResponse instance
                 */
                CreateResponse.create = function create(properties) {
                    return new CreateResponse(properties);
                };

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.appuser.CreateResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {api.v1.appuser.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.appuser.CreateResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {api.v1.appuser.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appuser.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appuser.CreateResponse();
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
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appuser.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateResponse message.
                 * @function verify
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appuser.CreateResponse} CreateResponse
                 */
                CreateResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appuser.CreateResponse)
                        return object;
                    return new $root.api.v1.appuser.CreateResponse();
                };

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {api.v1.appuser.CreateResponse} message CreateResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this CreateResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appuser.CreateResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appuser.CreateResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appuser.CreateResponse";
                };

                return CreateResponse;
            })();

            return appuser;
        })();

        v1.event = (function() {

            /**
             * Namespace event.
             * @memberof api.v1
             * @namespace
             */
            const event = {};

            event.Meta = (function() {

                /**
                 * Properties of a Meta.
                 * @memberof api.v1.event
                 * @interface IMeta
                 * @property {api.v1.event.ActionType|null} [action] Meta action
                 * @property {Array.<api.v1.appuser.IAppuser>|null} [appusers] Meta appusers
                 */

                /**
                 * Constructs a new Meta.
                 * @memberof api.v1.event
                 * @classdesc Represents a Meta.
                 * @implements IMeta
                 * @constructor
                 * @param {api.v1.event.IMeta=} [properties] Properties to set
                 */
                function Meta(properties) {
                    this.appusers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Meta action.
                 * @member {api.v1.event.ActionType} action
                 * @memberof api.v1.event.Meta
                 * @instance
                 */
                Meta.prototype.action = 0;

                /**
                 * Meta appusers.
                 * @member {Array.<api.v1.appuser.IAppuser>} appusers
                 * @memberof api.v1.event.Meta
                 * @instance
                 */
                Meta.prototype.appusers = $util.emptyArray;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {api.v1.event.IMeta=} [properties] Properties to set
                 * @returns {api.v1.event.Meta} Meta instance
                 */
                Meta.create = function create(properties) {
                    return new Meta(properties);
                };

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link api.v1.event.Meta.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {api.v1.event.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
                    if (message.appusers != null && message.appusers.length)
                        for (let i = 0; i < message.appusers.length; ++i)
                            $root.api.v1.appuser.Appuser.encode(message.appusers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link api.v1.event.Meta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {api.v1.event.IMeta} message Meta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Meta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.Meta} Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Meta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.Meta();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.action = reader.int32();
                                break;
                            }
                        case 2: {
                                if (!(message.appusers && message.appusers.length))
                                    message.appusers = [];
                                message.appusers.push($root.api.v1.appuser.Appuser.decode(reader, reader.uint32()));
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
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.Meta} Meta
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
                 * @memberof api.v1.event.Meta
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
                        case 100:
                        case 101:
                        case 102:
                        case 300:
                        case 301:
                        case 302:
                            break;
                        }
                    if (message.appusers != null && message.hasOwnProperty("appusers")) {
                        if (!Array.isArray(message.appusers))
                            return "appusers: array expected";
                        for (let i = 0; i < message.appusers.length; ++i) {
                            let error = $root.api.v1.appuser.Appuser.verify(message.appusers[i]);
                            if (error)
                                return "appusers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.Meta} Meta
                 */
                Meta.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.Meta)
                        return object;
                    let message = new $root.api.v1.event.Meta();
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
                    case "ACTION_LIST_SERVERS":
                    case 1:
                        message.action = 1;
                        break;
                    case "ACTION_LIST_CHANNELS":
                    case 2:
                        message.action = 2;
                        break;
                    case "ACTION_LIST_ROLES":
                    case 3:
                        message.action = 3;
                        break;
                    case "ACTION_ADD_SERVER":
                    case 100:
                        message.action = 100;
                        break;
                    case "ACTION_ADD_CHANNEL":
                    case 101:
                        message.action = 101;
                        break;
                    case "ACTION_ADD_ROLE":
                    case 102:
                        message.action = 102;
                        break;
                    case "ACTION_REMOVE_SERVER":
                    case 300:
                        message.action = 300;
                        break;
                    case "ACTION_REMOVE_CHANNEL":
                    case 301:
                        message.action = 301;
                        break;
                    case "ACTION_REMOVE_ROLE":
                    case 302:
                        message.action = 302;
                        break;
                    }
                    if (object.appusers) {
                        if (!Array.isArray(object.appusers))
                            throw TypeError(".api.v1.event.Meta.appusers: array expected");
                        message.appusers = [];
                        for (let i = 0; i < object.appusers.length; ++i) {
                            if (typeof object.appusers[i] !== "object")
                                throw TypeError(".api.v1.event.Meta.appusers: object expected");
                            message.appusers[i] = $root.api.v1.appuser.Appuser.fromObject(object.appusers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {api.v1.event.Meta} message Meta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Meta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appusers = [];
                    if (options.defaults)
                        object.action = options.enums === String ? "ACTION_TYPE_UNSPECIFIED" : 0;
                    if (message.action != null && message.hasOwnProperty("action"))
                        object.action = options.enums === String ? $root.api.v1.event.ActionType[message.action] === undefined ? message.action : $root.api.v1.event.ActionType[message.action] : message.action;
                    if (message.appusers && message.appusers.length) {
                        object.appusers = [];
                        for (let j = 0; j < message.appusers.length; ++j)
                            object.appusers[j] = $root.api.v1.appuser.Appuser.toObject(message.appusers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Meta to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.Meta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Meta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Meta
                 * @function getTypeUrl
                 * @memberof api.v1.event.Meta
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Meta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.Meta";
                };

                return Meta;
            })();

            event.Event = (function() {

                /**
                 * Properties of an Event.
                 * @memberof api.v1.event
                 * @interface IEvent
                 * @property {api.v1.event.IMeta|null} [meta] Event meta
                 * @property {api.v1.event.IListServers|null} [list_servers] Event list_servers
                 * @property {api.v1.event.IListChannels|null} [list_channels] Event list_channels
                 * @property {api.v1.event.IListRoles|null} [list_roles] Event list_roles
                 * @property {api.v1.event.IAddServer|null} [add_server] Event add_server
                 * @property {api.v1.event.IAddChannel|null} [add_channel] Event add_channel
                 * @property {api.v1.event.IAddRole|null} [add_role] Event add_role
                 * @property {api.v1.event.IRemoveServer|null} [remove_server] Event remove_server
                 * @property {api.v1.event.IRemoveChannel|null} [remove_channel] Event remove_channel
                 * @property {api.v1.event.IRemoveRole|null} [remove_role] Event remove_role
                 */

                /**
                 * Constructs a new Event.
                 * @memberof api.v1.event
                 * @classdesc Represents an Event.
                 * @implements IEvent
                 * @constructor
                 * @param {api.v1.event.IEvent=} [properties] Properties to set
                 */
                function Event(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Event meta.
                 * @member {api.v1.event.IMeta|null|undefined} meta
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.meta = null;

                /**
                 * Event list_servers.
                 * @member {api.v1.event.IListServers|null|undefined} list_servers
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.list_servers = null;

                /**
                 * Event list_channels.
                 * @member {api.v1.event.IListChannels|null|undefined} list_channels
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.list_channels = null;

                /**
                 * Event list_roles.
                 * @member {api.v1.event.IListRoles|null|undefined} list_roles
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.list_roles = null;

                /**
                 * Event add_server.
                 * @member {api.v1.event.IAddServer|null|undefined} add_server
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.add_server = null;

                /**
                 * Event add_channel.
                 * @member {api.v1.event.IAddChannel|null|undefined} add_channel
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.add_channel = null;

                /**
                 * Event add_role.
                 * @member {api.v1.event.IAddRole|null|undefined} add_role
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.add_role = null;

                /**
                 * Event remove_server.
                 * @member {api.v1.event.IRemoveServer|null|undefined} remove_server
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.remove_server = null;

                /**
                 * Event remove_channel.
                 * @member {api.v1.event.IRemoveChannel|null|undefined} remove_channel
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.remove_channel = null;

                /**
                 * Event remove_role.
                 * @member {api.v1.event.IRemoveRole|null|undefined} remove_role
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Event.prototype.remove_role = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Event data.
                 * @member {"list_servers"|"list_channels"|"list_roles"|"add_server"|"add_channel"|"add_role"|"remove_server"|"remove_channel"|"remove_role"|undefined} data
                 * @memberof api.v1.event.Event
                 * @instance
                 */
                Object.defineProperty(Event.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["list_servers", "list_channels", "list_roles", "add_server", "add_channel", "add_role", "remove_server", "remove_channel", "remove_role"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Event instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {api.v1.event.IEvent=} [properties] Properties to set
                 * @returns {api.v1.event.Event} Event instance
                 */
                Event.create = function create(properties) {
                    return new Event(properties);
                };

                /**
                 * Encodes the specified Event message. Does not implicitly {@link api.v1.event.Event.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {api.v1.event.IEvent} message Event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Event.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                        $root.api.v1.event.Meta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.list_servers != null && Object.hasOwnProperty.call(message, "list_servers"))
                        $root.api.v1.event.ListServers.encode(message.list_servers, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.list_channels != null && Object.hasOwnProperty.call(message, "list_channels"))
                        $root.api.v1.event.ListChannels.encode(message.list_channels, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.list_roles != null && Object.hasOwnProperty.call(message, "list_roles"))
                        $root.api.v1.event.ListRoles.encode(message.list_roles, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.add_server != null && Object.hasOwnProperty.call(message, "add_server"))
                        $root.api.v1.event.AddServer.encode(message.add_server, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                    if (message.add_channel != null && Object.hasOwnProperty.call(message, "add_channel"))
                        $root.api.v1.event.AddChannel.encode(message.add_channel, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
                    if (message.add_role != null && Object.hasOwnProperty.call(message, "add_role"))
                        $root.api.v1.event.AddRole.encode(message.add_role, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
                    if (message.remove_server != null && Object.hasOwnProperty.call(message, "remove_server"))
                        $root.api.v1.event.RemoveServer.encode(message.remove_server, writer.uint32(/* id 300, wireType 2 =*/2402).fork()).ldelim();
                    if (message.remove_channel != null && Object.hasOwnProperty.call(message, "remove_channel"))
                        $root.api.v1.event.RemoveChannel.encode(message.remove_channel, writer.uint32(/* id 301, wireType 2 =*/2410).fork()).ldelim();
                    if (message.remove_role != null && Object.hasOwnProperty.call(message, "remove_role"))
                        $root.api.v1.event.RemoveRole.encode(message.remove_role, writer.uint32(/* id 302, wireType 2 =*/2418).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Event message, length delimited. Does not implicitly {@link api.v1.event.Event.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {api.v1.event.IEvent} message Event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Event.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Event message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.Event} Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Event.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.Event();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.meta = $root.api.v1.event.Meta.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.list_servers = $root.api.v1.event.ListServers.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.list_channels = $root.api.v1.event.ListChannels.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.list_roles = $root.api.v1.event.ListRoles.decode(reader, reader.uint32());
                                break;
                            }
                        case 100: {
                                message.add_server = $root.api.v1.event.AddServer.decode(reader, reader.uint32());
                                break;
                            }
                        case 101: {
                                message.add_channel = $root.api.v1.event.AddChannel.decode(reader, reader.uint32());
                                break;
                            }
                        case 102: {
                                message.add_role = $root.api.v1.event.AddRole.decode(reader, reader.uint32());
                                break;
                            }
                        case 300: {
                                message.remove_server = $root.api.v1.event.RemoveServer.decode(reader, reader.uint32());
                                break;
                            }
                        case 301: {
                                message.remove_channel = $root.api.v1.event.RemoveChannel.decode(reader, reader.uint32());
                                break;
                            }
                        case 302: {
                                message.remove_role = $root.api.v1.event.RemoveRole.decode(reader, reader.uint32());
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
                 * Decodes an Event message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.Event} Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Event.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Event message.
                 * @function verify
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Event.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        let error = $root.api.v1.event.Meta.verify(message.meta);
                        if (error)
                            return "meta." + error;
                    }
                    if (message.list_servers != null && message.hasOwnProperty("list_servers")) {
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.ListServers.verify(message.list_servers);
                            if (error)
                                return "list_servers." + error;
                        }
                    }
                    if (message.list_channels != null && message.hasOwnProperty("list_channels")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.ListChannels.verify(message.list_channels);
                            if (error)
                                return "list_channels." + error;
                        }
                    }
                    if (message.list_roles != null && message.hasOwnProperty("list_roles")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.ListRoles.verify(message.list_roles);
                            if (error)
                                return "list_roles." + error;
                        }
                    }
                    if (message.add_server != null && message.hasOwnProperty("add_server")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.AddServer.verify(message.add_server);
                            if (error)
                                return "add_server." + error;
                        }
                    }
                    if (message.add_channel != null && message.hasOwnProperty("add_channel")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.AddChannel.verify(message.add_channel);
                            if (error)
                                return "add_channel." + error;
                        }
                    }
                    if (message.add_role != null && message.hasOwnProperty("add_role")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.AddRole.verify(message.add_role);
                            if (error)
                                return "add_role." + error;
                        }
                    }
                    if (message.remove_server != null && message.hasOwnProperty("remove_server")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.RemoveServer.verify(message.remove_server);
                            if (error)
                                return "remove_server." + error;
                        }
                    }
                    if (message.remove_channel != null && message.hasOwnProperty("remove_channel")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.RemoveChannel.verify(message.remove_channel);
                            if (error)
                                return "remove_channel." + error;
                        }
                    }
                    if (message.remove_role != null && message.hasOwnProperty("remove_role")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.RemoveRole.verify(message.remove_role);
                            if (error)
                                return "remove_role." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an Event message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.Event} Event
                 */
                Event.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.Event)
                        return object;
                    let message = new $root.api.v1.event.Event();
                    if (object.meta != null) {
                        if (typeof object.meta !== "object")
                            throw TypeError(".api.v1.event.Event.meta: object expected");
                        message.meta = $root.api.v1.event.Meta.fromObject(object.meta);
                    }
                    if (object.list_servers != null) {
                        if (typeof object.list_servers !== "object")
                            throw TypeError(".api.v1.event.Event.list_servers: object expected");
                        message.list_servers = $root.api.v1.event.ListServers.fromObject(object.list_servers);
                    }
                    if (object.list_channels != null) {
                        if (typeof object.list_channels !== "object")
                            throw TypeError(".api.v1.event.Event.list_channels: object expected");
                        message.list_channels = $root.api.v1.event.ListChannels.fromObject(object.list_channels);
                    }
                    if (object.list_roles != null) {
                        if (typeof object.list_roles !== "object")
                            throw TypeError(".api.v1.event.Event.list_roles: object expected");
                        message.list_roles = $root.api.v1.event.ListRoles.fromObject(object.list_roles);
                    }
                    if (object.add_server != null) {
                        if (typeof object.add_server !== "object")
                            throw TypeError(".api.v1.event.Event.add_server: object expected");
                        message.add_server = $root.api.v1.event.AddServer.fromObject(object.add_server);
                    }
                    if (object.add_channel != null) {
                        if (typeof object.add_channel !== "object")
                            throw TypeError(".api.v1.event.Event.add_channel: object expected");
                        message.add_channel = $root.api.v1.event.AddChannel.fromObject(object.add_channel);
                    }
                    if (object.add_role != null) {
                        if (typeof object.add_role !== "object")
                            throw TypeError(".api.v1.event.Event.add_role: object expected");
                        message.add_role = $root.api.v1.event.AddRole.fromObject(object.add_role);
                    }
                    if (object.remove_server != null) {
                        if (typeof object.remove_server !== "object")
                            throw TypeError(".api.v1.event.Event.remove_server: object expected");
                        message.remove_server = $root.api.v1.event.RemoveServer.fromObject(object.remove_server);
                    }
                    if (object.remove_channel != null) {
                        if (typeof object.remove_channel !== "object")
                            throw TypeError(".api.v1.event.Event.remove_channel: object expected");
                        message.remove_channel = $root.api.v1.event.RemoveChannel.fromObject(object.remove_channel);
                    }
                    if (object.remove_role != null) {
                        if (typeof object.remove_role !== "object")
                            throw TypeError(".api.v1.event.Event.remove_role: object expected");
                        message.remove_role = $root.api.v1.event.RemoveRole.fromObject(object.remove_role);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Event message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {api.v1.event.Event} message Event
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Event.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.meta = null;
                    if (message.meta != null && message.hasOwnProperty("meta"))
                        object.meta = $root.api.v1.event.Meta.toObject(message.meta, options);
                    if (message.list_servers != null && message.hasOwnProperty("list_servers")) {
                        object.list_servers = $root.api.v1.event.ListServers.toObject(message.list_servers, options);
                        if (options.oneofs)
                            object.data = "list_servers";
                    }
                    if (message.list_channels != null && message.hasOwnProperty("list_channels")) {
                        object.list_channels = $root.api.v1.event.ListChannels.toObject(message.list_channels, options);
                        if (options.oneofs)
                            object.data = "list_channels";
                    }
                    if (message.list_roles != null && message.hasOwnProperty("list_roles")) {
                        object.list_roles = $root.api.v1.event.ListRoles.toObject(message.list_roles, options);
                        if (options.oneofs)
                            object.data = "list_roles";
                    }
                    if (message.add_server != null && message.hasOwnProperty("add_server")) {
                        object.add_server = $root.api.v1.event.AddServer.toObject(message.add_server, options);
                        if (options.oneofs)
                            object.data = "add_server";
                    }
                    if (message.add_channel != null && message.hasOwnProperty("add_channel")) {
                        object.add_channel = $root.api.v1.event.AddChannel.toObject(message.add_channel, options);
                        if (options.oneofs)
                            object.data = "add_channel";
                    }
                    if (message.add_role != null && message.hasOwnProperty("add_role")) {
                        object.add_role = $root.api.v1.event.AddRole.toObject(message.add_role, options);
                        if (options.oneofs)
                            object.data = "add_role";
                    }
                    if (message.remove_server != null && message.hasOwnProperty("remove_server")) {
                        object.remove_server = $root.api.v1.event.RemoveServer.toObject(message.remove_server, options);
                        if (options.oneofs)
                            object.data = "remove_server";
                    }
                    if (message.remove_channel != null && message.hasOwnProperty("remove_channel")) {
                        object.remove_channel = $root.api.v1.event.RemoveChannel.toObject(message.remove_channel, options);
                        if (options.oneofs)
                            object.data = "remove_channel";
                    }
                    if (message.remove_role != null && message.hasOwnProperty("remove_role")) {
                        object.remove_role = $root.api.v1.event.RemoveRole.toObject(message.remove_role, options);
                        if (options.oneofs)
                            object.data = "remove_role";
                    }
                    return object;
                };

                /**
                 * Converts this Event to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.Event
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Event.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Event
                 * @function getTypeUrl
                 * @memberof api.v1.event.Event
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.Event";
                };

                return Event;
            })();

            event.NotificationMeta = (function() {

                /**
                 * Properties of a NotificationMeta.
                 * @memberof api.v1.event
                 * @interface INotificationMeta
                 * @property {api.v1.event.ActionType|null} [action] NotificationMeta action
                 * @property {api.v1.appuser.IAppuser|null} [appusers] NotificationMeta appusers
                 */

                /**
                 * Constructs a new NotificationMeta.
                 * @memberof api.v1.event
                 * @classdesc Represents a NotificationMeta.
                 * @implements INotificationMeta
                 * @constructor
                 * @param {api.v1.event.INotificationMeta=} [properties] Properties to set
                 */
                function NotificationMeta(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NotificationMeta action.
                 * @member {api.v1.event.ActionType} action
                 * @memberof api.v1.event.NotificationMeta
                 * @instance
                 */
                NotificationMeta.prototype.action = 0;

                /**
                 * NotificationMeta appusers.
                 * @member {api.v1.appuser.IAppuser|null|undefined} appusers
                 * @memberof api.v1.event.NotificationMeta
                 * @instance
                 */
                NotificationMeta.prototype.appusers = null;

                /**
                 * Creates a new NotificationMeta instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {api.v1.event.INotificationMeta=} [properties] Properties to set
                 * @returns {api.v1.event.NotificationMeta} NotificationMeta instance
                 */
                NotificationMeta.create = function create(properties) {
                    return new NotificationMeta(properties);
                };

                /**
                 * Encodes the specified NotificationMeta message. Does not implicitly {@link api.v1.event.NotificationMeta.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {api.v1.event.INotificationMeta} message NotificationMeta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NotificationMeta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
                    if (message.appusers != null && Object.hasOwnProperty.call(message, "appusers"))
                        $root.api.v1.appuser.Appuser.encode(message.appusers, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified NotificationMeta message, length delimited. Does not implicitly {@link api.v1.event.NotificationMeta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {api.v1.event.INotificationMeta} message NotificationMeta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NotificationMeta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NotificationMeta message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.NotificationMeta} NotificationMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NotificationMeta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.NotificationMeta();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.action = reader.int32();
                                break;
                            }
                        case 2: {
                                message.appusers = $root.api.v1.appuser.Appuser.decode(reader, reader.uint32());
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
                 * Decodes a NotificationMeta message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.NotificationMeta} NotificationMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NotificationMeta.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NotificationMeta message.
                 * @function verify
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NotificationMeta.verify = function verify(message) {
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
                        case 100:
                        case 101:
                        case 102:
                        case 300:
                        case 301:
                        case 302:
                            break;
                        }
                    if (message.appusers != null && message.hasOwnProperty("appusers")) {
                        let error = $root.api.v1.appuser.Appuser.verify(message.appusers);
                        if (error)
                            return "appusers." + error;
                    }
                    return null;
                };

                /**
                 * Creates a NotificationMeta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.NotificationMeta} NotificationMeta
                 */
                NotificationMeta.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.NotificationMeta)
                        return object;
                    let message = new $root.api.v1.event.NotificationMeta();
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
                    case "ACTION_LIST_SERVERS":
                    case 1:
                        message.action = 1;
                        break;
                    case "ACTION_LIST_CHANNELS":
                    case 2:
                        message.action = 2;
                        break;
                    case "ACTION_LIST_ROLES":
                    case 3:
                        message.action = 3;
                        break;
                    case "ACTION_ADD_SERVER":
                    case 100:
                        message.action = 100;
                        break;
                    case "ACTION_ADD_CHANNEL":
                    case 101:
                        message.action = 101;
                        break;
                    case "ACTION_ADD_ROLE":
                    case 102:
                        message.action = 102;
                        break;
                    case "ACTION_REMOVE_SERVER":
                    case 300:
                        message.action = 300;
                        break;
                    case "ACTION_REMOVE_CHANNEL":
                    case 301:
                        message.action = 301;
                        break;
                    case "ACTION_REMOVE_ROLE":
                    case 302:
                        message.action = 302;
                        break;
                    }
                    if (object.appusers != null) {
                        if (typeof object.appusers !== "object")
                            throw TypeError(".api.v1.event.NotificationMeta.appusers: object expected");
                        message.appusers = $root.api.v1.appuser.Appuser.fromObject(object.appusers);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a NotificationMeta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {api.v1.event.NotificationMeta} message NotificationMeta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NotificationMeta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.action = options.enums === String ? "ACTION_TYPE_UNSPECIFIED" : 0;
                        object.appusers = null;
                    }
                    if (message.action != null && message.hasOwnProperty("action"))
                        object.action = options.enums === String ? $root.api.v1.event.ActionType[message.action] === undefined ? message.action : $root.api.v1.event.ActionType[message.action] : message.action;
                    if (message.appusers != null && message.hasOwnProperty("appusers"))
                        object.appusers = $root.api.v1.appuser.Appuser.toObject(message.appusers, options);
                    return object;
                };

                /**
                 * Converts this NotificationMeta to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.NotificationMeta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NotificationMeta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NotificationMeta
                 * @function getTypeUrl
                 * @memberof api.v1.event.NotificationMeta
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NotificationMeta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.NotificationMeta";
                };

                return NotificationMeta;
            })();

            event.Notification = (function() {

                /**
                 * Properties of a Notification.
                 * @memberof api.v1.event
                 * @interface INotification
                 * @property {api.v1.event.INotificationMeta|null} [meta] Notification meta
                 * @property {api.v1.event.IListServers|null} [list_servers] Notification list_servers
                 * @property {api.v1.event.IListChannels|null} [list_channels] Notification list_channels
                 * @property {api.v1.event.IListRoles|null} [list_roles] Notification list_roles
                 * @property {api.v1.event.IAddServer|null} [add_server] Notification add_server
                 * @property {api.v1.event.IAddChannel|null} [add_channel] Notification add_channel
                 * @property {api.v1.event.IAddRole|null} [add_role] Notification add_role
                 * @property {api.v1.event.IRemoveServer|null} [remove_server] Notification remove_server
                 * @property {api.v1.event.IRemoveChannel|null} [remove_channel] Notification remove_channel
                 * @property {api.v1.event.IRemoveRole|null} [remove_role] Notification remove_role
                 */

                /**
                 * Constructs a new Notification.
                 * @memberof api.v1.event
                 * @classdesc Represents a Notification.
                 * @implements INotification
                 * @constructor
                 * @param {api.v1.event.INotification=} [properties] Properties to set
                 */
                function Notification(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Notification meta.
                 * @member {api.v1.event.INotificationMeta|null|undefined} meta
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.meta = null;

                /**
                 * Notification list_servers.
                 * @member {api.v1.event.IListServers|null|undefined} list_servers
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.list_servers = null;

                /**
                 * Notification list_channels.
                 * @member {api.v1.event.IListChannels|null|undefined} list_channels
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.list_channels = null;

                /**
                 * Notification list_roles.
                 * @member {api.v1.event.IListRoles|null|undefined} list_roles
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.list_roles = null;

                /**
                 * Notification add_server.
                 * @member {api.v1.event.IAddServer|null|undefined} add_server
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.add_server = null;

                /**
                 * Notification add_channel.
                 * @member {api.v1.event.IAddChannel|null|undefined} add_channel
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.add_channel = null;

                /**
                 * Notification add_role.
                 * @member {api.v1.event.IAddRole|null|undefined} add_role
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.add_role = null;

                /**
                 * Notification remove_server.
                 * @member {api.v1.event.IRemoveServer|null|undefined} remove_server
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.remove_server = null;

                /**
                 * Notification remove_channel.
                 * @member {api.v1.event.IRemoveChannel|null|undefined} remove_channel
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.remove_channel = null;

                /**
                 * Notification remove_role.
                 * @member {api.v1.event.IRemoveRole|null|undefined} remove_role
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Notification.prototype.remove_role = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Notification data.
                 * @member {"list_servers"|"list_channels"|"list_roles"|"add_server"|"add_channel"|"add_role"|"remove_server"|"remove_channel"|"remove_role"|undefined} data
                 * @memberof api.v1.event.Notification
                 * @instance
                 */
                Object.defineProperty(Notification.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["list_servers", "list_channels", "list_roles", "add_server", "add_channel", "add_role", "remove_server", "remove_channel", "remove_role"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Notification instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {api.v1.event.INotification=} [properties] Properties to set
                 * @returns {api.v1.event.Notification} Notification instance
                 */
                Notification.create = function create(properties) {
                    return new Notification(properties);
                };

                /**
                 * Encodes the specified Notification message. Does not implicitly {@link api.v1.event.Notification.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {api.v1.event.INotification} message Notification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Notification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                        $root.api.v1.event.NotificationMeta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.list_servers != null && Object.hasOwnProperty.call(message, "list_servers"))
                        $root.api.v1.event.ListServers.encode(message.list_servers, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.list_channels != null && Object.hasOwnProperty.call(message, "list_channels"))
                        $root.api.v1.event.ListChannels.encode(message.list_channels, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.list_roles != null && Object.hasOwnProperty.call(message, "list_roles"))
                        $root.api.v1.event.ListRoles.encode(message.list_roles, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.add_server != null && Object.hasOwnProperty.call(message, "add_server"))
                        $root.api.v1.event.AddServer.encode(message.add_server, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
                    if (message.add_channel != null && Object.hasOwnProperty.call(message, "add_channel"))
                        $root.api.v1.event.AddChannel.encode(message.add_channel, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
                    if (message.add_role != null && Object.hasOwnProperty.call(message, "add_role"))
                        $root.api.v1.event.AddRole.encode(message.add_role, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
                    if (message.remove_server != null && Object.hasOwnProperty.call(message, "remove_server"))
                        $root.api.v1.event.RemoveServer.encode(message.remove_server, writer.uint32(/* id 300, wireType 2 =*/2402).fork()).ldelim();
                    if (message.remove_channel != null && Object.hasOwnProperty.call(message, "remove_channel"))
                        $root.api.v1.event.RemoveChannel.encode(message.remove_channel, writer.uint32(/* id 301, wireType 2 =*/2410).fork()).ldelim();
                    if (message.remove_role != null && Object.hasOwnProperty.call(message, "remove_role"))
                        $root.api.v1.event.RemoveRole.encode(message.remove_role, writer.uint32(/* id 302, wireType 2 =*/2418).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Notification message, length delimited. Does not implicitly {@link api.v1.event.Notification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {api.v1.event.INotification} message Notification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Notification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Notification message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.Notification} Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Notification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.Notification();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.meta = $root.api.v1.event.NotificationMeta.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.list_servers = $root.api.v1.event.ListServers.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.list_channels = $root.api.v1.event.ListChannels.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.list_roles = $root.api.v1.event.ListRoles.decode(reader, reader.uint32());
                                break;
                            }
                        case 100: {
                                message.add_server = $root.api.v1.event.AddServer.decode(reader, reader.uint32());
                                break;
                            }
                        case 101: {
                                message.add_channel = $root.api.v1.event.AddChannel.decode(reader, reader.uint32());
                                break;
                            }
                        case 102: {
                                message.add_role = $root.api.v1.event.AddRole.decode(reader, reader.uint32());
                                break;
                            }
                        case 300: {
                                message.remove_server = $root.api.v1.event.RemoveServer.decode(reader, reader.uint32());
                                break;
                            }
                        case 301: {
                                message.remove_channel = $root.api.v1.event.RemoveChannel.decode(reader, reader.uint32());
                                break;
                            }
                        case 302: {
                                message.remove_role = $root.api.v1.event.RemoveRole.decode(reader, reader.uint32());
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
                 * Decodes a Notification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.Notification} Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Notification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Notification message.
                 * @function verify
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Notification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        let error = $root.api.v1.event.NotificationMeta.verify(message.meta);
                        if (error)
                            return "meta." + error;
                    }
                    if (message.list_servers != null && message.hasOwnProperty("list_servers")) {
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.ListServers.verify(message.list_servers);
                            if (error)
                                return "list_servers." + error;
                        }
                    }
                    if (message.list_channels != null && message.hasOwnProperty("list_channels")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.ListChannels.verify(message.list_channels);
                            if (error)
                                return "list_channels." + error;
                        }
                    }
                    if (message.list_roles != null && message.hasOwnProperty("list_roles")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.ListRoles.verify(message.list_roles);
                            if (error)
                                return "list_roles." + error;
                        }
                    }
                    if (message.add_server != null && message.hasOwnProperty("add_server")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.AddServer.verify(message.add_server);
                            if (error)
                                return "add_server." + error;
                        }
                    }
                    if (message.add_channel != null && message.hasOwnProperty("add_channel")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.AddChannel.verify(message.add_channel);
                            if (error)
                                return "add_channel." + error;
                        }
                    }
                    if (message.add_role != null && message.hasOwnProperty("add_role")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.AddRole.verify(message.add_role);
                            if (error)
                                return "add_role." + error;
                        }
                    }
                    if (message.remove_server != null && message.hasOwnProperty("remove_server")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.RemoveServer.verify(message.remove_server);
                            if (error)
                                return "remove_server." + error;
                        }
                    }
                    if (message.remove_channel != null && message.hasOwnProperty("remove_channel")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.RemoveChannel.verify(message.remove_channel);
                            if (error)
                                return "remove_channel." + error;
                        }
                    }
                    if (message.remove_role != null && message.hasOwnProperty("remove_role")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.api.v1.event.RemoveRole.verify(message.remove_role);
                            if (error)
                                return "remove_role." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Notification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.Notification} Notification
                 */
                Notification.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.Notification)
                        return object;
                    let message = new $root.api.v1.event.Notification();
                    if (object.meta != null) {
                        if (typeof object.meta !== "object")
                            throw TypeError(".api.v1.event.Notification.meta: object expected");
                        message.meta = $root.api.v1.event.NotificationMeta.fromObject(object.meta);
                    }
                    if (object.list_servers != null) {
                        if (typeof object.list_servers !== "object")
                            throw TypeError(".api.v1.event.Notification.list_servers: object expected");
                        message.list_servers = $root.api.v1.event.ListServers.fromObject(object.list_servers);
                    }
                    if (object.list_channels != null) {
                        if (typeof object.list_channels !== "object")
                            throw TypeError(".api.v1.event.Notification.list_channels: object expected");
                        message.list_channels = $root.api.v1.event.ListChannels.fromObject(object.list_channels);
                    }
                    if (object.list_roles != null) {
                        if (typeof object.list_roles !== "object")
                            throw TypeError(".api.v1.event.Notification.list_roles: object expected");
                        message.list_roles = $root.api.v1.event.ListRoles.fromObject(object.list_roles);
                    }
                    if (object.add_server != null) {
                        if (typeof object.add_server !== "object")
                            throw TypeError(".api.v1.event.Notification.add_server: object expected");
                        message.add_server = $root.api.v1.event.AddServer.fromObject(object.add_server);
                    }
                    if (object.add_channel != null) {
                        if (typeof object.add_channel !== "object")
                            throw TypeError(".api.v1.event.Notification.add_channel: object expected");
                        message.add_channel = $root.api.v1.event.AddChannel.fromObject(object.add_channel);
                    }
                    if (object.add_role != null) {
                        if (typeof object.add_role !== "object")
                            throw TypeError(".api.v1.event.Notification.add_role: object expected");
                        message.add_role = $root.api.v1.event.AddRole.fromObject(object.add_role);
                    }
                    if (object.remove_server != null) {
                        if (typeof object.remove_server !== "object")
                            throw TypeError(".api.v1.event.Notification.remove_server: object expected");
                        message.remove_server = $root.api.v1.event.RemoveServer.fromObject(object.remove_server);
                    }
                    if (object.remove_channel != null) {
                        if (typeof object.remove_channel !== "object")
                            throw TypeError(".api.v1.event.Notification.remove_channel: object expected");
                        message.remove_channel = $root.api.v1.event.RemoveChannel.fromObject(object.remove_channel);
                    }
                    if (object.remove_role != null) {
                        if (typeof object.remove_role !== "object")
                            throw TypeError(".api.v1.event.Notification.remove_role: object expected");
                        message.remove_role = $root.api.v1.event.RemoveRole.fromObject(object.remove_role);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Notification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {api.v1.event.Notification} message Notification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Notification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.meta = null;
                    if (message.meta != null && message.hasOwnProperty("meta"))
                        object.meta = $root.api.v1.event.NotificationMeta.toObject(message.meta, options);
                    if (message.list_servers != null && message.hasOwnProperty("list_servers")) {
                        object.list_servers = $root.api.v1.event.ListServers.toObject(message.list_servers, options);
                        if (options.oneofs)
                            object.data = "list_servers";
                    }
                    if (message.list_channels != null && message.hasOwnProperty("list_channels")) {
                        object.list_channels = $root.api.v1.event.ListChannels.toObject(message.list_channels, options);
                        if (options.oneofs)
                            object.data = "list_channels";
                    }
                    if (message.list_roles != null && message.hasOwnProperty("list_roles")) {
                        object.list_roles = $root.api.v1.event.ListRoles.toObject(message.list_roles, options);
                        if (options.oneofs)
                            object.data = "list_roles";
                    }
                    if (message.add_server != null && message.hasOwnProperty("add_server")) {
                        object.add_server = $root.api.v1.event.AddServer.toObject(message.add_server, options);
                        if (options.oneofs)
                            object.data = "add_server";
                    }
                    if (message.add_channel != null && message.hasOwnProperty("add_channel")) {
                        object.add_channel = $root.api.v1.event.AddChannel.toObject(message.add_channel, options);
                        if (options.oneofs)
                            object.data = "add_channel";
                    }
                    if (message.add_role != null && message.hasOwnProperty("add_role")) {
                        object.add_role = $root.api.v1.event.AddRole.toObject(message.add_role, options);
                        if (options.oneofs)
                            object.data = "add_role";
                    }
                    if (message.remove_server != null && message.hasOwnProperty("remove_server")) {
                        object.remove_server = $root.api.v1.event.RemoveServer.toObject(message.remove_server, options);
                        if (options.oneofs)
                            object.data = "remove_server";
                    }
                    if (message.remove_channel != null && message.hasOwnProperty("remove_channel")) {
                        object.remove_channel = $root.api.v1.event.RemoveChannel.toObject(message.remove_channel, options);
                        if (options.oneofs)
                            object.data = "remove_channel";
                    }
                    if (message.remove_role != null && message.hasOwnProperty("remove_role")) {
                        object.remove_role = $root.api.v1.event.RemoveRole.toObject(message.remove_role, options);
                        if (options.oneofs)
                            object.data = "remove_role";
                    }
                    return object;
                };

                /**
                 * Converts this Notification to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.Notification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Notification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Notification
                 * @function getTypeUrl
                 * @memberof api.v1.event.Notification
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Notification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.Notification";
                };

                return Notification;
            })();

            /**
             * ActionType enum.
             * @name api.v1.event.ActionType
             * @enum {number}
             * @property {number} ACTION_TYPE_UNSPECIFIED=0 ACTION_TYPE_UNSPECIFIED value
             * @property {number} ACTION_LIST_SERVERS=1 ACTION_LIST_SERVERS value
             * @property {number} ACTION_LIST_CHANNELS=2 ACTION_LIST_CHANNELS value
             * @property {number} ACTION_LIST_ROLES=3 ACTION_LIST_ROLES value
             * @property {number} ACTION_ADD_SERVER=100 ACTION_ADD_SERVER value
             * @property {number} ACTION_ADD_CHANNEL=101 ACTION_ADD_CHANNEL value
             * @property {number} ACTION_ADD_ROLE=102 ACTION_ADD_ROLE value
             * @property {number} ACTION_REMOVE_SERVER=300 ACTION_REMOVE_SERVER value
             * @property {number} ACTION_REMOVE_CHANNEL=301 ACTION_REMOVE_CHANNEL value
             * @property {number} ACTION_REMOVE_ROLE=302 ACTION_REMOVE_ROLE value
             */
            event.ActionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ACTION_TYPE_UNSPECIFIED"] = 0;
                values[valuesById[1] = "ACTION_LIST_SERVERS"] = 1;
                values[valuesById[2] = "ACTION_LIST_CHANNELS"] = 2;
                values[valuesById[3] = "ACTION_LIST_ROLES"] = 3;
                values[valuesById[100] = "ACTION_ADD_SERVER"] = 100;
                values[valuesById[101] = "ACTION_ADD_CHANNEL"] = 101;
                values[valuesById[102] = "ACTION_ADD_ROLE"] = 102;
                values[valuesById[300] = "ACTION_REMOVE_SERVER"] = 300;
                values[valuesById[301] = "ACTION_REMOVE_CHANNEL"] = 301;
                values[valuesById[302] = "ACTION_REMOVE_ROLE"] = 302;
                return values;
            })();

            event.ListServers = (function() {

                /**
                 * Properties of a ListServers.
                 * @memberof api.v1.event
                 * @interface IListServers
                 * @property {Array.<api.v1.appserver.IAppserver>|null} [appservers] ListServers appservers
                 */

                /**
                 * Constructs a new ListServers.
                 * @memberof api.v1.event
                 * @classdesc Represents a ListServers.
                 * @implements IListServers
                 * @constructor
                 * @param {api.v1.event.IListServers=} [properties] Properties to set
                 */
                function ListServers(properties) {
                    this.appservers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListServers appservers.
                 * @member {Array.<api.v1.appserver.IAppserver>} appservers
                 * @memberof api.v1.event.ListServers
                 * @instance
                 */
                ListServers.prototype.appservers = $util.emptyArray;

                /**
                 * Creates a new ListServers instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {api.v1.event.IListServers=} [properties] Properties to set
                 * @returns {api.v1.event.ListServers} ListServers instance
                 */
                ListServers.create = function create(properties) {
                    return new ListServers(properties);
                };

                /**
                 * Encodes the specified ListServers message. Does not implicitly {@link api.v1.event.ListServers.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {api.v1.event.IListServers} message ListServers message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServers.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appservers != null && message.appservers.length)
                        for (let i = 0; i < message.appservers.length; ++i)
                            $root.api.v1.appserver.Appserver.encode(message.appservers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListServers message, length delimited. Does not implicitly {@link api.v1.event.ListServers.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {api.v1.event.IListServers} message ListServers message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServers.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListServers message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.ListServers} ListServers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServers.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.ListServers();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appservers && message.appservers.length))
                                    message.appservers = [];
                                message.appservers.push($root.api.v1.appserver.Appserver.decode(reader, reader.uint32()));
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
                 * Decodes a ListServers message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.ListServers} ListServers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServers.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListServers message.
                 * @function verify
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListServers.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appservers != null && message.hasOwnProperty("appservers")) {
                        if (!Array.isArray(message.appservers))
                            return "appservers: array expected";
                        for (let i = 0; i < message.appservers.length; ++i) {
                            let error = $root.api.v1.appserver.Appserver.verify(message.appservers[i]);
                            if (error)
                                return "appservers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListServers message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.ListServers} ListServers
                 */
                ListServers.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.ListServers)
                        return object;
                    let message = new $root.api.v1.event.ListServers();
                    if (object.appservers) {
                        if (!Array.isArray(object.appservers))
                            throw TypeError(".api.v1.event.ListServers.appservers: array expected");
                        message.appservers = [];
                        for (let i = 0; i < object.appservers.length; ++i) {
                            if (typeof object.appservers[i] !== "object")
                                throw TypeError(".api.v1.event.ListServers.appservers: object expected");
                            message.appservers[i] = $root.api.v1.appserver.Appserver.fromObject(object.appservers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListServers message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {api.v1.event.ListServers} message ListServers
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListServers.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appservers = [];
                    if (message.appservers && message.appservers.length) {
                        object.appservers = [];
                        for (let j = 0; j < message.appservers.length; ++j)
                            object.appservers[j] = $root.api.v1.appserver.Appserver.toObject(message.appservers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListServers to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.ListServers
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListServers.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListServers
                 * @function getTypeUrl
                 * @memberof api.v1.event.ListServers
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListServers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.ListServers";
                };

                return ListServers;
            })();

            event.ListChannels = (function() {

                /**
                 * Properties of a ListChannels.
                 * @memberof api.v1.event
                 * @interface IListChannels
                 * @property {Array.<api.v1.channel.IChannel>|null} [channels] ListChannels channels
                 */

                /**
                 * Constructs a new ListChannels.
                 * @memberof api.v1.event
                 * @classdesc Represents a ListChannels.
                 * @implements IListChannels
                 * @constructor
                 * @param {api.v1.event.IListChannels=} [properties] Properties to set
                 */
                function ListChannels(properties) {
                    this.channels = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListChannels channels.
                 * @member {Array.<api.v1.channel.IChannel>} channels
                 * @memberof api.v1.event.ListChannels
                 * @instance
                 */
                ListChannels.prototype.channels = $util.emptyArray;

                /**
                 * Creates a new ListChannels instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {api.v1.event.IListChannels=} [properties] Properties to set
                 * @returns {api.v1.event.ListChannels} ListChannels instance
                 */
                ListChannels.create = function create(properties) {
                    return new ListChannels(properties);
                };

                /**
                 * Encodes the specified ListChannels message. Does not implicitly {@link api.v1.event.ListChannels.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {api.v1.event.IListChannels} message ListChannels message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListChannels.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channels != null && message.channels.length)
                        for (let i = 0; i < message.channels.length; ++i)
                            $root.api.v1.channel.Channel.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListChannels message, length delimited. Does not implicitly {@link api.v1.event.ListChannels.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {api.v1.event.IListChannels} message ListChannels message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListChannels.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListChannels message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.ListChannels} ListChannels
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListChannels.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.ListChannels();
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
                 * Decodes a ListChannels message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.ListChannels} ListChannels
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListChannels.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListChannels message.
                 * @function verify
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListChannels.verify = function verify(message) {
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
                 * Creates a ListChannels message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.ListChannels} ListChannels
                 */
                ListChannels.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.ListChannels)
                        return object;
                    let message = new $root.api.v1.event.ListChannels();
                    if (object.channels) {
                        if (!Array.isArray(object.channels))
                            throw TypeError(".api.v1.event.ListChannels.channels: array expected");
                        message.channels = [];
                        for (let i = 0; i < object.channels.length; ++i) {
                            if (typeof object.channels[i] !== "object")
                                throw TypeError(".api.v1.event.ListChannels.channels: object expected");
                            message.channels[i] = $root.api.v1.channel.Channel.fromObject(object.channels[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListChannels message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {api.v1.event.ListChannels} message ListChannels
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListChannels.toObject = function toObject(message, options) {
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
                 * Converts this ListChannels to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.ListChannels
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListChannels.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListChannels
                 * @function getTypeUrl
                 * @memberof api.v1.event.ListChannels
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListChannels.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.ListChannels";
                };

                return ListChannels;
            })();

            event.ListRoles = (function() {

                /**
                 * Properties of a ListRoles.
                 * @memberof api.v1.event
                 * @interface IListRoles
                 * @property {Array.<api.v1.appserver_role.IAppserverRole>|null} [roles] ListRoles roles
                 */

                /**
                 * Constructs a new ListRoles.
                 * @memberof api.v1.event
                 * @classdesc Represents a ListRoles.
                 * @implements IListRoles
                 * @constructor
                 * @param {api.v1.event.IListRoles=} [properties] Properties to set
                 */
                function ListRoles(properties) {
                    this.roles = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListRoles roles.
                 * @member {Array.<api.v1.appserver_role.IAppserverRole>} roles
                 * @memberof api.v1.event.ListRoles
                 * @instance
                 */
                ListRoles.prototype.roles = $util.emptyArray;

                /**
                 * Creates a new ListRoles instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {api.v1.event.IListRoles=} [properties] Properties to set
                 * @returns {api.v1.event.ListRoles} ListRoles instance
                 */
                ListRoles.create = function create(properties) {
                    return new ListRoles(properties);
                };

                /**
                 * Encodes the specified ListRoles message. Does not implicitly {@link api.v1.event.ListRoles.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {api.v1.event.IListRoles} message ListRoles message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListRoles.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roles != null && message.roles.length)
                        for (let i = 0; i < message.roles.length; ++i)
                            $root.api.v1.appserver_role.AppserverRole.encode(message.roles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListRoles message, length delimited. Does not implicitly {@link api.v1.event.ListRoles.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {api.v1.event.IListRoles} message ListRoles message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListRoles.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListRoles message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.ListRoles} ListRoles
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListRoles.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.ListRoles();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.roles && message.roles.length))
                                    message.roles = [];
                                message.roles.push($root.api.v1.appserver_role.AppserverRole.decode(reader, reader.uint32()));
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
                 * Decodes a ListRoles message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.ListRoles} ListRoles
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListRoles.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListRoles message.
                 * @function verify
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListRoles.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.roles != null && message.hasOwnProperty("roles")) {
                        if (!Array.isArray(message.roles))
                            return "roles: array expected";
                        for (let i = 0; i < message.roles.length; ++i) {
                            let error = $root.api.v1.appserver_role.AppserverRole.verify(message.roles[i]);
                            if (error)
                                return "roles." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListRoles message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.ListRoles} ListRoles
                 */
                ListRoles.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.ListRoles)
                        return object;
                    let message = new $root.api.v1.event.ListRoles();
                    if (object.roles) {
                        if (!Array.isArray(object.roles))
                            throw TypeError(".api.v1.event.ListRoles.roles: array expected");
                        message.roles = [];
                        for (let i = 0; i < object.roles.length; ++i) {
                            if (typeof object.roles[i] !== "object")
                                throw TypeError(".api.v1.event.ListRoles.roles: object expected");
                            message.roles[i] = $root.api.v1.appserver_role.AppserverRole.fromObject(object.roles[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListRoles message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {api.v1.event.ListRoles} message ListRoles
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListRoles.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.roles = [];
                    if (message.roles && message.roles.length) {
                        object.roles = [];
                        for (let j = 0; j < message.roles.length; ++j)
                            object.roles[j] = $root.api.v1.appserver_role.AppserverRole.toObject(message.roles[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListRoles to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.ListRoles
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListRoles.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListRoles
                 * @function getTypeUrl
                 * @memberof api.v1.event.ListRoles
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListRoles.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.ListRoles";
                };

                return ListRoles;
            })();

            event.AddServer = (function() {

                /**
                 * Properties of an AddServer.
                 * @memberof api.v1.event
                 * @interface IAddServer
                 * @property {api.v1.appserver.IAppserver|null} [appserver] AddServer appserver
                 */

                /**
                 * Constructs a new AddServer.
                 * @memberof api.v1.event
                 * @classdesc Represents an AddServer.
                 * @implements IAddServer
                 * @constructor
                 * @param {api.v1.event.IAddServer=} [properties] Properties to set
                 */
                function AddServer(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AddServer appserver.
                 * @member {api.v1.appserver.IAppserver|null|undefined} appserver
                 * @memberof api.v1.event.AddServer
                 * @instance
                 */
                AddServer.prototype.appserver = null;

                /**
                 * Creates a new AddServer instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {api.v1.event.IAddServer=} [properties] Properties to set
                 * @returns {api.v1.event.AddServer} AddServer instance
                 */
                AddServer.create = function create(properties) {
                    return new AddServer(properties);
                };

                /**
                 * Encodes the specified AddServer message. Does not implicitly {@link api.v1.event.AddServer.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {api.v1.event.IAddServer} message AddServer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddServer.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.appserver.Appserver.encode(message.appserver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AddServer message, length delimited. Does not implicitly {@link api.v1.event.AddServer.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {api.v1.event.IAddServer} message AddServer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddServer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AddServer message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.AddServer} AddServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddServer.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.AddServer();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver = $root.api.v1.appserver.Appserver.decode(reader, reader.uint32());
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
                 * Decodes an AddServer message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.AddServer} AddServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddServer.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AddServer message.
                 * @function verify
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AddServer.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.appserver.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AddServer message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.AddServer} AddServer
                 */
                AddServer.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.AddServer)
                        return object;
                    let message = new $root.api.v1.event.AddServer();
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.event.AddServer.appserver: object expected");
                        message.appserver = $root.api.v1.appserver.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AddServer message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {api.v1.event.AddServer} message AddServer
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddServer.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver = null;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.appserver.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this AddServer to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.AddServer
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AddServer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AddServer
                 * @function getTypeUrl
                 * @memberof api.v1.event.AddServer
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AddServer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.AddServer";
                };

                return AddServer;
            })();

            event.AddChannel = (function() {

                /**
                 * Properties of an AddChannel.
                 * @memberof api.v1.event
                 * @interface IAddChannel
                 * @property {api.v1.channel.IChannel|null} [channel] AddChannel channel
                 */

                /**
                 * Constructs a new AddChannel.
                 * @memberof api.v1.event
                 * @classdesc Represents an AddChannel.
                 * @implements IAddChannel
                 * @constructor
                 * @param {api.v1.event.IAddChannel=} [properties] Properties to set
                 */
                function AddChannel(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AddChannel channel.
                 * @member {api.v1.channel.IChannel|null|undefined} channel
                 * @memberof api.v1.event.AddChannel
                 * @instance
                 */
                AddChannel.prototype.channel = null;

                /**
                 * Creates a new AddChannel instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {api.v1.event.IAddChannel=} [properties] Properties to set
                 * @returns {api.v1.event.AddChannel} AddChannel instance
                 */
                AddChannel.create = function create(properties) {
                    return new AddChannel(properties);
                };

                /**
                 * Encodes the specified AddChannel message. Does not implicitly {@link api.v1.event.AddChannel.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {api.v1.event.IAddChannel} message AddChannel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddChannel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                        $root.api.v1.channel.Channel.encode(message.channel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AddChannel message, length delimited. Does not implicitly {@link api.v1.event.AddChannel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {api.v1.event.IAddChannel} message AddChannel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddChannel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AddChannel message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.AddChannel} AddChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddChannel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.AddChannel();
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
                 * Decodes an AddChannel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.AddChannel} AddChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddChannel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AddChannel message.
                 * @function verify
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AddChannel.verify = function verify(message) {
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
                 * Creates an AddChannel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.AddChannel} AddChannel
                 */
                AddChannel.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.AddChannel)
                        return object;
                    let message = new $root.api.v1.event.AddChannel();
                    if (object.channel != null) {
                        if (typeof object.channel !== "object")
                            throw TypeError(".api.v1.event.AddChannel.channel: object expected");
                        message.channel = $root.api.v1.channel.Channel.fromObject(object.channel);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AddChannel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {api.v1.event.AddChannel} message AddChannel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddChannel.toObject = function toObject(message, options) {
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
                 * Converts this AddChannel to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.AddChannel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AddChannel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AddChannel
                 * @function getTypeUrl
                 * @memberof api.v1.event.AddChannel
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AddChannel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.AddChannel";
                };

                return AddChannel;
            })();

            event.AddRole = (function() {

                /**
                 * Properties of an AddRole.
                 * @memberof api.v1.event
                 * @interface IAddRole
                 * @property {api.v1.appserver_role.IAppserverRole|null} [role] AddRole role
                 */

                /**
                 * Constructs a new AddRole.
                 * @memberof api.v1.event
                 * @classdesc Represents an AddRole.
                 * @implements IAddRole
                 * @constructor
                 * @param {api.v1.event.IAddRole=} [properties] Properties to set
                 */
                function AddRole(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AddRole role.
                 * @member {api.v1.appserver_role.IAppserverRole|null|undefined} role
                 * @memberof api.v1.event.AddRole
                 * @instance
                 */
                AddRole.prototype.role = null;

                /**
                 * Creates a new AddRole instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {api.v1.event.IAddRole=} [properties] Properties to set
                 * @returns {api.v1.event.AddRole} AddRole instance
                 */
                AddRole.create = function create(properties) {
                    return new AddRole(properties);
                };

                /**
                 * Encodes the specified AddRole message. Does not implicitly {@link api.v1.event.AddRole.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {api.v1.event.IAddRole} message AddRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddRole.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                        $root.api.v1.appserver_role.AppserverRole.encode(message.role, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AddRole message, length delimited. Does not implicitly {@link api.v1.event.AddRole.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {api.v1.event.IAddRole} message AddRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AddRole.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AddRole message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.AddRole} AddRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddRole.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.AddRole();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.role = $root.api.v1.appserver_role.AppserverRole.decode(reader, reader.uint32());
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
                 * Decodes an AddRole message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.AddRole} AddRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AddRole.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AddRole message.
                 * @function verify
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AddRole.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.role != null && message.hasOwnProperty("role")) {
                        let error = $root.api.v1.appserver_role.AppserverRole.verify(message.role);
                        if (error)
                            return "role." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AddRole message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.AddRole} AddRole
                 */
                AddRole.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.AddRole)
                        return object;
                    let message = new $root.api.v1.event.AddRole();
                    if (object.role != null) {
                        if (typeof object.role !== "object")
                            throw TypeError(".api.v1.event.AddRole.role: object expected");
                        message.role = $root.api.v1.appserver_role.AppserverRole.fromObject(object.role);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AddRole message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {api.v1.event.AddRole} message AddRole
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AddRole.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.role = null;
                    if (message.role != null && message.hasOwnProperty("role"))
                        object.role = $root.api.v1.appserver_role.AppserverRole.toObject(message.role, options);
                    return object;
                };

                /**
                 * Converts this AddRole to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.AddRole
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AddRole.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AddRole
                 * @function getTypeUrl
                 * @memberof api.v1.event.AddRole
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AddRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.AddRole";
                };

                return AddRole;
            })();

            event.RemoveServer = (function() {

                /**
                 * Properties of a RemoveServer.
                 * @memberof api.v1.event
                 * @interface IRemoveServer
                 * @property {string|null} [id] RemoveServer id
                 */

                /**
                 * Constructs a new RemoveServer.
                 * @memberof api.v1.event
                 * @classdesc Represents a RemoveServer.
                 * @implements IRemoveServer
                 * @constructor
                 * @param {api.v1.event.IRemoveServer=} [properties] Properties to set
                 */
                function RemoveServer(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RemoveServer id.
                 * @member {string} id
                 * @memberof api.v1.event.RemoveServer
                 * @instance
                 */
                RemoveServer.prototype.id = "";

                /**
                 * Creates a new RemoveServer instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {api.v1.event.IRemoveServer=} [properties] Properties to set
                 * @returns {api.v1.event.RemoveServer} RemoveServer instance
                 */
                RemoveServer.create = function create(properties) {
                    return new RemoveServer(properties);
                };

                /**
                 * Encodes the specified RemoveServer message. Does not implicitly {@link api.v1.event.RemoveServer.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {api.v1.event.IRemoveServer} message RemoveServer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveServer.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified RemoveServer message, length delimited. Does not implicitly {@link api.v1.event.RemoveServer.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {api.v1.event.IRemoveServer} message RemoveServer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveServer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RemoveServer message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.RemoveServer} RemoveServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveServer.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.RemoveServer();
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
                 * Decodes a RemoveServer message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.RemoveServer} RemoveServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveServer.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RemoveServer message.
                 * @function verify
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RemoveServer.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a RemoveServer message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.RemoveServer} RemoveServer
                 */
                RemoveServer.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.RemoveServer)
                        return object;
                    let message = new $root.api.v1.event.RemoveServer();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a RemoveServer message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {api.v1.event.RemoveServer} message RemoveServer
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveServer.toObject = function toObject(message, options) {
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
                 * Converts this RemoveServer to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.RemoveServer
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveServer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RemoveServer
                 * @function getTypeUrl
                 * @memberof api.v1.event.RemoveServer
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RemoveServer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.RemoveServer";
                };

                return RemoveServer;
            })();

            event.RemoveChannel = (function() {

                /**
                 * Properties of a RemoveChannel.
                 * @memberof api.v1.event
                 * @interface IRemoveChannel
                 * @property {string|null} [id] RemoveChannel id
                 */

                /**
                 * Constructs a new RemoveChannel.
                 * @memberof api.v1.event
                 * @classdesc Represents a RemoveChannel.
                 * @implements IRemoveChannel
                 * @constructor
                 * @param {api.v1.event.IRemoveChannel=} [properties] Properties to set
                 */
                function RemoveChannel(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RemoveChannel id.
                 * @member {string} id
                 * @memberof api.v1.event.RemoveChannel
                 * @instance
                 */
                RemoveChannel.prototype.id = "";

                /**
                 * Creates a new RemoveChannel instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {api.v1.event.IRemoveChannel=} [properties] Properties to set
                 * @returns {api.v1.event.RemoveChannel} RemoveChannel instance
                 */
                RemoveChannel.create = function create(properties) {
                    return new RemoveChannel(properties);
                };

                /**
                 * Encodes the specified RemoveChannel message. Does not implicitly {@link api.v1.event.RemoveChannel.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {api.v1.event.IRemoveChannel} message RemoveChannel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveChannel.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified RemoveChannel message, length delimited. Does not implicitly {@link api.v1.event.RemoveChannel.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {api.v1.event.IRemoveChannel} message RemoveChannel message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveChannel.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RemoveChannel message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.RemoveChannel} RemoveChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveChannel.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.RemoveChannel();
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
                 * Decodes a RemoveChannel message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.RemoveChannel} RemoveChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveChannel.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RemoveChannel message.
                 * @function verify
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RemoveChannel.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a RemoveChannel message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.RemoveChannel} RemoveChannel
                 */
                RemoveChannel.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.RemoveChannel)
                        return object;
                    let message = new $root.api.v1.event.RemoveChannel();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a RemoveChannel message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {api.v1.event.RemoveChannel} message RemoveChannel
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveChannel.toObject = function toObject(message, options) {
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
                 * Converts this RemoveChannel to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.RemoveChannel
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveChannel.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RemoveChannel
                 * @function getTypeUrl
                 * @memberof api.v1.event.RemoveChannel
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RemoveChannel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.RemoveChannel";
                };

                return RemoveChannel;
            })();

            event.RemoveRole = (function() {

                /**
                 * Properties of a RemoveRole.
                 * @memberof api.v1.event
                 * @interface IRemoveRole
                 * @property {string|null} [id] RemoveRole id
                 */

                /**
                 * Constructs a new RemoveRole.
                 * @memberof api.v1.event
                 * @classdesc Represents a RemoveRole.
                 * @implements IRemoveRole
                 * @constructor
                 * @param {api.v1.event.IRemoveRole=} [properties] Properties to set
                 */
                function RemoveRole(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RemoveRole id.
                 * @member {string} id
                 * @memberof api.v1.event.RemoveRole
                 * @instance
                 */
                RemoveRole.prototype.id = "";

                /**
                 * Creates a new RemoveRole instance using the specified properties.
                 * @function create
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {api.v1.event.IRemoveRole=} [properties] Properties to set
                 * @returns {api.v1.event.RemoveRole} RemoveRole instance
                 */
                RemoveRole.create = function create(properties) {
                    return new RemoveRole(properties);
                };

                /**
                 * Encodes the specified RemoveRole message. Does not implicitly {@link api.v1.event.RemoveRole.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {api.v1.event.IRemoveRole} message RemoveRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveRole.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified RemoveRole message, length delimited. Does not implicitly {@link api.v1.event.RemoveRole.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {api.v1.event.IRemoveRole} message RemoveRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RemoveRole.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RemoveRole message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.event.RemoveRole} RemoveRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveRole.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.event.RemoveRole();
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
                 * Decodes a RemoveRole message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.event.RemoveRole} RemoveRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RemoveRole.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RemoveRole message.
                 * @function verify
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RemoveRole.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a RemoveRole message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.event.RemoveRole} RemoveRole
                 */
                RemoveRole.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.event.RemoveRole)
                        return object;
                    let message = new $root.api.v1.event.RemoveRole();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a RemoveRole message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {api.v1.event.RemoveRole} message RemoveRole
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RemoveRole.toObject = function toObject(message, options) {
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
                 * Converts this RemoveRole to JSON.
                 * @function toJSON
                 * @memberof api.v1.event.RemoveRole
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RemoveRole.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RemoveRole
                 * @function getTypeUrl
                 * @memberof api.v1.event.RemoveRole
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RemoveRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.event.RemoveRole";
                };

                return RemoveRole;
            })();

            return event;
        })();

        v1.appserver = (function() {

            /**
             * Namespace appserver.
             * @memberof api.v1
             * @namespace
             */
            const appserver = {};

            appserver.AppserverService = (function() {

                /**
                 * Constructs a new AppserverService service.
                 * @memberof api.v1.appserver
                 * @classdesc Represents an AppserverService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function AppserverService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AppserverService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AppserverService;

                /**
                 * Creates new AppserverService service using the specified rpc implementation.
                 * @function create
                 * @memberof api.v1.appserver.AppserverService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {AppserverService} RPC service. Useful where requests and/or responses are streamed.
                 */
                AppserverService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#create}.
                 * @memberof api.v1.appserver.AppserverService
                 * @typedef CreateCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver.CreateResponse} [response] CreateResponse
                 */

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.ICreateRequest} request CreateRequest message or plain object
                 * @param {api.v1.appserver.AppserverService.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverService.prototype.create = function create(request, callback) {
                    return this.rpcCall(create, $root.api.v1.appserver.CreateRequest, $root.api.v1.appserver.CreateResponse, request, callback);
                }, "name", { value: "Create" });

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.ICreateRequest} request CreateRequest message or plain object
                 * @returns {Promise<api.v1.appserver.CreateResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#getById}.
                 * @memberof api.v1.appserver.AppserverService
                 * @typedef GetByIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver.GetByIdResponse} [response] GetByIdResponse
                 */

                /**
                 * Calls GetById.
                 * @function getById
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.IGetByIdRequest} request GetByIdRequest message or plain object
                 * @param {api.v1.appserver.AppserverService.GetByIdCallback} callback Node-style callback called with the error, if any, and GetByIdResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverService.prototype.getById = function getById(request, callback) {
                    return this.rpcCall(getById, $root.api.v1.appserver.GetByIdRequest, $root.api.v1.appserver.GetByIdResponse, request, callback);
                }, "name", { value: "GetById" });

                /**
                 * Calls GetById.
                 * @function getById
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.IGetByIdRequest} request GetByIdRequest message or plain object
                 * @returns {Promise<api.v1.appserver.GetByIdResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#list}.
                 * @memberof api.v1.appserver.AppserverService
                 * @typedef ListCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver.ListResponse} [response] ListResponse
                 */

                /**
                 * Calls List.
                 * @function list
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.IListRequest} request ListRequest message or plain object
                 * @param {api.v1.appserver.AppserverService.ListCallback} callback Node-style callback called with the error, if any, and ListResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverService.prototype.list = function list(request, callback) {
                    return this.rpcCall(list, $root.api.v1.appserver.ListRequest, $root.api.v1.appserver.ListResponse, request, callback);
                }, "name", { value: "List" });

                /**
                 * Calls List.
                 * @function list
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.IListRequest} request ListRequest message or plain object
                 * @returns {Promise<api.v1.appserver.ListResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#delete_}.
                 * @memberof api.v1.appserver.AppserverService
                 * @typedef DeleteCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver.DeleteResponse} [response] DeleteResponse
                 */

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.IDeleteRequest} request DeleteRequest message or plain object
                 * @param {api.v1.appserver.AppserverService.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverService.prototype["delete"] = function delete_(request, callback) {
                    return this.rpcCall(delete_, $root.api.v1.appserver.DeleteRequest, $root.api.v1.appserver.DeleteResponse, request, callback);
                }, "name", { value: "Delete" });

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof api.v1.appserver.AppserverService
                 * @instance
                 * @param {api.v1.appserver.IDeleteRequest} request DeleteRequest message or plain object
                 * @returns {Promise<api.v1.appserver.DeleteResponse>} Promise
                 * @variation 2
                 */

                return AppserverService;
            })();

            appserver.Appserver = (function() {

                /**
                 * Properties of an Appserver.
                 * @memberof api.v1.appserver
                 * @interface IAppserver
                 * @property {string|null} [id] Appserver id
                 * @property {string|null} [name] Appserver name
                 * @property {boolean|null} [is_owner] Appserver is_owner
                 * @property {google.protobuf.ITimestamp|null} [created_at] Appserver created_at
                 * @property {google.protobuf.ITimestamp|null} [updated_at] Appserver updated_at
                 */

                /**
                 * Constructs a new Appserver.
                 * @memberof api.v1.appserver
                 * @classdesc Represents an Appserver.
                 * @implements IAppserver
                 * @constructor
                 * @param {api.v1.appserver.IAppserver=} [properties] Properties to set
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
                 * @memberof api.v1.appserver.Appserver
                 * @instance
                 */
                Appserver.prototype.id = "";

                /**
                 * Appserver name.
                 * @member {string} name
                 * @memberof api.v1.appserver.Appserver
                 * @instance
                 */
                Appserver.prototype.name = "";

                /**
                 * Appserver is_owner.
                 * @member {boolean} is_owner
                 * @memberof api.v1.appserver.Appserver
                 * @instance
                 */
                Appserver.prototype.is_owner = false;

                /**
                 * Appserver created_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} created_at
                 * @memberof api.v1.appserver.Appserver
                 * @instance
                 */
                Appserver.prototype.created_at = null;

                /**
                 * Appserver updated_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} updated_at
                 * @memberof api.v1.appserver.Appserver
                 * @instance
                 */
                Appserver.prototype.updated_at = null;

                /**
                 * Creates a new Appserver instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {api.v1.appserver.IAppserver=} [properties] Properties to set
                 * @returns {api.v1.appserver.Appserver} Appserver instance
                 */
                Appserver.create = function create(properties) {
                    return new Appserver(properties);
                };

                /**
                 * Encodes the specified Appserver message. Does not implicitly {@link api.v1.appserver.Appserver.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {api.v1.appserver.IAppserver} message Appserver message or plain object to encode
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
                    if (message.is_owner != null && Object.hasOwnProperty.call(message, "is_owner"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_owner);
                    if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                        $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                        $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Appserver message, length delimited. Does not implicitly {@link api.v1.appserver.Appserver.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {api.v1.appserver.IAppserver} message Appserver message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Appserver.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Appserver message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.Appserver} Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Appserver.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.Appserver();
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
                                message.is_owner = reader.bool();
                                break;
                            }
                        case 4: {
                                message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.Appserver} Appserver
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
                 * @memberof api.v1.appserver.Appserver
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
                    if (message.is_owner != null && message.hasOwnProperty("is_owner"))
                        if (typeof message.is_owner !== "boolean")
                            return "is_owner: boolean expected";
                    if (message.created_at != null && message.hasOwnProperty("created_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                        if (error)
                            return "created_at." + error;
                    }
                    if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                        if (error)
                            return "updated_at." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Appserver message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.Appserver} Appserver
                 */
                Appserver.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.Appserver)
                        return object;
                    let message = new $root.api.v1.appserver.Appserver();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.is_owner != null)
                        message.is_owner = Boolean(object.is_owner);
                    if (object.created_at != null) {
                        if (typeof object.created_at !== "object")
                            throw TypeError(".api.v1.appserver.Appserver.created_at: object expected");
                        message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
                    }
                    if (object.updated_at != null) {
                        if (typeof object.updated_at !== "object")
                            throw TypeError(".api.v1.appserver.Appserver.updated_at: object expected");
                        message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Appserver message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {api.v1.appserver.Appserver} message Appserver
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
                        object.is_owner = false;
                        object.created_at = null;
                        object.updated_at = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.is_owner != null && message.hasOwnProperty("is_owner"))
                        object.is_owner = message.is_owner;
                    if (message.created_at != null && message.hasOwnProperty("created_at"))
                        object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
                    if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                        object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
                    return object;
                };

                /**
                 * Converts this Appserver to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.Appserver
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Appserver.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Appserver
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.Appserver
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Appserver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.Appserver";
                };

                return Appserver;
            })();

            appserver.CreateRequest = (function() {

                /**
                 * Properties of a CreateRequest.
                 * @memberof api.v1.appserver
                 * @interface ICreateRequest
                 * @property {string|null} [name] CreateRequest name
                 */

                /**
                 * Constructs a new CreateRequest.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a CreateRequest.
                 * @implements ICreateRequest
                 * @constructor
                 * @param {api.v1.appserver.ICreateRequest=} [properties] Properties to set
                 */
                function CreateRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateRequest name.
                 * @member {string} name
                 * @memberof api.v1.appserver.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.name = "";

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {api.v1.appserver.ICreateRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver.CreateRequest} CreateRequest instance
                 */
                CreateRequest.create = function create(properties) {
                    return new CreateRequest(properties);
                };

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.appserver.CreateRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {api.v1.appserver.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {api.v1.appserver.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.CreateRequest();
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
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateRequest message.
                 * @function verify
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.CreateRequest} CreateRequest
                 */
                CreateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.CreateRequest)
                        return object;
                    let message = new $root.api.v1.appserver.CreateRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {api.v1.appserver.CreateRequest} message CreateRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateRequest.toObject = function toObject(message, options) {
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
                 * Converts this CreateRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.CreateRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.CreateRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.CreateRequest";
                };

                return CreateRequest;
            })();

            appserver.CreateResponse = (function() {

                /**
                 * Properties of a CreateResponse.
                 * @memberof api.v1.appserver
                 * @interface ICreateResponse
                 * @property {api.v1.appserver.IAppserver|null} [appserver] CreateResponse appserver
                 */

                /**
                 * Constructs a new CreateResponse.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a CreateResponse.
                 * @implements ICreateResponse
                 * @constructor
                 * @param {api.v1.appserver.ICreateResponse=} [properties] Properties to set
                 */
                function CreateResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateResponse appserver.
                 * @member {api.v1.appserver.IAppserver|null|undefined} appserver
                 * @memberof api.v1.appserver.CreateResponse
                 * @instance
                 */
                CreateResponse.prototype.appserver = null;

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {api.v1.appserver.ICreateResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver.CreateResponse} CreateResponse instance
                 */
                CreateResponse.create = function create(properties) {
                    return new CreateResponse(properties);
                };

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.appserver.CreateResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {api.v1.appserver.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.appserver.Appserver.encode(message.appserver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {api.v1.appserver.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.CreateResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver = $root.api.v1.appserver.Appserver.decode(reader, reader.uint32());
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
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateResponse message.
                 * @function verify
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.appserver.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.CreateResponse} CreateResponse
                 */
                CreateResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.CreateResponse)
                        return object;
                    let message = new $root.api.v1.appserver.CreateResponse();
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.appserver.CreateResponse.appserver: object expected");
                        message.appserver = $root.api.v1.appserver.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {api.v1.appserver.CreateResponse} message CreateResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver = null;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.appserver.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this CreateResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.CreateResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.CreateResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.CreateResponse";
                };

                return CreateResponse;
            })();

            appserver.GetByIdRequest = (function() {

                /**
                 * Properties of a GetByIdRequest.
                 * @memberof api.v1.appserver
                 * @interface IGetByIdRequest
                 * @property {string|null} [id] GetByIdRequest id
                 */

                /**
                 * Constructs a new GetByIdRequest.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a GetByIdRequest.
                 * @implements IGetByIdRequest
                 * @constructor
                 * @param {api.v1.appserver.IGetByIdRequest=} [properties] Properties to set
                 */
                function GetByIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdRequest id.
                 * @member {string} id
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @instance
                 */
                GetByIdRequest.prototype.id = "";

                /**
                 * Creates a new GetByIdRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {api.v1.appserver.IGetByIdRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver.GetByIdRequest} GetByIdRequest instance
                 */
                GetByIdRequest.create = function create(properties) {
                    return new GetByIdRequest(properties);
                };

                /**
                 * Encodes the specified GetByIdRequest message. Does not implicitly {@link api.v1.appserver.GetByIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {api.v1.appserver.IGetByIdRequest} message GetByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {api.v1.appserver.IGetByIdRequest} message GetByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.GetByIdRequest} GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.GetByIdRequest();
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
                 * Decodes a GetByIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.GetByIdRequest} GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdRequest message.
                 * @function verify
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a GetByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.GetByIdRequest} GetByIdRequest
                 */
                GetByIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.GetByIdRequest)
                        return object;
                    let message = new $root.api.v1.appserver.GetByIdRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {api.v1.appserver.GetByIdRequest} message GetByIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdRequest.toObject = function toObject(message, options) {
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
                 * Converts this GetByIdRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.GetByIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.GetByIdRequest";
                };

                return GetByIdRequest;
            })();

            appserver.GetByIdResponse = (function() {

                /**
                 * Properties of a GetByIdResponse.
                 * @memberof api.v1.appserver
                 * @interface IGetByIdResponse
                 * @property {api.v1.appserver.IAppserver|null} [appserver] GetByIdResponse appserver
                 */

                /**
                 * Constructs a new GetByIdResponse.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a GetByIdResponse.
                 * @implements IGetByIdResponse
                 * @constructor
                 * @param {api.v1.appserver.IGetByIdResponse=} [properties] Properties to set
                 */
                function GetByIdResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdResponse appserver.
                 * @member {api.v1.appserver.IAppserver|null|undefined} appserver
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @instance
                 */
                GetByIdResponse.prototype.appserver = null;

                /**
                 * Creates a new GetByIdResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {api.v1.appserver.IGetByIdResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver.GetByIdResponse} GetByIdResponse instance
                 */
                GetByIdResponse.create = function create(properties) {
                    return new GetByIdResponse(properties);
                };

                /**
                 * Encodes the specified GetByIdResponse message. Does not implicitly {@link api.v1.appserver.GetByIdResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {api.v1.appserver.IGetByIdResponse} message GetByIdResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver != null && Object.hasOwnProperty.call(message, "appserver"))
                        $root.api.v1.appserver.Appserver.encode(message.appserver, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {api.v1.appserver.IGetByIdResponse} message GetByIdResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.GetByIdResponse} GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.GetByIdResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver = $root.api.v1.appserver.Appserver.decode(reader, reader.uint32());
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
                 * Decodes a GetByIdResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.GetByIdResponse} GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdResponse message.
                 * @function verify
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver != null && message.hasOwnProperty("appserver")) {
                        let error = $root.api.v1.appserver.Appserver.verify(message.appserver);
                        if (error)
                            return "appserver." + error;
                    }
                    return null;
                };

                /**
                 * Creates a GetByIdResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.GetByIdResponse} GetByIdResponse
                 */
                GetByIdResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.GetByIdResponse)
                        return object;
                    let message = new $root.api.v1.appserver.GetByIdResponse();
                    if (object.appserver != null) {
                        if (typeof object.appserver !== "object")
                            throw TypeError(".api.v1.appserver.GetByIdResponse.appserver: object expected");
                        message.appserver = $root.api.v1.appserver.Appserver.fromObject(object.appserver);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {api.v1.appserver.GetByIdResponse} message GetByIdResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver = null;
                    if (message.appserver != null && message.hasOwnProperty("appserver"))
                        object.appserver = $root.api.v1.appserver.Appserver.toObject(message.appserver, options);
                    return object;
                };

                /**
                 * Converts this GetByIdResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.GetByIdResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.GetByIdResponse";
                };

                return GetByIdResponse;
            })();

            appserver.ListRequest = (function() {

                /**
                 * Properties of a ListRequest.
                 * @memberof api.v1.appserver
                 * @interface IListRequest
                 * @property {google.protobuf.IStringValue|null} [name] ListRequest name
                 */

                /**
                 * Constructs a new ListRequest.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a ListRequest.
                 * @implements IListRequest
                 * @constructor
                 * @param {api.v1.appserver.IListRequest=} [properties] Properties to set
                 */
                function ListRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof api.v1.appserver.ListRequest
                 * @instance
                 */
                ListRequest.prototype.name = null;

                /**
                 * Creates a new ListRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {api.v1.appserver.IListRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver.ListRequest} ListRequest instance
                 */
                ListRequest.create = function create(properties) {
                    return new ListRequest(properties);
                };

                /**
                 * Encodes the specified ListRequest message. Does not implicitly {@link api.v1.appserver.ListRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {api.v1.appserver.IListRequest} message ListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListRequest message, length delimited. Does not implicitly {@link api.v1.appserver.ListRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {api.v1.appserver.IListRequest} message ListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.ListRequest} ListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.ListRequest();
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
                 * Decodes a ListRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.ListRequest} ListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListRequest message.
                 * @function verify
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListRequest.verify = function verify(message) {
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
                 * Creates a ListRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.ListRequest} ListRequest
                 */
                ListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.ListRequest)
                        return object;
                    let message = new $root.api.v1.appserver.ListRequest();
                    if (object.name != null) {
                        if (typeof object.name !== "object")
                            throw TypeError(".api.v1.appserver.ListRequest.name: object expected");
                        message.name = $root.google.protobuf.StringValue.fromObject(object.name);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {api.v1.appserver.ListRequest} message ListRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListRequest.toObject = function toObject(message, options) {
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
                 * Converts this ListRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.ListRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.ListRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.ListRequest";
                };

                return ListRequest;
            })();

            appserver.ListResponse = (function() {

                /**
                 * Properties of a ListResponse.
                 * @memberof api.v1.appserver
                 * @interface IListResponse
                 * @property {Array.<api.v1.appserver.IAppserver>|null} [appservers] ListResponse appservers
                 */

                /**
                 * Constructs a new ListResponse.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a ListResponse.
                 * @implements IListResponse
                 * @constructor
                 * @param {api.v1.appserver.IListResponse=} [properties] Properties to set
                 */
                function ListResponse(properties) {
                    this.appservers = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListResponse appservers.
                 * @member {Array.<api.v1.appserver.IAppserver>} appservers
                 * @memberof api.v1.appserver.ListResponse
                 * @instance
                 */
                ListResponse.prototype.appservers = $util.emptyArray;

                /**
                 * Creates a new ListResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {api.v1.appserver.IListResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver.ListResponse} ListResponse instance
                 */
                ListResponse.create = function create(properties) {
                    return new ListResponse(properties);
                };

                /**
                 * Encodes the specified ListResponse message. Does not implicitly {@link api.v1.appserver.ListResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {api.v1.appserver.IListResponse} message ListResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appservers != null && message.appservers.length)
                        for (let i = 0; i < message.appservers.length; ++i)
                            $root.api.v1.appserver.Appserver.encode(message.appservers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListResponse message, length delimited. Does not implicitly {@link api.v1.appserver.ListResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {api.v1.appserver.IListResponse} message ListResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.ListResponse} ListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.ListResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appservers && message.appservers.length))
                                    message.appservers = [];
                                message.appservers.push($root.api.v1.appserver.Appserver.decode(reader, reader.uint32()));
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
                 * Decodes a ListResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.ListResponse} ListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListResponse message.
                 * @function verify
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appservers != null && message.hasOwnProperty("appservers")) {
                        if (!Array.isArray(message.appservers))
                            return "appservers: array expected";
                        for (let i = 0; i < message.appservers.length; ++i) {
                            let error = $root.api.v1.appserver.Appserver.verify(message.appservers[i]);
                            if (error)
                                return "appservers." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.ListResponse} ListResponse
                 */
                ListResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.ListResponse)
                        return object;
                    let message = new $root.api.v1.appserver.ListResponse();
                    if (object.appservers) {
                        if (!Array.isArray(object.appservers))
                            throw TypeError(".api.v1.appserver.ListResponse.appservers: array expected");
                        message.appservers = [];
                        for (let i = 0; i < object.appservers.length; ++i) {
                            if (typeof object.appservers[i] !== "object")
                                throw TypeError(".api.v1.appserver.ListResponse.appservers: object expected");
                            message.appservers[i] = $root.api.v1.appserver.Appserver.fromObject(object.appservers[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {api.v1.appserver.ListResponse} message ListResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appservers = [];
                    if (message.appservers && message.appservers.length) {
                        object.appservers = [];
                        for (let j = 0; j < message.appservers.length; ++j)
                            object.appservers[j] = $root.api.v1.appserver.Appserver.toObject(message.appservers[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.ListResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.ListResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.ListResponse";
                };

                return ListResponse;
            })();

            appserver.DeleteRequest = (function() {

                /**
                 * Properties of a DeleteRequest.
                 * @memberof api.v1.appserver
                 * @interface IDeleteRequest
                 * @property {string|null} [id] DeleteRequest id
                 */

                /**
                 * Constructs a new DeleteRequest.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a DeleteRequest.
                 * @implements IDeleteRequest
                 * @constructor
                 * @param {api.v1.appserver.IDeleteRequest=} [properties] Properties to set
                 */
                function DeleteRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteRequest id.
                 * @member {string} id
                 * @memberof api.v1.appserver.DeleteRequest
                 * @instance
                 */
                DeleteRequest.prototype.id = "";

                /**
                 * Creates a new DeleteRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {api.v1.appserver.IDeleteRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver.DeleteRequest} DeleteRequest instance
                 */
                DeleteRequest.create = function create(properties) {
                    return new DeleteRequest(properties);
                };

                /**
                 * Encodes the specified DeleteRequest message. Does not implicitly {@link api.v1.appserver.DeleteRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {api.v1.appserver.IDeleteRequest} message DeleteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {api.v1.appserver.IDeleteRequest} message DeleteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.DeleteRequest} DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.DeleteRequest();
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
                 * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.DeleteRequest} DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteRequest message.
                 * @function verify
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.DeleteRequest} DeleteRequest
                 */
                DeleteRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.DeleteRequest)
                        return object;
                    let message = new $root.api.v1.appserver.DeleteRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {api.v1.appserver.DeleteRequest} message DeleteRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteRequest.toObject = function toObject(message, options) {
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
                 * Converts this DeleteRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.DeleteRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.DeleteRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.DeleteRequest";
                };

                return DeleteRequest;
            })();

            appserver.DeleteResponse = (function() {

                /**
                 * Properties of a DeleteResponse.
                 * @memberof api.v1.appserver
                 * @interface IDeleteResponse
                 */

                /**
                 * Constructs a new DeleteResponse.
                 * @memberof api.v1.appserver
                 * @classdesc Represents a DeleteResponse.
                 * @implements IDeleteResponse
                 * @constructor
                 * @param {api.v1.appserver.IDeleteResponse=} [properties] Properties to set
                 */
                function DeleteResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {api.v1.appserver.IDeleteResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver.DeleteResponse} DeleteResponse instance
                 */
                DeleteResponse.create = function create(properties) {
                    return new DeleteResponse(properties);
                };

                /**
                 * Encodes the specified DeleteResponse message. Does not implicitly {@link api.v1.appserver.DeleteResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {api.v1.appserver.IDeleteResponse} message DeleteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {api.v1.appserver.IDeleteResponse} message DeleteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver.DeleteResponse} DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver.DeleteResponse();
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
                 * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver.DeleteResponse} DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteResponse message.
                 * @function verify
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver.DeleteResponse} DeleteResponse
                 */
                DeleteResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver.DeleteResponse)
                        return object;
                    return new $root.api.v1.appserver.DeleteResponse();
                };

                /**
                 * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {api.v1.appserver.DeleteResponse} message DeleteResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver.DeleteResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver.DeleteResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver.DeleteResponse";
                };

                return DeleteResponse;
            })();

            return appserver;
        })();

        v1.appserver_role = (function() {

            /**
             * Namespace appserver_role.
             * @memberof api.v1
             * @namespace
             */
            const appserver_role = {};

            appserver_role.AppserverRoleService = (function() {

                /**
                 * Constructs a new AppserverRoleService service.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents an AppserverRoleService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function AppserverRoleService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AppserverRoleService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AppserverRoleService;

                /**
                 * Creates new AppserverRoleService service using the specified rpc implementation.
                 * @function create
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {AppserverRoleService} RPC service. Useful where requests and/or responses are streamed.
                 */
                AppserverRoleService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link api.v1.appserver_role.AppserverRoleService#create}.
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @typedef CreateCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver_role.CreateResponse} [response] CreateResponse
                 */

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @instance
                 * @param {api.v1.appserver_role.ICreateRequest} request CreateRequest message or plain object
                 * @param {api.v1.appserver_role.AppserverRoleService.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverRoleService.prototype.create = function create(request, callback) {
                    return this.rpcCall(create, $root.api.v1.appserver_role.CreateRequest, $root.api.v1.appserver_role.CreateResponse, request, callback);
                }, "name", { value: "Create" });

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @instance
                 * @param {api.v1.appserver_role.ICreateRequest} request CreateRequest message or plain object
                 * @returns {Promise<api.v1.appserver_role.CreateResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.appserver_role.AppserverRoleService#listServerRoles}.
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @typedef ListServerRolesCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver_role.ListServerRolesResponse} [response] ListServerRolesResponse
                 */

                /**
                 * Calls ListServerRoles.
                 * @function listServerRoles
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @instance
                 * @param {api.v1.appserver_role.IListServerRolesRequest} request ListServerRolesRequest message or plain object
                 * @param {api.v1.appserver_role.AppserverRoleService.ListServerRolesCallback} callback Node-style callback called with the error, if any, and ListServerRolesResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverRoleService.prototype.listServerRoles = function listServerRoles(request, callback) {
                    return this.rpcCall(listServerRoles, $root.api.v1.appserver_role.ListServerRolesRequest, $root.api.v1.appserver_role.ListServerRolesResponse, request, callback);
                }, "name", { value: "ListServerRoles" });

                /**
                 * Calls ListServerRoles.
                 * @function listServerRoles
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @instance
                 * @param {api.v1.appserver_role.IListServerRolesRequest} request ListServerRolesRequest message or plain object
                 * @returns {Promise<api.v1.appserver_role.ListServerRolesResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.appserver_role.AppserverRoleService#delete_}.
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @typedef DeleteCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.appserver_role.DeleteResponse} [response] DeleteResponse
                 */

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @instance
                 * @param {api.v1.appserver_role.IDeleteRequest} request DeleteRequest message or plain object
                 * @param {api.v1.appserver_role.AppserverRoleService.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(AppserverRoleService.prototype["delete"] = function delete_(request, callback) {
                    return this.rpcCall(delete_, $root.api.v1.appserver_role.DeleteRequest, $root.api.v1.appserver_role.DeleteResponse, request, callback);
                }, "name", { value: "Delete" });

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof api.v1.appserver_role.AppserverRoleService
                 * @instance
                 * @param {api.v1.appserver_role.IDeleteRequest} request DeleteRequest message or plain object
                 * @returns {Promise<api.v1.appserver_role.DeleteResponse>} Promise
                 * @variation 2
                 */

                return AppserverRoleService;
            })();

            appserver_role.AppserverRole = (function() {

                /**
                 * Properties of an AppserverRole.
                 * @memberof api.v1.appserver_role
                 * @interface IAppserverRole
                 * @property {string|null} [id] AppserverRole id
                 * @property {string|null} [name] AppserverRole name
                 * @property {string|null} [appserver_id] AppserverRole appserver_id
                 * @property {Long|null} [appserver_permission_mask] AppserverRole appserver_permission_mask
                 * @property {Long|null} [channel_permission_mask] AppserverRole channel_permission_mask
                 * @property {Long|null} [sub_permission_mask] AppserverRole sub_permission_mask
                 * @property {google.protobuf.ITimestamp|null} [created_at] AppserverRole created_at
                 * @property {google.protobuf.ITimestamp|null} [updated_at] AppserverRole updated_at
                 */

                /**
                 * Constructs a new AppserverRole.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents an AppserverRole.
                 * @implements IAppserverRole
                 * @constructor
                 * @param {api.v1.appserver_role.IAppserverRole=} [properties] Properties to set
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
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.id = "";

                /**
                 * AppserverRole name.
                 * @member {string} name
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.name = "";

                /**
                 * AppserverRole appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.appserver_id = "";

                /**
                 * AppserverRole appserver_permission_mask.
                 * @member {Long} appserver_permission_mask
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.appserver_permission_mask = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * AppserverRole channel_permission_mask.
                 * @member {Long} channel_permission_mask
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.channel_permission_mask = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * AppserverRole sub_permission_mask.
                 * @member {Long} sub_permission_mask
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.sub_permission_mask = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * AppserverRole created_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} created_at
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.created_at = null;

                /**
                 * AppserverRole updated_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} updated_at
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 */
                AppserverRole.prototype.updated_at = null;

                /**
                 * Creates a new AppserverRole instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {api.v1.appserver_role.IAppserverRole=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.AppserverRole} AppserverRole instance
                 */
                AppserverRole.create = function create(properties) {
                    return new AppserverRole(properties);
                };

                /**
                 * Encodes the specified AppserverRole message. Does not implicitly {@link api.v1.appserver_role.AppserverRole.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {api.v1.appserver_role.IAppserverRole} message AppserverRole message or plain object to encode
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
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appserver_id);
                    if (message.appserver_permission_mask != null && Object.hasOwnProperty.call(message, "appserver_permission_mask"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.appserver_permission_mask);
                    if (message.channel_permission_mask != null && Object.hasOwnProperty.call(message, "channel_permission_mask"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.channel_permission_mask);
                    if (message.sub_permission_mask != null && Object.hasOwnProperty.call(message, "sub_permission_mask"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int64(message.sub_permission_mask);
                    if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                        $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                        $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AppserverRole message, length delimited. Does not implicitly {@link api.v1.appserver_role.AppserverRole.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {api.v1.appserver_role.IAppserverRole} message AppserverRole message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppserverRole.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppserverRole message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.AppserverRole} AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppserverRole.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.AppserverRole();
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
                                message.appserver_id = reader.string();
                                break;
                            }
                        case 4: {
                                message.appserver_permission_mask = reader.int64();
                                break;
                            }
                        case 5: {
                                message.channel_permission_mask = reader.int64();
                                break;
                            }
                        case 6: {
                                message.sub_permission_mask = reader.int64();
                                break;
                            }
                        case 7: {
                                message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 8: {
                                message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.AppserverRole} AppserverRole
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
                 * @memberof api.v1.appserver_role.AppserverRole
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
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    if (message.appserver_permission_mask != null && message.hasOwnProperty("appserver_permission_mask"))
                        if (!$util.isInteger(message.appserver_permission_mask) && !(message.appserver_permission_mask && $util.isInteger(message.appserver_permission_mask.low) && $util.isInteger(message.appserver_permission_mask.high)))
                            return "appserver_permission_mask: integer|Long expected";
                    if (message.channel_permission_mask != null && message.hasOwnProperty("channel_permission_mask"))
                        if (!$util.isInteger(message.channel_permission_mask) && !(message.channel_permission_mask && $util.isInteger(message.channel_permission_mask.low) && $util.isInteger(message.channel_permission_mask.high)))
                            return "channel_permission_mask: integer|Long expected";
                    if (message.sub_permission_mask != null && message.hasOwnProperty("sub_permission_mask"))
                        if (!$util.isInteger(message.sub_permission_mask) && !(message.sub_permission_mask && $util.isInteger(message.sub_permission_mask.low) && $util.isInteger(message.sub_permission_mask.high)))
                            return "sub_permission_mask: integer|Long expected";
                    if (message.created_at != null && message.hasOwnProperty("created_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                        if (error)
                            return "created_at." + error;
                    }
                    if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                        if (error)
                            return "updated_at." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AppserverRole message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.AppserverRole} AppserverRole
                 */
                AppserverRole.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.AppserverRole)
                        return object;
                    let message = new $root.api.v1.appserver_role.AppserverRole();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    if (object.appserver_permission_mask != null)
                        if ($util.Long)
                            (message.appserver_permission_mask = $util.Long.fromValue(object.appserver_permission_mask)).unsigned = false;
                        else if (typeof object.appserver_permission_mask === "string")
                            message.appserver_permission_mask = parseInt(object.appserver_permission_mask, 10);
                        else if (typeof object.appserver_permission_mask === "number")
                            message.appserver_permission_mask = object.appserver_permission_mask;
                        else if (typeof object.appserver_permission_mask === "object")
                            message.appserver_permission_mask = new $util.LongBits(object.appserver_permission_mask.low >>> 0, object.appserver_permission_mask.high >>> 0).toNumber();
                    if (object.channel_permission_mask != null)
                        if ($util.Long)
                            (message.channel_permission_mask = $util.Long.fromValue(object.channel_permission_mask)).unsigned = false;
                        else if (typeof object.channel_permission_mask === "string")
                            message.channel_permission_mask = parseInt(object.channel_permission_mask, 10);
                        else if (typeof object.channel_permission_mask === "number")
                            message.channel_permission_mask = object.channel_permission_mask;
                        else if (typeof object.channel_permission_mask === "object")
                            message.channel_permission_mask = new $util.LongBits(object.channel_permission_mask.low >>> 0, object.channel_permission_mask.high >>> 0).toNumber();
                    if (object.sub_permission_mask != null)
                        if ($util.Long)
                            (message.sub_permission_mask = $util.Long.fromValue(object.sub_permission_mask)).unsigned = false;
                        else if (typeof object.sub_permission_mask === "string")
                            message.sub_permission_mask = parseInt(object.sub_permission_mask, 10);
                        else if (typeof object.sub_permission_mask === "number")
                            message.sub_permission_mask = object.sub_permission_mask;
                        else if (typeof object.sub_permission_mask === "object")
                            message.sub_permission_mask = new $util.LongBits(object.sub_permission_mask.low >>> 0, object.sub_permission_mask.high >>> 0).toNumber();
                    if (object.created_at != null) {
                        if (typeof object.created_at !== "object")
                            throw TypeError(".api.v1.appserver_role.AppserverRole.created_at: object expected");
                        message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
                    }
                    if (object.updated_at != null) {
                        if (typeof object.updated_at !== "object")
                            throw TypeError(".api.v1.appserver_role.AppserverRole.updated_at: object expected");
                        message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AppserverRole message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {api.v1.appserver_role.AppserverRole} message AppserverRole
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
                        object.appserver_id = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.appserver_permission_mask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.appserver_permission_mask = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.channel_permission_mask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channel_permission_mask = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.sub_permission_mask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.sub_permission_mask = options.longs === String ? "0" : 0;
                        object.created_at = null;
                        object.updated_at = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    if (message.appserver_permission_mask != null && message.hasOwnProperty("appserver_permission_mask"))
                        if (typeof message.appserver_permission_mask === "number")
                            object.appserver_permission_mask = options.longs === String ? String(message.appserver_permission_mask) : message.appserver_permission_mask;
                        else
                            object.appserver_permission_mask = options.longs === String ? $util.Long.prototype.toString.call(message.appserver_permission_mask) : options.longs === Number ? new $util.LongBits(message.appserver_permission_mask.low >>> 0, message.appserver_permission_mask.high >>> 0).toNumber() : message.appserver_permission_mask;
                    if (message.channel_permission_mask != null && message.hasOwnProperty("channel_permission_mask"))
                        if (typeof message.channel_permission_mask === "number")
                            object.channel_permission_mask = options.longs === String ? String(message.channel_permission_mask) : message.channel_permission_mask;
                        else
                            object.channel_permission_mask = options.longs === String ? $util.Long.prototype.toString.call(message.channel_permission_mask) : options.longs === Number ? new $util.LongBits(message.channel_permission_mask.low >>> 0, message.channel_permission_mask.high >>> 0).toNumber() : message.channel_permission_mask;
                    if (message.sub_permission_mask != null && message.hasOwnProperty("sub_permission_mask"))
                        if (typeof message.sub_permission_mask === "number")
                            object.sub_permission_mask = options.longs === String ? String(message.sub_permission_mask) : message.sub_permission_mask;
                        else
                            object.sub_permission_mask = options.longs === String ? $util.Long.prototype.toString.call(message.sub_permission_mask) : options.longs === Number ? new $util.LongBits(message.sub_permission_mask.low >>> 0, message.sub_permission_mask.high >>> 0).toNumber() : message.sub_permission_mask;
                    if (message.created_at != null && message.hasOwnProperty("created_at"))
                        object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
                    if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                        object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
                    return object;
                };

                /**
                 * Converts this AppserverRole to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppserverRole.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppserverRole
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.AppserverRole
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppserverRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.AppserverRole";
                };

                return AppserverRole;
            })();

            appserver_role.CreateRequest = (function() {

                /**
                 * Properties of a CreateRequest.
                 * @memberof api.v1.appserver_role
                 * @interface ICreateRequest
                 * @property {string|null} [appserver_id] CreateRequest appserver_id
                 * @property {string|null} [name] CreateRequest name
                 * @property {Long|null} [appserver_permission_mask] CreateRequest appserver_permission_mask
                 * @property {Long|null} [channel_permission_mask] CreateRequest channel_permission_mask
                 * @property {Long|null} [sub_permission_mask] CreateRequest sub_permission_mask
                 */

                /**
                 * Constructs a new CreateRequest.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents a CreateRequest.
                 * @implements ICreateRequest
                 * @constructor
                 * @param {api.v1.appserver_role.ICreateRequest=} [properties] Properties to set
                 */
                function CreateRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.appserver_id = "";

                /**
                 * CreateRequest name.
                 * @member {string} name
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.name = "";

                /**
                 * CreateRequest appserver_permission_mask.
                 * @member {Long} appserver_permission_mask
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.appserver_permission_mask = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateRequest channel_permission_mask.
                 * @member {Long} channel_permission_mask
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.channel_permission_mask = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * CreateRequest sub_permission_mask.
                 * @member {Long} sub_permission_mask
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.sub_permission_mask = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {api.v1.appserver_role.ICreateRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.CreateRequest} CreateRequest instance
                 */
                CreateRequest.create = function create(properties) {
                    return new CreateRequest(properties);
                };

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.appserver_role.CreateRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {api.v1.appserver_role.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appserver_id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.appserver_permission_mask != null && Object.hasOwnProperty.call(message, "appserver_permission_mask"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.appserver_permission_mask);
                    if (message.channel_permission_mask != null && Object.hasOwnProperty.call(message, "channel_permission_mask"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.channel_permission_mask);
                    if (message.sub_permission_mask != null && Object.hasOwnProperty.call(message, "sub_permission_mask"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.sub_permission_mask);
                    return writer;
                };

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.appserver_role.CreateRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {api.v1.appserver_role.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.CreateRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver_id = reader.string();
                                break;
                            }
                        case 2: {
                                message.name = reader.string();
                                break;
                            }
                        case 3: {
                                message.appserver_permission_mask = reader.int64();
                                break;
                            }
                        case 4: {
                                message.channel_permission_mask = reader.int64();
                                break;
                            }
                        case 5: {
                                message.sub_permission_mask = reader.int64();
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
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateRequest message.
                 * @function verify
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.appserver_permission_mask != null && message.hasOwnProperty("appserver_permission_mask"))
                        if (!$util.isInteger(message.appserver_permission_mask) && !(message.appserver_permission_mask && $util.isInteger(message.appserver_permission_mask.low) && $util.isInteger(message.appserver_permission_mask.high)))
                            return "appserver_permission_mask: integer|Long expected";
                    if (message.channel_permission_mask != null && message.hasOwnProperty("channel_permission_mask"))
                        if (!$util.isInteger(message.channel_permission_mask) && !(message.channel_permission_mask && $util.isInteger(message.channel_permission_mask.low) && $util.isInteger(message.channel_permission_mask.high)))
                            return "channel_permission_mask: integer|Long expected";
                    if (message.sub_permission_mask != null && message.hasOwnProperty("sub_permission_mask"))
                        if (!$util.isInteger(message.sub_permission_mask) && !(message.sub_permission_mask && $util.isInteger(message.sub_permission_mask.low) && $util.isInteger(message.sub_permission_mask.high)))
                            return "sub_permission_mask: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.CreateRequest} CreateRequest
                 */
                CreateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.CreateRequest)
                        return object;
                    let message = new $root.api.v1.appserver_role.CreateRequest();
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.appserver_permission_mask != null)
                        if ($util.Long)
                            (message.appserver_permission_mask = $util.Long.fromValue(object.appserver_permission_mask)).unsigned = false;
                        else if (typeof object.appserver_permission_mask === "string")
                            message.appserver_permission_mask = parseInt(object.appserver_permission_mask, 10);
                        else if (typeof object.appserver_permission_mask === "number")
                            message.appserver_permission_mask = object.appserver_permission_mask;
                        else if (typeof object.appserver_permission_mask === "object")
                            message.appserver_permission_mask = new $util.LongBits(object.appserver_permission_mask.low >>> 0, object.appserver_permission_mask.high >>> 0).toNumber();
                    if (object.channel_permission_mask != null)
                        if ($util.Long)
                            (message.channel_permission_mask = $util.Long.fromValue(object.channel_permission_mask)).unsigned = false;
                        else if (typeof object.channel_permission_mask === "string")
                            message.channel_permission_mask = parseInt(object.channel_permission_mask, 10);
                        else if (typeof object.channel_permission_mask === "number")
                            message.channel_permission_mask = object.channel_permission_mask;
                        else if (typeof object.channel_permission_mask === "object")
                            message.channel_permission_mask = new $util.LongBits(object.channel_permission_mask.low >>> 0, object.channel_permission_mask.high >>> 0).toNumber();
                    if (object.sub_permission_mask != null)
                        if ($util.Long)
                            (message.sub_permission_mask = $util.Long.fromValue(object.sub_permission_mask)).unsigned = false;
                        else if (typeof object.sub_permission_mask === "string")
                            message.sub_permission_mask = parseInt(object.sub_permission_mask, 10);
                        else if (typeof object.sub_permission_mask === "number")
                            message.sub_permission_mask = object.sub_permission_mask;
                        else if (typeof object.sub_permission_mask === "object")
                            message.sub_permission_mask = new $util.LongBits(object.sub_permission_mask.low >>> 0, object.sub_permission_mask.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {api.v1.appserver_role.CreateRequest} message CreateRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.appserver_id = "";
                        object.name = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.appserver_permission_mask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.appserver_permission_mask = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.channel_permission_mask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channel_permission_mask = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.sub_permission_mask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.sub_permission_mask = options.longs === String ? "0" : 0;
                    }
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserver_permission_mask != null && message.hasOwnProperty("appserver_permission_mask"))
                        if (typeof message.appserver_permission_mask === "number")
                            object.appserver_permission_mask = options.longs === String ? String(message.appserver_permission_mask) : message.appserver_permission_mask;
                        else
                            object.appserver_permission_mask = options.longs === String ? $util.Long.prototype.toString.call(message.appserver_permission_mask) : options.longs === Number ? new $util.LongBits(message.appserver_permission_mask.low >>> 0, message.appserver_permission_mask.high >>> 0).toNumber() : message.appserver_permission_mask;
                    if (message.channel_permission_mask != null && message.hasOwnProperty("channel_permission_mask"))
                        if (typeof message.channel_permission_mask === "number")
                            object.channel_permission_mask = options.longs === String ? String(message.channel_permission_mask) : message.channel_permission_mask;
                        else
                            object.channel_permission_mask = options.longs === String ? $util.Long.prototype.toString.call(message.channel_permission_mask) : options.longs === Number ? new $util.LongBits(message.channel_permission_mask.low >>> 0, message.channel_permission_mask.high >>> 0).toNumber() : message.channel_permission_mask;
                    if (message.sub_permission_mask != null && message.hasOwnProperty("sub_permission_mask"))
                        if (typeof message.sub_permission_mask === "number")
                            object.sub_permission_mask = options.longs === String ? String(message.sub_permission_mask) : message.sub_permission_mask;
                        else
                            object.sub_permission_mask = options.longs === String ? $util.Long.prototype.toString.call(message.sub_permission_mask) : options.longs === Number ? new $util.LongBits(message.sub_permission_mask.low >>> 0, message.sub_permission_mask.high >>> 0).toNumber() : message.sub_permission_mask;
                    return object;
                };

                /**
                 * Converts this CreateRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.CreateRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.CreateRequest";
                };

                return CreateRequest;
            })();

            appserver_role.CreateResponse = (function() {

                /**
                 * Properties of a CreateResponse.
                 * @memberof api.v1.appserver_role
                 * @interface ICreateResponse
                 * @property {api.v1.appserver_role.IAppserverRole|null} [appserver_role] CreateResponse appserver_role
                 */

                /**
                 * Constructs a new CreateResponse.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents a CreateResponse.
                 * @implements ICreateResponse
                 * @constructor
                 * @param {api.v1.appserver_role.ICreateResponse=} [properties] Properties to set
                 */
                function CreateResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateResponse appserver_role.
                 * @member {api.v1.appserver_role.IAppserverRole|null|undefined} appserver_role
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @instance
                 */
                CreateResponse.prototype.appserver_role = null;

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {api.v1.appserver_role.ICreateResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.CreateResponse} CreateResponse instance
                 */
                CreateResponse.create = function create(properties) {
                    return new CreateResponse(properties);
                };

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.appserver_role.CreateResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {api.v1.appserver_role.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver_role != null && Object.hasOwnProperty.call(message, "appserver_role"))
                        $root.api.v1.appserver_role.AppserverRole.encode(message.appserver_role, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.appserver_role.CreateResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {api.v1.appserver_role.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.CreateResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver_role = $root.api.v1.appserver_role.AppserverRole.decode(reader, reader.uint32());
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
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateResponse message.
                 * @function verify
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver_role != null && message.hasOwnProperty("appserver_role")) {
                        let error = $root.api.v1.appserver_role.AppserverRole.verify(message.appserver_role);
                        if (error)
                            return "appserver_role." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.CreateResponse} CreateResponse
                 */
                CreateResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.CreateResponse)
                        return object;
                    let message = new $root.api.v1.appserver_role.CreateResponse();
                    if (object.appserver_role != null) {
                        if (typeof object.appserver_role !== "object")
                            throw TypeError(".api.v1.appserver_role.CreateResponse.appserver_role: object expected");
                        message.appserver_role = $root.api.v1.appserver_role.AppserverRole.fromObject(object.appserver_role);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {api.v1.appserver_role.CreateResponse} message CreateResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver_role = null;
                    if (message.appserver_role != null && message.hasOwnProperty("appserver_role"))
                        object.appserver_role = $root.api.v1.appserver_role.AppserverRole.toObject(message.appserver_role, options);
                    return object;
                };

                /**
                 * Converts this CreateResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.CreateResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.CreateResponse";
                };

                return CreateResponse;
            })();

            appserver_role.ListServerRolesRequest = (function() {

                /**
                 * Properties of a ListServerRolesRequest.
                 * @memberof api.v1.appserver_role
                 * @interface IListServerRolesRequest
                 * @property {string|null} [appserver_id] ListServerRolesRequest appserver_id
                 */

                /**
                 * Constructs a new ListServerRolesRequest.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents a ListServerRolesRequest.
                 * @implements IListServerRolesRequest
                 * @constructor
                 * @param {api.v1.appserver_role.IListServerRolesRequest=} [properties] Properties to set
                 */
                function ListServerRolesRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListServerRolesRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @instance
                 */
                ListServerRolesRequest.prototype.appserver_id = "";

                /**
                 * Creates a new ListServerRolesRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {api.v1.appserver_role.IListServerRolesRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.ListServerRolesRequest} ListServerRolesRequest instance
                 */
                ListServerRolesRequest.create = function create(properties) {
                    return new ListServerRolesRequest(properties);
                };

                /**
                 * Encodes the specified ListServerRolesRequest message. Does not implicitly {@link api.v1.appserver_role.ListServerRolesRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {api.v1.appserver_role.IListServerRolesRequest} message ListServerRolesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerRolesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.appserver_id);
                    return writer;
                };

                /**
                 * Encodes the specified ListServerRolesRequest message, length delimited. Does not implicitly {@link api.v1.appserver_role.ListServerRolesRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {api.v1.appserver_role.IListServerRolesRequest} message ListServerRolesRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerRolesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListServerRolesRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.ListServerRolesRequest} ListServerRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerRolesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.ListServerRolesRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appserver_id = reader.string();
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
                 * Decodes a ListServerRolesRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.ListServerRolesRequest} ListServerRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerRolesRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListServerRolesRequest message.
                 * @function verify
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListServerRolesRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    return null;
                };

                /**
                 * Creates a ListServerRolesRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.ListServerRolesRequest} ListServerRolesRequest
                 */
                ListServerRolesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.ListServerRolesRequest)
                        return object;
                    let message = new $root.api.v1.appserver_role.ListServerRolesRequest();
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    return message;
                };

                /**
                 * Creates a plain object from a ListServerRolesRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {api.v1.appserver_role.ListServerRolesRequest} message ListServerRolesRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListServerRolesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.appserver_id = "";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    return object;
                };

                /**
                 * Converts this ListServerRolesRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListServerRolesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListServerRolesRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.ListServerRolesRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListServerRolesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.ListServerRolesRequest";
                };

                return ListServerRolesRequest;
            })();

            appserver_role.ListServerRolesResponse = (function() {

                /**
                 * Properties of a ListServerRolesResponse.
                 * @memberof api.v1.appserver_role
                 * @interface IListServerRolesResponse
                 * @property {Array.<api.v1.appserver_role.IAppserverRole>|null} [appserver_roles] ListServerRolesResponse appserver_roles
                 */

                /**
                 * Constructs a new ListServerRolesResponse.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents a ListServerRolesResponse.
                 * @implements IListServerRolesResponse
                 * @constructor
                 * @param {api.v1.appserver_role.IListServerRolesResponse=} [properties] Properties to set
                 */
                function ListServerRolesResponse(properties) {
                    this.appserver_roles = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListServerRolesResponse appserver_roles.
                 * @member {Array.<api.v1.appserver_role.IAppserverRole>} appserver_roles
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @instance
                 */
                ListServerRolesResponse.prototype.appserver_roles = $util.emptyArray;

                /**
                 * Creates a new ListServerRolesResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {api.v1.appserver_role.IListServerRolesResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.ListServerRolesResponse} ListServerRolesResponse instance
                 */
                ListServerRolesResponse.create = function create(properties) {
                    return new ListServerRolesResponse(properties);
                };

                /**
                 * Encodes the specified ListServerRolesResponse message. Does not implicitly {@link api.v1.appserver_role.ListServerRolesResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {api.v1.appserver_role.IListServerRolesResponse} message ListServerRolesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerRolesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appserver_roles != null && message.appserver_roles.length)
                        for (let i = 0; i < message.appserver_roles.length; ++i)
                            $root.api.v1.appserver_role.AppserverRole.encode(message.appserver_roles[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListServerRolesResponse message, length delimited. Does not implicitly {@link api.v1.appserver_role.ListServerRolesResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {api.v1.appserver_role.IListServerRolesResponse} message ListServerRolesResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerRolesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListServerRolesResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.ListServerRolesResponse} ListServerRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerRolesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.ListServerRolesResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.appserver_roles && message.appserver_roles.length))
                                    message.appserver_roles = [];
                                message.appserver_roles.push($root.api.v1.appserver_role.AppserverRole.decode(reader, reader.uint32()));
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
                 * Decodes a ListServerRolesResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.ListServerRolesResponse} ListServerRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerRolesResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListServerRolesResponse message.
                 * @function verify
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListServerRolesResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appserver_roles != null && message.hasOwnProperty("appserver_roles")) {
                        if (!Array.isArray(message.appserver_roles))
                            return "appserver_roles: array expected";
                        for (let i = 0; i < message.appserver_roles.length; ++i) {
                            let error = $root.api.v1.appserver_role.AppserverRole.verify(message.appserver_roles[i]);
                            if (error)
                                return "appserver_roles." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ListServerRolesResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.ListServerRolesResponse} ListServerRolesResponse
                 */
                ListServerRolesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.ListServerRolesResponse)
                        return object;
                    let message = new $root.api.v1.appserver_role.ListServerRolesResponse();
                    if (object.appserver_roles) {
                        if (!Array.isArray(object.appserver_roles))
                            throw TypeError(".api.v1.appserver_role.ListServerRolesResponse.appserver_roles: array expected");
                        message.appserver_roles = [];
                        for (let i = 0; i < object.appserver_roles.length; ++i) {
                            if (typeof object.appserver_roles[i] !== "object")
                                throw TypeError(".api.v1.appserver_role.ListServerRolesResponse.appserver_roles: object expected");
                            message.appserver_roles[i] = $root.api.v1.appserver_role.AppserverRole.fromObject(object.appserver_roles[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListServerRolesResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {api.v1.appserver_role.ListServerRolesResponse} message ListServerRolesResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListServerRolesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.appserver_roles = [];
                    if (message.appserver_roles && message.appserver_roles.length) {
                        object.appserver_roles = [];
                        for (let j = 0; j < message.appserver_roles.length; ++j)
                            object.appserver_roles[j] = $root.api.v1.appserver_role.AppserverRole.toObject(message.appserver_roles[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ListServerRolesResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListServerRolesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListServerRolesResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.ListServerRolesResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListServerRolesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.ListServerRolesResponse";
                };

                return ListServerRolesResponse;
            })();

            appserver_role.DeleteRequest = (function() {

                /**
                 * Properties of a DeleteRequest.
                 * @memberof api.v1.appserver_role
                 * @interface IDeleteRequest
                 * @property {string|null} [id] DeleteRequest id
                 * @property {string|null} [appserver_id] DeleteRequest appserver_id
                 */

                /**
                 * Constructs a new DeleteRequest.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents a DeleteRequest.
                 * @implements IDeleteRequest
                 * @constructor
                 * @param {api.v1.appserver_role.IDeleteRequest=} [properties] Properties to set
                 */
                function DeleteRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteRequest id.
                 * @member {string} id
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @instance
                 */
                DeleteRequest.prototype.id = "";

                /**
                 * DeleteRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @instance
                 */
                DeleteRequest.prototype.appserver_id = "";

                /**
                 * Creates a new DeleteRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {api.v1.appserver_role.IDeleteRequest=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.DeleteRequest} DeleteRequest instance
                 */
                DeleteRequest.create = function create(properties) {
                    return new DeleteRequest(properties);
                };

                /**
                 * Encodes the specified DeleteRequest message. Does not implicitly {@link api.v1.appserver_role.DeleteRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {api.v1.appserver_role.IDeleteRequest} message DeleteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserver_id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link api.v1.appserver_role.DeleteRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {api.v1.appserver_role.IDeleteRequest} message DeleteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.DeleteRequest} DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.DeleteRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserver_id = reader.string();
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
                 * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.DeleteRequest} DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteRequest message.
                 * @function verify
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.DeleteRequest} DeleteRequest
                 */
                DeleteRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.DeleteRequest)
                        return object;
                    let message = new $root.api.v1.appserver_role.DeleteRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {api.v1.appserver_role.DeleteRequest} message DeleteRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.appserver_id = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    return object;
                };

                /**
                 * Converts this DeleteRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteRequest
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.DeleteRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.DeleteRequest";
                };

                return DeleteRequest;
            })();

            appserver_role.DeleteResponse = (function() {

                /**
                 * Properties of a DeleteResponse.
                 * @memberof api.v1.appserver_role
                 * @interface IDeleteResponse
                 */

                /**
                 * Constructs a new DeleteResponse.
                 * @memberof api.v1.appserver_role
                 * @classdesc Represents a DeleteResponse.
                 * @implements IDeleteResponse
                 * @constructor
                 * @param {api.v1.appserver_role.IDeleteResponse=} [properties] Properties to set
                 */
                function DeleteResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {api.v1.appserver_role.IDeleteResponse=} [properties] Properties to set
                 * @returns {api.v1.appserver_role.DeleteResponse} DeleteResponse instance
                 */
                DeleteResponse.create = function create(properties) {
                    return new DeleteResponse(properties);
                };

                /**
                 * Encodes the specified DeleteResponse message. Does not implicitly {@link api.v1.appserver_role.DeleteResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {api.v1.appserver_role.IDeleteResponse} message DeleteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link api.v1.appserver_role.DeleteResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {api.v1.appserver_role.IDeleteResponse} message DeleteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.appserver_role.DeleteResponse} DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.appserver_role.DeleteResponse();
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
                 * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.appserver_role.DeleteResponse} DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteResponse message.
                 * @function verify
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.appserver_role.DeleteResponse} DeleteResponse
                 */
                DeleteResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.appserver_role.DeleteResponse)
                        return object;
                    return new $root.api.v1.appserver_role.DeleteResponse();
                };

                /**
                 * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {api.v1.appserver_role.DeleteResponse} message DeleteResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteResponse
                 * @function getTypeUrl
                 * @memberof api.v1.appserver_role.DeleteResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.appserver_role.DeleteResponse";
                };

                return DeleteResponse;
            })();

            return appserver_role;
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
                 * Callback as used by {@link api.v1.channel.ChannelService#create}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef CreateCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.CreateResponse} [response] CreateResponse
                 */

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.ICreateRequest} request CreateRequest message or plain object
                 * @param {api.v1.channel.ChannelService.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.create = function create(request, callback) {
                    return this.rpcCall(create, $root.api.v1.channel.CreateRequest, $root.api.v1.channel.CreateResponse, request, callback);
                }, "name", { value: "Create" });

                /**
                 * Calls Create.
                 * @function create
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.ICreateRequest} request CreateRequest message or plain object
                 * @returns {Promise<api.v1.channel.CreateResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#getById}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef GetByIdCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.GetByIdResponse} [response] GetByIdResponse
                 */

                /**
                 * Calls GetById.
                 * @function getById
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IGetByIdRequest} request GetByIdRequest message or plain object
                 * @param {api.v1.channel.ChannelService.GetByIdCallback} callback Node-style callback called with the error, if any, and GetByIdResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.getById = function getById(request, callback) {
                    return this.rpcCall(getById, $root.api.v1.channel.GetByIdRequest, $root.api.v1.channel.GetByIdResponse, request, callback);
                }, "name", { value: "GetById" });

                /**
                 * Calls GetById.
                 * @function getById
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IGetByIdRequest} request GetByIdRequest message or plain object
                 * @returns {Promise<api.v1.channel.GetByIdResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#listServerChannels}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef ListServerChannelsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.ListServerChannelsResponse} [response] ListServerChannelsResponse
                 */

                /**
                 * Calls ListServerChannels.
                 * @function listServerChannels
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IListServerChannelsRequest} request ListServerChannelsRequest message or plain object
                 * @param {api.v1.channel.ChannelService.ListServerChannelsCallback} callback Node-style callback called with the error, if any, and ListServerChannelsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype.listServerChannels = function listServerChannels(request, callback) {
                    return this.rpcCall(listServerChannels, $root.api.v1.channel.ListServerChannelsRequest, $root.api.v1.channel.ListServerChannelsResponse, request, callback);
                }, "name", { value: "ListServerChannels" });

                /**
                 * Calls ListServerChannels.
                 * @function listServerChannels
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IListServerChannelsRequest} request ListServerChannelsRequest message or plain object
                 * @returns {Promise<api.v1.channel.ListServerChannelsResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#delete_}.
                 * @memberof api.v1.channel.ChannelService
                 * @typedef DeleteCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {api.v1.channel.DeleteResponse} [response] DeleteResponse
                 */

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IDeleteRequest} request DeleteRequest message or plain object
                 * @param {api.v1.channel.ChannelService.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(ChannelService.prototype["delete"] = function delete_(request, callback) {
                    return this.rpcCall(delete_, $root.api.v1.channel.DeleteRequest, $root.api.v1.channel.DeleteResponse, request, callback);
                }, "name", { value: "Delete" });

                /**
                 * Calls Delete.
                 * @function delete
                 * @memberof api.v1.channel.ChannelService
                 * @instance
                 * @param {api.v1.channel.IDeleteRequest} request DeleteRequest message or plain object
                 * @returns {Promise<api.v1.channel.DeleteResponse>} Promise
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
                 * @property {string|null} [appserver_id] Channel appserver_id
                 * @property {boolean|null} [is_private] Channel is_private
                 * @property {google.protobuf.ITimestamp|null} [created_at] Channel created_at
                 * @property {google.protobuf.ITimestamp|null} [updated_at] Channel updated_at
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
                 * Channel appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.appserver_id = "";

                /**
                 * Channel is_private.
                 * @member {boolean} is_private
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.is_private = false;

                /**
                 * Channel created_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} created_at
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.created_at = null;

                /**
                 * Channel updated_at.
                 * @member {google.protobuf.ITimestamp|null|undefined} updated_at
                 * @memberof api.v1.channel.Channel
                 * @instance
                 */
                Channel.prototype.updated_at = null;

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
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.appserver_id);
                    if (message.is_private != null && Object.hasOwnProperty.call(message, "is_private"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_private);
                    if (message.created_at != null && Object.hasOwnProperty.call(message, "created_at"))
                        $root.google.protobuf.Timestamp.encode(message.created_at, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.updated_at != null && Object.hasOwnProperty.call(message, "updated_at"))
                        $root.google.protobuf.Timestamp.encode(message.updated_at, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
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
                                message.appserver_id = reader.string();
                                break;
                            }
                        case 4: {
                                message.is_private = reader.bool();
                                break;
                            }
                        case 5: {
                                message.created_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.updated_at = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    if (message.is_private != null && message.hasOwnProperty("is_private"))
                        if (typeof message.is_private !== "boolean")
                            return "is_private: boolean expected";
                    if (message.created_at != null && message.hasOwnProperty("created_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.created_at);
                        if (error)
                            return "created_at." + error;
                    }
                    if (message.updated_at != null && message.hasOwnProperty("updated_at")) {
                        let error = $root.google.protobuf.Timestamp.verify(message.updated_at);
                        if (error)
                            return "updated_at." + error;
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
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    if (object.is_private != null)
                        message.is_private = Boolean(object.is_private);
                    if (object.created_at != null) {
                        if (typeof object.created_at !== "object")
                            throw TypeError(".api.v1.channel.Channel.created_at: object expected");
                        message.created_at = $root.google.protobuf.Timestamp.fromObject(object.created_at);
                    }
                    if (object.updated_at != null) {
                        if (typeof object.updated_at !== "object")
                            throw TypeError(".api.v1.channel.Channel.updated_at: object expected");
                        message.updated_at = $root.google.protobuf.Timestamp.fromObject(object.updated_at);
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
                        object.appserver_id = "";
                        object.is_private = false;
                        object.created_at = null;
                        object.updated_at = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    if (message.is_private != null && message.hasOwnProperty("is_private"))
                        object.is_private = message.is_private;
                    if (message.created_at != null && message.hasOwnProperty("created_at"))
                        object.created_at = $root.google.protobuf.Timestamp.toObject(message.created_at, options);
                    if (message.updated_at != null && message.hasOwnProperty("updated_at"))
                        object.updated_at = $root.google.protobuf.Timestamp.toObject(message.updated_at, options);
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

            channel.CreateRequest = (function() {

                /**
                 * Properties of a CreateRequest.
                 * @memberof api.v1.channel
                 * @interface ICreateRequest
                 * @property {string|null} [name] CreateRequest name
                 * @property {string|null} [appserver_id] CreateRequest appserver_id
                 * @property {boolean|null} [is_private] CreateRequest is_private
                 */

                /**
                 * Constructs a new CreateRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a CreateRequest.
                 * @implements ICreateRequest
                 * @constructor
                 * @param {api.v1.channel.ICreateRequest=} [properties] Properties to set
                 */
                function CreateRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateRequest name.
                 * @member {string} name
                 * @memberof api.v1.channel.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.name = "";

                /**
                 * CreateRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.channel.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.appserver_id = "";

                /**
                 * CreateRequest is_private.
                 * @member {boolean} is_private
                 * @memberof api.v1.channel.CreateRequest
                 * @instance
                 */
                CreateRequest.prototype.is_private = false;

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {api.v1.channel.ICreateRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.CreateRequest} CreateRequest instance
                 */
                CreateRequest.create = function create(properties) {
                    return new CreateRequest(properties);
                };

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.channel.CreateRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {api.v1.channel.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserver_id);
                    if (message.is_private != null && Object.hasOwnProperty.call(message, "is_private"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_private);
                    return writer;
                };

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.channel.CreateRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {api.v1.channel.ICreateRequest} message CreateRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.CreateRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserver_id = reader.string();
                                break;
                            }
                        case 3: {
                                message.is_private = reader.bool();
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
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.CreateRequest} CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateRequest message.
                 * @function verify
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    if (message.is_private != null && message.hasOwnProperty("is_private"))
                        if (typeof message.is_private !== "boolean")
                            return "is_private: boolean expected";
                    return null;
                };

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.CreateRequest} CreateRequest
                 */
                CreateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.CreateRequest)
                        return object;
                    let message = new $root.api.v1.channel.CreateRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    if (object.is_private != null)
                        message.is_private = Boolean(object.is_private);
                    return message;
                };

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {api.v1.channel.CreateRequest} message CreateRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.appserver_id = "";
                        object.is_private = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    if (message.is_private != null && message.hasOwnProperty("is_private"))
                        object.is_private = message.is_private;
                    return object;
                };

                /**
                 * Converts this CreateRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.CreateRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.CreateRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.CreateRequest";
                };

                return CreateRequest;
            })();

            channel.CreateResponse = (function() {

                /**
                 * Properties of a CreateResponse.
                 * @memberof api.v1.channel
                 * @interface ICreateResponse
                 * @property {api.v1.channel.IChannel|null} [channel] CreateResponse channel
                 */

                /**
                 * Constructs a new CreateResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a CreateResponse.
                 * @implements ICreateResponse
                 * @constructor
                 * @param {api.v1.channel.ICreateResponse=} [properties] Properties to set
                 */
                function CreateResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CreateResponse channel.
                 * @member {api.v1.channel.IChannel|null|undefined} channel
                 * @memberof api.v1.channel.CreateResponse
                 * @instance
                 */
                CreateResponse.prototype.channel = null;

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {api.v1.channel.ICreateResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.CreateResponse} CreateResponse instance
                 */
                CreateResponse.create = function create(properties) {
                    return new CreateResponse(properties);
                };

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.channel.CreateResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {api.v1.channel.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                        $root.api.v1.channel.Channel.encode(message.channel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.channel.CreateResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {api.v1.channel.ICreateResponse} message CreateResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.CreateResponse();
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
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.CreateResponse} CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CreateResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CreateResponse message.
                 * @function verify
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CreateResponse.verify = function verify(message) {
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
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.CreateResponse} CreateResponse
                 */
                CreateResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.CreateResponse)
                        return object;
                    let message = new $root.api.v1.channel.CreateResponse();
                    if (object.channel != null) {
                        if (typeof object.channel !== "object")
                            throw TypeError(".api.v1.channel.CreateResponse.channel: object expected");
                        message.channel = $root.api.v1.channel.Channel.fromObject(object.channel);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {api.v1.channel.CreateResponse} message CreateResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CreateResponse.toObject = function toObject(message, options) {
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
                 * Converts this CreateResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.CreateResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CreateResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CreateResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.CreateResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.CreateResponse";
                };

                return CreateResponse;
            })();

            channel.GetByIdRequest = (function() {

                /**
                 * Properties of a GetByIdRequest.
                 * @memberof api.v1.channel
                 * @interface IGetByIdRequest
                 * @property {string|null} [id] GetByIdRequest id
                 * @property {string|null} [appserver_id] GetByIdRequest appserver_id
                 */

                /**
                 * Constructs a new GetByIdRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a GetByIdRequest.
                 * @implements IGetByIdRequest
                 * @constructor
                 * @param {api.v1.channel.IGetByIdRequest=} [properties] Properties to set
                 */
                function GetByIdRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdRequest id.
                 * @member {string} id
                 * @memberof api.v1.channel.GetByIdRequest
                 * @instance
                 */
                GetByIdRequest.prototype.id = "";

                /**
                 * GetByIdRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.channel.GetByIdRequest
                 * @instance
                 */
                GetByIdRequest.prototype.appserver_id = "";

                /**
                 * Creates a new GetByIdRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {api.v1.channel.IGetByIdRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.GetByIdRequest} GetByIdRequest instance
                 */
                GetByIdRequest.create = function create(properties) {
                    return new GetByIdRequest(properties);
                };

                /**
                 * Encodes the specified GetByIdRequest message. Does not implicitly {@link api.v1.channel.GetByIdRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {api.v1.channel.IGetByIdRequest} message GetByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserver_id);
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdRequest message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {api.v1.channel.IGetByIdRequest} message GetByIdRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.GetByIdRequest} GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.GetByIdRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserver_id = reader.string();
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
                 * Decodes a GetByIdRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.GetByIdRequest} GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdRequest message.
                 * @function verify
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    return null;
                };

                /**
                 * Creates a GetByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.GetByIdRequest} GetByIdRequest
                 */
                GetByIdRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.GetByIdRequest)
                        return object;
                    let message = new $root.api.v1.channel.GetByIdRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {api.v1.channel.GetByIdRequest} message GetByIdRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.appserver_id = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    return object;
                };

                /**
                 * Converts this GetByIdRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.GetByIdRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.GetByIdRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.GetByIdRequest";
                };

                return GetByIdRequest;
            })();

            channel.GetByIdResponse = (function() {

                /**
                 * Properties of a GetByIdResponse.
                 * @memberof api.v1.channel
                 * @interface IGetByIdResponse
                 * @property {api.v1.channel.IChannel|null} [channel] GetByIdResponse channel
                 */

                /**
                 * Constructs a new GetByIdResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a GetByIdResponse.
                 * @implements IGetByIdResponse
                 * @constructor
                 * @param {api.v1.channel.IGetByIdResponse=} [properties] Properties to set
                 */
                function GetByIdResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetByIdResponse channel.
                 * @member {api.v1.channel.IChannel|null|undefined} channel
                 * @memberof api.v1.channel.GetByIdResponse
                 * @instance
                 */
                GetByIdResponse.prototype.channel = null;

                /**
                 * Creates a new GetByIdResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {api.v1.channel.IGetByIdResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.GetByIdResponse} GetByIdResponse instance
                 */
                GetByIdResponse.create = function create(properties) {
                    return new GetByIdResponse(properties);
                };

                /**
                 * Encodes the specified GetByIdResponse message. Does not implicitly {@link api.v1.channel.GetByIdResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {api.v1.channel.IGetByIdResponse} message GetByIdResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                        $root.api.v1.channel.Channel.encode(message.channel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified GetByIdResponse message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {api.v1.channel.IGetByIdResponse} message GetByIdResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetByIdResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetByIdResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.GetByIdResponse} GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.GetByIdResponse();
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
                 * Decodes a GetByIdResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.GetByIdResponse} GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetByIdResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetByIdResponse message.
                 * @function verify
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetByIdResponse.verify = function verify(message) {
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
                 * Creates a GetByIdResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.GetByIdResponse} GetByIdResponse
                 */
                GetByIdResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.GetByIdResponse)
                        return object;
                    let message = new $root.api.v1.channel.GetByIdResponse();
                    if (object.channel != null) {
                        if (typeof object.channel !== "object")
                            throw TypeError(".api.v1.channel.GetByIdResponse.channel: object expected");
                        message.channel = $root.api.v1.channel.Channel.fromObject(object.channel);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetByIdResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {api.v1.channel.GetByIdResponse} message GetByIdResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetByIdResponse.toObject = function toObject(message, options) {
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
                 * Converts this GetByIdResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.GetByIdResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetByIdResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetByIdResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.GetByIdResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetByIdResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.GetByIdResponse";
                };

                return GetByIdResponse;
            })();

            channel.ListServerChannelsRequest = (function() {

                /**
                 * Properties of a ListServerChannelsRequest.
                 * @memberof api.v1.channel
                 * @interface IListServerChannelsRequest
                 * @property {google.protobuf.IStringValue|null} [name] ListServerChannelsRequest name
                 * @property {string|null} [appserver_id] ListServerChannelsRequest appserver_id
                 */

                /**
                 * Constructs a new ListServerChannelsRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a ListServerChannelsRequest.
                 * @implements IListServerChannelsRequest
                 * @constructor
                 * @param {api.v1.channel.IListServerChannelsRequest=} [properties] Properties to set
                 */
                function ListServerChannelsRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListServerChannelsRequest name.
                 * @member {google.protobuf.IStringValue|null|undefined} name
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @instance
                 */
                ListServerChannelsRequest.prototype.name = null;

                /**
                 * ListServerChannelsRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @instance
                 */
                ListServerChannelsRequest.prototype.appserver_id = "";

                /**
                 * Creates a new ListServerChannelsRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {api.v1.channel.IListServerChannelsRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.ListServerChannelsRequest} ListServerChannelsRequest instance
                 */
                ListServerChannelsRequest.create = function create(properties) {
                    return new ListServerChannelsRequest(properties);
                };

                /**
                 * Encodes the specified ListServerChannelsRequest message. Does not implicitly {@link api.v1.channel.ListServerChannelsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {api.v1.channel.IListServerChannelsRequest} message ListServerChannelsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerChannelsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        $root.google.protobuf.StringValue.encode(message.name, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserver_id);
                    return writer;
                };

                /**
                 * Encodes the specified ListServerChannelsRequest message, length delimited. Does not implicitly {@link api.v1.channel.ListServerChannelsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {api.v1.channel.IListServerChannelsRequest} message ListServerChannelsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerChannelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListServerChannelsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.ListServerChannelsRequest} ListServerChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerChannelsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.ListServerChannelsRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.appserver_id = reader.string();
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
                 * Decodes a ListServerChannelsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.ListServerChannelsRequest} ListServerChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerChannelsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListServerChannelsRequest message.
                 * @function verify
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListServerChannelsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        let error = $root.google.protobuf.StringValue.verify(message.name);
                        if (error)
                            return "name." + error;
                    }
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    return null;
                };

                /**
                 * Creates a ListServerChannelsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.ListServerChannelsRequest} ListServerChannelsRequest
                 */
                ListServerChannelsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.ListServerChannelsRequest)
                        return object;
                    let message = new $root.api.v1.channel.ListServerChannelsRequest();
                    if (object.name != null) {
                        if (typeof object.name !== "object")
                            throw TypeError(".api.v1.channel.ListServerChannelsRequest.name: object expected");
                        message.name = $root.google.protobuf.StringValue.fromObject(object.name);
                    }
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    return message;
                };

                /**
                 * Creates a plain object from a ListServerChannelsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {api.v1.channel.ListServerChannelsRequest} message ListServerChannelsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListServerChannelsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = null;
                        object.appserver_id = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = $root.google.protobuf.StringValue.toObject(message.name, options);
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    return object;
                };

                /**
                 * Converts this ListServerChannelsRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListServerChannelsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListServerChannelsRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.ListServerChannelsRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListServerChannelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.ListServerChannelsRequest";
                };

                return ListServerChannelsRequest;
            })();

            channel.ListServerChannelsResponse = (function() {

                /**
                 * Properties of a ListServerChannelsResponse.
                 * @memberof api.v1.channel
                 * @interface IListServerChannelsResponse
                 * @property {Array.<api.v1.channel.IChannel>|null} [channels] ListServerChannelsResponse channels
                 */

                /**
                 * Constructs a new ListServerChannelsResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a ListServerChannelsResponse.
                 * @implements IListServerChannelsResponse
                 * @constructor
                 * @param {api.v1.channel.IListServerChannelsResponse=} [properties] Properties to set
                 */
                function ListServerChannelsResponse(properties) {
                    this.channels = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ListServerChannelsResponse channels.
                 * @member {Array.<api.v1.channel.IChannel>} channels
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @instance
                 */
                ListServerChannelsResponse.prototype.channels = $util.emptyArray;

                /**
                 * Creates a new ListServerChannelsResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {api.v1.channel.IListServerChannelsResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.ListServerChannelsResponse} ListServerChannelsResponse instance
                 */
                ListServerChannelsResponse.create = function create(properties) {
                    return new ListServerChannelsResponse(properties);
                };

                /**
                 * Encodes the specified ListServerChannelsResponse message. Does not implicitly {@link api.v1.channel.ListServerChannelsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {api.v1.channel.IListServerChannelsResponse} message ListServerChannelsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerChannelsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channels != null && message.channels.length)
                        for (let i = 0; i < message.channels.length; ++i)
                            $root.api.v1.channel.Channel.encode(message.channels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ListServerChannelsResponse message, length delimited. Does not implicitly {@link api.v1.channel.ListServerChannelsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {api.v1.channel.IListServerChannelsResponse} message ListServerChannelsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListServerChannelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ListServerChannelsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.ListServerChannelsResponse} ListServerChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerChannelsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.ListServerChannelsResponse();
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
                 * Decodes a ListServerChannelsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.ListServerChannelsResponse} ListServerChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListServerChannelsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ListServerChannelsResponse message.
                 * @function verify
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListServerChannelsResponse.verify = function verify(message) {
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
                 * Creates a ListServerChannelsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.ListServerChannelsResponse} ListServerChannelsResponse
                 */
                ListServerChannelsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.ListServerChannelsResponse)
                        return object;
                    let message = new $root.api.v1.channel.ListServerChannelsResponse();
                    if (object.channels) {
                        if (!Array.isArray(object.channels))
                            throw TypeError(".api.v1.channel.ListServerChannelsResponse.channels: array expected");
                        message.channels = [];
                        for (let i = 0; i < object.channels.length; ++i) {
                            if (typeof object.channels[i] !== "object")
                                throw TypeError(".api.v1.channel.ListServerChannelsResponse.channels: object expected");
                            message.channels[i] = $root.api.v1.channel.Channel.fromObject(object.channels[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ListServerChannelsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {api.v1.channel.ListServerChannelsResponse} message ListServerChannelsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListServerChannelsResponse.toObject = function toObject(message, options) {
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
                 * Converts this ListServerChannelsResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListServerChannelsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ListServerChannelsResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.ListServerChannelsResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ListServerChannelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.ListServerChannelsResponse";
                };

                return ListServerChannelsResponse;
            })();

            channel.DeleteRequest = (function() {

                /**
                 * Properties of a DeleteRequest.
                 * @memberof api.v1.channel
                 * @interface IDeleteRequest
                 * @property {string|null} [id] DeleteRequest id
                 * @property {string|null} [appserver_id] DeleteRequest appserver_id
                 */

                /**
                 * Constructs a new DeleteRequest.
                 * @memberof api.v1.channel
                 * @classdesc Represents a DeleteRequest.
                 * @implements IDeleteRequest
                 * @constructor
                 * @param {api.v1.channel.IDeleteRequest=} [properties] Properties to set
                 */
                function DeleteRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeleteRequest id.
                 * @member {string} id
                 * @memberof api.v1.channel.DeleteRequest
                 * @instance
                 */
                DeleteRequest.prototype.id = "";

                /**
                 * DeleteRequest appserver_id.
                 * @member {string} appserver_id
                 * @memberof api.v1.channel.DeleteRequest
                 * @instance
                 */
                DeleteRequest.prototype.appserver_id = "";

                /**
                 * Creates a new DeleteRequest instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {api.v1.channel.IDeleteRequest=} [properties] Properties to set
                 * @returns {api.v1.channel.DeleteRequest} DeleteRequest instance
                 */
                DeleteRequest.create = function create(properties) {
                    return new DeleteRequest(properties);
                };

                /**
                 * Encodes the specified DeleteRequest message. Does not implicitly {@link api.v1.channel.DeleteRequest.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {api.v1.channel.IDeleteRequest} message DeleteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.appserver_id != null && Object.hasOwnProperty.call(message, "appserver_id"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.appserver_id);
                    return writer;
                };

                /**
                 * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link api.v1.channel.DeleteRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {api.v1.channel.IDeleteRequest} message DeleteRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.DeleteRequest} DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.DeleteRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.id = reader.string();
                                break;
                            }
                        case 2: {
                                message.appserver_id = reader.string();
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
                 * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.DeleteRequest} DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteRequest message.
                 * @function verify
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        if (!$util.isString(message.appserver_id))
                            return "appserver_id: string expected";
                    return null;
                };

                /**
                 * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.DeleteRequest} DeleteRequest
                 */
                DeleteRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.DeleteRequest)
                        return object;
                    let message = new $root.api.v1.channel.DeleteRequest();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.appserver_id != null)
                        message.appserver_id = String(object.appserver_id);
                    return message;
                };

                /**
                 * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {api.v1.channel.DeleteRequest} message DeleteRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.appserver_id = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.appserver_id != null && message.hasOwnProperty("appserver_id"))
                        object.appserver_id = message.appserver_id;
                    return object;
                };

                /**
                 * Converts this DeleteRequest to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.DeleteRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteRequest
                 * @function getTypeUrl
                 * @memberof api.v1.channel.DeleteRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.DeleteRequest";
                };

                return DeleteRequest;
            })();

            channel.DeleteResponse = (function() {

                /**
                 * Properties of a DeleteResponse.
                 * @memberof api.v1.channel
                 * @interface IDeleteResponse
                 */

                /**
                 * Constructs a new DeleteResponse.
                 * @memberof api.v1.channel
                 * @classdesc Represents a DeleteResponse.
                 * @implements IDeleteResponse
                 * @constructor
                 * @param {api.v1.channel.IDeleteResponse=} [properties] Properties to set
                 */
                function DeleteResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new DeleteResponse instance using the specified properties.
                 * @function create
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {api.v1.channel.IDeleteResponse=} [properties] Properties to set
                 * @returns {api.v1.channel.DeleteResponse} DeleteResponse instance
                 */
                DeleteResponse.create = function create(properties) {
                    return new DeleteResponse(properties);
                };

                /**
                 * Encodes the specified DeleteResponse message. Does not implicitly {@link api.v1.channel.DeleteResponse.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {api.v1.channel.IDeleteResponse} message DeleteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link api.v1.channel.DeleteResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {api.v1.channel.IDeleteResponse} message DeleteResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.channel.DeleteResponse} DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.channel.DeleteResponse();
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
                 * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.channel.DeleteResponse} DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeleteResponse message.
                 * @function verify
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.channel.DeleteResponse} DeleteResponse
                 */
                DeleteResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.channel.DeleteResponse)
                        return object;
                    return new $root.api.v1.channel.DeleteResponse();
                };

                /**
                 * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {api.v1.channel.DeleteResponse} message DeleteResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this DeleteResponse to JSON.
                 * @function toJSON
                 * @memberof api.v1.channel.DeleteResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DeleteResponse
                 * @function getTypeUrl
                 * @memberof api.v1.channel.DeleteResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.channel.DeleteResponse";
                };

                return DeleteResponse;
            })();

            return channel;
        })();

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
                 * @property {api.v1.messages.IMessageMeta|null} [meta] InputMessage meta
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
                 * @member {api.v1.messages.IMessageMeta|null|undefined} meta
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
                        $root.api.v1.messages.MessageMeta.encode(message.meta, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                                message.meta = $root.api.v1.messages.MessageMeta.decode(reader, reader.uint32());
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
                        let error = $root.api.v1.messages.MessageMeta.verify(message.meta);
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
                        message.meta = $root.api.v1.messages.MessageMeta.fromObject(object.meta);
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
                        object.meta = $root.api.v1.messages.MessageMeta.toObject(message.meta, options);
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

            messages.MessageMeta = (function() {

                /**
                 * Properties of a MessageMeta.
                 * @memberof api.v1.messages
                 * @interface IMessageMeta
                 * @property {api.v1.messages.MessageActionType|null} [action] MessageMeta action
                 */

                /**
                 * Constructs a new MessageMeta.
                 * @memberof api.v1.messages
                 * @classdesc Represents a MessageMeta.
                 * @implements IMessageMeta
                 * @constructor
                 * @param {api.v1.messages.IMessageMeta=} [properties] Properties to set
                 */
                function MessageMeta(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageMeta action.
                 * @member {api.v1.messages.MessageActionType} action
                 * @memberof api.v1.messages.MessageMeta
                 * @instance
                 */
                MessageMeta.prototype.action = 0;

                /**
                 * Creates a new MessageMeta instance using the specified properties.
                 * @function create
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {api.v1.messages.IMessageMeta=} [properties] Properties to set
                 * @returns {api.v1.messages.MessageMeta} MessageMeta instance
                 */
                MessageMeta.create = function create(properties) {
                    return new MessageMeta(properties);
                };

                /**
                 * Encodes the specified MessageMeta message. Does not implicitly {@link api.v1.messages.MessageMeta.verify|verify} messages.
                 * @function encode
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {api.v1.messages.IMessageMeta} message MessageMeta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageMeta.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
                    return writer;
                };

                /**
                 * Encodes the specified MessageMeta message, length delimited. Does not implicitly {@link api.v1.messages.MessageMeta.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {api.v1.messages.IMessageMeta} message MessageMeta message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageMeta.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageMeta message from the specified reader or buffer.
                 * @function decode
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {api.v1.messages.MessageMeta} MessageMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageMeta.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.v1.messages.MessageMeta();
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
                 * Decodes a MessageMeta message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {api.v1.messages.MessageMeta} MessageMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageMeta.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageMeta message.
                 * @function verify
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageMeta.verify = function verify(message) {
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
                 * Creates a MessageMeta message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {api.v1.messages.MessageMeta} MessageMeta
                 */
                MessageMeta.fromObject = function fromObject(object) {
                    if (object instanceof $root.api.v1.messages.MessageMeta)
                        return object;
                    let message = new $root.api.v1.messages.MessageMeta();
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
                 * Creates a plain object from a MessageMeta message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {api.v1.messages.MessageMeta} message MessageMeta
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageMeta.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.action = options.enums === String ? "ACTION_TYPE_UNSPECIFIED" : 0;
                    if (message.action != null && message.hasOwnProperty("action"))
                        object.action = options.enums === String ? $root.api.v1.messages.MessageActionType[message.action] === undefined ? message.action : $root.api.v1.messages.MessageActionType[message.action] : message.action;
                    return object;
                };

                /**
                 * Converts this MessageMeta to JSON.
                 * @function toJSON
                 * @memberof api.v1.messages.MessageMeta
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageMeta.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for MessageMeta
                 * @function getTypeUrl
                 * @memberof api.v1.messages.MessageMeta
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MessageMeta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/api.v1.messages.MessageMeta";
                };

                return MessageMeta;
            })();

            /**
             * MessageActionType enum.
             * @name api.v1.messages.MessageActionType
             * @enum {number}
             * @property {number} ACTION_TYPE_UNSPECIFIED=0 ACTION_TYPE_UNSPECIFIED value
             * @property {number} ACTION_TYPE_GET=1 ACTION_TYPE_GET value
             * @property {number} ACTION_TYPE_LIST=2 ACTION_TYPE_LIST value
             * @property {number} ACTION_TYPE_CREATE=3 ACTION_TYPE_CREATE value
             * @property {number} ACTION_TYPE_UPDATE=4 ACTION_TYPE_UPDATE value
             * @property {number} ACTION_TYPE_DELETE=5 ACTION_TYPE_DELETE value
             * @property {number} ACTION_TYPE_NOTIFICATION=6 ACTION_TYPE_NOTIFICATION value
             */
            messages.MessageActionType = (function() {
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
                 * @property {api.v1.messages.IUpdateJwtToken|null} [update_jwt_token] Input update_jwt_token
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
                 * Input update_jwt_token.
                 * @member {api.v1.messages.IUpdateJwtToken|null|undefined} update_jwt_token
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Input.prototype.update_jwt_token = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Input data.
                 * @member {"update_jwt_token"|undefined} data
                 * @memberof api.v1.messages.Input
                 * @instance
                 */
                Object.defineProperty(Input.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["update_jwt_token"]),
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
                    if (message.update_jwt_token != null && Object.hasOwnProperty.call(message, "update_jwt_token"))
                        $root.api.v1.messages.UpdateJwtToken.encode(message.update_jwt_token, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                                message.update_jwt_token = $root.api.v1.messages.UpdateJwtToken.decode(reader, reader.uint32());
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
                    if (message.update_jwt_token != null && message.hasOwnProperty("update_jwt_token")) {
                        properties.data = 1;
                        {
                            let error = $root.api.v1.messages.UpdateJwtToken.verify(message.update_jwt_token);
                            if (error)
                                return "update_jwt_token." + error;
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
                    if (object.update_jwt_token != null) {
                        if (typeof object.update_jwt_token !== "object")
                            throw TypeError(".api.v1.messages.Input.update_jwt_token: object expected");
                        message.update_jwt_token = $root.api.v1.messages.UpdateJwtToken.fromObject(object.update_jwt_token);
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
                    if (message.update_jwt_token != null && message.hasOwnProperty("update_jwt_token")) {
                        object.update_jwt_token = $root.api.v1.messages.UpdateJwtToken.toObject(message.update_jwt_token, options);
                        if (options.oneofs)
                            object.data = "update_jwt_token";
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
             * @property {Long|null} [seconds] Timestamp seconds
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
             * @member {Long} seconds
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
             * @property {Long|null} [value] Int64Value value
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
             * @member {Long} value
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
             * @property {Long|null} [value] UInt64Value value
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
             * @member {Long} value
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
