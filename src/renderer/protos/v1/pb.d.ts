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

                /** Input createAppserver */
                createAppserver?: (api.v1.messages.ICreateAppserverRequest|null);

                /** Input deleteAppserver */
                deleteAppserver?: (api.v1.messages.IDeleteAppserverRequest|null);
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

                /** Input createAppserver. */
                public createAppserver?: (api.v1.messages.ICreateAppserverRequest|null);

                /** Input deleteAppserver. */
                public deleteAppserver?: (api.v1.messages.IDeleteAppserverRequest|null);

                /** Input data. */
                public data?: ("updateJwtToken"|"appserverListing"|"createAppserver"|"deleteAppserver");

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
                appserverListing?: (api.v1.messages.IAppserverListingResponse|null);
            }

            /** Represents an Output. */
            class Output implements IOutput {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IOutput);

                /** Output appserverListing. */
                public appserverListing?: (api.v1.messages.IAppserverListingResponse|null);

                /** Output data. */
                public data?: "appserverListing";

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

            /** Properties of an Appserver. */
            interface IAppserver {

                /** Appserver id */
                id?: (string|null);

                /** Appserver name */
                name?: (string|null);

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
                constructor(properties?: api.v1.messages.IAppserver);

                /** Appserver id. */
                public id: string;

                /** Appserver name. */
                public name: string;

                /** Appserver createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Appserver updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Appserver instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Appserver instance
                 */
                public static create(properties?: api.v1.messages.IAppserver): api.v1.messages.Appserver;

                /**
                 * Encodes the specified Appserver message. Does not implicitly {@link api.v1.messages.Appserver.verify|verify} messages.
                 * @param message Appserver message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IAppserver, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Appserver message, length delimited. Does not implicitly {@link api.v1.messages.Appserver.verify|verify} messages.
                 * @param message Appserver message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IAppserver, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Appserver message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.Appserver;

                /**
                 * Decodes an Appserver message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Appserver
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.Appserver;

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
                public static fromObject(object: { [k: string]: any }): api.v1.messages.Appserver;

                /**
                 * Creates a plain object from an Appserver message. Also converts values to other types if specified.
                 * @param message Appserver
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.Appserver, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an AppserverAndSub. */
            interface IAppserverAndSub {

                /** AppserverAndSub subId */
                subId?: (string|null);

                /** AppserverAndSub appserver */
                appserver?: (api.v1.messages.IAppserver|null);
            }

            /** Represents an AppserverAndSub. */
            class AppserverAndSub implements IAppserverAndSub {

                /**
                 * Constructs a new AppserverAndSub.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IAppserverAndSub);

                /** AppserverAndSub subId. */
                public subId: string;

                /** AppserverAndSub appserver. */
                public appserver?: (api.v1.messages.IAppserver|null);

                /**
                 * Creates a new AppserverAndSub instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverAndSub instance
                 */
                public static create(properties?: api.v1.messages.IAppserverAndSub): api.v1.messages.AppserverAndSub;

                /**
                 * Encodes the specified AppserverAndSub message. Does not implicitly {@link api.v1.messages.AppserverAndSub.verify|verify} messages.
                 * @param message AppserverAndSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IAppserverAndSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverAndSub message, length delimited. Does not implicitly {@link api.v1.messages.AppserverAndSub.verify|verify} messages.
                 * @param message AppserverAndSub message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IAppserverAndSub, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverAndSub message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.AppserverAndSub;

                /**
                 * Decodes an AppserverAndSub message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverAndSub
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.AppserverAndSub;

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
                public static fromObject(object: { [k: string]: any }): api.v1.messages.AppserverAndSub;

                /**
                 * Creates a plain object from an AppserverAndSub message. Also converts values to other types if specified.
                 * @param message AppserverAndSub
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.AppserverAndSub, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an AppserverListingResponse. */
            interface IAppserverListingResponse {

                /** AppserverListingResponse appservers */
                appservers?: (api.v1.messages.IAppserverAndSub[]|null);
            }

            /** Represents an AppserverListingResponse. */
            class AppserverListingResponse implements IAppserverListingResponse {

                /**
                 * Constructs a new AppserverListingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IAppserverListingResponse);

                /** AppserverListingResponse appservers. */
                public appservers: api.v1.messages.IAppserverAndSub[];

                /**
                 * Creates a new AppserverListingResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AppserverListingResponse instance
                 */
                public static create(properties?: api.v1.messages.IAppserverListingResponse): api.v1.messages.AppserverListingResponse;

                /**
                 * Encodes the specified AppserverListingResponse message. Does not implicitly {@link api.v1.messages.AppserverListingResponse.verify|verify} messages.
                 * @param message AppserverListingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IAppserverListingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AppserverListingResponse message, length delimited. Does not implicitly {@link api.v1.messages.AppserverListingResponse.verify|verify} messages.
                 * @param message AppserverListingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IAppserverListingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AppserverListingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AppserverListingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.AppserverListingResponse;

                /**
                 * Decodes an AppserverListingResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AppserverListingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.AppserverListingResponse;

                /**
                 * Verifies an AppserverListingResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AppserverListingResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AppserverListingResponse
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.messages.AppserverListingResponse;

                /**
                 * Creates a plain object from an AppserverListingResponse message. Also converts values to other types if specified.
                 * @param message AppserverListingResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.AppserverListingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AppserverListingResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AppserverListingResponse
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
                constructor(properties?: api.v1.messages.ICreateAppserverRequest);

                /** CreateAppserverRequest name. */
                public name: string;

                /**
                 * Creates a new CreateAppserverRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAppserverRequest instance
                 */
                public static create(properties?: api.v1.messages.ICreateAppserverRequest): api.v1.messages.CreateAppserverRequest;

                /**
                 * Encodes the specified CreateAppserverRequest message. Does not implicitly {@link api.v1.messages.CreateAppserverRequest.verify|verify} messages.
                 * @param message CreateAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.ICreateAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAppserverRequest message, length delimited. Does not implicitly {@link api.v1.messages.CreateAppserverRequest.verify|verify} messages.
                 * @param message CreateAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.ICreateAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.CreateAppserverRequest;

                /**
                 * Decodes a CreateAppserverRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.CreateAppserverRequest;

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
                public static fromObject(object: { [k: string]: any }): api.v1.messages.CreateAppserverRequest;

                /**
                 * Creates a plain object from a CreateAppserverRequest message. Also converts values to other types if specified.
                 * @param message CreateAppserverRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.CreateAppserverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: api.v1.messages.IDeleteAppserverRequest);

                /** DeleteAppserverRequest id. */
                public id: string;

                /**
                 * Creates a new DeleteAppserverRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAppserverRequest instance
                 */
                public static create(properties?: api.v1.messages.IDeleteAppserverRequest): api.v1.messages.DeleteAppserverRequest;

                /**
                 * Encodes the specified DeleteAppserverRequest message. Does not implicitly {@link api.v1.messages.DeleteAppserverRequest.verify|verify} messages.
                 * @param message DeleteAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.messages.IDeleteAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAppserverRequest message, length delimited. Does not implicitly {@link api.v1.messages.DeleteAppserverRequest.verify|verify} messages.
                 * @param message DeleteAppserverRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.messages.IDeleteAppserverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.messages.DeleteAppserverRequest;

                /**
                 * Decodes a DeleteAppserverRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAppserverRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.messages.DeleteAppserverRequest;

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
                public static fromObject(object: { [k: string]: any }): api.v1.messages.DeleteAppserverRequest;

                /**
                 * Creates a plain object from a DeleteAppserverRequest message. Also converts values to other types if specified.
                 * @param message DeleteAppserverRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.messages.DeleteAppserverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
