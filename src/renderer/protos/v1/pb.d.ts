import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace api. */
export namespace api {

    /** Namespace v1. */
    namespace v1 {

        /** Namespace messages. */
        namespace messages {

            /** Properties of an InputMessage. */
            interface IInputMessage {

                /** InputMessage meta */
                meta?: (api.v1.messages.IMeta|null);

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
                public meta?: (api.v1.messages.IMeta|null);

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

            /** Properties of an OutputMessage. */
            interface IOutputMessage {

                /** OutputMessage meta */
                meta?: (api.v1.messages.IMeta|null);

                /** OutputMessage output */
                output?: (api.v1.messages.IOutput|null);
            }

            /** Represents an OutputMessage. */
            class OutputMessage implements IOutputMessage {

                /**
                 * Constructs a new OutputMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IOutputMessage);

                /** OutputMessage meta. */
                public meta?: (api.v1.messages.IMeta|null);

                /** OutputMessage output. */
                public output?: (api.v1.messages.IOutput|null);

                /**
                 * Creates a new OutputMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutputMessage instance
                 */
                public static create(properties?: api.v1.messages.IOutputMessage): api.v1.messages.OutputMessage;

                /**
                 * Encodes the specified OutputMessage message. Does not implicitly {@link api.v1.messages.OutputMessage.verify|verify} messages.
                 * @param message OutputMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IOutputMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutputMessage message, length delimited. Does not implicitly {@link api.v1.messages.OutputMessage.verify|verify} messages.
                 * @param message OutputMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IOutputMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.OutputMessage;

                /**
                 * Decodes an OutputMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutputMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.OutputMessage;

                /**
                 * Verifies an OutputMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutputMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutputMessage
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.OutputMessage;

                /**
                 * Creates a plain object from an OutputMessage message. Also converts values to other types if specified.
                 * @param message OutputMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.OutputMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutputMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OutputMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Meta. */
            interface IMeta {

                /** Meta action */
                action?: (api.v1.messages.ActionType|null);
            }

            /** Represents a Meta. */
            class Meta implements IMeta {

                /**
                 * Constructs a new Meta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IMeta);

                /** Meta action. */
                public action: api.v1.messages.ActionType;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Meta instance
                 */
                public static create(properties?: api.v1.messages.IMeta): api.v1.messages.Meta;

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link api.v1.messages.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link api.v1.messages.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.Meta;

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.Meta;

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
                public static fromObject(object: { [k: string]: any }): api.v1.messages.Meta;

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @param message Meta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** ActionType enum. */
            enum ActionType {
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

                /** Input updateJwtToken */
                updateJwtToken?: (api.v1.messages.IUpdateJwtToken|null);

                /** Input appserverListing */
                appserverListing?: (api.v1.messages.IAppserverListingRequest|null);

                /** Input appserverDetails */
                appserverDetails?: (api.v1.appserver.IGetByIdAppserverRequest|null);

                /** Input createAppserver */
                createAppserver?: (api.v1.appserver.ICreateAppserverRequest|null);

                /** Input deleteAppserver */
                deleteAppserver?: (api.v1.appserver.IDeleteAppserverRequest|null);

                /** Input createChannel */
                createChannel?: (api.v1.channel.ICreateChannelRequest|null);

                /** Input channelListing */
                channelListing?: (api.v1.channel.IListChannelsRequest|null);

                /** Input joinAppserver */
                joinAppserver?: (api.v1.appserver.ICreateAppserverSubRequest|null);

                /** Input createAppserverRole */
                createAppserverRole?: (api.v1.appserver.ICreateAppserverRoleRequest|null);

                /** Input appserverRoleListing */
                appserverRoleListing?: (api.v1.appserver.IGetAllAppserverRolesRequest|null);
            }

            /** Represents an Input. */
            class Input implements IInput {

                /**
                 * Constructs a new Input.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IInput);

                /** Input updateJwtToken. */
                public updateJwtToken?: (api.v1.messages.IUpdateJwtToken|null);

                /** Input appserverListing. */
                public appserverListing?: (api.v1.messages.IAppserverListingRequest|null);

                /** Input appserverDetails. */
                public appserverDetails?: (api.v1.appserver.IGetByIdAppserverRequest|null);

                /** Input createAppserver. */
                public createAppserver?: (api.v1.appserver.ICreateAppserverRequest|null);

                /** Input deleteAppserver. */
                public deleteAppserver?: (api.v1.appserver.IDeleteAppserverRequest|null);

                /** Input createChannel. */
                public createChannel?: (api.v1.channel.ICreateChannelRequest|null);

                /** Input channelListing. */
                public channelListing?: (api.v1.channel.IListChannelsRequest|null);

                /** Input joinAppserver. */
                public joinAppserver?: (api.v1.appserver.ICreateAppserverSubRequest|null);

                /** Input createAppserverRole. */
                public createAppserverRole?: (api.v1.appserver.ICreateAppserverRoleRequest|null);

                /** Input appserverRoleListing. */
                public appserverRoleListing?: (api.v1.appserver.IGetAllAppserverRolesRequest|null);

                /** Input data. */
                public data?: ("updateJwtToken"|"appserverListing"|"appserverDetails"|"createAppserver"|"deleteAppserver"|"createChannel"|"channelListing"|"joinAppserver"|"createAppserverRole"|"appserverRoleListing");

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

            /** Properties of an Output. */
            interface IOutput {

                /** Output appserverListing */
                appserverListing?: (api.v1.appserver.IGetUserAppserverSubsResponse|null);

                /** Output appserverDetails */
                appserverDetails?: (api.v1.appserver.IGetByIdAppserverResponse|null);

                /** Output channelListing */
                channelListing?: (api.v1.channel.IListChannelsResponse|null);

                /** Output updateAddAppserver */
                updateAddAppserver?: (api.v1.appserver.IAppserver|null);

                /** Output appserverRolesListing */
                appserverRolesListing?: (api.v1.appserver.IGetAllAppserverRolesResponse|null);

                /** Output updateRemoveAppserver */
                updateRemoveAppserver?: (string|null);
            }

            /** Represents an Output. */
            class Output implements IOutput {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IOutput);

                /** Output appserverListing. */
                public appserverListing?: (api.v1.appserver.IGetUserAppserverSubsResponse|null);

                /** Output appserverDetails. */
                public appserverDetails?: (api.v1.appserver.IGetByIdAppserverResponse|null);

                /** Output channelListing. */
                public channelListing?: (api.v1.channel.IListChannelsResponse|null);

                /** Output updateAddAppserver. */
                public updateAddAppserver?: (api.v1.appserver.IAppserver|null);

                /** Output appserverRolesListing. */
                public appserverRolesListing?: (api.v1.appserver.IGetAllAppserverRolesResponse|null);

                /** Output updateRemoveAppserver. */
                public updateRemoveAppserver?: (string|null);

                /** Output data. */
                public data?: ("appserverListing"|"appserverDetails"|"channelListing"|"updateAddAppserver"|"appserverRolesListing"|"updateRemoveAppserver");

                /**
                 * Creates a new Output instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Output instance
                 */
                public static create(properties?: api.v1.messages.IOutput): api.v1.messages.Output;

                /**
                 * Encodes the specified Output message. Does not implicitly {@link api.v1.messages.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Output message, length delimited. Does not implicitly {@link api.v1.messages.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.Output;

                /**
                 * Decodes an Output message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.Output;

                /**
                 * Verifies an Output message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Output message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Output
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.Output;

                /**
                 * Creates a plain object from an Output message. Also converts values to other types if specified.
                 * @param message Output
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Output to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Output
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AppserverDetailsRequest. */
            interface IAppserverDetailsRequest {

                /** AppserverDetailsRequest id */
                id?: (string|null);
            }

            /** Represents an AppserverDetailsRequest. */
            class AppserverDetailsRequest implements IAppserverDetailsRequest {

                /**
                 * Constructs a new AppserverDetailsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IAppserverDetailsRequest);

                /** AppserverDetailsRequest id. */
                public id: string;

                /**
                 * Creates a new AppserverDetailsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverDetailsRequest instance
                 */
                public static create(properties?: api.v1.messages.IAppserverDetailsRequest): api.v1.messages.AppserverDetailsRequest;

                /**
                 * Encodes the specified AppserverDetailsRequest message. Does not implicitly {@link api.v1.messages.AppserverDetailsRequest.verify|verify} messages.
                 * @param message AppserverDetailsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IAppserverDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverDetailsRequest message, length delimited. Does not implicitly {@link api.v1.messages.AppserverDetailsRequest.verify|verify} messages.
                 * @param message AppserverDetailsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IAppserverDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverDetailsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverDetailsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.AppserverDetailsRequest;

                /**
                 * Decodes an AppserverDetailsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverDetailsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.AppserverDetailsRequest;

                /**
                 * Verifies an AppserverDetailsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverDetailsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverDetailsRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.AppserverDetailsRequest;

                /**
                 * Creates a plain object from an AppserverDetailsRequest message. Also converts values to other types if specified.
                 * @param message AppserverDetailsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.AppserverDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverDetailsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverDetailsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AppserverListingRequest. */
            interface IAppserverListingRequest {
            }

            /** Represents an AppserverListingRequest. */
            class AppserverListingRequest implements IAppserverListingRequest {

                /**
                 * Constructs a new AppserverListingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IAppserverListingRequest);

                /**
                 * Creates a new AppserverListingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverListingRequest instance
                 */
                public static create(properties?: api.v1.messages.IAppserverListingRequest): api.v1.messages.AppserverListingRequest;

                /**
                 * Encodes the specified AppserverListingRequest message. Does not implicitly {@link api.v1.messages.AppserverListingRequest.verify|verify} messages.
                 * @param message AppserverListingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IAppserverListingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverListingRequest message, length delimited. Does not implicitly {@link api.v1.messages.AppserverListingRequest.verify|verify} messages.
                 * @param message AppserverListingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IAppserverListingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverListingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverListingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.AppserverListingRequest;

                /**
                 * Decodes an AppserverListingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverListingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.AppserverListingRequest;

                /**
                 * Verifies an AppserverListingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverListingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverListingRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.AppserverListingRequest;

                /**
                 * Creates a plain object from an AppserverListingRequest message. Also converts values to other types if specified.
                 * @param message AppserverListingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.AppserverListingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverListingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverListingRequest
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
                 * Calls CreateChannel.
                 * @param request CreateChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateChannelResponse
                 */
                public createChannel(request: api.v1.channel.ICreateChannelRequest, callback: api.v1.channel.ChannelService.CreateChannelCallback): void;

                /**
                 * Calls CreateChannel.
                 * @param request CreateChannelRequest message or plain object
                 * @returns Promise
                 */
                public createChannel(request: api.v1.channel.ICreateChannelRequest): Promise<api.v1.channel.CreateChannelResponse>;

                /**
                 * Calls GetByIdChannel.
                 * @param request GetByIdChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetByIdChannelResponse
                 */
                public getByIdChannel(request: api.v1.channel.IGetByIdChannelRequest, callback: api.v1.channel.ChannelService.GetByIdChannelCallback): void;

                /**
                 * Calls GetByIdChannel.
                 * @param request GetByIdChannelRequest message or plain object
                 * @returns Promise
                 */
                public getByIdChannel(request: api.v1.channel.IGetByIdChannelRequest): Promise<api.v1.channel.GetByIdChannelResponse>;

                /**
                 * Calls ListChannels.
                 * @param request ListChannelsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListChannelsResponse
                 */
                public listChannels(request: api.v1.channel.IListChannelsRequest, callback: api.v1.channel.ChannelService.ListChannelsCallback): void;

                /**
                 * Calls ListChannels.
                 * @param request ListChannelsRequest message or plain object
                 * @returns Promise
                 */
                public listChannels(request: api.v1.channel.IListChannelsRequest): Promise<api.v1.channel.ListChannelsResponse>;

                /**
                 * Calls DeleteChannel.
                 * @param request DeleteChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteChannelResponse
                 */
                public deleteChannel(request: api.v1.channel.IDeleteChannelRequest, callback: api.v1.channel.ChannelService.DeleteChannelCallback): void;

                /**
                 * Calls DeleteChannel.
                 * @param request DeleteChannelRequest message or plain object
                 * @returns Promise
                 */
                public deleteChannel(request: api.v1.channel.IDeleteChannelRequest): Promise<api.v1.channel.DeleteChannelResponse>;
            }

            namespace ChannelService {

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#createChannel}.
                 * @param error Error, if any
                 * @param [response] CreateChannelResponse
                 */
                type CreateChannelCallback = (error: (Error|null), response?: api.v1.channel.CreateChannelResponse) => void;

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#getByIdChannel}.
                 * @param error Error, if any
                 * @param [response] GetByIdChannelResponse
                 */
                type GetByIdChannelCallback = (error: (Error|null), response?: api.v1.channel.GetByIdChannelResponse) => void;

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#listChannels}.
                 * @param error Error, if any
                 * @param [response] ListChannelsResponse
                 */
                type ListChannelsCallback = (error: (Error|null), response?: api.v1.channel.ListChannelsResponse) => void;

                /**
                 * Callback as used by {@link api.v1.channel.ChannelService#deleteChannel}.
                 * @param error Error, if any
                 * @param [response] DeleteChannelResponse
                 */
                type DeleteChannelCallback = (error: (Error|null), response?: api.v1.channel.DeleteChannelResponse) => void;
            }

            /** Properties of a Channel. */
            interface IChannel {

                /** Channel id */
                id?: (string|null);

                /** Channel name */
                name?: (string|null);

                /** Channel appserverId */
                appserverId?: (string|null);

                /** Channel createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Channel updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
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

                /** Channel appserverId. */
                public appserverId: string;

                /** Channel createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Channel updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

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

            /** Properties of a CreateChannelRequest. */
            interface ICreateChannelRequest {

                /** CreateChannelRequest name */
                name?: (string|null);

                /** CreateChannelRequest appserverId */
                appserverId?: (string|null);
            }

            /** Represents a CreateChannelRequest. */
            class CreateChannelRequest implements ICreateChannelRequest {

                /**
                 * Constructs a new CreateChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.ICreateChannelRequest);

                /** CreateChannelRequest name. */
                public name: string;

                /** CreateChannelRequest appserverId. */
                public appserverId: string;

                /**
                 * Creates a new CreateChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateChannelRequest instance
                 */
                public static create(properties?: api.v1.channel.ICreateChannelRequest): api.v1.channel.CreateChannelRequest;

                /**
                 * Encodes the specified CreateChannelRequest message. Does not implicitly {@link api.v1.channel.CreateChannelRequest.verify|verify} messages.
                 * @param message CreateChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.ICreateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateChannelRequest message, length delimited. Does not implicitly {@link api.v1.channel.CreateChannelRequest.verify|verify} messages.
                 * @param message CreateChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.ICreateChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.CreateChannelRequest;

                /**
                 * Decodes a CreateChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.CreateChannelRequest;

                /**
                 * Verifies a CreateChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.CreateChannelRequest;

                /**
                 * Creates a plain object from a CreateChannelRequest message. Also converts values to other types if specified.
                 * @param message CreateChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.CreateChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateChannelRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdChannelRequest. */
            interface IGetByIdChannelRequest {

                /** GetByIdChannelRequest id */
                id?: (string|null);
            }

            /** Represents a GetByIdChannelRequest. */
            class GetByIdChannelRequest implements IGetByIdChannelRequest {

                /**
                 * Constructs a new GetByIdChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IGetByIdChannelRequest);

                /** GetByIdChannelRequest id. */
                public id: string;

                /**
                 * Creates a new GetByIdChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdChannelRequest instance
                 */
                public static create(properties?: api.v1.channel.IGetByIdChannelRequest): api.v1.channel.GetByIdChannelRequest;

                /**
                 * Encodes the specified GetByIdChannelRequest message. Does not implicitly {@link api.v1.channel.GetByIdChannelRequest.verify|verify} messages.
                 * @param message GetByIdChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IGetByIdChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdChannelRequest message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdChannelRequest.verify|verify} messages.
                 * @param message GetByIdChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IGetByIdChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.GetByIdChannelRequest;

                /**
                 * Decodes a GetByIdChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.GetByIdChannelRequest;

                /**
                 * Verifies a GetByIdChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.GetByIdChannelRequest;

                /**
                 * Creates a plain object from a GetByIdChannelRequest message. Also converts values to other types if specified.
                 * @param message GetByIdChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.GetByIdChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdChannelRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListChannelsRequest. */
            interface IListChannelsRequest {

                /** ListChannelsRequest name */
                name?: (google.protobuf.IStringValue|null);

                /** ListChannelsRequest appserverId */
                appserverId?: (google.protobuf.IStringValue|null);
            }

            /** Represents a ListChannelsRequest. */
            class ListChannelsRequest implements IListChannelsRequest {

                /**
                 * Constructs a new ListChannelsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IListChannelsRequest);

                /** ListChannelsRequest name. */
                public name?: (google.protobuf.IStringValue|null);

                /** ListChannelsRequest appserverId. */
                public appserverId?: (google.protobuf.IStringValue|null);

                /**
                 * Creates a new ListChannelsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListChannelsRequest instance
                 */
                public static create(properties?: api.v1.channel.IListChannelsRequest): api.v1.channel.ListChannelsRequest;

                /**
                 * Encodes the specified ListChannelsRequest message. Does not implicitly {@link api.v1.channel.ListChannelsRequest.verify|verify} messages.
                 * @param message ListChannelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link api.v1.channel.ListChannelsRequest.verify|verify} messages.
                 * @param message ListChannelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListChannelsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.ListChannelsRequest;

                /**
                 * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.ListChannelsRequest;

                /**
                 * Verifies a ListChannelsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListChannelsRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.ListChannelsRequest;

                /**
                 * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
                 * @param message ListChannelsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.ListChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListChannelsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListChannelsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteChannelRequest. */
            interface IDeleteChannelRequest {

                /** DeleteChannelRequest id */
                id?: (string|null);
            }

            /** Represents a DeleteChannelRequest. */
            class DeleteChannelRequest implements IDeleteChannelRequest {

                /**
                 * Constructs a new DeleteChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IDeleteChannelRequest);

                /** DeleteChannelRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteChannelRequest instance
                 */
                public static create(properties?: api.v1.channel.IDeleteChannelRequest): api.v1.channel.DeleteChannelRequest;

                /**
                 * Encodes the specified DeleteChannelRequest message. Does not implicitly {@link api.v1.channel.DeleteChannelRequest.verify|verify} messages.
                 * @param message DeleteChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IDeleteChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteChannelRequest message, length delimited. Does not implicitly {@link api.v1.channel.DeleteChannelRequest.verify|verify} messages.
                 * @param message DeleteChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IDeleteChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.DeleteChannelRequest;

                /**
                 * Decodes a DeleteChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.DeleteChannelRequest;

                /**
                 * Verifies a DeleteChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.DeleteChannelRequest;

                /**
                 * Creates a plain object from a DeleteChannelRequest message. Also converts values to other types if specified.
                 * @param message DeleteChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.DeleteChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteChannelRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateChannelResponse. */
            interface ICreateChannelResponse {

                /** CreateChannelResponse channel */
                channel?: (api.v1.channel.IChannel|null);
            }

            /** Represents a CreateChannelResponse. */
            class CreateChannelResponse implements ICreateChannelResponse {

                /**
                 * Constructs a new CreateChannelResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.ICreateChannelResponse);

                /** CreateChannelResponse channel. */
                public channel?: (api.v1.channel.IChannel|null);

                /**
                 * Creates a new CreateChannelResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateChannelResponse instance
                 */
                public static create(properties?: api.v1.channel.ICreateChannelResponse): api.v1.channel.CreateChannelResponse;

                /**
                 * Encodes the specified CreateChannelResponse message. Does not implicitly {@link api.v1.channel.CreateChannelResponse.verify|verify} messages.
                 * @param message CreateChannelResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.ICreateChannelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateChannelResponse message, length delimited. Does not implicitly {@link api.v1.channel.CreateChannelResponse.verify|verify} messages.
                 * @param message CreateChannelResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.ICreateChannelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateChannelResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.CreateChannelResponse;

                /**
                 * Decodes a CreateChannelResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.CreateChannelResponse;

                /**
                 * Verifies a CreateChannelResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateChannelResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateChannelResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.CreateChannelResponse;

                /**
                 * Creates a plain object from a CreateChannelResponse message. Also converts values to other types if specified.
                 * @param message CreateChannelResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.CreateChannelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateChannelResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateChannelResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdChannelResponse. */
            interface IGetByIdChannelResponse {

                /** GetByIdChannelResponse channel */
                channel?: (api.v1.channel.IChannel|null);
            }

            /** Represents a GetByIdChannelResponse. */
            class GetByIdChannelResponse implements IGetByIdChannelResponse {

                /**
                 * Constructs a new GetByIdChannelResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IGetByIdChannelResponse);

                /** GetByIdChannelResponse channel. */
                public channel?: (api.v1.channel.IChannel|null);

                /**
                 * Creates a new GetByIdChannelResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdChannelResponse instance
                 */
                public static create(properties?: api.v1.channel.IGetByIdChannelResponse): api.v1.channel.GetByIdChannelResponse;

                /**
                 * Encodes the specified GetByIdChannelResponse message. Does not implicitly {@link api.v1.channel.GetByIdChannelResponse.verify|verify} messages.
                 * @param message GetByIdChannelResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IGetByIdChannelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdChannelResponse message, length delimited. Does not implicitly {@link api.v1.channel.GetByIdChannelResponse.verify|verify} messages.
                 * @param message GetByIdChannelResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IGetByIdChannelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdChannelResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.GetByIdChannelResponse;

                /**
                 * Decodes a GetByIdChannelResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.GetByIdChannelResponse;

                /**
                 * Verifies a GetByIdChannelResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdChannelResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdChannelResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.GetByIdChannelResponse;

                /**
                 * Creates a plain object from a GetByIdChannelResponse message. Also converts values to other types if specified.
                 * @param message GetByIdChannelResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.GetByIdChannelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdChannelResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdChannelResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListChannelsResponse. */
            interface IListChannelsResponse {

                /** ListChannelsResponse channels */
                channels?: (api.v1.channel.IChannel[]|null);
            }

            /** Represents a ListChannelsResponse. */
            class ListChannelsResponse implements IListChannelsResponse {

                /**
                 * Constructs a new ListChannelsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IListChannelsResponse);

                /** ListChannelsResponse channels. */
                public channels: api.v1.channel.IChannel[];

                /**
                 * Creates a new ListChannelsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListChannelsResponse instance
                 */
                public static create(properties?: api.v1.channel.IListChannelsResponse): api.v1.channel.ListChannelsResponse;

                /**
                 * Encodes the specified ListChannelsResponse message. Does not implicitly {@link api.v1.channel.ListChannelsResponse.verify|verify} messages.
                 * @param message ListChannelsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link api.v1.channel.ListChannelsResponse.verify|verify} messages.
                 * @param message ListChannelsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListChannelsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.ListChannelsResponse;

                /**
                 * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.ListChannelsResponse;

                /**
                 * Verifies a ListChannelsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListChannelsResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.ListChannelsResponse;

                /**
                 * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
                 * @param message ListChannelsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.ListChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListChannelsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListChannelsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteChannelResponse. */
            interface IDeleteChannelResponse {
            }

            /** Represents a DeleteChannelResponse. */
            class DeleteChannelResponse implements IDeleteChannelResponse {

                /**
                 * Constructs a new DeleteChannelResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.channel.IDeleteChannelResponse);

                /**
                 * Creates a new DeleteChannelResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteChannelResponse instance
                 */
                public static create(properties?: api.v1.channel.IDeleteChannelResponse): api.v1.channel.DeleteChannelResponse;

                /**
                 * Encodes the specified DeleteChannelResponse message. Does not implicitly {@link api.v1.channel.DeleteChannelResponse.verify|verify} messages.
                 * @param message DeleteChannelResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.channel.IDeleteChannelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteChannelResponse message, length delimited. Does not implicitly {@link api.v1.channel.DeleteChannelResponse.verify|verify} messages.
                 * @param message DeleteChannelResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.channel.IDeleteChannelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteChannelResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.channel.DeleteChannelResponse;

                /**
                 * Decodes a DeleteChannelResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteChannelResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.channel.DeleteChannelResponse;

                /**
                 * Verifies a DeleteChannelResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteChannelResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteChannelResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.channel.DeleteChannelResponse;

                /**
                 * Creates a plain object from a DeleteChannelResponse message. Also converts values to other types if specified.
                 * @param message DeleteChannelResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.channel.DeleteChannelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteChannelResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteChannelResponse
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
                 * Calls CreateAppserver.
                 * @param request CreateAppserverRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateAppserverResponse
                 */
                public createAppserver(request: api.v1.appserver.ICreateAppserverRequest, callback: api.v1.appserver.AppserverService.CreateAppserverCallback): void;

                /**
                 * Calls CreateAppserver.
                 * @param request CreateAppserverRequest message or plain object
                 * @returns Promise
                 */
                public createAppserver(request: api.v1.appserver.ICreateAppserverRequest): Promise<api.v1.appserver.CreateAppserverResponse>;

                /**
                 * Calls GetByIdAppserver.
                 * @param request GetByIdAppserverRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetByIdAppserverResponse
                 */
                public getByIdAppserver(request: api.v1.appserver.IGetByIdAppserverRequest, callback: api.v1.appserver.AppserverService.GetByIdAppserverCallback): void;

                /**
                 * Calls GetByIdAppserver.
                 * @param request GetByIdAppserverRequest message or plain object
                 * @returns Promise
                 */
                public getByIdAppserver(request: api.v1.appserver.IGetByIdAppserverRequest): Promise<api.v1.appserver.GetByIdAppserverResponse>;

                /**
                 * Calls ListAppservers.
                 * @param request ListAppserversRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListAppserversResponse
                 */
                public listAppservers(request: api.v1.appserver.IListAppserversRequest, callback: api.v1.appserver.AppserverService.ListAppserversCallback): void;

                /**
                 * Calls ListAppservers.
                 * @param request ListAppserversRequest message or plain object
                 * @returns Promise
                 */
                public listAppservers(request: api.v1.appserver.IListAppserversRequest): Promise<api.v1.appserver.ListAppserversResponse>;

                /**
                 * Calls DeleteAppserver.
                 * @param request DeleteAppserverRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteAppserverResponse
                 */
                public deleteAppserver(request: api.v1.appserver.IDeleteAppserverRequest, callback: api.v1.appserver.AppserverService.DeleteAppserverCallback): void;

                /**
                 * Calls DeleteAppserver.
                 * @param request DeleteAppserverRequest message or plain object
                 * @returns Promise
                 */
                public deleteAppserver(request: api.v1.appserver.IDeleteAppserverRequest): Promise<api.v1.appserver.DeleteAppserverResponse>;

                /**
                 * Calls CreateAppserverSub.
                 * @param request CreateAppserverSubRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateAppserverSubResponse
                 */
                public createAppserverSub(request: api.v1.appserver.ICreateAppserverSubRequest, callback: api.v1.appserver.AppserverService.CreateAppserverSubCallback): void;

                /**
                 * Calls CreateAppserverSub.
                 * @param request CreateAppserverSubRequest message or plain object
                 * @returns Promise
                 */
                public createAppserverSub(request: api.v1.appserver.ICreateAppserverSubRequest): Promise<api.v1.appserver.CreateAppserverSubResponse>;

                /**
                 * Calls GetUserAppserverSubs.
                 * @param request GetUserAppserverSubsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetUserAppserverSubsResponse
                 */
                public getUserAppserverSubs(request: api.v1.appserver.IGetUserAppserverSubsRequest, callback: api.v1.appserver.AppserverService.GetUserAppserverSubsCallback): void;

                /**
                 * Calls GetUserAppserverSubs.
                 * @param request GetUserAppserverSubsRequest message or plain object
                 * @returns Promise
                 */
                public getUserAppserverSubs(request: api.v1.appserver.IGetUserAppserverSubsRequest): Promise<api.v1.appserver.GetUserAppserverSubsResponse>;

                /**
                 * Calls DeleteAppserverSub.
                 * @param request DeleteAppserverSubRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteAppserverSubResponse
                 */
                public deleteAppserverSub(request: api.v1.appserver.IDeleteAppserverSubRequest, callback: api.v1.appserver.AppserverService.DeleteAppserverSubCallback): void;

                /**
                 * Calls DeleteAppserverSub.
                 * @param request DeleteAppserverSubRequest message or plain object
                 * @returns Promise
                 */
                public deleteAppserverSub(request: api.v1.appserver.IDeleteAppserverSubRequest): Promise<api.v1.appserver.DeleteAppserverSubResponse>;

                /**
                 * Calls CreateAppserverRole.
                 * @param request CreateAppserverRoleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateAppserverRoleResponse
                 */
                public createAppserverRole(request: api.v1.appserver.ICreateAppserverRoleRequest, callback: api.v1.appserver.AppserverService.CreateAppserverRoleCallback): void;

                /**
                 * Calls CreateAppserverRole.
                 * @param request CreateAppserverRoleRequest message or plain object
                 * @returns Promise
                 */
                public createAppserverRole(request: api.v1.appserver.ICreateAppserverRoleRequest): Promise<api.v1.appserver.CreateAppserverRoleResponse>;

                /**
                 * Calls GetAllAppserverRoles.
                 * @param request GetAllAppserverRolesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetAllAppserverRolesResponse
                 */
                public getAllAppserverRoles(request: api.v1.appserver.IGetAllAppserverRolesRequest, callback: api.v1.appserver.AppserverService.GetAllAppserverRolesCallback): void;

                /**
                 * Calls GetAllAppserverRoles.
                 * @param request GetAllAppserverRolesRequest message or plain object
                 * @returns Promise
                 */
                public getAllAppserverRoles(request: api.v1.appserver.IGetAllAppserverRolesRequest): Promise<api.v1.appserver.GetAllAppserverRolesResponse>;

                /**
                 * Calls DeleteAppserverRole.
                 * @param request DeleteAppserverRoleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteAppserverRoleResponse
                 */
                public deleteAppserverRole(request: api.v1.appserver.IDeleteAppserverRoleRequest, callback: api.v1.appserver.AppserverService.DeleteAppserverRoleCallback): void;

                /**
                 * Calls DeleteAppserverRole.
                 * @param request DeleteAppserverRoleRequest message or plain object
                 * @returns Promise
                 */
                public deleteAppserverRole(request: api.v1.appserver.IDeleteAppserverRoleRequest): Promise<api.v1.appserver.DeleteAppserverRoleResponse>;

                /**
                 * Calls CreateAppserverRoleSub.
                 * @param request CreateAppserverRoleSubRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CreateAppserverRoleSubResponse
                 */
                public createAppserverRoleSub(request: api.v1.appserver.ICreateAppserverRoleSubRequest, callback: api.v1.appserver.AppserverService.CreateAppserverRoleSubCallback): void;

                /**
                 * Calls CreateAppserverRoleSub.
                 * @param request CreateAppserverRoleSubRequest message or plain object
                 * @returns Promise
                 */
                public createAppserverRoleSub(request: api.v1.appserver.ICreateAppserverRoleSubRequest): Promise<api.v1.appserver.CreateAppserverRoleSubResponse>;

                /**
                 * Calls DeleteAppserverRoleSub.
                 * @param request DeleteAppserverRoleSubRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteAppserverRoleSubResponse
                 */
                public deleteAppserverRoleSub(request: api.v1.appserver.IDeleteAppserverRoleSubRequest, callback: api.v1.appserver.AppserverService.DeleteAppserverRoleSubCallback): void;

                /**
                 * Calls DeleteAppserverRoleSub.
                 * @param request DeleteAppserverRoleSubRequest message or plain object
                 * @returns Promise
                 */
                public deleteAppserverRoleSub(request: api.v1.appserver.IDeleteAppserverRoleSubRequest): Promise<api.v1.appserver.DeleteAppserverRoleSubResponse>;
            }

            namespace AppserverService {

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#createAppserver}.
                 * @param error Error, if any
                 * @param [response] CreateAppserverResponse
                 */
                type CreateAppserverCallback = (error: (Error|null), response?: api.v1.appserver.CreateAppserverResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#getByIdAppserver}.
                 * @param error Error, if any
                 * @param [response] GetByIdAppserverResponse
                 */
                type GetByIdAppserverCallback = (error: (Error|null), response?: api.v1.appserver.GetByIdAppserverResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#listAppservers}.
                 * @param error Error, if any
                 * @param [response] ListAppserversResponse
                 */
                type ListAppserversCallback = (error: (Error|null), response?: api.v1.appserver.ListAppserversResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserver}.
                 * @param error Error, if any
                 * @param [response] DeleteAppserverResponse
                 */
                type DeleteAppserverCallback = (error: (Error|null), response?: api.v1.appserver.DeleteAppserverResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#createAppserverSub}.
                 * @param error Error, if any
                 * @param [response] CreateAppserverSubResponse
                 */
                type CreateAppserverSubCallback = (error: (Error|null), response?: api.v1.appserver.CreateAppserverSubResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#getUserAppserverSubs}.
                 * @param error Error, if any
                 * @param [response] GetUserAppserverSubsResponse
                 */
                type GetUserAppserverSubsCallback = (error: (Error|null), response?: api.v1.appserver.GetUserAppserverSubsResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserverSub}.
                 * @param error Error, if any
                 * @param [response] DeleteAppserverSubResponse
                 */
                type DeleteAppserverSubCallback = (error: (Error|null), response?: api.v1.appserver.DeleteAppserverSubResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#createAppserverRole}.
                 * @param error Error, if any
                 * @param [response] CreateAppserverRoleResponse
                 */
                type CreateAppserverRoleCallback = (error: (Error|null), response?: api.v1.appserver.CreateAppserverRoleResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#getAllAppserverRoles}.
                 * @param error Error, if any
                 * @param [response] GetAllAppserverRolesResponse
                 */
                type GetAllAppserverRolesCallback = (error: (Error|null), response?: api.v1.appserver.GetAllAppserverRolesResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserverRole}.
                 * @param error Error, if any
                 * @param [response] DeleteAppserverRoleResponse
                 */
                type DeleteAppserverRoleCallback = (error: (Error|null), response?: api.v1.appserver.DeleteAppserverRoleResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#createAppserverRoleSub}.
                 * @param error Error, if any
                 * @param [response] CreateAppserverRoleSubResponse
                 */
                type CreateAppserverRoleSubCallback = (error: (Error|null), response?: api.v1.appserver.CreateAppserverRoleSubResponse) => void;

                /**
                 * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserverRoleSub}.
                 * @param error Error, if any
                 * @param [response] DeleteAppserverRoleSubResponse
                 */
                type DeleteAppserverRoleSubCallback = (error: (Error|null), response?: api.v1.appserver.DeleteAppserverRoleSubResponse) => void;
            }

            /** Properties of an Appserver. */
            interface IAppserver {

                /** Appserver id */
                id?: (string|null);

                /** Appserver name */
                name?: (string|null);

                /** Appserver isOwner */
                isOwner?: (boolean|null);

                /** Appserver createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Appserver updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
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

                /** Appserver isOwner. */
                public isOwner: boolean;

                /** Appserver createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Appserver updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

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

            /** Properties of an AppserverSub. */
            interface IAppserverSub {

                /** AppserverSub id */
                id?: (string|null);

                /** AppserverSub appserverId */
                appserverId?: (string|null);

                /** AppserverSub createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** AppserverSub updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an AppserverSub. */
            class AppserverSub implements IAppserverSub {

                /**
                 * Constructs a new AppserverSub.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IAppserverSub);

                /** AppserverSub id. */
                public id: string;

                /** AppserverSub appserverId. */
                public appserverId: string;

                /** AppserverSub createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** AppserverSub updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new AppserverSub instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverSub instance
                 */
                public static create(properties?: api.v1.appserver.IAppserverSub): api.v1.appserver.AppserverSub;

                /**
                 * Encodes the specified AppserverSub message. Does not implicitly {@link api.v1.appserver.AppserverSub.verify|verify} messages.
                 * @param message AppserverSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IAppserverSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverSub.verify|verify} messages.
                 * @param message AppserverSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IAppserverSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverSub message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.AppserverSub;

                /**
                 * Decodes an AppserverSub message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.AppserverSub;

                /**
                 * Verifies an AppserverSub message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverSub message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverSub
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.AppserverSub;

                /**
                 * Creates a plain object from an AppserverSub message. Also converts values to other types if specified.
                 * @param message AppserverSub
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.AppserverSub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverSub to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverSub
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AppserverAndSub. */
            interface IAppserverAndSub {

                /** AppserverAndSub subId */
                subId?: (string|null);

                /** AppserverAndSub appserver */
                appserver?: (api.v1.appserver.IAppserver|null);
            }

            /** Represents an AppserverAndSub. */
            class AppserverAndSub implements IAppserverAndSub {

                /**
                 * Constructs a new AppserverAndSub.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IAppserverAndSub);

                /** AppserverAndSub subId. */
                public subId: string;

                /** AppserverAndSub appserver. */
                public appserver?: (api.v1.appserver.IAppserver|null);

                /**
                 * Creates a new AppserverAndSub instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverAndSub instance
                 */
                public static create(properties?: api.v1.appserver.IAppserverAndSub): api.v1.appserver.AppserverAndSub;

                /**
                 * Encodes the specified AppserverAndSub message. Does not implicitly {@link api.v1.appserver.AppserverAndSub.verify|verify} messages.
                 * @param message AppserverAndSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IAppserverAndSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverAndSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverAndSub.verify|verify} messages.
                 * @param message AppserverAndSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IAppserverAndSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverAndSub message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.AppserverAndSub;

                /**
                 * Decodes an AppserverAndSub message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.AppserverAndSub;

                /**
                 * Verifies an AppserverAndSub message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverAndSub message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverAndSub
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.AppserverAndSub;

                /**
                 * Creates a plain object from an AppserverAndSub message. Also converts values to other types if specified.
                 * @param message AppserverAndSub
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.AppserverAndSub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverAndSub to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverAndSub
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AppserverRole. */
            interface IAppserverRole {

                /** AppserverRole id */
                id?: (string|null);

                /** AppserverRole name */
                name?: (string|null);

                /** AppserverRole appserverId */
                appserverId?: (string|null);

                /** AppserverRole createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** AppserverRole updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an AppserverRole. */
            class AppserverRole implements IAppserverRole {

                /**
                 * Constructs a new AppserverRole.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IAppserverRole);

                /** AppserverRole id. */
                public id: string;

                /** AppserverRole name. */
                public name: string;

                /** AppserverRole appserverId. */
                public appserverId: string;

                /** AppserverRole createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** AppserverRole updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new AppserverRole instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverRole instance
                 */
                public static create(properties?: api.v1.appserver.IAppserverRole): api.v1.appserver.AppserverRole;

                /**
                 * Encodes the specified AppserverRole message. Does not implicitly {@link api.v1.appserver.AppserverRole.verify|verify} messages.
                 * @param message AppserverRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IAppserverRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverRole message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverRole.verify|verify} messages.
                 * @param message AppserverRole message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IAppserverRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverRole message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.AppserverRole;

                /**
                 * Decodes an AppserverRole message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverRole
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.AppserverRole;

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
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.AppserverRole;

                /**
                 * Creates a plain object from an AppserverRole message. Also converts values to other types if specified.
                 * @param message AppserverRole
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.AppserverRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an AppserverRoleSub. */
            interface IAppserverRoleSub {

                /** AppserverRoleSub id */
                id?: (string|null);

                /** AppserverRoleSub appserverRoleId */
                appserverRoleId?: (string|null);

                /** AppserverRoleSub appserverSubId */
                appserverSubId?: (string|null);
            }

            /** Represents an AppserverRoleSub. */
            class AppserverRoleSub implements IAppserverRoleSub {

                /**
                 * Constructs a new AppserverRoleSub.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IAppserverRoleSub);

                /** AppserverRoleSub id. */
                public id: string;

                /** AppserverRoleSub appserverRoleId. */
                public appserverRoleId: string;

                /** AppserverRoleSub appserverSubId. */
                public appserverSubId: string;

                /**
                 * Creates a new AppserverRoleSub instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverRoleSub instance
                 */
                public static create(properties?: api.v1.appserver.IAppserverRoleSub): api.v1.appserver.AppserverRoleSub;

                /**
                 * Encodes the specified AppserverRoleSub message. Does not implicitly {@link api.v1.appserver.AppserverRoleSub.verify|verify} messages.
                 * @param message AppserverRoleSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IAppserverRoleSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverRoleSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverRoleSub.verify|verify} messages.
                 * @param message AppserverRoleSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IAppserverRoleSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverRoleSub message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverRoleSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.AppserverRoleSub;

                /**
                 * Decodes an AppserverRoleSub message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverRoleSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.AppserverRoleSub;

                /**
                 * Verifies an AppserverRoleSub message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverRoleSub message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverRoleSub
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.AppserverRoleSub;

                /**
                 * Creates a plain object from an AppserverRoleSub message. Also converts values to other types if specified.
                 * @param message AppserverRoleSub
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.AppserverRoleSub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverRoleSub to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverRoleSub
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverRequest. */
            interface ICreateAppserverRequest {

                /** CreateAppserverRequest name */
                name?: (string|null);
            }

            /** Represents a CreateAppserverRequest. */
            class CreateAppserverRequest implements ICreateAppserverRequest {

                /**
                 * Constructs a new CreateAppserverRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverRequest);

                /** CreateAppserverRequest name. */
                public name: string;

                /**
                 * Creates a new CreateAppserverRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverRequest instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverRequest): api.v1.appserver.CreateAppserverRequest;

                /**
                 * Encodes the specified CreateAppserverRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverRequest.verify|verify} messages.
                 * @param message CreateAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRequest.verify|verify} messages.
                 * @param message CreateAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverRequest;

                /**
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverRequest;

                /**
                 * Verifies a CreateAppserverRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverRequest;

                /**
                 * Creates a plain object from a CreateAppserverRequest message. Also converts values to other types if specified.
                 * @param message CreateAppserverRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverResponse. */
            interface ICreateAppserverResponse {

                /** CreateAppserverResponse appserver */
                appserver?: (api.v1.appserver.IAppserver|null);
            }

            /** Represents a CreateAppserverResponse. */
            class CreateAppserverResponse implements ICreateAppserverResponse {

                /**
                 * Constructs a new CreateAppserverResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverResponse);

                /** CreateAppserverResponse appserver. */
                public appserver?: (api.v1.appserver.IAppserver|null);

                /**
                 * Creates a new CreateAppserverResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverResponse instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverResponse): api.v1.appserver.CreateAppserverResponse;

                /**
                 * Encodes the specified CreateAppserverResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverResponse.verify|verify} messages.
                 * @param message CreateAppserverResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverResponse.verify|verify} messages.
                 * @param message CreateAppserverResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverResponse;

                /**
                 * Decodes a CreateAppserverResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverResponse;

                /**
                 * Verifies a CreateAppserverResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverResponse;

                /**
                 * Creates a plain object from a CreateAppserverResponse message. Also converts values to other types if specified.
                 * @param message CreateAppserverResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdAppserverRequest. */
            interface IGetByIdAppserverRequest {

                /** GetByIdAppserverRequest id */
                id?: (string|null);
            }

            /** Represents a GetByIdAppserverRequest. */
            class GetByIdAppserverRequest implements IGetByIdAppserverRequest {

                /**
                 * Constructs a new GetByIdAppserverRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetByIdAppserverRequest);

                /** GetByIdAppserverRequest id. */
                public id: string;

                /**
                 * Creates a new GetByIdAppserverRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdAppserverRequest instance
                 */
                public static create(properties?: api.v1.appserver.IGetByIdAppserverRequest): api.v1.appserver.GetByIdAppserverRequest;

                /**
                 * Encodes the specified GetByIdAppserverRequest message. Does not implicitly {@link api.v1.appserver.GetByIdAppserverRequest.verify|verify} messages.
                 * @param message GetByIdAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetByIdAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdAppserverRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdAppserverRequest.verify|verify} messages.
                 * @param message GetByIdAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetByIdAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdAppserverRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetByIdAppserverRequest;

                /**
                 * Decodes a GetByIdAppserverRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetByIdAppserverRequest;

                /**
                 * Verifies a GetByIdAppserverRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdAppserverRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdAppserverRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetByIdAppserverRequest;

                /**
                 * Creates a plain object from a GetByIdAppserverRequest message. Also converts values to other types if specified.
                 * @param message GetByIdAppserverRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetByIdAppserverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdAppserverRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdAppserverRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetByIdAppserverResponse. */
            interface IGetByIdAppserverResponse {

                /** GetByIdAppserverResponse appserver */
                appserver?: (api.v1.appserver.IAppserver|null);
            }

            /** Represents a GetByIdAppserverResponse. */
            class GetByIdAppserverResponse implements IGetByIdAppserverResponse {

                /**
                 * Constructs a new GetByIdAppserverResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetByIdAppserverResponse);

                /** GetByIdAppserverResponse appserver. */
                public appserver?: (api.v1.appserver.IAppserver|null);

                /**
                 * Creates a new GetByIdAppserverResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetByIdAppserverResponse instance
                 */
                public static create(properties?: api.v1.appserver.IGetByIdAppserverResponse): api.v1.appserver.GetByIdAppserverResponse;

                /**
                 * Encodes the specified GetByIdAppserverResponse message. Does not implicitly {@link api.v1.appserver.GetByIdAppserverResponse.verify|verify} messages.
                 * @param message GetByIdAppserverResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetByIdAppserverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetByIdAppserverResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdAppserverResponse.verify|verify} messages.
                 * @param message GetByIdAppserverResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetByIdAppserverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetByIdAppserverResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetByIdAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetByIdAppserverResponse;

                /**
                 * Decodes a GetByIdAppserverResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetByIdAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetByIdAppserverResponse;

                /**
                 * Verifies a GetByIdAppserverResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetByIdAppserverResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetByIdAppserverResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetByIdAppserverResponse;

                /**
                 * Creates a plain object from a GetByIdAppserverResponse message. Also converts values to other types if specified.
                 * @param message GetByIdAppserverResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetByIdAppserverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetByIdAppserverResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetByIdAppserverResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListAppserversRequest. */
            interface IListAppserversRequest {

                /** ListAppserversRequest name */
                name?: (google.protobuf.IStringValue|null);
            }

            /** Represents a ListAppserversRequest. */
            class ListAppserversRequest implements IListAppserversRequest {

                /**
                 * Constructs a new ListAppserversRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IListAppserversRequest);

                /** ListAppserversRequest name. */
                public name?: (google.protobuf.IStringValue|null);

                /**
                 * Creates a new ListAppserversRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAppserversRequest instance
                 */
                public static create(properties?: api.v1.appserver.IListAppserversRequest): api.v1.appserver.ListAppserversRequest;

                /**
                 * Encodes the specified ListAppserversRequest message. Does not implicitly {@link api.v1.appserver.ListAppserversRequest.verify|verify} messages.
                 * @param message ListAppserversRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IListAppserversRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAppserversRequest message, length delimited. Does not implicitly {@link api.v1.appserver.ListAppserversRequest.verify|verify} messages.
                 * @param message ListAppserversRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IListAppserversRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAppserversRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAppserversRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.ListAppserversRequest;

                /**
                 * Decodes a ListAppserversRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAppserversRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.ListAppserversRequest;

                /**
                 * Verifies a ListAppserversRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAppserversRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAppserversRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.ListAppserversRequest;

                /**
                 * Creates a plain object from a ListAppserversRequest message. Also converts values to other types if specified.
                 * @param message ListAppserversRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.ListAppserversRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAppserversRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListAppserversRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListAppserversResponse. */
            interface IListAppserversResponse {

                /** ListAppserversResponse appservers */
                appservers?: (api.v1.appserver.IAppserver[]|null);
            }

            /** Represents a ListAppserversResponse. */
            class ListAppserversResponse implements IListAppserversResponse {

                /**
                 * Constructs a new ListAppserversResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IListAppserversResponse);

                /** ListAppserversResponse appservers. */
                public appservers: api.v1.appserver.IAppserver[];

                /**
                 * Creates a new ListAppserversResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAppserversResponse instance
                 */
                public static create(properties?: api.v1.appserver.IListAppserversResponse): api.v1.appserver.ListAppserversResponse;

                /**
                 * Encodes the specified ListAppserversResponse message. Does not implicitly {@link api.v1.appserver.ListAppserversResponse.verify|verify} messages.
                 * @param message ListAppserversResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IListAppserversResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAppserversResponse message, length delimited. Does not implicitly {@link api.v1.appserver.ListAppserversResponse.verify|verify} messages.
                 * @param message ListAppserversResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IListAppserversResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAppserversResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAppserversResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.ListAppserversResponse;

                /**
                 * Decodes a ListAppserversResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAppserversResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.ListAppserversResponse;

                /**
                 * Verifies a ListAppserversResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAppserversResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAppserversResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.ListAppserversResponse;

                /**
                 * Creates a plain object from a ListAppserversResponse message. Also converts values to other types if specified.
                 * @param message ListAppserversResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.ListAppserversResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAppserversResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListAppserversResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverRequest. */
            interface IDeleteAppserverRequest {

                /** DeleteAppserverRequest id */
                id?: (string|null);
            }

            /** Represents a DeleteAppserverRequest. */
            class DeleteAppserverRequest implements IDeleteAppserverRequest {

                /**
                 * Constructs a new DeleteAppserverRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverRequest);

                /** DeleteAppserverRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteAppserverRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverRequest instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverRequest): api.v1.appserver.DeleteAppserverRequest;

                /**
                 * Encodes the specified DeleteAppserverRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRequest.verify|verify} messages.
                 * @param message DeleteAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRequest.verify|verify} messages.
                 * @param message DeleteAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverRequest;

                /**
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverRequest;

                /**
                 * Verifies a DeleteAppserverRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverRequest;

                /**
                 * Creates a plain object from a DeleteAppserverRequest message. Also converts values to other types if specified.
                 * @param message DeleteAppserverRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverResponse. */
            interface IDeleteAppserverResponse {
            }

            /** Represents a DeleteAppserverResponse. */
            class DeleteAppserverResponse implements IDeleteAppserverResponse {

                /**
                 * Constructs a new DeleteAppserverResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverResponse);

                /**
                 * Creates a new DeleteAppserverResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverResponse instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverResponse): api.v1.appserver.DeleteAppserverResponse;

                /**
                 * Encodes the specified DeleteAppserverResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverResponse.verify|verify} messages.
                 * @param message DeleteAppserverResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverResponse.verify|verify} messages.
                 * @param message DeleteAppserverResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverResponse;

                /**
                 * Decodes a DeleteAppserverResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverResponse;

                /**
                 * Verifies a DeleteAppserverResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverResponse;

                /**
                 * Creates a plain object from a DeleteAppserverResponse message. Also converts values to other types if specified.
                 * @param message DeleteAppserverResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverSubRequest. */
            interface ICreateAppserverSubRequest {

                /** CreateAppserverSubRequest appserverId */
                appserverId?: (string|null);
            }

            /** Represents a CreateAppserverSubRequest. */
            class CreateAppserverSubRequest implements ICreateAppserverSubRequest {

                /**
                 * Constructs a new CreateAppserverSubRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverSubRequest);

                /** CreateAppserverSubRequest appserverId. */
                public appserverId: string;

                /**
                 * Creates a new CreateAppserverSubRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverSubRequest instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverSubRequest): api.v1.appserver.CreateAppserverSubRequest;

                /**
                 * Encodes the specified CreateAppserverSubRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverSubRequest.verify|verify} messages.
                 * @param message CreateAppserverSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverSubRequest.verify|verify} messages.
                 * @param message CreateAppserverSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverSubRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverSubRequest;

                /**
                 * Decodes a CreateAppserverSubRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverSubRequest;

                /**
                 * Verifies a CreateAppserverSubRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverSubRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverSubRequest;

                /**
                 * Creates a plain object from a CreateAppserverSubRequest message. Also converts values to other types if specified.
                 * @param message CreateAppserverSubRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverSubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverSubRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverSubRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverSubResponse. */
            interface ICreateAppserverSubResponse {

                /** CreateAppserverSubResponse appserverSub */
                appserverSub?: (api.v1.appserver.IAppserverSub|null);
            }

            /** Represents a CreateAppserverSubResponse. */
            class CreateAppserverSubResponse implements ICreateAppserverSubResponse {

                /**
                 * Constructs a new CreateAppserverSubResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverSubResponse);

                /** CreateAppserverSubResponse appserverSub. */
                public appserverSub?: (api.v1.appserver.IAppserverSub|null);

                /**
                 * Creates a new CreateAppserverSubResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverSubResponse instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverSubResponse): api.v1.appserver.CreateAppserverSubResponse;

                /**
                 * Encodes the specified CreateAppserverSubResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverSubResponse.verify|verify} messages.
                 * @param message CreateAppserverSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverSubResponse.verify|verify} messages.
                 * @param message CreateAppserverSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverSubResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverSubResponse;

                /**
                 * Decodes a CreateAppserverSubResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverSubResponse;

                /**
                 * Verifies a CreateAppserverSubResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverSubResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverSubResponse;

                /**
                 * Creates a plain object from a CreateAppserverSubResponse message. Also converts values to other types if specified.
                 * @param message CreateAppserverSubResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverSubResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverSubResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverSubResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetUserAppserverSubsRequest. */
            interface IGetUserAppserverSubsRequest {
            }

            /** Represents a GetUserAppserverSubsRequest. */
            class GetUserAppserverSubsRequest implements IGetUserAppserverSubsRequest {

                /**
                 * Constructs a new GetUserAppserverSubsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetUserAppserverSubsRequest);

                /**
                 * Creates a new GetUserAppserverSubsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetUserAppserverSubsRequest instance
                 */
                public static create(properties?: api.v1.appserver.IGetUserAppserverSubsRequest): api.v1.appserver.GetUserAppserverSubsRequest;

                /**
                 * Encodes the specified GetUserAppserverSubsRequest message. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsRequest.verify|verify} messages.
                 * @param message GetUserAppserverSubsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetUserAppserverSubsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetUserAppserverSubsRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsRequest.verify|verify} messages.
                 * @param message GetUserAppserverSubsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetUserAppserverSubsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetUserAppserverSubsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetUserAppserverSubsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetUserAppserverSubsRequest;

                /**
                 * Decodes a GetUserAppserverSubsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetUserAppserverSubsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetUserAppserverSubsRequest;

                /**
                 * Verifies a GetUserAppserverSubsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetUserAppserverSubsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetUserAppserverSubsRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetUserAppserverSubsRequest;

                /**
                 * Creates a plain object from a GetUserAppserverSubsRequest message. Also converts values to other types if specified.
                 * @param message GetUserAppserverSubsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetUserAppserverSubsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetUserAppserverSubsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetUserAppserverSubsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetUserAppserverSubsResponse. */
            interface IGetUserAppserverSubsResponse {

                /** GetUserAppserverSubsResponse appservers */
                appservers?: (api.v1.appserver.IAppserverAndSub[]|null);
            }

            /** Represents a GetUserAppserverSubsResponse. */
            class GetUserAppserverSubsResponse implements IGetUserAppserverSubsResponse {

                /**
                 * Constructs a new GetUserAppserverSubsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetUserAppserverSubsResponse);

                /** GetUserAppserverSubsResponse appservers. */
                public appservers: api.v1.appserver.IAppserverAndSub[];

                /**
                 * Creates a new GetUserAppserverSubsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetUserAppserverSubsResponse instance
                 */
                public static create(properties?: api.v1.appserver.IGetUserAppserverSubsResponse): api.v1.appserver.GetUserAppserverSubsResponse;

                /**
                 * Encodes the specified GetUserAppserverSubsResponse message. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsResponse.verify|verify} messages.
                 * @param message GetUserAppserverSubsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetUserAppserverSubsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetUserAppserverSubsResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsResponse.verify|verify} messages.
                 * @param message GetUserAppserverSubsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetUserAppserverSubsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetUserAppserverSubsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetUserAppserverSubsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetUserAppserverSubsResponse;

                /**
                 * Decodes a GetUserAppserverSubsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetUserAppserverSubsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetUserAppserverSubsResponse;

                /**
                 * Verifies a GetUserAppserverSubsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetUserAppserverSubsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetUserAppserverSubsResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetUserAppserverSubsResponse;

                /**
                 * Creates a plain object from a GetUserAppserverSubsResponse message. Also converts values to other types if specified.
                 * @param message GetUserAppserverSubsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetUserAppserverSubsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetUserAppserverSubsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetUserAppserverSubsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverSubRequest. */
            interface IDeleteAppserverSubRequest {

                /** DeleteAppserverSubRequest id */
                id?: (string|null);
            }

            /** Represents a DeleteAppserverSubRequest. */
            class DeleteAppserverSubRequest implements IDeleteAppserverSubRequest {

                /**
                 * Constructs a new DeleteAppserverSubRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverSubRequest);

                /** DeleteAppserverSubRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteAppserverSubRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverSubRequest instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverSubRequest): api.v1.appserver.DeleteAppserverSubRequest;

                /**
                 * Encodes the specified DeleteAppserverSubRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubRequest.verify|verify} messages.
                 * @param message DeleteAppserverSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubRequest.verify|verify} messages.
                 * @param message DeleteAppserverSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverSubRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverSubRequest;

                /**
                 * Decodes a DeleteAppserverSubRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverSubRequest;

                /**
                 * Verifies a DeleteAppserverSubRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverSubRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverSubRequest;

                /**
                 * Creates a plain object from a DeleteAppserverSubRequest message. Also converts values to other types if specified.
                 * @param message DeleteAppserverSubRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverSubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverSubRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverSubRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverSubResponse. */
            interface IDeleteAppserverSubResponse {
            }

            /** Represents a DeleteAppserverSubResponse. */
            class DeleteAppserverSubResponse implements IDeleteAppserverSubResponse {

                /**
                 * Constructs a new DeleteAppserverSubResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverSubResponse);

                /**
                 * Creates a new DeleteAppserverSubResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverSubResponse instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverSubResponse): api.v1.appserver.DeleteAppserverSubResponse;

                /**
                 * Encodes the specified DeleteAppserverSubResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubResponse.verify|verify} messages.
                 * @param message DeleteAppserverSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubResponse.verify|verify} messages.
                 * @param message DeleteAppserverSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverSubResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverSubResponse;

                /**
                 * Decodes a DeleteAppserverSubResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverSubResponse;

                /**
                 * Verifies a DeleteAppserverSubResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverSubResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverSubResponse;

                /**
                 * Creates a plain object from a DeleteAppserverSubResponse message. Also converts values to other types if specified.
                 * @param message DeleteAppserverSubResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverSubResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverSubResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverSubResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverRoleRequest. */
            interface ICreateAppserverRoleRequest {

                /** CreateAppserverRoleRequest appserverId */
                appserverId?: (string|null);

                /** CreateAppserverRoleRequest name */
                name?: (string|null);
            }

            /** Represents a CreateAppserverRoleRequest. */
            class CreateAppserverRoleRequest implements ICreateAppserverRoleRequest {

                /**
                 * Constructs a new CreateAppserverRoleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverRoleRequest);

                /** CreateAppserverRoleRequest appserverId. */
                public appserverId: string;

                /** CreateAppserverRoleRequest name. */
                public name: string;

                /**
                 * Creates a new CreateAppserverRoleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverRoleRequest instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverRoleRequest): api.v1.appserver.CreateAppserverRoleRequest;

                /**
                 * Encodes the specified CreateAppserverRoleRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleRequest.verify|verify} messages.
                 * @param message CreateAppserverRoleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverRoleRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleRequest.verify|verify} messages.
                 * @param message CreateAppserverRoleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverRoleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverRoleRequest;

                /**
                 * Decodes a CreateAppserverRoleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverRoleRequest;

                /**
                 * Verifies a CreateAppserverRoleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverRoleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverRoleRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverRoleRequest;

                /**
                 * Creates a plain object from a CreateAppserverRoleRequest message. Also converts values to other types if specified.
                 * @param message CreateAppserverRoleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverRoleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverRoleRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverRoleResponse. */
            interface ICreateAppserverRoleResponse {

                /** CreateAppserverRoleResponse appserverRole */
                appserverRole?: (api.v1.appserver.IAppserverRole|null);
            }

            /** Represents a CreateAppserverRoleResponse. */
            class CreateAppserverRoleResponse implements ICreateAppserverRoleResponse {

                /**
                 * Constructs a new CreateAppserverRoleResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverRoleResponse);

                /** CreateAppserverRoleResponse appserverRole. */
                public appserverRole?: (api.v1.appserver.IAppserverRole|null);

                /**
                 * Creates a new CreateAppserverRoleResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverRoleResponse instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverRoleResponse): api.v1.appserver.CreateAppserverRoleResponse;

                /**
                 * Encodes the specified CreateAppserverRoleResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleResponse.verify|verify} messages.
                 * @param message CreateAppserverRoleResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverRoleResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleResponse.verify|verify} messages.
                 * @param message CreateAppserverRoleResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverRoleResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverRoleResponse;

                /**
                 * Decodes a CreateAppserverRoleResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverRoleResponse;

                /**
                 * Verifies a CreateAppserverRoleResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverRoleResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverRoleResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverRoleResponse;

                /**
                 * Creates a plain object from a CreateAppserverRoleResponse message. Also converts values to other types if specified.
                 * @param message CreateAppserverRoleResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverRoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverRoleResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverRoleResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetAllAppserverRolesRequest. */
            interface IGetAllAppserverRolesRequest {

                /** GetAllAppserverRolesRequest appserverId */
                appserverId?: (string|null);
            }

            /** Represents a GetAllAppserverRolesRequest. */
            class GetAllAppserverRolesRequest implements IGetAllAppserverRolesRequest {

                /**
                 * Constructs a new GetAllAppserverRolesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetAllAppserverRolesRequest);

                /** GetAllAppserverRolesRequest appserverId. */
                public appserverId: string;

                /**
                 * Creates a new GetAllAppserverRolesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAllAppserverRolesRequest instance
                 */
                public static create(properties?: api.v1.appserver.IGetAllAppserverRolesRequest): api.v1.appserver.GetAllAppserverRolesRequest;

                /**
                 * Encodes the specified GetAllAppserverRolesRequest message. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesRequest.verify|verify} messages.
                 * @param message GetAllAppserverRolesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetAllAppserverRolesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAllAppserverRolesRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesRequest.verify|verify} messages.
                 * @param message GetAllAppserverRolesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetAllAppserverRolesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAllAppserverRolesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAllAppserverRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetAllAppserverRolesRequest;

                /**
                 * Decodes a GetAllAppserverRolesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAllAppserverRolesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetAllAppserverRolesRequest;

                /**
                 * Verifies a GetAllAppserverRolesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAllAppserverRolesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAllAppserverRolesRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetAllAppserverRolesRequest;

                /**
                 * Creates a plain object from a GetAllAppserverRolesRequest message. Also converts values to other types if specified.
                 * @param message GetAllAppserverRolesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetAllAppserverRolesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAllAppserverRolesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetAllAppserverRolesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetAllAppserverRolesResponse. */
            interface IGetAllAppserverRolesResponse {

                /** GetAllAppserverRolesResponse appserverRoles */
                appserverRoles?: (api.v1.appserver.IAppserverRole[]|null);
            }

            /** Represents a GetAllAppserverRolesResponse. */
            class GetAllAppserverRolesResponse implements IGetAllAppserverRolesResponse {

                /**
                 * Constructs a new GetAllAppserverRolesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IGetAllAppserverRolesResponse);

                /** GetAllAppserverRolesResponse appserverRoles. */
                public appserverRoles: api.v1.appserver.IAppserverRole[];

                /**
                 * Creates a new GetAllAppserverRolesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAllAppserverRolesResponse instance
                 */
                public static create(properties?: api.v1.appserver.IGetAllAppserverRolesResponse): api.v1.appserver.GetAllAppserverRolesResponse;

                /**
                 * Encodes the specified GetAllAppserverRolesResponse message. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesResponse.verify|verify} messages.
                 * @param message GetAllAppserverRolesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IGetAllAppserverRolesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAllAppserverRolesResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesResponse.verify|verify} messages.
                 * @param message GetAllAppserverRolesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IGetAllAppserverRolesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAllAppserverRolesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAllAppserverRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.GetAllAppserverRolesResponse;

                /**
                 * Decodes a GetAllAppserverRolesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAllAppserverRolesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.GetAllAppserverRolesResponse;

                /**
                 * Verifies a GetAllAppserverRolesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAllAppserverRolesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAllAppserverRolesResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.GetAllAppserverRolesResponse;

                /**
                 * Creates a plain object from a GetAllAppserverRolesResponse message. Also converts values to other types if specified.
                 * @param message GetAllAppserverRolesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.GetAllAppserverRolesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAllAppserverRolesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetAllAppserverRolesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverRoleRequest. */
            interface IDeleteAppserverRoleRequest {

                /** DeleteAppserverRoleRequest id */
                id?: (string|null);
            }

            /** Represents a DeleteAppserverRoleRequest. */
            class DeleteAppserverRoleRequest implements IDeleteAppserverRoleRequest {

                /**
                 * Constructs a new DeleteAppserverRoleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverRoleRequest);

                /** DeleteAppserverRoleRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteAppserverRoleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverRoleRequest instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverRoleRequest): api.v1.appserver.DeleteAppserverRoleRequest;

                /**
                 * Encodes the specified DeleteAppserverRoleRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleRequest.verify|verify} messages.
                 * @param message DeleteAppserverRoleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverRoleRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleRequest.verify|verify} messages.
                 * @param message DeleteAppserverRoleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverRoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverRoleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverRoleRequest;

                /**
                 * Decodes a DeleteAppserverRoleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverRoleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverRoleRequest;

                /**
                 * Verifies a DeleteAppserverRoleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverRoleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverRoleRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverRoleRequest;

                /**
                 * Creates a plain object from a DeleteAppserverRoleRequest message. Also converts values to other types if specified.
                 * @param message DeleteAppserverRoleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverRoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverRoleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverRoleRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverRoleResponse. */
            interface IDeleteAppserverRoleResponse {
            }

            /** Represents a DeleteAppserverRoleResponse. */
            class DeleteAppserverRoleResponse implements IDeleteAppserverRoleResponse {

                /**
                 * Constructs a new DeleteAppserverRoleResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverRoleResponse);

                /**
                 * Creates a new DeleteAppserverRoleResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverRoleResponse instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverRoleResponse): api.v1.appserver.DeleteAppserverRoleResponse;

                /**
                 * Encodes the specified DeleteAppserverRoleResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleResponse.verify|verify} messages.
                 * @param message DeleteAppserverRoleResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverRoleResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleResponse.verify|verify} messages.
                 * @param message DeleteAppserverRoleResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverRoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverRoleResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverRoleResponse;

                /**
                 * Decodes a DeleteAppserverRoleResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverRoleResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverRoleResponse;

                /**
                 * Verifies a DeleteAppserverRoleResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverRoleResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverRoleResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverRoleResponse;

                /**
                 * Creates a plain object from a DeleteAppserverRoleResponse message. Also converts values to other types if specified.
                 * @param message DeleteAppserverRoleResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverRoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverRoleResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverRoleResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverRoleSubRequest. */
            interface ICreateAppserverRoleSubRequest {

                /** CreateAppserverRoleSubRequest appserverRoleId */
                appserverRoleId?: (string|null);

                /** CreateAppserverRoleSubRequest appserverSubId */
                appserverSubId?: (string|null);
            }

            /** Represents a CreateAppserverRoleSubRequest. */
            class CreateAppserverRoleSubRequest implements ICreateAppserverRoleSubRequest {

                /**
                 * Constructs a new CreateAppserverRoleSubRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverRoleSubRequest);

                /** CreateAppserverRoleSubRequest appserverRoleId. */
                public appserverRoleId: string;

                /** CreateAppserverRoleSubRequest appserverSubId. */
                public appserverSubId: string;

                /**
                 * Creates a new CreateAppserverRoleSubRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverRoleSubRequest instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverRoleSubRequest): api.v1.appserver.CreateAppserverRoleSubRequest;

                /**
                 * Encodes the specified CreateAppserverRoleSubRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubRequest.verify|verify} messages.
                 * @param message CreateAppserverRoleSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverRoleSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverRoleSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubRequest.verify|verify} messages.
                 * @param message CreateAppserverRoleSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverRoleSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverRoleSubRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverRoleSubRequest;

                /**
                 * Decodes a CreateAppserverRoleSubRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverRoleSubRequest;

                /**
                 * Verifies a CreateAppserverRoleSubRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverRoleSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverRoleSubRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverRoleSubRequest;

                /**
                 * Creates a plain object from a CreateAppserverRoleSubRequest message. Also converts values to other types if specified.
                 * @param message CreateAppserverRoleSubRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverRoleSubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverRoleSubRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverRoleSubRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAppserverRoleSubResponse. */
            interface ICreateAppserverRoleSubResponse {

                /** CreateAppserverRoleSubResponse appserverRoleSub */
                appserverRoleSub?: (api.v1.appserver.IAppserverRoleSub|null);
            }

            /** Represents a CreateAppserverRoleSubResponse. */
            class CreateAppserverRoleSubResponse implements ICreateAppserverRoleSubResponse {

                /**
                 * Constructs a new CreateAppserverRoleSubResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.ICreateAppserverRoleSubResponse);

                /** CreateAppserverRoleSubResponse appserverRoleSub. */
                public appserverRoleSub?: (api.v1.appserver.IAppserverRoleSub|null);

                /**
                 * Creates a new CreateAppserverRoleSubResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverRoleSubResponse instance
                 */
                public static create(properties?: api.v1.appserver.ICreateAppserverRoleSubResponse): api.v1.appserver.CreateAppserverRoleSubResponse;

                /**
                 * Encodes the specified CreateAppserverRoleSubResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubResponse.verify|verify} messages.
                 * @param message CreateAppserverRoleSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.ICreateAppserverRoleSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverRoleSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubResponse.verify|verify} messages.
                 * @param message CreateAppserverRoleSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.ICreateAppserverRoleSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverRoleSubResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.CreateAppserverRoleSubResponse;

                /**
                 * Decodes a CreateAppserverRoleSubResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.CreateAppserverRoleSubResponse;

                /**
                 * Verifies a CreateAppserverRoleSubResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAppserverRoleSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAppserverRoleSubResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.CreateAppserverRoleSubResponse;

                /**
                 * Creates a plain object from a CreateAppserverRoleSubResponse message. Also converts values to other types if specified.
                 * @param message CreateAppserverRoleSubResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.CreateAppserverRoleSubResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAppserverRoleSubResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAppserverRoleSubResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverRoleSubRequest. */
            interface IDeleteAppserverRoleSubRequest {

                /** DeleteAppserverRoleSubRequest id */
                id?: (string|null);
            }

            /** Represents a DeleteAppserverRoleSubRequest. */
            class DeleteAppserverRoleSubRequest implements IDeleteAppserverRoleSubRequest {

                /**
                 * Constructs a new DeleteAppserverRoleSubRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverRoleSubRequest);

                /** DeleteAppserverRoleSubRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteAppserverRoleSubRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverRoleSubRequest instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverRoleSubRequest): api.v1.appserver.DeleteAppserverRoleSubRequest;

                /**
                 * Encodes the specified DeleteAppserverRoleSubRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubRequest.verify|verify} messages.
                 * @param message DeleteAppserverRoleSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverRoleSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverRoleSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubRequest.verify|verify} messages.
                 * @param message DeleteAppserverRoleSubRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverRoleSubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverRoleSubRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverRoleSubRequest;

                /**
                 * Decodes a DeleteAppserverRoleSubRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverRoleSubRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverRoleSubRequest;

                /**
                 * Verifies a DeleteAppserverRoleSubRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverRoleSubRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverRoleSubRequest
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverRoleSubRequest;

                /**
                 * Creates a plain object from a DeleteAppserverRoleSubRequest message. Also converts values to other types if specified.
                 * @param message DeleteAppserverRoleSubRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverRoleSubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverRoleSubRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverRoleSubRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAppserverRoleSubResponse. */
            interface IDeleteAppserverRoleSubResponse {
            }

            /** Represents a DeleteAppserverRoleSubResponse. */
            class DeleteAppserverRoleSubResponse implements IDeleteAppserverRoleSubResponse {

                /**
                 * Constructs a new DeleteAppserverRoleSubResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.appserver.IDeleteAppserverRoleSubResponse);

                /**
                 * Creates a new DeleteAppserverRoleSubResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverRoleSubResponse instance
                 */
                public static create(properties?: api.v1.appserver.IDeleteAppserverRoleSubResponse): api.v1.appserver.DeleteAppserverRoleSubResponse;

                /**
                 * Encodes the specified DeleteAppserverRoleSubResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubResponse.verify|verify} messages.
                 * @param message DeleteAppserverRoleSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.appserver.IDeleteAppserverRoleSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverRoleSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubResponse.verify|verify} messages.
                 * @param message DeleteAppserverRoleSubResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.appserver.IDeleteAppserverRoleSubResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverRoleSubResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.appserver.DeleteAppserverRoleSubResponse;

                /**
                 * Decodes a DeleteAppserverRoleSubResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverRoleSubResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.appserver.DeleteAppserverRoleSubResponse;

                /**
                 * Verifies a DeleteAppserverRoleSubResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAppserverRoleSubResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAppserverRoleSubResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.appserver.DeleteAppserverRoleSubResponse;

                /**
                 * Creates a plain object from a DeleteAppserverRoleSubResponse message. Also converts values to other types if specified.
                 * @param message DeleteAppserverRoleSubResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.appserver.DeleteAppserverRoleSubResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAppserverRoleSubResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAppserverRoleSubResponse
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
            seconds?: (number|Long|null);

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
            public seconds: (number|Long);

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
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

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
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

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
