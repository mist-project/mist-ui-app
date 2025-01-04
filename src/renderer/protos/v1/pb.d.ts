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

                /** Input data. */
                public data?: "updateJwtToken";

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
            }

            /** Represents an Output. */
            class Output implements IOutput {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.messages.IOutput);

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
        }
    }
}
