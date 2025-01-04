import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace api. */
export namespace api {

    /** Namespace v1. */
    namespace v1 {

        /** Namespace auth. */
        namespace auth {

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
                constructor(properties?: api.v1.auth.IUpdateJwtToken);

                /** UpdateJwtToken access. */
                public access: string;

                /**
                 * Creates a new UpdateJwtToken instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateJwtToken instance
                 */
                public static create(properties?: api.v1.auth.IUpdateJwtToken): api.v1.auth.UpdateJwtToken;

                /**
                 * Encodes the specified UpdateJwtToken message. Does not implicitly {@link api.v1.auth.UpdateJwtToken.verify|verify} messages.
                 * @param message UpdateJwtToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.auth.IUpdateJwtToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateJwtToken message, length delimited. Does not implicitly {@link api.v1.auth.UpdateJwtToken.verify|verify} messages.
                 * @param message UpdateJwtToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.auth.IUpdateJwtToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.auth.UpdateJwtToken;

                /**
                 * Decodes an UpdateJwtToken message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateJwtToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.auth.UpdateJwtToken;

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
                public static fromObject(object: { [k: string]: any }): api.v1.auth.UpdateJwtToken;

                /**
                 * Creates a plain object from an UpdateJwtToken message. Also converts values to other types if specified.
                 * @param message UpdateJwtToken
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.auth.UpdateJwtToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Namespace shared. */
        namespace shared {

            /** ActionType enum. */
            enum ActionType {
                GET = 0,
                LIST = 1,
                CREATE = 2,
                UPDATE = 3,
                DELETE = 4,
                NOTIFICATION = 5
            }

            /** Properties of a Meta. */
            interface IMeta {

                /** Meta action */
                action?: (api.v1.shared.ActionType|null);
            }

            /** Represents a Meta. */
            class Meta implements IMeta {

                /**
                 * Constructs a new Meta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.shared.IMeta);

                /** Meta action. */
                public action: api.v1.shared.ActionType;

                /**
                 * Creates a new Meta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Meta instance
                 */
                public static create(properties?: api.v1.shared.IMeta): api.v1.shared.Meta;

                /**
                 * Encodes the specified Meta message. Does not implicitly {@link api.v1.shared.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.shared.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Meta message, length delimited. Does not implicitly {@link api.v1.shared.Meta.verify|verify} messages.
                 * @param message Meta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.shared.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Meta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.shared.Meta;

                /**
                 * Decodes a Meta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Meta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.shared.Meta;

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
                public static fromObject(object: { [k: string]: any }): api.v1.shared.Meta;

                /**
                 * Creates a plain object from a Meta message. Also converts values to other types if specified.
                 * @param message Meta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.shared.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an Output. */
            interface IOutput {
            }

            /** Represents an Output. */
            class Output implements IOutput {

                /**
                 * Constructs a new Output.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.shared.IOutput);

                /**
                 * Creates a new Output instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Output instance
                 */
                public static create(properties?: api.v1.shared.IOutput): api.v1.shared.Output;

                /**
                 * Encodes the specified Output message. Does not implicitly {@link api.v1.shared.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.shared.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Output message, length delimited. Does not implicitly {@link api.v1.shared.Output.verify|verify} messages.
                 * @param message Output message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.shared.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Output message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.shared.Output;

                /**
                 * Decodes an Output message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Output
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.shared.Output;

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
                public static fromObject(object: { [k: string]: any }): api.v1.shared.Output;

                /**
                 * Creates a plain object from an Output message. Also converts values to other types if specified.
                 * @param message Output
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.shared.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an Input. */
            interface IInput {

                /** Input updateJwtToken */
                updateJwtToken?: (api.v1.auth.IUpdateJwtToken|null);
            }

            /** Represents an Input. */
            class Input implements IInput {

                /**
                 * Constructs a new Input.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.shared.IInput);

                /** Input updateJwtToken. */
                public updateJwtToken?: (api.v1.auth.IUpdateJwtToken|null);

                /** Input data. */
                public data?: "updateJwtToken";

                /**
                 * Creates a new Input instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Input instance
                 */
                public static create(properties?: api.v1.shared.IInput): api.v1.shared.Input;

                /**
                 * Encodes the specified Input message. Does not implicitly {@link api.v1.shared.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.shared.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Input message, length delimited. Does not implicitly {@link api.v1.shared.Input.verify|verify} messages.
                 * @param message Input message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.shared.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Input message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.shared.Input;

                /**
                 * Decodes an Input message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Input
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.shared.Input;

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
                public static fromObject(object: { [k: string]: any }): api.v1.shared.Input;

                /**
                 * Creates a plain object from an Input message. Also converts values to other types if specified.
                 * @param message Input
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.shared.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a IOMessage. */
            interface IIOMessage {

                /** IOMessage meta */
                meta?: (api.v1.shared.IMeta|null);

                /** IOMessage input */
                input?: (api.v1.shared.IInput|null);

                /** IOMessage output */
                output?: (api.v1.shared.IOutput|null);
            }

            /** Represents a IOMessage. */
            class IOMessage implements IIOMessage {

                /**
                 * Constructs a new IOMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: api.v1.shared.IIOMessage);

                /** IOMessage meta. */
                public meta?: (api.v1.shared.IMeta|null);

                /** IOMessage input. */
                public input?: (api.v1.shared.IInput|null);

                /** IOMessage output. */
                public output?: (api.v1.shared.IOutput|null);

                /** IOMessage data. */
                public data?: ("input"|"output");

                /**
                 * Creates a new IOMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IOMessage instance
                 */
                public static create(properties?: api.v1.shared.IIOMessage): api.v1.shared.IOMessage;

                /**
                 * Encodes the specified IOMessage message. Does not implicitly {@link api.v1.shared.IOMessage.verify|verify} messages.
                 * @param message IOMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: api.v1.shared.IIOMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IOMessage message, length delimited. Does not implicitly {@link api.v1.shared.IOMessage.verify|verify} messages.
                 * @param message IOMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: api.v1.shared.IIOMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a IOMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IOMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.v1.shared.IOMessage;

                /**
                 * Decodes a IOMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IOMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.v1.shared.IOMessage;

                /**
                 * Verifies a IOMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a IOMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IOMessage
                 */
                public static fromObject(object: { [k: string]: any }): api.v1.shared.IOMessage;

                /**
                 * Creates a plain object from a IOMessage message. Also converts values to other types if specified.
                 * @param message IOMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: api.v1.shared.IOMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IOMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for IOMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
