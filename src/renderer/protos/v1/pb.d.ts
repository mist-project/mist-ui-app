import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace api. */
export namespace api {

    /** Namespace v1. */
    namespace v1 {

        /** Namespace appuser. */
        namespace appuser {

            /** Represents an AppuserService */
            class AppuserService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new AppuserService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new AppuserService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AppuserService;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateResponse
                 */
                public create(request: api.v1.appuser.ICreateRequest, callback: api.v1.appuser.AppuserService.CreateCallback): void;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @returns Promise
                 */
                public create(request: api.v1.appuser.ICreateRequest): Promise<api.v1.appuser.CreateResponse>;
            }

            namespace AppuserService {

                /**
                 * Callback as used by {@link api.v1.appuser.AppuserService#create}.
                 * @param error Error, if any
                 * @param [response] CreateResponse
                 */
                type CreateCallback = (error: (Error|null), response?: api.v1.appuser.CreateResponse) => void;
            }

            /** AppUserStatus enum. */
            enum AppUserStatus {
                APP_USER_STATUS_UNSPECIFIED = 0,
                APP_USER_STATUS_INACTIVE = 1,
                APP_USER_STATUS_ONLINE = 2,
                APP_USER_STATUS_OFFLINE = 3,
                APP_USER_STATUS_AWAY = 4
            }

            /** Properties of an Appuser. */
            interface IAppuser {

                /** Appuser id */
                id?: (string|null);

                /** Appuser username */
                username?: (string|null);

                /** Appuser online_status */
                online_status?: (api.v1.appuser.AppUserStatus|null);

                /** Appuser created_at */
                created_at?: (google.protobuf.ITimestamp|null);

                /** Appuser updated_at */
                updated_at?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an Appuser. */
            class Appuser implements IAppuser {

                /**
                 * Constructs a new Appuser.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appuser.IAppuser);

                /** Appuser id. */
                public id: string;

                /** Appuser username. */
                public username: string;

                /** Appuser online_status. */
                public online_status: api.v1.appuser.AppUserStatus;

                /** Appuser created_at. */
                public created_at?: (google.protobuf.ITimestamp|null);

                /** Appuser updated_at. */
                public updated_at?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Appuser instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Appuser instance
                 */
                public static create(properties?: api.v1.appuser.IAppuser): api.v1.appuser.Appuser;

                /**
                 * Encodes the specified Appuser message. Does not implicitly {@link api.v1.appuser.Appuser.verify|verify} messages.
                 * @param message Appuser message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appuser.IAppuser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Appuser message, length delimited. Does not implicitly {@link api.v1.appuser.Appuser.verify|verify} messages.
                 * @param message Appuser message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appuser.IAppuser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Appuser message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Appuser
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appuser.Appuser;

                /**
                 * Decodes an Appuser message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Appuser
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appuser.Appuser;

                /**
                 * Verifies an Appuser message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Appuser message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Appuser
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appuser.Appuser;

                /**
                 * Creates a plain object from an Appuser message. Also converts values to other types if specified.
                 * @param message Appuser
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appuser.Appuser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Appuser to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Appuser
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateRequest. */
            interface ICreateRequest {

                /** CreateRequest id */
                id?: (string|null);

                /** CreateRequest username */
                username?: (string|null);
            }

            /** Represents a CreateRequest. */
            class CreateRequest implements ICreateRequest {

                /**
                 * Constructs a new CreateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appuser.ICreateRequest);

                /** CreateRequest id. */
                public id: string;

                /** CreateRequest username. */
                public username: string;

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateRequest instance
                 */
                public static create(properties?: api.v1.appuser.ICreateRequest): api.v1.appuser.CreateRequest;

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.appuser.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appuser.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.appuser.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appuser.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appuser.CreateRequest;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appuser.CreateRequest;

                /**
                 * Verifies a CreateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appuser.CreateRequest;

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @param message CreateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appuser.CreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateResponse. */
            interface ICreateResponse {
            }

            /** Represents a CreateResponse. */
            class CreateResponse implements ICreateResponse {

                /**
                 * Constructs a new CreateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appuser.ICreateResponse);

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateResponse instance
                 */
                public static create(properties?: api.v1.appuser.ICreateResponse): api.v1.appuser.CreateResponse;

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.appuser.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appuser.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.appuser.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appuser.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appuser.CreateResponse;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appuser.CreateResponse;

                /**
                 * Verifies a CreateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appuser.CreateResponse;

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @param message CreateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appuser.CreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace event. */
        namespace event {

            /** Properties of a Meta. */
            interface IMeta {

                /** Meta action */
                action?: (api.v1.event.ActionType|null);

                /** Meta appusers */
                appusers?: (api.v1.appuser.IAppuser[]|null);
            }

            /** Represents a Meta. */
            class Meta implements IMeta {

                /**
                 * Constructs a new Meta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IMeta);

                /** Meta action. */
                public action: api.v1.event.ActionType;

                /** Meta appusers. */
                public appusers: api.v1.appuser.IAppuser[];

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Meta instance
                 */
                public static create(properties?: api.v1.event.IMeta): api.v1.event.Meta;

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link api.v1.event.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link api.v1.event.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.Meta;

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.Meta;

                /**
                 * Verifies a Meta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Meta
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.Meta;

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @param message Meta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Meta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Meta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Event. */
            interface IEvent {

                /** Event meta */
                meta?: (api.v1.event.IMeta|null);

                /** Event list_servers */
                list_servers?: (api.v1.event.IListServers|null);

                /** Event list_channels */
                list_channels?: (api.v1.event.IListChannels|null);

                /** Event list_roles */
                list_roles?: (api.v1.event.IListRoles|null);

                /** Event add_server */
                add_server?: (api.v1.event.IAddServer|null);

                /** Event add_channel */
                add_channel?: (api.v1.event.IAddChannel|null);

                /** Event add_role */
                add_role?: (api.v1.event.IAddRole|null);

                /** Event remove_server */
                remove_server?: (api.v1.event.IRemoveServer|null);

                /** Event remove_channel */
                remove_channel?: (api.v1.event.IRemoveChannel|null);

                /** Event remove_role */
                remove_role?: (api.v1.event.IRemoveRole|null);
            }

            /** Represents an Event. */
            class Event implements IEvent {

                /**
                 * Constructs a new Event.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IEvent);

                /** Event meta. */
                public meta?: (api.v1.event.IMeta|null);

                /** Event list_servers. */
                public list_servers?: (api.v1.event.IListServers|null);

                /** Event list_channels. */
                public list_channels?: (api.v1.event.IListChannels|null);

                /** Event list_roles. */
                public list_roles?: (api.v1.event.IListRoles|null);

                /** Event add_server. */
                public add_server?: (api.v1.event.IAddServer|null);

                /** Event add_channel. */
                public add_channel?: (api.v1.event.IAddChannel|null);

                /** Event add_role. */
                public add_role?: (api.v1.event.IAddRole|null);

                /** Event remove_server. */
                public remove_server?: (api.v1.event.IRemoveServer|null);

                /** Event remove_channel. */
                public remove_channel?: (api.v1.event.IRemoveChannel|null);

                /** Event remove_role. */
                public remove_role?: (api.v1.event.IRemoveRole|null);

                /** Event data. */
                public data?: ("list_servers"|"list_channels"|"list_roles"|"add_server"|"add_channel"|"add_role"|"remove_server"|"remove_channel"|"remove_role");

                /**
                 * Creates a new Event instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Event instance
                 */
                public static create(properties?: api.v1.event.IEvent): api.v1.event.Event;

                /**
                 * Encodes the specified Event message. Does not implicitly {@link api.v1.event.Event.verify|verify} messages.
                 * @param message Event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Event message, length delimited. Does not implicitly {@link api.v1.event.Event.verify|verify} messages.
                 * @param message Event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Event message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.Event;

                /**
                 * Decodes an Event message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.Event;

                /**
                 * Verifies an Event message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Event message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Event
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.Event;

                /**
                 * Creates a plain object from an Event message. Also converts values to other types if specified.
                 * @param message Event
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Event to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Event
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a NotificationMeta. */
            interface INotificationMeta {

                /** NotificationMeta action */
                action?: (api.v1.event.ActionType|null);

                /** NotificationMeta appusers */
                appusers?: (api.v1.appuser.IAppuser|null);
            }

            /** Represents a NotificationMeta. */
            class NotificationMeta implements INotificationMeta {

                /**
                 * Constructs a new NotificationMeta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.INotificationMeta);

                /** NotificationMeta action. */
                public action: api.v1.event.ActionType;

                /** NotificationMeta appusers. */
                public appusers?: (api.v1.appuser.IAppuser|null);

                /**
                 * Creates a new NotificationMeta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotificationMeta instance
                 */
                public static create(properties?: api.v1.event.INotificationMeta): api.v1.event.NotificationMeta;

                /**
                 * Encodes the specified NotificationMeta message. Does not implicitly {@link api.v1.event.NotificationMeta.verify|verify} messages.
                 * @param message NotificationMeta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.INotificationMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotificationMeta message, length delimited. Does not implicitly {@link api.v1.event.NotificationMeta.verify|verify} messages.
                 * @param message NotificationMeta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.INotificationMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotificationMeta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotificationMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.NotificationMeta;

                /**
                 * Decodes a NotificationMeta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotificationMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.NotificationMeta;

                /**
                 * Verifies a NotificationMeta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotificationMeta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotificationMeta
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.NotificationMeta;

                /**
                 * Creates a plain object from a NotificationMeta message. Also converts values to other types if specified.
                 * @param message NotificationMeta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.NotificationMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotificationMeta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NotificationMeta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Notification. */
            interface INotification {

                /** Notification meta */
                meta?: (api.v1.event.INotificationMeta|null);

                /** Notification list_servers */
                list_servers?: (api.v1.event.IListServers|null);

                /** Notification list_channels */
                list_channels?: (api.v1.event.IListChannels|null);

                /** Notification list_roles */
                list_roles?: (api.v1.event.IListRoles|null);

                /** Notification add_server */
                add_server?: (api.v1.event.IAddServer|null);

                /** Notification add_channel */
                add_channel?: (api.v1.event.IAddChannel|null);

                /** Notification add_role */
                add_role?: (api.v1.event.IAddRole|null);

                /** Notification remove_server */
                remove_server?: (api.v1.event.IRemoveServer|null);

                /** Notification remove_channel */
                remove_channel?: (api.v1.event.IRemoveChannel|null);

                /** Notification remove_role */
                remove_role?: (api.v1.event.IRemoveRole|null);
            }

            /** Represents a Notification. */
            class Notification implements INotification {

                /**
                 * Constructs a new Notification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.INotification);

                /** Notification meta. */
                public meta?: (api.v1.event.INotificationMeta|null);

                /** Notification list_servers. */
                public list_servers?: (api.v1.event.IListServers|null);

                /** Notification list_channels. */
                public list_channels?: (api.v1.event.IListChannels|null);

                /** Notification list_roles. */
                public list_roles?: (api.v1.event.IListRoles|null);

                /** Notification add_server. */
                public add_server?: (api.v1.event.IAddServer|null);

                /** Notification add_channel. */
                public add_channel?: (api.v1.event.IAddChannel|null);

                /** Notification add_role. */
                public add_role?: (api.v1.event.IAddRole|null);

                /** Notification remove_server. */
                public remove_server?: (api.v1.event.IRemoveServer|null);

                /** Notification remove_channel. */
                public remove_channel?: (api.v1.event.IRemoveChannel|null);

                /** Notification remove_role. */
                public remove_role?: (api.v1.event.IRemoveRole|null);

                /** Notification data. */
                public data?: ("list_servers"|"list_channels"|"list_roles"|"add_server"|"add_channel"|"add_role"|"remove_server"|"remove_channel"|"remove_role");

                /**
                 * Creates a new Notification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Notification instance
                 */
                public static create(properties?: api.v1.event.INotification): api.v1.event.Notification;

                /**
                 * Encodes the specified Notification message. Does not implicitly {@link api.v1.event.Notification.verify|verify} messages.
                 * @param message Notification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Notification message, length delimited. Does not implicitly {@link api.v1.event.Notification.verify|verify} messages.
                 * @param message Notification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Notification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.Notification;

                /**
                 * Decodes a Notification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.Notification;

                /**
                 * Verifies a Notification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Notification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Notification
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.Notification;

                /**
                 * Creates a plain object from a Notification message. Also converts values to other types if specified.
                 * @param message Notification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Notification to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Notification
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ActionType enum. */
            enum ActionType {
                ACTION_TYPE_UNSPECIFIED = 0,
                ACTION_LIST_SERVERS = 1,
                ACTION_LIST_CHANNELS = 2,
                ACTION_LIST_ROLES = 3,
                ACTION_ADD_SERVER = 100,
                ACTION_ADD_CHANNEL = 101,
                ACTION_ADD_ROLE = 102,
                ACTION_REMOVE_SERVER = 300,
                ACTION_REMOVE_CHANNEL = 301,
                ACTION_REMOVE_ROLE = 302
            }

            /** Properties of a ListServers. */
            interface IListServers {

                /** ListServers appservers */
                appservers?: (api.v1.appserver.IAppserver[]|null);
            }

            /** Represents a ListServers. */
            class ListServers implements IListServers {

                /**
                 * Constructs a new ListServers.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IListServers);

                /** ListServers appservers. */
                public appservers: api.v1.appserver.IAppserver[];

                /**
                 * Creates a new ListServers instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServers instance
                 */
                public static create(properties?: api.v1.event.IListServers): api.v1.event.ListServers;

                /**
                 * Encodes the specified ListServers message. Does not implicitly {@link api.v1.event.ListServers.verify|verify} messages.
                 * @param message ListServers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IListServers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServers message, length delimited. Does not implicitly {@link api.v1.event.ListServers.verify|verify} messages.
                 * @param message ListServers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IListServers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServers message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.ListServers;

                /**
                 * Decodes a ListServers message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.ListServers;

                /**
                 * Verifies a ListServers message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServers message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServers
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.ListServers;

                /**
                 * Creates a plain object from a ListServers message. Also converts values to other types if specified.
                 * @param message ListServers
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.ListServers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServers to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListServers
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListChannels. */
            interface IListChannels {

                /** ListChannels channels */
                channels?: (api.v1.channel.IChannel[]|null);
            }

            /** Represents a ListChannels. */
            class ListChannels implements IListChannels {

                /**
                 * Constructs a new ListChannels.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IListChannels);

                /** ListChannels channels. */
                public channels: api.v1.channel.IChannel[];

                /**
                 * Creates a new ListChannels instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListChannels instance
                 */
                public static create(properties?: api.v1.event.IListChannels): api.v1.event.ListChannels;

                /**
                 * Encodes the specified ListChannels message. Does not implicitly {@link api.v1.event.ListChannels.verify|verify} messages.
                 * @param message ListChannels message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IListChannels, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListChannels message, length delimited. Does not implicitly {@link api.v1.event.ListChannels.verify|verify} messages.
                 * @param message ListChannels message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IListChannels, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListChannels message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListChannels
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.ListChannels;

                /**
                 * Decodes a ListChannels message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListChannels
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.ListChannels;

                /**
                 * Verifies a ListChannels message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListChannels message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListChannels
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.ListChannels;

                /**
                 * Creates a plain object from a ListChannels message. Also converts values to other types if specified.
                 * @param message ListChannels
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.ListChannels, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListChannels to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListChannels
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListRoles. */
            interface IListRoles {

                /** ListRoles roles */
                roles?: (api.v1.appserver_role.IAppserverRole[]|null);
            }

            /** Represents a ListRoles. */
            class ListRoles implements IListRoles {

                /**
                 * Constructs a new ListRoles.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IListRoles);

                /** ListRoles roles. */
                public roles: api.v1.appserver_role.IAppserverRole[];

                /**
                 * Creates a new ListRoles instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListRoles instance
                 */
                public static create(properties?: api.v1.event.IListRoles): api.v1.event.ListRoles;

                /**
                 * Encodes the specified ListRoles message. Does not implicitly {@link api.v1.event.ListRoles.verify|verify} messages.
                 * @param message ListRoles message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IListRoles, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListRoles message, length delimited. Does not implicitly {@link api.v1.event.ListRoles.verify|verify} messages.
                 * @param message ListRoles message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IListRoles, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListRoles message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListRoles
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.ListRoles;

                /**
                 * Decodes a ListRoles message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListRoles
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.ListRoles;

                /**
                 * Verifies a ListRoles message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListRoles message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListRoles
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.ListRoles;

                /**
                 * Creates a plain object from a ListRoles message. Also converts values to other types if specified.
                 * @param message ListRoles
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.ListRoles, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListRoles to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListRoles
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AddServer. */
            interface IAddServer {

                /** AddServer appserver */
                appserver?: (api.v1.appserver.IAppserver|null);
            }

            /** Represents an AddServer. */
            class AddServer implements IAddServer {

                /**
                 * Constructs a new AddServer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IAddServer);

                /** AddServer appserver. */
                public appserver?: (api.v1.appserver.IAppserver|null);

                /**
                 * Creates a new AddServer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddServer instance
                 */
                public static create(properties?: api.v1.event.IAddServer): api.v1.event.AddServer;

                /**
                 * Encodes the specified AddServer message. Does not implicitly {@link api.v1.event.AddServer.verify|verify} messages.
                 * @param message AddServer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IAddServer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddServer message, length delimited. Does not implicitly {@link api.v1.event.AddServer.verify|verify} messages.
                 * @param message AddServer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IAddServer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddServer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.AddServer;

                /**
                 * Decodes an AddServer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.AddServer;

                /**
                 * Verifies an AddServer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddServer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddServer
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.AddServer;

                /**
                 * Creates a plain object from an AddServer message. Also converts values to other types if specified.
                 * @param message AddServer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.AddServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddServer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AddServer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AddChannel. */
            interface IAddChannel {

                /** AddChannel channel */
                channel?: (api.v1.channel.IChannel|null);
            }

            /** Represents an AddChannel. */
            class AddChannel implements IAddChannel {

                /**
                 * Constructs a new AddChannel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IAddChannel);

                /** AddChannel channel. */
                public channel?: (api.v1.channel.IChannel|null);

                /**
                 * Creates a new AddChannel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddChannel instance
                 */
                public static create(properties?: api.v1.event.IAddChannel): api.v1.event.AddChannel;

                /**
                 * Encodes the specified AddChannel message. Does not implicitly {@link api.v1.event.AddChannel.verify|verify} messages.
                 * @param message AddChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IAddChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddChannel message, length delimited. Does not implicitly {@link api.v1.event.AddChannel.verify|verify} messages.
                 * @param message AddChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IAddChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddChannel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.AddChannel;

                /**
                 * Decodes an AddChannel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.AddChannel;

                /**
                 * Verifies an AddChannel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddChannel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddChannel
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.AddChannel;

                /**
                 * Creates a plain object from an AddChannel message. Also converts values to other types if specified.
                 * @param message AddChannel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.AddChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddChannel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AddChannel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AddRole. */
            interface IAddRole {

                /** AddRole role */
                role?: (api.v1.appserver_role.IAppserverRole|null);
            }

            /** Represents an AddRole. */
            class AddRole implements IAddRole {

                /**
                 * Constructs a new AddRole.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IAddRole);

                /** AddRole role. */
                public role?: (api.v1.appserver_role.IAppserverRole|null);

                /**
                 * Creates a new AddRole instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddRole instance
                 */
                public static create(properties?: api.v1.event.IAddRole): api.v1.event.AddRole;

                /**
                 * Encodes the specified AddRole message. Does not implicitly {@link api.v1.event.AddRole.verify|verify} messages.
                 * @param message AddRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IAddRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddRole message, length delimited. Does not implicitly {@link api.v1.event.AddRole.verify|verify} messages.
                 * @param message AddRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IAddRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddRole message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.AddRole;

                /**
                 * Decodes an AddRole message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.AddRole;

                /**
                 * Verifies an AddRole message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddRole message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddRole
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.AddRole;

                /**
                 * Creates a plain object from an AddRole message. Also converts values to other types if specified.
                 * @param message AddRole
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.AddRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddRole to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AddRole
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RemoveServer. */
            interface IRemoveServer {

                /** RemoveServer id */
                id?: (string|null);
            }

            /** Represents a RemoveServer. */
            class RemoveServer implements IRemoveServer {

                /**
                 * Constructs a new RemoveServer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IRemoveServer);

                /** RemoveServer id. */
                public id: string;

                /**
                 * Creates a new RemoveServer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveServer instance
                 */
                public static create(properties?: api.v1.event.IRemoveServer): api.v1.event.RemoveServer;

                /**
                 * Encodes the specified RemoveServer message. Does not implicitly {@link api.v1.event.RemoveServer.verify|verify} messages.
                 * @param message RemoveServer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IRemoveServer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveServer message, length delimited. Does not implicitly {@link api.v1.event.RemoveServer.verify|verify} messages.
                 * @param message RemoveServer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IRemoveServer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveServer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.RemoveServer;

                /**
                 * Decodes a RemoveServer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RemoveServer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.RemoveServer;

                /**
                 * Verifies a RemoveServer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RemoveServer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RemoveServer
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.RemoveServer;

                /**
                 * Creates a plain object from a RemoveServer message. Also converts values to other types if specified.
                 * @param message RemoveServer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.RemoveServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveServer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RemoveServer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RemoveChannel. */
            interface IRemoveChannel {

                /** RemoveChannel id */
                id?: (string|null);
            }

            /** Represents a RemoveChannel. */
            class RemoveChannel implements IRemoveChannel {

                /**
                 * Constructs a new RemoveChannel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IRemoveChannel);

                /** RemoveChannel id. */
                public id: string;

                /**
                 * Creates a new RemoveChannel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveChannel instance
                 */
                public static create(properties?: api.v1.event.IRemoveChannel): api.v1.event.RemoveChannel;

                /**
                 * Encodes the specified RemoveChannel message. Does not implicitly {@link api.v1.event.RemoveChannel.verify|verify} messages.
                 * @param message RemoveChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IRemoveChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveChannel message, length delimited. Does not implicitly {@link api.v1.event.RemoveChannel.verify|verify} messages.
                 * @param message RemoveChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IRemoveChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveChannel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.RemoveChannel;

                /**
                 * Decodes a RemoveChannel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RemoveChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.RemoveChannel;

                /**
                 * Verifies a RemoveChannel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RemoveChannel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RemoveChannel
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.RemoveChannel;

                /**
                 * Creates a plain object from a RemoveChannel message. Also converts values to other types if specified.
                 * @param message RemoveChannel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.RemoveChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveChannel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RemoveChannel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RemoveRole. */
            interface IRemoveRole {

                /** RemoveRole id */
                id?: (string|null);
            }

            /** Represents a RemoveRole. */
            class RemoveRole implements IRemoveRole {

                /**
                 * Constructs a new RemoveRole.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.event.IRemoveRole);

                /** RemoveRole id. */
                public id: string;

                /**
                 * Creates a new RemoveRole instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveRole instance
                 */
                public static create(properties?: api.v1.event.IRemoveRole): api.v1.event.RemoveRole;

                /**
                 * Encodes the specified RemoveRole message. Does not implicitly {@link api.v1.event.RemoveRole.verify|verify} messages.
                 * @param message RemoveRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.event.IRemoveRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveRole message, length delimited. Does not implicitly {@link api.v1.event.RemoveRole.verify|verify} messages.
                 * @param message RemoveRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.event.IRemoveRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveRole message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.event.RemoveRole;

                /**
                 * Decodes a RemoveRole message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RemoveRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.event.RemoveRole;

                /**
                 * Verifies a RemoveRole message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RemoveRole message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RemoveRole
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.event.RemoveRole;

                /**
                 * Creates a plain object from a RemoveRole message. Also converts values to other types if specified.
                 * @param message RemoveRole
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.event.RemoveRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveRole to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RemoveRole
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace appserver. */
        namespace appserver {

            /** Represents an AppserverService */
            class AppserverService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new AppserverService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new AppserverService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AppserverService;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateResponse
                 */
                public create(request: api.v1.appserver.ICreateRequest, callback: api.v1.appserver.AppserverService.CreateCallback): void;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @returns Promise
                 */
                public create(request: api.v1.appserver.ICreateRequest): Promise<api.v1.appserver.CreateResponse>;

                /**
                 * Calls GetById.
                 * @param request GetByIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetByIdResponse
                 */
                public getById(request: api.v1.appserver.IGetByIdRequest, callback: api.v1.appserver.AppserverService.GetByIdCallback): void;

                /**
                 * Calls GetById.
                 * @param request GetByIdRequest message or plain object
                 * @returns Promise
                 */
                public getById(request: api.v1.appserver.IGetByIdRequest): Promise<api.v1.appserver.GetByIdResponse>;

                /**
                 * Calls List.
                 * @param request ListRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListResponse
                 */
                public list(request: api.v1.appserver.IListRequest, callback: api.v1.appserver.AppserverService.ListCallback): void;

                /**
                 * Calls List.
                 * @param request ListRequest message or plain object
                 * @returns Promise
                 */
                public list(request: api.v1.appserver.IListRequest): Promise<api.v1.appserver.ListResponse>;

                /**
                 * Calls Delete.
                 * @param request DeleteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteResponse
                 */
                public delete(request: api.v1.appserver.IDeleteRequest, callback: api.v1.appserver.AppserverService.DeleteCallback): void;

                /**
                 * Calls Delete.
                 * @param request DeleteRequest message or plain object
                 * @returns Promise
                 */
                public delete(request: api.v1.appserver.IDeleteRequest): Promise<api.v1.appserver.DeleteResponse>;
            }

            namespace AppserverService {

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#create}.
                 * @param error Error, if any
                 * @param [response] CreateResponse
                 */
                type CreateCallback = (error: (Error|null), response?: api.v1.appserver.CreateResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#getById}.
                 * @param error Error, if any
                 * @param [response] GetByIdResponse
                 */
                type GetByIdCallback = (error: (Error|null), response?: api.v1.appserver.GetByIdResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#list}.
                 * @param error Error, if any
                 * @param [response] ListResponse
                 */
                type ListCallback = (error: (Error|null), response?: api.v1.appserver.ListResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#delete_}.
                 * @param error Error, if any
                 * @param [response] DeleteResponse
                 */
                type DeleteCallback = (error: (Error|null), response?: api.v1.appserver.DeleteResponse) => void;
            }

            /** Properties of an Appserver. */
            interface IAppserver {

                /** Appserver id */
                id?: (string|null);

                /** Appserver name */
                name?: (string|null);

                /** Appserver is_owner */
                is_owner?: (boolean|null);

                /** Appserver created_at */
                created_at?: (google.protobuf.ITimestamp|null);

                /** Appserver updated_at */
                updated_at?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an Appserver. */
            class Appserver implements IAppserver {

                /**
                 * Constructs a new Appserver.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IAppserver);

                /** Appserver id. */
                public id: string;

                /** Appserver name. */
                public name: string;

                /** Appserver is_owner. */
                public is_owner: boolean;

                /** Appserver created_at. */
                public created_at?: (google.protobuf.ITimestamp|null);

                /** Appserver updated_at. */
                public updated_at?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Appserver instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Appserver instance
                 */
                public static create(properties?: api.v1.appserver.IAppserver): api.v1.appserver.Appserver;

                /**
                 * Encodes the specified Appserver message. Does not implicitly {@link api.v1.appserver.Appserver.verify|verify} messages.
                 * @param message Appserver message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IAppserver, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Appserver message, length delimited. Does not implicitly {@link api.v1.appserver.Appserver.verify|verify} messages.
                 * @param message Appserver message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IAppserver, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Appserver message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.Appserver;

                /**
                 * Decodes an Appserver message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.Appserver;

                /**
                 * Verifies an Appserver message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Appserver message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Appserver
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.Appserver;

                /**
                 * Creates a plain object from an Appserver message. Also converts values to other types if specified.
                 * @param message Appserver
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.Appserver, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Appserver to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Appserver
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateRequest. */
            interface ICreateRequest {

                /** CreateRequest name */
                name?: (string|null);
            }

            /** Represents a CreateRequest. */
            class CreateRequest implements ICreateRequest {

                /**
                 * Constructs a new CreateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateRequest);

                /** CreateRequest name. */
                public name: string;

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateRequest instance
                 */
                public static create(properties?: api.v1.appserver.ICreateRequest): api.v1.appserver.CreateRequest;

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.appserver.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateRequest;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateRequest;

                /**
                 * Verifies a CreateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateRequest;

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @param message CreateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateResponse. */
            interface ICreateResponse {

                /** CreateResponse appserver */
                appserver?: (api.v1.appserver.IAppserver|null);
            }

            /** Represents a CreateResponse. */
            class CreateResponse implements ICreateResponse {

                /**
                 * Constructs a new CreateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateResponse);

                /** CreateResponse appserver. */
                public appserver?: (api.v1.appserver.IAppserver|null);

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateResponse instance
                 */
                public static create(properties?: api.v1.appserver.ICreateResponse): api.v1.appserver.CreateResponse;

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.appserver.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateResponse;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateResponse;

                /**
                 * Verifies a CreateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateResponse;

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @param message CreateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdRequest. */
            interface IGetByIdRequest {

                /** GetByIdRequest id */
                id?: (string|null);
            }

            /** Represents a GetByIdRequest. */
            class GetByIdRequest implements IGetByIdRequest {

                /**
                 * Constructs a new GetByIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetByIdRequest);

                /** GetByIdRequest id. */
                public id: string;

                /**
                 * Creates a new GetByIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdRequest instance
                 */
                public static create(properties?: api.v1.appserver.IGetByIdRequest): api.v1.appserver.GetByIdRequest;

                /**
                 * Encodes the specified GetByIdRequest message. Does not implicitly {@link api.v1.appserver.GetByIdRequest.verify|verify} messages.
                 * @param message GetByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdRequest.verify|verify} messages.
                 * @param message GetByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetByIdRequest;

                /**
                 * Decodes a GetByIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetByIdRequest;

                /**
                 * Verifies a GetByIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetByIdRequest;

                /**
                 * Creates a plain object from a GetByIdRequest message. Also converts values to other types if specified.
                 * @param message GetByIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdResponse. */
            interface IGetByIdResponse {

                /** GetByIdResponse appserver */
                appserver?: (api.v1.appserver.IAppserver|null);
            }

            /** Represents a GetByIdResponse. */
            class GetByIdResponse implements IGetByIdResponse {

                /**
                 * Constructs a new GetByIdResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetByIdResponse);

                /** GetByIdResponse appserver. */
                public appserver?: (api.v1.appserver.IAppserver|null);

                /**
                 * Creates a new GetByIdResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdResponse instance
                 */
                public static create(properties?: api.v1.appserver.IGetByIdResponse): api.v1.appserver.GetByIdResponse;

                /**
                 * Encodes the specified GetByIdResponse message. Does not implicitly {@link api.v1.appserver.GetByIdResponse.verify|verify} messages.
                 * @param message GetByIdResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdResponse.verify|verify} messages.
                 * @param message GetByIdResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetByIdResponse;

                /**
                 * Decodes a GetByIdResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetByIdResponse;

                /**
                 * Verifies a GetByIdResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetByIdResponse;

                /**
                 * Creates a plain object from a GetByIdResponse message. Also converts values to other types if specified.
                 * @param message GetByIdResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetByIdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListRequest. */
            interface IListRequest {

                /** ListRequest name */
                name?: (google.protobuf.IStringValue|null);
            }

            /** Represents a ListRequest. */
            class ListRequest implements IListRequest {

                /**
                 * Constructs a new ListRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IListRequest);

                /** ListRequest name. */
                public name?: (google.protobuf.IStringValue|null);

                /**
                 * Creates a new ListRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListRequest instance
                 */
                public static create(properties?: api.v1.appserver.IListRequest): api.v1.appserver.ListRequest;

                /**
                 * Encodes the specified ListRequest message. Does not implicitly {@link api.v1.appserver.ListRequest.verify|verify} messages.
                 * @param message ListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListRequest message, length delimited. Does not implicitly {@link api.v1.appserver.ListRequest.verify|verify} messages.
                 * @param message ListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.ListRequest;

                /**
                 * Decodes a ListRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.ListRequest;

                /**
                 * Verifies a ListRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.ListRequest;

                /**
                 * Creates a plain object from a ListRequest message. Also converts values to other types if specified.
                 * @param message ListRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.ListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListResponse. */
            interface IListResponse {

                /** ListResponse appservers */
                appservers?: (api.v1.appserver.IAppserver[]|null);
            }

            /** Represents a ListResponse. */
            class ListResponse implements IListResponse {

                /**
                 * Constructs a new ListResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IListResponse);

                /** ListResponse appservers. */
                public appservers: api.v1.appserver.IAppserver[];

                /**
                 * Creates a new ListResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListResponse instance
                 */
                public static create(properties?: api.v1.appserver.IListResponse): api.v1.appserver.ListResponse;

                /**
                 * Encodes the specified ListResponse message. Does not implicitly {@link api.v1.appserver.ListResponse.verify|verify} messages.
                 * @param message ListResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListResponse message, length delimited. Does not implicitly {@link api.v1.appserver.ListResponse.verify|verify} messages.
                 * @param message ListResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.ListResponse;

                /**
                 * Decodes a ListResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.ListResponse;

                /**
                 * Verifies a ListResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.ListResponse;

                /**
                 * Creates a plain object from a ListResponse message. Also converts values to other types if specified.
                 * @param message ListResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.ListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteRequest. */
            interface IDeleteRequest {

                /** DeleteRequest id */
                id?: (string|null);
            }

            /** Represents a DeleteRequest. */
            class DeleteRequest implements IDeleteRequest {

                /**
                 * Constructs a new DeleteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteRequest);

                /** DeleteRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteRequest instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteRequest): api.v1.appserver.DeleteRequest;

                /**
                 * Encodes the specified DeleteRequest message. Does not implicitly {@link api.v1.appserver.DeleteRequest.verify|verify} messages.
                 * @param message DeleteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteRequest.verify|verify} messages.
                 * @param message DeleteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteRequest;

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteRequest;

                /**
                 * Verifies a DeleteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteRequest;

                /**
                 * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                 * @param message DeleteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteResponse. */
            interface IDeleteResponse {
            }

            /** Represents a DeleteResponse. */
            class DeleteResponse implements IDeleteResponse {

                /**
                 * Constructs a new DeleteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteResponse);

                /**
                 * Creates a new DeleteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteResponse instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteResponse): api.v1.appserver.DeleteResponse;

                /**
                 * Encodes the specified DeleteResponse message. Does not implicitly {@link api.v1.appserver.DeleteResponse.verify|verify} messages.
                 * @param message DeleteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteResponse.verify|verify} messages.
                 * @param message DeleteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteResponse;

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteResponse;

                /**
                 * Verifies a DeleteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteResponse;

                /**
                 * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                 * @param message DeleteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace appserver_role. */
        namespace appserver_role {

            /** Represents an AppserverRoleService */
            class AppserverRoleService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new AppserverRoleService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new AppserverRoleService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AppserverRoleService;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateResponse
                 */
                public create(request: api.v1.appserver_role.ICreateRequest, callback: api.v1.appserver_role.AppserverRoleService.CreateCallback): void;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @returns Promise
                 */
                public create(request: api.v1.appserver_role.ICreateRequest): Promise<api.v1.appserver_role.CreateResponse>;

                /**
                 * Calls ListServerRoles.
                 * @param request ListServerRolesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListServerRolesResponse
                 */
                public listServerRoles(request: api.v1.appserver_role.IListServerRolesRequest, callback: api.v1.appserver_role.AppserverRoleService.ListServerRolesCallback): void;

                /**
                 * Calls ListServerRoles.
                 * @param request ListServerRolesRequest message or plain object
                 * @returns Promise
                 */
                public listServerRoles(request: api.v1.appserver_role.IListServerRolesRequest): Promise<api.v1.appserver_role.ListServerRolesResponse>;

                /**
                 * Calls Delete.
                 * @param request DeleteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteResponse
                 */
                public delete(request: api.v1.appserver_role.IDeleteRequest, callback: api.v1.appserver_role.AppserverRoleService.DeleteCallback): void;

                /**
                 * Calls Delete.
                 * @param request DeleteRequest message or plain object
                 * @returns Promise
                 */
                public delete(request: api.v1.appserver_role.IDeleteRequest): Promise<api.v1.appserver_role.DeleteResponse>;
            }

            namespace AppserverRoleService {

                /**
                 * Callback as used by {@link api.v1.appserver_role.AppserverRoleService#create}.
                 * @param error Error, if any
                 * @param [response] CreateResponse
                 */
                type CreateCallback = (error: (Error|null), response?: api.v1.appserver_role.CreateResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver_role.AppserverRoleService#listServerRoles}.
                 * @param error Error, if any
                 * @param [response] ListServerRolesResponse
                 */
                type ListServerRolesCallback = (error: (Error|null), response?: api.v1.appserver_role.ListServerRolesResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver_role.AppserverRoleService#delete_}.
                 * @param error Error, if any
                 * @param [response] DeleteResponse
                 */
                type DeleteCallback = (error: (Error|null), response?: api.v1.appserver_role.DeleteResponse) => void;
            }

            /** Properties of an AppserverRole. */
            interface IAppserverRole {

                /** AppserverRole id */
                id?: (string|null);

                /** AppserverRole name */
                name?: (string|null);

                /** AppserverRole appserver_id */
                appserver_id?: (string|null);

                /** AppserverRole appserver_permission_mask */
                appserver_permission_mask?: (Long|null);

                /** AppserverRole channel_permission_mask */
                channel_permission_mask?: (Long|null);

                /** AppserverRole sub_permission_mask */
                sub_permission_mask?: (Long|null);

                /** AppserverRole created_at */
                created_at?: (google.protobuf.ITimestamp|null);

                /** AppserverRole updated_at */
                updated_at?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an AppserverRole. */
            class AppserverRole implements IAppserverRole {

                /**
                 * Constructs a new AppserverRole.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.IAppserverRole);

                /** AppserverRole id. */
                public id: string;

                /** AppserverRole name. */
                public name: string;

                /** AppserverRole appserver_id. */
                public appserver_id: string;

                /** AppserverRole appserver_permission_mask. */
                public appserver_permission_mask: Long;

                /** AppserverRole channel_permission_mask. */
                public channel_permission_mask: Long;

                /** AppserverRole sub_permission_mask. */
                public sub_permission_mask: Long;

                /** AppserverRole created_at. */
                public created_at?: (google.protobuf.ITimestamp|null);

                /** AppserverRole updated_at. */
                public updated_at?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new AppserverRole instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverRole instance
                 */
                public static create(properties?: api.v1.appserver_role.IAppserverRole): api.v1.appserver_role.AppserverRole;

                /**
                 * Encodes the specified AppserverRole message. Does not implicitly {@link api.v1.appserver_role.AppserverRole.verify|verify} messages.
                 * @param message AppserverRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.IAppserverRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverRole message, length delimited. Does not implicitly {@link api.v1.appserver_role.AppserverRole.verify|verify} messages.
                 * @param message AppserverRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.IAppserverRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverRole message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.AppserverRole;

                /**
                 * Decodes an AppserverRole message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.AppserverRole;

                /**
                 * Verifies an AppserverRole message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverRole message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverRole
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.AppserverRole;

                /**
                 * Creates a plain object from an AppserverRole message. Also converts values to other types if specified.
                 * @param message AppserverRole
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.AppserverRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverRole to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverRole
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateRequest. */
            interface ICreateRequest {

                /** CreateRequest appserver_id */
                appserver_id?: (string|null);

                /** CreateRequest name */
                name?: (string|null);

                /** CreateRequest appserver_permission_mask */
                appserver_permission_mask?: (Long|null);

                /** CreateRequest channel_permission_mask */
                channel_permission_mask?: (Long|null);

                /** CreateRequest sub_permission_mask */
                sub_permission_mask?: (Long|null);
            }

            /** Represents a CreateRequest. */
            class CreateRequest implements ICreateRequest {

                /**
                 * Constructs a new CreateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.ICreateRequest);

                /** CreateRequest appserver_id. */
                public appserver_id: string;

                /** CreateRequest name. */
                public name: string;

                /** CreateRequest appserver_permission_mask. */
                public appserver_permission_mask: Long;

                /** CreateRequest channel_permission_mask. */
                public channel_permission_mask: Long;

                /** CreateRequest sub_permission_mask. */
                public sub_permission_mask: Long;

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateRequest instance
                 */
                public static create(properties?: api.v1.appserver_role.ICreateRequest): api.v1.appserver_role.CreateRequest;

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.appserver_role.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.appserver_role.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.CreateRequest;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.CreateRequest;

                /**
                 * Verifies a CreateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.CreateRequest;

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @param message CreateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.CreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateResponse. */
            interface ICreateResponse {

                /** CreateResponse appserver_role */
                appserver_role?: (api.v1.appserver_role.IAppserverRole|null);
            }

            /** Represents a CreateResponse. */
            class CreateResponse implements ICreateResponse {

                /**
                 * Constructs a new CreateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.ICreateResponse);

                /** CreateResponse appserver_role. */
                public appserver_role?: (api.v1.appserver_role.IAppserverRole|null);

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateResponse instance
                 */
                public static create(properties?: api.v1.appserver_role.ICreateResponse): api.v1.appserver_role.CreateResponse;

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.appserver_role.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.appserver_role.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.CreateResponse;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.CreateResponse;

                /**
                 * Verifies a CreateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.CreateResponse;

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @param message CreateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.CreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListServerRolesRequest. */
            interface IListServerRolesRequest {

                /** ListServerRolesRequest appserver_id */
                appserver_id?: (string|null);
            }

            /** Represents a ListServerRolesRequest. */
            class ListServerRolesRequest implements IListServerRolesRequest {

                /**
                 * Constructs a new ListServerRolesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.IListServerRolesRequest);

                /** ListServerRolesRequest appserver_id. */
                public appserver_id: string;

                /**
                 * Creates a new ListServerRolesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServerRolesRequest instance
                 */
                public static create(properties?: api.v1.appserver_role.IListServerRolesRequest): api.v1.appserver_role.ListServerRolesRequest;

                /**
                 * Encodes the specified ListServerRolesRequest message. Does not implicitly {@link api.v1.appserver_role.ListServerRolesRequest.verify|verify} messages.
                 * @param message ListServerRolesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.IListServerRolesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServerRolesRequest message, length delimited. Does not implicitly {@link api.v1.appserver_role.ListServerRolesRequest.verify|verify} messages.
                 * @param message ListServerRolesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.IListServerRolesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServerRolesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServerRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.ListServerRolesRequest;

                /**
                 * Decodes a ListServerRolesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServerRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.ListServerRolesRequest;

                /**
                 * Verifies a ListServerRolesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServerRolesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServerRolesRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.ListServerRolesRequest;

                /**
                 * Creates a plain object from a ListServerRolesRequest message. Also converts values to other types if specified.
                 * @param message ListServerRolesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.ListServerRolesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServerRolesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListServerRolesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListServerRolesResponse. */
            interface IListServerRolesResponse {

                /** ListServerRolesResponse appserver_roles */
                appserver_roles?: (api.v1.appserver_role.IAppserverRole[]|null);
            }

            /** Represents a ListServerRolesResponse. */
            class ListServerRolesResponse implements IListServerRolesResponse {

                /**
                 * Constructs a new ListServerRolesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.IListServerRolesResponse);

                /** ListServerRolesResponse appserver_roles. */
                public appserver_roles: api.v1.appserver_role.IAppserverRole[];

                /**
                 * Creates a new ListServerRolesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServerRolesResponse instance
                 */
                public static create(properties?: api.v1.appserver_role.IListServerRolesResponse): api.v1.appserver_role.ListServerRolesResponse;

                /**
                 * Encodes the specified ListServerRolesResponse message. Does not implicitly {@link api.v1.appserver_role.ListServerRolesResponse.verify|verify} messages.
                 * @param message ListServerRolesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.IListServerRolesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServerRolesResponse message, length delimited. Does not implicitly {@link api.v1.appserver_role.ListServerRolesResponse.verify|verify} messages.
                 * @param message ListServerRolesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.IListServerRolesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServerRolesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServerRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.ListServerRolesResponse;

                /**
                 * Decodes a ListServerRolesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServerRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.ListServerRolesResponse;

                /**
                 * Verifies a ListServerRolesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServerRolesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServerRolesResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.ListServerRolesResponse;

                /**
                 * Creates a plain object from a ListServerRolesResponse message. Also converts values to other types if specified.
                 * @param message ListServerRolesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.ListServerRolesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServerRolesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListServerRolesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteRequest. */
            interface IDeleteRequest {

                /** DeleteRequest id */
                id?: (string|null);

                /** DeleteRequest appserver_id */
                appserver_id?: (string|null);
            }

            /** Represents a DeleteRequest. */
            class DeleteRequest implements IDeleteRequest {

                /**
                 * Constructs a new DeleteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.IDeleteRequest);

                /** DeleteRequest id. */
                public id: string;

                /** DeleteRequest appserver_id. */
                public appserver_id: string;

                /**
                 * Creates a new DeleteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteRequest instance
                 */
                public static create(properties?: api.v1.appserver_role.IDeleteRequest): api.v1.appserver_role.DeleteRequest;

                /**
                 * Encodes the specified DeleteRequest message. Does not implicitly {@link api.v1.appserver_role.DeleteRequest.verify|verify} messages.
                 * @param message DeleteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link api.v1.appserver_role.DeleteRequest.verify|verify} messages.
                 * @param message DeleteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.DeleteRequest;

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.DeleteRequest;

                /**
                 * Verifies a DeleteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.DeleteRequest;

                /**
                 * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                 * @param message DeleteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteResponse. */
            interface IDeleteResponse {
            }

            /** Represents a DeleteResponse. */
            class DeleteResponse implements IDeleteResponse {

                /**
                 * Constructs a new DeleteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver_role.IDeleteResponse);

                /**
                 * Creates a new DeleteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteResponse instance
                 */
                public static create(properties?: api.v1.appserver_role.IDeleteResponse): api.v1.appserver_role.DeleteResponse;

                /**
                 * Encodes the specified DeleteResponse message. Does not implicitly {@link api.v1.appserver_role.DeleteResponse.verify|verify} messages.
                 * @param message DeleteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver_role.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link api.v1.appserver_role.DeleteResponse.verify|verify} messages.
                 * @param message DeleteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver_role.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver_role.DeleteResponse;

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver_role.DeleteResponse;

                /**
                 * Verifies a DeleteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver_role.DeleteResponse;

                /**
                 * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                 * @param message DeleteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver_role.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace channel. */
        namespace channel {

            /** Represents a ChannelService */
            class ChannelService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ChannelService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ChannelService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ChannelService;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateResponse
                 */
                public create(request: api.v1.channel.ICreateRequest, callback: api.v1.channel.ChannelService.CreateCallback): void;

                /**
                 * Calls Create.
                 * @param request CreateRequest message or plain object
                 * @returns Promise
                 */
                public create(request: api.v1.channel.ICreateRequest): Promise<api.v1.channel.CreateResponse>;

                /**
                 * Calls GetById.
                 * @param request GetByIdRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetByIdResponse
                 */
                public getById(request: api.v1.channel.IGetByIdRequest, callback: api.v1.channel.ChannelService.GetByIdCallback): void;

                /**
                 * Calls GetById.
                 * @param request GetByIdRequest message or plain object
                 * @returns Promise
                 */
                public getById(request: api.v1.channel.IGetByIdRequest): Promise<api.v1.channel.GetByIdResponse>;

                /**
                 * Calls ListServerChannels.
                 * @param request ListServerChannelsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListServerChannelsResponse
                 */
                public listServerChannels(request: api.v1.channel.IListServerChannelsRequest, callback: api.v1.channel.ChannelService.ListServerChannelsCallback): void;

                /**
                 * Calls ListServerChannels.
                 * @param request ListServerChannelsRequest message or plain object
                 * @returns Promise
                 */
                public listServerChannels(request: api.v1.channel.IListServerChannelsRequest): Promise<api.v1.channel.ListServerChannelsResponse>;

                /**
                 * Calls Delete.
                 * @param request DeleteRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteResponse
                 */
                public delete(request: api.v1.channel.IDeleteRequest, callback: api.v1.channel.ChannelService.DeleteCallback): void;

                /**
                 * Calls Delete.
                 * @param request DeleteRequest message or plain object
                 * @returns Promise
                 */
                public delete(request: api.v1.channel.IDeleteRequest): Promise<api.v1.channel.DeleteResponse>;
            }

            namespace ChannelService {

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#create}.
                 * @param error Error, if any
                 * @param [response] CreateResponse
                 */
                type CreateCallback = (error: (Error|null), response?: api.v1.channel.CreateResponse) => void;

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#getById}.
                 * @param error Error, if any
                 * @param [response] GetByIdResponse
                 */
                type GetByIdCallback = (error: (Error|null), response?: api.v1.channel.GetByIdResponse) => void;

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#listServerChannels}.
                 * @param error Error, if any
                 * @param [response] ListServerChannelsResponse
                 */
                type ListServerChannelsCallback = (error: (Error|null), response?: api.v1.channel.ListServerChannelsResponse) => void;

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#delete_}.
                 * @param error Error, if any
                 * @param [response] DeleteResponse
                 */
                type DeleteCallback = (error: (Error|null), response?: api.v1.channel.DeleteResponse) => void;
            }

            /** Properties of a Channel. */
            interface IChannel {

                /** Channel id */
                id?: (string|null);

                /** Channel name */
                name?: (string|null);

                /** Channel appserver_id */
                appserver_id?: (string|null);

                /** Channel is_private */
                is_private?: (boolean|null);

                /** Channel created_at */
                created_at?: (google.protobuf.ITimestamp|null);

                /** Channel updated_at */
                updated_at?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Channel. */
            class Channel implements IChannel {

                /**
                 * Constructs a new Channel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IChannel);

                /** Channel id. */
                public id: string;

                /** Channel name. */
                public name: string;

                /** Channel appserver_id. */
                public appserver_id: string;

                /** Channel is_private. */
                public is_private: boolean;

                /** Channel created_at. */
                public created_at?: (google.protobuf.ITimestamp|null);

                /** Channel updated_at. */
                public updated_at?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Channel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Channel instance
                 */
                public static create(properties?: api.v1.channel.IChannel): api.v1.channel.Channel;

                /**
                 * Encodes the specified Channel message. Does not implicitly {@link api.v1.channel.Channel.verify|verify} messages.
                 * @param message Channel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Channel message, length delimited. Does not implicitly {@link api.v1.channel.Channel.verify|verify} messages.
                 * @param message Channel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Channel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.Channel;

                /**
                 * Decodes a Channel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.Channel;

                /**
                 * Verifies a Channel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Channel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Channel
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.Channel;

                /**
                 * Creates a plain object from a Channel message. Also converts values to other types if specified.
                 * @param message Channel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Channel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Channel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateRequest. */
            interface ICreateRequest {

                /** CreateRequest name */
                name?: (string|null);

                /** CreateRequest appserver_id */
                appserver_id?: (string|null);

                /** CreateRequest is_private */
                is_private?: (boolean|null);
            }

            /** Represents a CreateRequest. */
            class CreateRequest implements ICreateRequest {

                /**
                 * Constructs a new CreateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.ICreateRequest);

                /** CreateRequest name. */
                public name: string;

                /** CreateRequest appserver_id. */
                public appserver_id: string;

                /** CreateRequest is_private. */
                public is_private: boolean;

                /**
                 * Creates a new CreateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateRequest instance
                 */
                public static create(properties?: api.v1.channel.ICreateRequest): api.v1.channel.CreateRequest;

                /**
                 * Encodes the specified CreateRequest message. Does not implicitly {@link api.v1.channel.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link api.v1.channel.CreateRequest.verify|verify} messages.
                 * @param message CreateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.CreateRequest;

                /**
                 * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.CreateRequest;

                /**
                 * Verifies a CreateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.CreateRequest;

                /**
                 * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
                 * @param message CreateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.CreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateResponse. */
            interface ICreateResponse {

                /** CreateResponse channel */
                channel?: (api.v1.channel.IChannel|null);
            }

            /** Represents a CreateResponse. */
            class CreateResponse implements ICreateResponse {

                /**
                 * Constructs a new CreateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.ICreateResponse);

                /** CreateResponse channel. */
                public channel?: (api.v1.channel.IChannel|null);

                /**
                 * Creates a new CreateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateResponse instance
                 */
                public static create(properties?: api.v1.channel.ICreateResponse): api.v1.channel.CreateResponse;

                /**
                 * Encodes the specified CreateResponse message. Does not implicitly {@link api.v1.channel.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link api.v1.channel.CreateResponse.verify|verify} messages.
                 * @param message CreateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.CreateResponse;

                /**
                 * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.CreateResponse;

                /**
                 * Verifies a CreateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.CreateResponse;

                /**
                 * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
                 * @param message CreateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.CreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdRequest. */
            interface IGetByIdRequest {

                /** GetByIdRequest id */
                id?: (string|null);

                /** GetByIdRequest appserver_id */
                appserver_id?: (string|null);
            }

            /** Represents a GetByIdRequest. */
            class GetByIdRequest implements IGetByIdRequest {

                /**
                 * Constructs a new GetByIdRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IGetByIdRequest);

                /** GetByIdRequest id. */
                public id: string;

                /** GetByIdRequest appserver_id. */
                public appserver_id: string;

                /**
                 * Creates a new GetByIdRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdRequest instance
                 */
                public static create(properties?: api.v1.channel.IGetByIdRequest): api.v1.channel.GetByIdRequest;

                /**
                 * Encodes the specified GetByIdRequest message. Does not implicitly {@link api.v1.channel.GetByIdRequest.verify|verify} messages.
                 * @param message GetByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IGetByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdRequest message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdRequest.verify|verify} messages.
                 * @param message GetByIdRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IGetByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.GetByIdRequest;

                /**
                 * Decodes a GetByIdRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.GetByIdRequest;

                /**
                 * Verifies a GetByIdRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.GetByIdRequest;

                /**
                 * Creates a plain object from a GetByIdRequest message. Also converts values to other types if specified.
                 * @param message GetByIdRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.GetByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdResponse. */
            interface IGetByIdResponse {

                /** GetByIdResponse channel */
                channel?: (api.v1.channel.IChannel|null);
            }

            /** Represents a GetByIdResponse. */
            class GetByIdResponse implements IGetByIdResponse {

                /**
                 * Constructs a new GetByIdResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IGetByIdResponse);

                /** GetByIdResponse channel. */
                public channel?: (api.v1.channel.IChannel|null);

                /**
                 * Creates a new GetByIdResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdResponse instance
                 */
                public static create(properties?: api.v1.channel.IGetByIdResponse): api.v1.channel.GetByIdResponse;

                /**
                 * Encodes the specified GetByIdResponse message. Does not implicitly {@link api.v1.channel.GetByIdResponse.verify|verify} messages.
                 * @param message GetByIdResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IGetByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdResponse message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdResponse.verify|verify} messages.
                 * @param message GetByIdResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IGetByIdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.GetByIdResponse;

                /**
                 * Decodes a GetByIdResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.GetByIdResponse;

                /**
                 * Verifies a GetByIdResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.GetByIdResponse;

                /**
                 * Creates a plain object from a GetByIdResponse message. Also converts values to other types if specified.
                 * @param message GetByIdResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.GetByIdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListServerChannelsRequest. */
            interface IListServerChannelsRequest {

                /** ListServerChannelsRequest name */
                name?: (google.protobuf.IStringValue|null);

                /** ListServerChannelsRequest appserver_id */
                appserver_id?: (string|null);
            }

            /** Represents a ListServerChannelsRequest. */
            class ListServerChannelsRequest implements IListServerChannelsRequest {

                /**
                 * Constructs a new ListServerChannelsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IListServerChannelsRequest);

                /** ListServerChannelsRequest name. */
                public name?: (google.protobuf.IStringValue|null);

                /** ListServerChannelsRequest appserver_id. */
                public appserver_id: string;

                /**
                 * Creates a new ListServerChannelsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServerChannelsRequest instance
                 */
                public static create(properties?: api.v1.channel.IListServerChannelsRequest): api.v1.channel.ListServerChannelsRequest;

                /**
                 * Encodes the specified ListServerChannelsRequest message. Does not implicitly {@link api.v1.channel.ListServerChannelsRequest.verify|verify} messages.
                 * @param message ListServerChannelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IListServerChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServerChannelsRequest message, length delimited. Does not implicitly {@link api.v1.channel.ListServerChannelsRequest.verify|verify} messages.
                 * @param message ListServerChannelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IListServerChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServerChannelsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServerChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.ListServerChannelsRequest;

                /**
                 * Decodes a ListServerChannelsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServerChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.ListServerChannelsRequest;

                /**
                 * Verifies a ListServerChannelsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServerChannelsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServerChannelsRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.ListServerChannelsRequest;

                /**
                 * Creates a plain object from a ListServerChannelsRequest message. Also converts values to other types if specified.
                 * @param message ListServerChannelsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.ListServerChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServerChannelsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListServerChannelsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListServerChannelsResponse. */
            interface IListServerChannelsResponse {

                /** ListServerChannelsResponse channels */
                channels?: (api.v1.channel.IChannel[]|null);
            }

            /** Represents a ListServerChannelsResponse. */
            class ListServerChannelsResponse implements IListServerChannelsResponse {

                /**
                 * Constructs a new ListServerChannelsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IListServerChannelsResponse);

                /** ListServerChannelsResponse channels. */
                public channels: api.v1.channel.IChannel[];

                /**
                 * Creates a new ListServerChannelsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServerChannelsResponse instance
                 */
                public static create(properties?: api.v1.channel.IListServerChannelsResponse): api.v1.channel.ListServerChannelsResponse;

                /**
                 * Encodes the specified ListServerChannelsResponse message. Does not implicitly {@link api.v1.channel.ListServerChannelsResponse.verify|verify} messages.
                 * @param message ListServerChannelsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IListServerChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServerChannelsResponse message, length delimited. Does not implicitly {@link api.v1.channel.ListServerChannelsResponse.verify|verify} messages.
                 * @param message ListServerChannelsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IListServerChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServerChannelsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServerChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.ListServerChannelsResponse;

                /**
                 * Decodes a ListServerChannelsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServerChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.ListServerChannelsResponse;

                /**
                 * Verifies a ListServerChannelsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServerChannelsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServerChannelsResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.ListServerChannelsResponse;

                /**
                 * Creates a plain object from a ListServerChannelsResponse message. Also converts values to other types if specified.
                 * @param message ListServerChannelsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.ListServerChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServerChannelsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListServerChannelsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteRequest. */
            interface IDeleteRequest {

                /** DeleteRequest id */
                id?: (string|null);

                /** DeleteRequest appserver_id */
                appserver_id?: (string|null);
            }

            /** Represents a DeleteRequest. */
            class DeleteRequest implements IDeleteRequest {

                /**
                 * Constructs a new DeleteRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IDeleteRequest);

                /** DeleteRequest id. */
                public id: string;

                /** DeleteRequest appserver_id. */
                public appserver_id: string;

                /**
                 * Creates a new DeleteRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteRequest instance
                 */
                public static create(properties?: api.v1.channel.IDeleteRequest): api.v1.channel.DeleteRequest;

                /**
                 * Encodes the specified DeleteRequest message. Does not implicitly {@link api.v1.channel.DeleteRequest.verify|verify} messages.
                 * @param message DeleteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link api.v1.channel.DeleteRequest.verify|verify} messages.
                 * @param message DeleteRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.DeleteRequest;

                /**
                 * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.DeleteRequest;

                /**
                 * Verifies a DeleteRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.DeleteRequest;

                /**
                 * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
                 * @param message DeleteRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteResponse. */
            interface IDeleteResponse {
            }

            /** Represents a DeleteResponse. */
            class DeleteResponse implements IDeleteResponse {

                /**
                 * Constructs a new DeleteResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IDeleteResponse);

                /**
                 * Creates a new DeleteResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteResponse instance
                 */
                public static create(properties?: api.v1.channel.IDeleteResponse): api.v1.channel.DeleteResponse;

                /**
                 * Encodes the specified DeleteResponse message. Does not implicitly {@link api.v1.channel.DeleteResponse.verify|verify} messages.
                 * @param message DeleteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link api.v1.channel.DeleteResponse.verify|verify} messages.
                 * @param message DeleteResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.DeleteResponse;

                /**
                 * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.DeleteResponse;

                /**
                 * Verifies a DeleteResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.DeleteResponse;

                /**
                 * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
                 * @param message DeleteResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace messages. */
        namespace messages {

            /** Properties of an InputMessage. */
            interface IInputMessage {

                /** InputMessage meta */
                meta?: (api.v1.messages.IMessageMeta|null);

                /** InputMessage input */
                input?: (api.v1.messages.IInput|null);
            }

            /** Represents an InputMessage. */
            class InputMessage implements IInputMessage {

                /**
                 * Constructs a new InputMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IInputMessage);

                /** InputMessage meta. */
                public meta?: (api.v1.messages.IMessageMeta|null);

                /** InputMessage input. */
                public input?: (api.v1.messages.IInput|null);

                /**
                 * Creates a new InputMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InputMessage instance
                 */
                public static create(properties?: api.v1.messages.IInputMessage): api.v1.messages.InputMessage;

                /**
                 * Encodes the specified InputMessage message. Does not implicitly {@link api.v1.messages.InputMessage.verify|verify} messages.
                 * @param message InputMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IInputMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InputMessage message, length delimited. Does not implicitly {@link api.v1.messages.InputMessage.verify|verify} messages.
                 * @param message InputMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IInputMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InputMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.InputMessage;

                /**
                 * Decodes an InputMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.InputMessage;

                /**
                 * Verifies an InputMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InputMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InputMessage
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.InputMessage;

                /**
                 * Creates a plain object from an InputMessage message. Also converts values to other types if specified.
                 * @param message InputMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.InputMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InputMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InputMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MessageMeta. */
            interface IMessageMeta {

                /** MessageMeta action */
                action?: (api.v1.messages.MessageActionType|null);
            }

            /** Represents a MessageMeta. */
            class MessageMeta implements IMessageMeta {

                /**
                 * Constructs a new MessageMeta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IMessageMeta);

                /** MessageMeta action. */
                public action: api.v1.messages.MessageActionType;

                /**
                 * Creates a new MessageMeta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MessageMeta instance
                 */
                public static create(properties?: api.v1.messages.IMessageMeta): api.v1.messages.MessageMeta;

                /**
                 * Encodes the specified MessageMeta message. Does not implicitly {@link api.v1.messages.MessageMeta.verify|verify} messages.
                 * @param message MessageMeta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IMessageMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MessageMeta message, length delimited. Does not implicitly {@link api.v1.messages.MessageMeta.verify|verify} messages.
                 * @param message MessageMeta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IMessageMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MessageMeta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MessageMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.MessageMeta;

                /**
                 * Decodes a MessageMeta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MessageMeta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.MessageMeta;

                /**
                 * Verifies a MessageMeta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MessageMeta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MessageMeta
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.MessageMeta;

                /**
                 * Creates a plain object from a MessageMeta message. Also converts values to other types if specified.
                 * @param message MessageMeta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.MessageMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MessageMeta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MessageMeta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** MessageActionType enum. */
            enum MessageActionType {
                ACTION_TYPE_UNSPECIFIED = 0,
                ACTION_TYPE_GET = 1,
                ACTION_TYPE_LIST = 2,
                ACTION_TYPE_CREATE = 3,
                ACTION_TYPE_UPDATE = 4,
                ACTION_TYPE_DELETE = 5,
                ACTION_TYPE_NOTIFICATION = 6
            }

            /** Properties of an Input. */
            interface IInput {

                /** Input update_jwt_token */
                update_jwt_token?: (api.v1.messages.IUpdateJwtToken|null);
            }

            /** Represents an Input. */
            class Input implements IInput {

                /**
                 * Constructs a new Input.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IInput);

                /** Input update_jwt_token. */
                public update_jwt_token?: (api.v1.messages.IUpdateJwtToken|null);

                /** Input data. */
                public data?: "update_jwt_token";

                /**
                 * Creates a new Input instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Input instance
                 */
                public static create(properties?: api.v1.messages.IInput): api.v1.messages.Input;

                /**
                 * Encodes the specified Input message. Does not implicitly {@link api.v1.messages.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Input message, length delimited. Does not implicitly {@link api.v1.messages.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.Input;

                /**
                 * Decodes an Input message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.Input;

                /**
                 * Verifies an Input message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Input message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Input
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.Input;

                /**
                 * Creates a plain object from an Input message. Also converts values to other types if specified.
                 * @param message Input
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Input to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Input
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateJwtToken. */
            interface IUpdateJwtToken {

                /** UpdateJwtToken access */
                access?: (string|null);
            }

            /** Represents an UpdateJwtToken. */
            class UpdateJwtToken implements IUpdateJwtToken {

                /**
                 * Constructs a new UpdateJwtToken.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IUpdateJwtToken);

                /** UpdateJwtToken access. */
                public access: string;

                /**
                 * Creates a new UpdateJwtToken instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateJwtToken instance
                 */
                public static create(properties?: api.v1.messages.IUpdateJwtToken): api.v1.messages.UpdateJwtToken;

                /**
                 * Encodes the specified UpdateJwtToken message. Does not implicitly {@link api.v1.messages.UpdateJwtToken.verify|verify} messages.
                 * @param message UpdateJwtToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IUpdateJwtToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateJwtToken message, length delimited. Does not implicitly {@link api.v1.messages.UpdateJwtToken.verify|verify} messages.
                 * @param message UpdateJwtToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IUpdateJwtToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.UpdateJwtToken;

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.UpdateJwtToken;

                /**
                 * Verifies an UpdateJwtToken message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateJwtToken message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateJwtToken
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.UpdateJwtToken;

                /**
                 * Creates a plain object from an UpdateJwtToken message. Also converts values to other types if specified.
                 * @param message UpdateJwtToken
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.UpdateJwtToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateJwtToken to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateJwtToken
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: Long;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: Long;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
