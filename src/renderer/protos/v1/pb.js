/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from 'protobufjs/minimal';

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

export const api = ($root.api = (() => {
  /**
   * Namespace api.
   * @exports api
   * @namespace
   */
  const api = {};

  api.v1 = (function () {
    /**
     * Namespace v1.
     * @memberof api
     * @namespace
     */
    const v1 = {};

    v1.messages = (function () {
      /**
       * Namespace messages.
       * @memberof api.v1
       * @namespace
       */
      const messages = {};

      messages.InputMessage = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.meta != null && Object.hasOwnProperty.call(message, 'meta'))
            $root.api.v1.messages.Meta.encode(
              message.meta,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          if (message.input != null && Object.hasOwnProperty.call(message, 'input'))
            $root.api.v1.messages.Input.encode(
              message.input,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.InputMessage();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.meta != null && message.hasOwnProperty('meta')) {
            let error = $root.api.v1.messages.Meta.verify(message.meta);
            if (error) return 'meta.' + error;
          }
          if (message.input != null && message.hasOwnProperty('input')) {
            let error = $root.api.v1.messages.Input.verify(message.input);
            if (error) return 'input.' + error;
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
          if (object instanceof $root.api.v1.messages.InputMessage) return object;
          let message = new $root.api.v1.messages.InputMessage();
          if (object.meta != null) {
            if (typeof object.meta !== 'object')
              throw TypeError('.api.v1.messages.InputMessage.meta: object expected');
            message.meta = $root.api.v1.messages.Meta.fromObject(object.meta);
          }
          if (object.input != null) {
            if (typeof object.input !== 'object')
              throw TypeError('.api.v1.messages.InputMessage.input: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.meta = null;
            object.input = null;
          }
          if (message.meta != null && message.hasOwnProperty('meta'))
            object.meta = $root.api.v1.messages.Meta.toObject(message.meta, options);
          if (message.input != null && message.hasOwnProperty('input'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.InputMessage';
        };

        return InputMessage;
      })();

      messages.OutputMessage = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.meta != null && Object.hasOwnProperty.call(message, 'meta'))
            $root.api.v1.messages.Meta.encode(
              message.meta,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          if (message.output != null && Object.hasOwnProperty.call(message, 'output'))
            $root.api.v1.messages.Output.encode(
              message.output,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.OutputMessage();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.meta != null && message.hasOwnProperty('meta')) {
            let error = $root.api.v1.messages.Meta.verify(message.meta);
            if (error) return 'meta.' + error;
          }
          if (message.output != null && message.hasOwnProperty('output')) {
            let error = $root.api.v1.messages.Output.verify(message.output);
            if (error) return 'output.' + error;
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
          if (object instanceof $root.api.v1.messages.OutputMessage) return object;
          let message = new $root.api.v1.messages.OutputMessage();
          if (object.meta != null) {
            if (typeof object.meta !== 'object')
              throw TypeError('.api.v1.messages.OutputMessage.meta: object expected');
            message.meta = $root.api.v1.messages.Meta.fromObject(object.meta);
          }
          if (object.output != null) {
            if (typeof object.output !== 'object')
              throw TypeError('.api.v1.messages.OutputMessage.output: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.meta = null;
            object.output = null;
          }
          if (message.meta != null && message.hasOwnProperty('meta'))
            object.meta = $root.api.v1.messages.Meta.toObject(message.meta, options);
          if (message.output != null && message.hasOwnProperty('output'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.OutputMessage';
        };

        return OutputMessage;
      })();

      messages.Meta = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.action != null && Object.hasOwnProperty.call(message, 'action'))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.action);
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.Meta();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.action != null && message.hasOwnProperty('action'))
            switch (message.action) {
              default:
                return 'action: enum value expected';
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
          if (object instanceof $root.api.v1.messages.Meta) return object;
          let message = new $root.api.v1.messages.Meta();
          switch (object.action) {
            default:
              if (typeof object.action === 'number') {
                message.action = object.action;
                break;
              }
              break;
            case 'ACTION_TYPE_UNSPECIFIED':
            case 0:
              message.action = 0;
              break;
            case 'ACTION_TYPE_GET':
            case 1:
              message.action = 1;
              break;
            case 'ACTION_TYPE_LIST':
            case 2:
              message.action = 2;
              break;
            case 'ACTION_TYPE_CREATE':
            case 3:
              message.action = 3;
              break;
            case 'ACTION_TYPE_UPDATE':
            case 4:
              message.action = 4;
              break;
            case 'ACTION_TYPE_DELETE':
            case 5:
              message.action = 5;
              break;
            case 'ACTION_TYPE_NOTIFICATION':
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
          if (!options) options = {};
          let object = {};
          if (options.defaults)
            object.action = options.enums === String ? 'ACTION_TYPE_UNSPECIFIED' : 0;
          if (message.action != null && message.hasOwnProperty('action'))
            object.action =
              options.enums === String
                ? $root.api.v1.messages.ActionType[message.action] === undefined
                  ? message.action
                  : $root.api.v1.messages.ActionType[message.action]
                : message.action;
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.Meta';
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
      messages.ActionType = (function () {
        const valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'ACTION_TYPE_UNSPECIFIED')] = 0;
        values[(valuesById[1] = 'ACTION_TYPE_GET')] = 1;
        values[(valuesById[2] = 'ACTION_TYPE_LIST')] = 2;
        values[(valuesById[3] = 'ACTION_TYPE_CREATE')] = 3;
        values[(valuesById[4] = 'ACTION_TYPE_UPDATE')] = 4;
        values[(valuesById[5] = 'ACTION_TYPE_DELETE')] = 5;
        values[(valuesById[6] = 'ACTION_TYPE_NOTIFICATION')] = 6;
        return values;
      })();

      messages.Input = (function () {
        /**
         * Properties of an Input.
         * @memberof api.v1.messages
         * @interface IInput
         * @property {api.v1.messages.IUpdateJwtToken|null} [updateJwtToken] Input updateJwtToken
         * @property {api.v1.messages.IAppserverListingRequest|null} [appserverListing] Input appserverListing
         * @property {api.v1.appserver.IGetByIdAppserverRequest|null} [appserverDetails] Input appserverDetails
         * @property {api.v1.appserver.ICreateAppserverRequest|null} [createAppserver] Input createAppserver
         * @property {api.v1.appserver.IDeleteAppserverRequest|null} [deleteAppserver] Input deleteAppserver
         * @property {api.v1.channel.ICreateChannelRequest|null} [createChannel] Input createChannel
         * @property {api.v1.channel.IListChannelsRequest|null} [channelListing] Input channelListing
         * @property {api.v1.appserver.ICreateAppserverSubRequest|null} [joinAppserver] Input joinAppserver
         * @property {api.v1.appserver.ICreateAppserverRoleRequest|null} [createAppserverRole] Input createAppserverRole
         * @property {api.v1.appserver.IGetAllAppserverRolesRequest|null} [appserverRolesListing] Input appserverRolesListing
         * @property {api.v1.appserver.IGetAllUsersAppserverSubsRequest|null} [appserverUserListing] Input appserverUserListing
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
         * Input appserverDetails.
         * @member {api.v1.appserver.IGetByIdAppserverRequest|null|undefined} appserverDetails
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.appserverDetails = null;

        /**
         * Input createAppserver.
         * @member {api.v1.appserver.ICreateAppserverRequest|null|undefined} createAppserver
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.createAppserver = null;

        /**
         * Input deleteAppserver.
         * @member {api.v1.appserver.IDeleteAppserverRequest|null|undefined} deleteAppserver
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.deleteAppserver = null;

        /**
         * Input createChannel.
         * @member {api.v1.channel.ICreateChannelRequest|null|undefined} createChannel
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.createChannel = null;

        /**
         * Input channelListing.
         * @member {api.v1.channel.IListChannelsRequest|null|undefined} channelListing
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.channelListing = null;

        /**
         * Input joinAppserver.
         * @member {api.v1.appserver.ICreateAppserverSubRequest|null|undefined} joinAppserver
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.joinAppserver = null;

        /**
         * Input createAppserverRole.
         * @member {api.v1.appserver.ICreateAppserverRoleRequest|null|undefined} createAppserverRole
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.createAppserverRole = null;

        /**
         * Input appserverRolesListing.
         * @member {api.v1.appserver.IGetAllAppserverRolesRequest|null|undefined} appserverRolesListing
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.appserverRolesListing = null;

        /**
         * Input appserverUserListing.
         * @member {api.v1.appserver.IGetAllUsersAppserverSubsRequest|null|undefined} appserverUserListing
         * @memberof api.v1.messages.Input
         * @instance
         */
        Input.prototype.appserverUserListing = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Input data.
         * @member {"updateJwtToken"|"appserverListing"|"appserverDetails"|"createAppserver"|"deleteAppserver"|"createChannel"|"channelListing"|"joinAppserver"|"createAppserverRole"|"appserverRolesListing"|"appserverUserListing"|undefined} data
         * @memberof api.v1.messages.Input
         * @instance
         */
        Object.defineProperty(Input.prototype, 'data', {
          get: $util.oneOfGetter(
            ($oneOfFields = [
              'updateJwtToken',
              'appserverListing',
              'appserverDetails',
              'createAppserver',
              'deleteAppserver',
              'createChannel',
              'channelListing',
              'joinAppserver',
              'createAppserverRole',
              'appserverRolesListing',
              'appserverUserListing'
            ])
          ),
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
          if (!writer) writer = $Writer.create();
          if (
            message.updateJwtToken != null &&
            Object.hasOwnProperty.call(message, 'updateJwtToken')
          )
            $root.api.v1.messages.UpdateJwtToken.encode(
              message.updateJwtToken,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          if (
            message.appserverListing != null &&
            Object.hasOwnProperty.call(message, 'appserverListing')
          )
            $root.api.v1.messages.AppserverListingRequest.encode(
              message.appserverListing,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
          if (
            message.appserverDetails != null &&
            Object.hasOwnProperty.call(message, 'appserverDetails')
          )
            $root.api.v1.appserver.GetByIdAppserverRequest.encode(
              message.appserverDetails,
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
            ).ldelim();
          if (
            message.createAppserver != null &&
            Object.hasOwnProperty.call(message, 'createAppserver')
          )
            $root.api.v1.appserver.CreateAppserverRequest.encode(
              message.createAppserver,
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
          if (
            message.deleteAppserver != null &&
            Object.hasOwnProperty.call(message, 'deleteAppserver')
          )
            $root.api.v1.appserver.DeleteAppserverRequest.encode(
              message.deleteAppserver,
              writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
            ).ldelim();
          if (message.createChannel != null && Object.hasOwnProperty.call(message, 'createChannel'))
            $root.api.v1.channel.CreateChannelRequest.encode(
              message.createChannel,
              writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
            ).ldelim();
          if (
            message.channelListing != null &&
            Object.hasOwnProperty.call(message, 'channelListing')
          )
            $root.api.v1.channel.ListChannelsRequest.encode(
              message.channelListing,
              writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
            ).ldelim();
          if (message.joinAppserver != null && Object.hasOwnProperty.call(message, 'joinAppserver'))
            $root.api.v1.appserver.CreateAppserverSubRequest.encode(
              message.joinAppserver,
              writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
            ).ldelim();
          if (
            message.createAppserverRole != null &&
            Object.hasOwnProperty.call(message, 'createAppserverRole')
          )
            $root.api.v1.appserver.CreateAppserverRoleRequest.encode(
              message.createAppserverRole,
              writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
            ).ldelim();
          if (
            message.appserverRolesListing != null &&
            Object.hasOwnProperty.call(message, 'appserverRolesListing')
          )
            $root.api.v1.appserver.GetAllAppserverRolesRequest.encode(
              message.appserverRolesListing,
              writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
            ).ldelim();
          if (
            message.appserverUserListing != null &&
            Object.hasOwnProperty.call(message, 'appserverUserListing')
          )
            $root.api.v1.appserver.GetAllUsersAppserverSubsRequest.encode(
              message.appserverUserListing,
              writer.uint32(/* id 11, wireType 2 =*/ 90).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.Input();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.updateJwtToken = $root.api.v1.messages.UpdateJwtToken.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 2: {
                message.appserverListing = $root.api.v1.messages.AppserverListingRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 3: {
                message.appserverDetails = $root.api.v1.appserver.GetByIdAppserverRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 4: {
                message.createAppserver = $root.api.v1.appserver.CreateAppserverRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 5: {
                message.deleteAppserver = $root.api.v1.appserver.DeleteAppserverRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 6: {
                message.createChannel = $root.api.v1.channel.CreateChannelRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 7: {
                message.channelListing = $root.api.v1.channel.ListChannelsRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 8: {
                message.joinAppserver = $root.api.v1.appserver.CreateAppserverSubRequest.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 9: {
                message.createAppserverRole =
                  $root.api.v1.appserver.CreateAppserverRoleRequest.decode(reader, reader.uint32());
                break;
              }
              case 10: {
                message.appserverRolesListing =
                  $root.api.v1.appserver.GetAllAppserverRolesRequest.decode(
                    reader,
                    reader.uint32()
                  );
                break;
              }
              case 11: {
                message.appserverUserListing =
                  $root.api.v1.appserver.GetAllUsersAppserverSubsRequest.decode(
                    reader,
                    reader.uint32()
                  );
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          let properties = {};
          if (message.updateJwtToken != null && message.hasOwnProperty('updateJwtToken')) {
            properties.data = 1;
            {
              let error = $root.api.v1.messages.UpdateJwtToken.verify(message.updateJwtToken);
              if (error) return 'updateJwtToken.' + error;
            }
          }
          if (message.appserverListing != null && message.hasOwnProperty('appserverListing')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.messages.AppserverListingRequest.verify(
                message.appserverListing
              );
              if (error) return 'appserverListing.' + error;
            }
          }
          if (message.appserverDetails != null && message.hasOwnProperty('appserverDetails')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetByIdAppserverRequest.verify(
                message.appserverDetails
              );
              if (error) return 'appserverDetails.' + error;
            }
          }
          if (message.createAppserver != null && message.hasOwnProperty('createAppserver')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.CreateAppserverRequest.verify(
                message.createAppserver
              );
              if (error) return 'createAppserver.' + error;
            }
          }
          if (message.deleteAppserver != null && message.hasOwnProperty('deleteAppserver')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.DeleteAppserverRequest.verify(
                message.deleteAppserver
              );
              if (error) return 'deleteAppserver.' + error;
            }
          }
          if (message.createChannel != null && message.hasOwnProperty('createChannel')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.channel.CreateChannelRequest.verify(message.createChannel);
              if (error) return 'createChannel.' + error;
            }
          }
          if (message.channelListing != null && message.hasOwnProperty('channelListing')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.channel.ListChannelsRequest.verify(message.channelListing);
              if (error) return 'channelListing.' + error;
            }
          }
          if (message.joinAppserver != null && message.hasOwnProperty('joinAppserver')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.CreateAppserverSubRequest.verify(
                message.joinAppserver
              );
              if (error) return 'joinAppserver.' + error;
            }
          }
          if (
            message.createAppserverRole != null &&
            message.hasOwnProperty('createAppserverRole')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.CreateAppserverRoleRequest.verify(
                message.createAppserverRole
              );
              if (error) return 'createAppserverRole.' + error;
            }
          }
          if (
            message.appserverRolesListing != null &&
            message.hasOwnProperty('appserverRolesListing')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetAllAppserverRolesRequest.verify(
                message.appserverRolesListing
              );
              if (error) return 'appserverRolesListing.' + error;
            }
          }
          if (
            message.appserverUserListing != null &&
            message.hasOwnProperty('appserverUserListing')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetAllUsersAppserverSubsRequest.verify(
                message.appserverUserListing
              );
              if (error) return 'appserverUserListing.' + error;
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
          if (object instanceof $root.api.v1.messages.Input) return object;
          let message = new $root.api.v1.messages.Input();
          if (object.updateJwtToken != null) {
            if (typeof object.updateJwtToken !== 'object')
              throw TypeError('.api.v1.messages.Input.updateJwtToken: object expected');
            message.updateJwtToken = $root.api.v1.messages.UpdateJwtToken.fromObject(
              object.updateJwtToken
            );
          }
          if (object.appserverListing != null) {
            if (typeof object.appserverListing !== 'object')
              throw TypeError('.api.v1.messages.Input.appserverListing: object expected');
            message.appserverListing = $root.api.v1.messages.AppserverListingRequest.fromObject(
              object.appserverListing
            );
          }
          if (object.appserverDetails != null) {
            if (typeof object.appserverDetails !== 'object')
              throw TypeError('.api.v1.messages.Input.appserverDetails: object expected');
            message.appserverDetails = $root.api.v1.appserver.GetByIdAppserverRequest.fromObject(
              object.appserverDetails
            );
          }
          if (object.createAppserver != null) {
            if (typeof object.createAppserver !== 'object')
              throw TypeError('.api.v1.messages.Input.createAppserver: object expected');
            message.createAppserver = $root.api.v1.appserver.CreateAppserverRequest.fromObject(
              object.createAppserver
            );
          }
          if (object.deleteAppserver != null) {
            if (typeof object.deleteAppserver !== 'object')
              throw TypeError('.api.v1.messages.Input.deleteAppserver: object expected');
            message.deleteAppserver = $root.api.v1.appserver.DeleteAppserverRequest.fromObject(
              object.deleteAppserver
            );
          }
          if (object.createChannel != null) {
            if (typeof object.createChannel !== 'object')
              throw TypeError('.api.v1.messages.Input.createChannel: object expected');
            message.createChannel = $root.api.v1.channel.CreateChannelRequest.fromObject(
              object.createChannel
            );
          }
          if (object.channelListing != null) {
            if (typeof object.channelListing !== 'object')
              throw TypeError('.api.v1.messages.Input.channelListing: object expected');
            message.channelListing = $root.api.v1.channel.ListChannelsRequest.fromObject(
              object.channelListing
            );
          }
          if (object.joinAppserver != null) {
            if (typeof object.joinAppserver !== 'object')
              throw TypeError('.api.v1.messages.Input.joinAppserver: object expected');
            message.joinAppserver = $root.api.v1.appserver.CreateAppserverSubRequest.fromObject(
              object.joinAppserver
            );
          }
          if (object.createAppserverRole != null) {
            if (typeof object.createAppserverRole !== 'object')
              throw TypeError('.api.v1.messages.Input.createAppserverRole: object expected');
            message.createAppserverRole =
              $root.api.v1.appserver.CreateAppserverRoleRequest.fromObject(
                object.createAppserverRole
              );
          }
          if (object.appserverRolesListing != null) {
            if (typeof object.appserverRolesListing !== 'object')
              throw TypeError('.api.v1.messages.Input.appserverRolesListing: object expected');
            message.appserverRolesListing =
              $root.api.v1.appserver.GetAllAppserverRolesRequest.fromObject(
                object.appserverRolesListing
              );
          }
          if (object.appserverUserListing != null) {
            if (typeof object.appserverUserListing !== 'object')
              throw TypeError('.api.v1.messages.Input.appserverUserListing: object expected');
            message.appserverUserListing =
              $root.api.v1.appserver.GetAllUsersAppserverSubsRequest.fromObject(
                object.appserverUserListing
              );
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
          if (!options) options = {};
          let object = {};
          if (message.updateJwtToken != null && message.hasOwnProperty('updateJwtToken')) {
            object.updateJwtToken = $root.api.v1.messages.UpdateJwtToken.toObject(
              message.updateJwtToken,
              options
            );
            if (options.oneofs) object.data = 'updateJwtToken';
          }
          if (message.appserverListing != null && message.hasOwnProperty('appserverListing')) {
            object.appserverListing = $root.api.v1.messages.AppserverListingRequest.toObject(
              message.appserverListing,
              options
            );
            if (options.oneofs) object.data = 'appserverListing';
          }
          if (message.appserverDetails != null && message.hasOwnProperty('appserverDetails')) {
            object.appserverDetails = $root.api.v1.appserver.GetByIdAppserverRequest.toObject(
              message.appserverDetails,
              options
            );
            if (options.oneofs) object.data = 'appserverDetails';
          }
          if (message.createAppserver != null && message.hasOwnProperty('createAppserver')) {
            object.createAppserver = $root.api.v1.appserver.CreateAppserverRequest.toObject(
              message.createAppserver,
              options
            );
            if (options.oneofs) object.data = 'createAppserver';
          }
          if (message.deleteAppserver != null && message.hasOwnProperty('deleteAppserver')) {
            object.deleteAppserver = $root.api.v1.appserver.DeleteAppserverRequest.toObject(
              message.deleteAppserver,
              options
            );
            if (options.oneofs) object.data = 'deleteAppserver';
          }
          if (message.createChannel != null && message.hasOwnProperty('createChannel')) {
            object.createChannel = $root.api.v1.channel.CreateChannelRequest.toObject(
              message.createChannel,
              options
            );
            if (options.oneofs) object.data = 'createChannel';
          }
          if (message.channelListing != null && message.hasOwnProperty('channelListing')) {
            object.channelListing = $root.api.v1.channel.ListChannelsRequest.toObject(
              message.channelListing,
              options
            );
            if (options.oneofs) object.data = 'channelListing';
          }
          if (message.joinAppserver != null && message.hasOwnProperty('joinAppserver')) {
            object.joinAppserver = $root.api.v1.appserver.CreateAppserverSubRequest.toObject(
              message.joinAppserver,
              options
            );
            if (options.oneofs) object.data = 'joinAppserver';
          }
          if (
            message.createAppserverRole != null &&
            message.hasOwnProperty('createAppserverRole')
          ) {
            object.createAppserverRole = $root.api.v1.appserver.CreateAppserverRoleRequest.toObject(
              message.createAppserverRole,
              options
            );
            if (options.oneofs) object.data = 'createAppserverRole';
          }
          if (
            message.appserverRolesListing != null &&
            message.hasOwnProperty('appserverRolesListing')
          ) {
            object.appserverRolesListing =
              $root.api.v1.appserver.GetAllAppserverRolesRequest.toObject(
                message.appserverRolesListing,
                options
              );
            if (options.oneofs) object.data = 'appserverRolesListing';
          }
          if (
            message.appserverUserListing != null &&
            message.hasOwnProperty('appserverUserListing')
          ) {
            object.appserverUserListing =
              $root.api.v1.appserver.GetAllUsersAppserverSubsRequest.toObject(
                message.appserverUserListing,
                options
              );
            if (options.oneofs) object.data = 'appserverUserListing';
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.Input';
        };

        return Input;
      })();

      messages.UpdateJwtToken = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateJwtToken access.
         * @member {string} access
         * @memberof api.v1.messages.UpdateJwtToken
         * @instance
         */
        UpdateJwtToken.prototype.access = '';

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
          if (!writer) writer = $Writer.create();
          if (message.access != null && Object.hasOwnProperty.call(message, 'access'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.access);
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.UpdateJwtToken();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.access != null && message.hasOwnProperty('access'))
            if (!$util.isString(message.access)) return 'access: string expected';
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
          if (object instanceof $root.api.v1.messages.UpdateJwtToken) return object;
          let message = new $root.api.v1.messages.UpdateJwtToken();
          if (object.access != null) message.access = String(object.access);
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.access = '';
          if (message.access != null && message.hasOwnProperty('access'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.UpdateJwtToken';
        };

        return UpdateJwtToken;
      })();

      messages.Output = (function () {
        /**
         * Properties of an Output.
         * @memberof api.v1.messages
         * @interface IOutput
         * @property {api.v1.appserver.IGetUserAppserverSubsResponse|null} [appserverListing] Output appserverListing
         * @property {api.v1.appserver.IGetByIdAppserverResponse|null} [appserverDetails] Output appserverDetails
         * @property {api.v1.channel.IListChannelsResponse|null} [channelListing] Output channelListing
         * @property {api.v1.appserver.IAppserver|null} [updateAddAppserver] Output updateAddAppserver
         * @property {api.v1.appserver.IGetAllAppserverRolesResponse|null} [appserverRolesListing] Output appserverRolesListing
         * @property {api.v1.appserver.IGetAllUsersAppserverSubsResponse|null} [appserverUserListing] Output appserverUserListing
         * @property {string|null} [updateRemoveAppserver] Output updateRemoveAppserver
         * @property {api.v1.channel.IChannel|null} [updateNewChannel] Output updateNewChannel
         * @property {api.v1.channel.IChannel|null} [updateDeleteChannel] Output updateDeleteChannel
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output appserverListing.
         * @member {api.v1.appserver.IGetUserAppserverSubsResponse|null|undefined} appserverListing
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.appserverListing = null;

        /**
         * Output appserverDetails.
         * @member {api.v1.appserver.IGetByIdAppserverResponse|null|undefined} appserverDetails
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.appserverDetails = null;

        /**
         * Output channelListing.
         * @member {api.v1.channel.IListChannelsResponse|null|undefined} channelListing
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.channelListing = null;

        /**
         * Output updateAddAppserver.
         * @member {api.v1.appserver.IAppserver|null|undefined} updateAddAppserver
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.updateAddAppserver = null;

        /**
         * Output appserverRolesListing.
         * @member {api.v1.appserver.IGetAllAppserverRolesResponse|null|undefined} appserverRolesListing
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.appserverRolesListing = null;

        /**
         * Output appserverUserListing.
         * @member {api.v1.appserver.IGetAllUsersAppserverSubsResponse|null|undefined} appserverUserListing
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.appserverUserListing = null;

        /**
         * Output updateRemoveAppserver.
         * @member {string|null|undefined} updateRemoveAppserver
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.updateRemoveAppserver = null;

        /**
         * Output updateNewChannel.
         * @member {api.v1.channel.IChannel|null|undefined} updateNewChannel
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.updateNewChannel = null;

        /**
         * Output updateDeleteChannel.
         * @member {api.v1.channel.IChannel|null|undefined} updateDeleteChannel
         * @memberof api.v1.messages.Output
         * @instance
         */
        Output.prototype.updateDeleteChannel = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Output data.
         * @member {"appserverListing"|"appserverDetails"|"channelListing"|"updateAddAppserver"|"appserverRolesListing"|"appserverUserListing"|"updateRemoveAppserver"|"updateNewChannel"|"updateDeleteChannel"|undefined} data
         * @memberof api.v1.messages.Output
         * @instance
         */
        Object.defineProperty(Output.prototype, 'data', {
          get: $util.oneOfGetter(
            ($oneOfFields = [
              'appserverListing',
              'appserverDetails',
              'channelListing',
              'updateAddAppserver',
              'appserverRolesListing',
              'appserverUserListing',
              'updateRemoveAppserver',
              'updateNewChannel',
              'updateDeleteChannel'
            ])
          ),
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
          if (!writer) writer = $Writer.create();
          if (
            message.appserverListing != null &&
            Object.hasOwnProperty.call(message, 'appserverListing')
          )
            $root.api.v1.appserver.GetUserAppserverSubsResponse.encode(
              message.appserverListing,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          if (
            message.appserverDetails != null &&
            Object.hasOwnProperty.call(message, 'appserverDetails')
          )
            $root.api.v1.appserver.GetByIdAppserverResponse.encode(
              message.appserverDetails,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
          if (
            message.channelListing != null &&
            Object.hasOwnProperty.call(message, 'channelListing')
          )
            $root.api.v1.channel.ListChannelsResponse.encode(
              message.channelListing,
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
            ).ldelim();
          if (
            message.updateAddAppserver != null &&
            Object.hasOwnProperty.call(message, 'updateAddAppserver')
          )
            $root.api.v1.appserver.Appserver.encode(
              message.updateAddAppserver,
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
          if (
            message.appserverRolesListing != null &&
            Object.hasOwnProperty.call(message, 'appserverRolesListing')
          )
            $root.api.v1.appserver.GetAllAppserverRolesResponse.encode(
              message.appserverRolesListing,
              writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
            ).ldelim();
          if (
            message.appserverUserListing != null &&
            Object.hasOwnProperty.call(message, 'appserverUserListing')
          )
            $root.api.v1.appserver.GetAllUsersAppserverSubsResponse.encode(
              message.appserverUserListing,
              writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
            ).ldelim();
          if (
            message.updateRemoveAppserver != null &&
            Object.hasOwnProperty.call(message, 'updateRemoveAppserver')
          )
            writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.updateRemoveAppserver);
          if (
            message.updateNewChannel != null &&
            Object.hasOwnProperty.call(message, 'updateNewChannel')
          )
            $root.api.v1.channel.Channel.encode(
              message.updateNewChannel,
              writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
            ).ldelim();
          if (
            message.updateDeleteChannel != null &&
            Object.hasOwnProperty.call(message, 'updateDeleteChannel')
          )
            $root.api.v1.channel.Channel.encode(
              message.updateDeleteChannel,
              writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.Output();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.appserverListing =
                  $root.api.v1.appserver.GetUserAppserverSubsResponse.decode(
                    reader,
                    reader.uint32()
                  );
                break;
              }
              case 2: {
                message.appserverDetails = $root.api.v1.appserver.GetByIdAppserverResponse.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 3: {
                message.channelListing = $root.api.v1.channel.ListChannelsResponse.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 4: {
                message.updateAddAppserver = $root.api.v1.appserver.Appserver.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 5: {
                message.appserverRolesListing =
                  $root.api.v1.appserver.GetAllAppserverRolesResponse.decode(
                    reader,
                    reader.uint32()
                  );
                break;
              }
              case 6: {
                message.appserverUserListing =
                  $root.api.v1.appserver.GetAllUsersAppserverSubsResponse.decode(
                    reader,
                    reader.uint32()
                  );
                break;
              }
              case 7: {
                message.updateRemoveAppserver = reader.string();
                break;
              }
              case 8: {
                message.updateNewChannel = $root.api.v1.channel.Channel.decode(
                  reader,
                  reader.uint32()
                );
                break;
              }
              case 9: {
                message.updateDeleteChannel = $root.api.v1.channel.Channel.decode(
                  reader,
                  reader.uint32()
                );
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          let properties = {};
          if (message.appserverListing != null && message.hasOwnProperty('appserverListing')) {
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetUserAppserverSubsResponse.verify(
                message.appserverListing
              );
              if (error) return 'appserverListing.' + error;
            }
          }
          if (message.appserverDetails != null && message.hasOwnProperty('appserverDetails')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetByIdAppserverResponse.verify(
                message.appserverDetails
              );
              if (error) return 'appserverDetails.' + error;
            }
          }
          if (message.channelListing != null && message.hasOwnProperty('channelListing')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.channel.ListChannelsResponse.verify(message.channelListing);
              if (error) return 'channelListing.' + error;
            }
          }
          if (message.updateAddAppserver != null && message.hasOwnProperty('updateAddAppserver')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.Appserver.verify(message.updateAddAppserver);
              if (error) return 'updateAddAppserver.' + error;
            }
          }
          if (
            message.appserverRolesListing != null &&
            message.hasOwnProperty('appserverRolesListing')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetAllAppserverRolesResponse.verify(
                message.appserverRolesListing
              );
              if (error) return 'appserverRolesListing.' + error;
            }
          }
          if (
            message.appserverUserListing != null &&
            message.hasOwnProperty('appserverUserListing')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.appserver.GetAllUsersAppserverSubsResponse.verify(
                message.appserverUserListing
              );
              if (error) return 'appserverUserListing.' + error;
            }
          }
          if (
            message.updateRemoveAppserver != null &&
            message.hasOwnProperty('updateRemoveAppserver')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            if (!$util.isString(message.updateRemoveAppserver))
              return 'updateRemoveAppserver: string expected';
          }
          if (message.updateNewChannel != null && message.hasOwnProperty('updateNewChannel')) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.channel.Channel.verify(message.updateNewChannel);
              if (error) return 'updateNewChannel.' + error;
            }
          }
          if (
            message.updateDeleteChannel != null &&
            message.hasOwnProperty('updateDeleteChannel')
          ) {
            if (properties.data === 1) return 'data: multiple values';
            properties.data = 1;
            {
              let error = $root.api.v1.channel.Channel.verify(message.updateDeleteChannel);
              if (error) return 'updateDeleteChannel.' + error;
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
          if (object instanceof $root.api.v1.messages.Output) return object;
          let message = new $root.api.v1.messages.Output();
          if (object.appserverListing != null) {
            if (typeof object.appserverListing !== 'object')
              throw TypeError('.api.v1.messages.Output.appserverListing: object expected');
            message.appserverListing =
              $root.api.v1.appserver.GetUserAppserverSubsResponse.fromObject(
                object.appserverListing
              );
          }
          if (object.appserverDetails != null) {
            if (typeof object.appserverDetails !== 'object')
              throw TypeError('.api.v1.messages.Output.appserverDetails: object expected');
            message.appserverDetails = $root.api.v1.appserver.GetByIdAppserverResponse.fromObject(
              object.appserverDetails
            );
          }
          if (object.channelListing != null) {
            if (typeof object.channelListing !== 'object')
              throw TypeError('.api.v1.messages.Output.channelListing: object expected');
            message.channelListing = $root.api.v1.channel.ListChannelsResponse.fromObject(
              object.channelListing
            );
          }
          if (object.updateAddAppserver != null) {
            if (typeof object.updateAddAppserver !== 'object')
              throw TypeError('.api.v1.messages.Output.updateAddAppserver: object expected');
            message.updateAddAppserver = $root.api.v1.appserver.Appserver.fromObject(
              object.updateAddAppserver
            );
          }
          if (object.appserverRolesListing != null) {
            if (typeof object.appserverRolesListing !== 'object')
              throw TypeError('.api.v1.messages.Output.appserverRolesListing: object expected');
            message.appserverRolesListing =
              $root.api.v1.appserver.GetAllAppserverRolesResponse.fromObject(
                object.appserverRolesListing
              );
          }
          if (object.appserverUserListing != null) {
            if (typeof object.appserverUserListing !== 'object')
              throw TypeError('.api.v1.messages.Output.appserverUserListing: object expected');
            message.appserverUserListing =
              $root.api.v1.appserver.GetAllUsersAppserverSubsResponse.fromObject(
                object.appserverUserListing
              );
          }
          if (object.updateRemoveAppserver != null)
            message.updateRemoveAppserver = String(object.updateRemoveAppserver);
          if (object.updateNewChannel != null) {
            if (typeof object.updateNewChannel !== 'object')
              throw TypeError('.api.v1.messages.Output.updateNewChannel: object expected');
            message.updateNewChannel = $root.api.v1.channel.Channel.fromObject(
              object.updateNewChannel
            );
          }
          if (object.updateDeleteChannel != null) {
            if (typeof object.updateDeleteChannel !== 'object')
              throw TypeError('.api.v1.messages.Output.updateDeleteChannel: object expected');
            message.updateDeleteChannel = $root.api.v1.channel.Channel.fromObject(
              object.updateDeleteChannel
            );
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
          if (!options) options = {};
          let object = {};
          if (message.appserverListing != null && message.hasOwnProperty('appserverListing')) {
            object.appserverListing = $root.api.v1.appserver.GetUserAppserverSubsResponse.toObject(
              message.appserverListing,
              options
            );
            if (options.oneofs) object.data = 'appserverListing';
          }
          if (message.appserverDetails != null && message.hasOwnProperty('appserverDetails')) {
            object.appserverDetails = $root.api.v1.appserver.GetByIdAppserverResponse.toObject(
              message.appserverDetails,
              options
            );
            if (options.oneofs) object.data = 'appserverDetails';
          }
          if (message.channelListing != null && message.hasOwnProperty('channelListing')) {
            object.channelListing = $root.api.v1.channel.ListChannelsResponse.toObject(
              message.channelListing,
              options
            );
            if (options.oneofs) object.data = 'channelListing';
          }
          if (message.updateAddAppserver != null && message.hasOwnProperty('updateAddAppserver')) {
            object.updateAddAppserver = $root.api.v1.appserver.Appserver.toObject(
              message.updateAddAppserver,
              options
            );
            if (options.oneofs) object.data = 'updateAddAppserver';
          }
          if (
            message.appserverRolesListing != null &&
            message.hasOwnProperty('appserverRolesListing')
          ) {
            object.appserverRolesListing =
              $root.api.v1.appserver.GetAllAppserverRolesResponse.toObject(
                message.appserverRolesListing,
                options
              );
            if (options.oneofs) object.data = 'appserverRolesListing';
          }
          if (
            message.appserverUserListing != null &&
            message.hasOwnProperty('appserverUserListing')
          ) {
            object.appserverUserListing =
              $root.api.v1.appserver.GetAllUsersAppserverSubsResponse.toObject(
                message.appserverUserListing,
                options
              );
            if (options.oneofs) object.data = 'appserverUserListing';
          }
          if (
            message.updateRemoveAppserver != null &&
            message.hasOwnProperty('updateRemoveAppserver')
          ) {
            object.updateRemoveAppserver = message.updateRemoveAppserver;
            if (options.oneofs) object.data = 'updateRemoveAppserver';
          }
          if (message.updateNewChannel != null && message.hasOwnProperty('updateNewChannel')) {
            object.updateNewChannel = $root.api.v1.channel.Channel.toObject(
              message.updateNewChannel,
              options
            );
            if (options.oneofs) object.data = 'updateNewChannel';
          }
          if (
            message.updateDeleteChannel != null &&
            message.hasOwnProperty('updateDeleteChannel')
          ) {
            object.updateDeleteChannel = $root.api.v1.channel.Channel.toObject(
              message.updateDeleteChannel,
              options
            );
            if (options.oneofs) object.data = 'updateDeleteChannel';
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.Output';
        };

        return Output;
      })();

      messages.AppserverDetailsRequest = (function () {
        /**
         * Properties of an AppserverDetailsRequest.
         * @memberof api.v1.messages
         * @interface IAppserverDetailsRequest
         * @property {string|null} [id] AppserverDetailsRequest id
         */

        /**
         * Constructs a new AppserverDetailsRequest.
         * @memberof api.v1.messages
         * @classdesc Represents an AppserverDetailsRequest.
         * @implements IAppserverDetailsRequest
         * @constructor
         * @param {api.v1.messages.IAppserverDetailsRequest=} [properties] Properties to set
         */
        function AppserverDetailsRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppserverDetailsRequest id.
         * @member {string} id
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @instance
         */
        AppserverDetailsRequest.prototype.id = '';

        /**
         * Creates a new AppserverDetailsRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {api.v1.messages.IAppserverDetailsRequest=} [properties] Properties to set
         * @returns {api.v1.messages.AppserverDetailsRequest} AppserverDetailsRequest instance
         */
        AppserverDetailsRequest.create = function create(properties) {
          return new AppserverDetailsRequest(properties);
        };

        /**
         * Encodes the specified AppserverDetailsRequest message. Does not implicitly {@link api.v1.messages.AppserverDetailsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {api.v1.messages.IAppserverDetailsRequest} message AppserverDetailsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverDetailsRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          return writer;
        };

        /**
         * Encodes the specified AppserverDetailsRequest message, length delimited. Does not implicitly {@link api.v1.messages.AppserverDetailsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {api.v1.messages.IAppserverDetailsRequest} message AppserverDetailsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppserverDetailsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.messages.AppserverDetailsRequest} AppserverDetailsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverDetailsRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.AppserverDetailsRequest();
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
         * Decodes an AppserverDetailsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.messages.AppserverDetailsRequest} AppserverDetailsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppserverDetailsRequest message.
         * @function verify
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppserverDetailsRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          return null;
        };

        /**
         * Creates an AppserverDetailsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.messages.AppserverDetailsRequest} AppserverDetailsRequest
         */
        AppserverDetailsRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.messages.AppserverDetailsRequest) return object;
          let message = new $root.api.v1.messages.AppserverDetailsRequest();
          if (object.id != null) message.id = String(object.id);
          return message;
        };

        /**
         * Creates a plain object from an AppserverDetailsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {api.v1.messages.AppserverDetailsRequest} message AppserverDetailsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppserverDetailsRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          return object;
        };

        /**
         * Converts this AppserverDetailsRequest to JSON.
         * @function toJSON
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppserverDetailsRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppserverDetailsRequest
         * @function getTypeUrl
         * @memberof api.v1.messages.AppserverDetailsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppserverDetailsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.AppserverDetailsRequest';
        };

        return AppserverDetailsRequest;
      })();

      messages.AppserverListingRequest = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.messages.AppserverListingRequest();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
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
          if (object instanceof $root.api.v1.messages.AppserverListingRequest) return object;
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.messages.AppserverListingRequest';
        };

        return AppserverListingRequest;
      })();

      return messages;
    })();

    v1.channel = (function () {
      /**
       * Namespace channel.
       * @memberof api.v1
       * @namespace
       */
      const channel = {};

      channel.ChannelService = (function () {
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

        (ChannelService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor =
          ChannelService;

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
        Object.defineProperty(
          (ChannelService.prototype.createChannel = function createChannel(request, callback) {
            return this.rpcCall(
              createChannel,
              $root.api.v1.channel.CreateChannelRequest,
              $root.api.v1.channel.CreateChannelResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'CreateChannel' }
        );

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
        Object.defineProperty(
          (ChannelService.prototype.getByIdChannel = function getByIdChannel(request, callback) {
            return this.rpcCall(
              getByIdChannel,
              $root.api.v1.channel.GetByIdChannelRequest,
              $root.api.v1.channel.GetByIdChannelResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'GetByIdChannel' }
        );

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
        Object.defineProperty(
          (ChannelService.prototype.listChannels = function listChannels(request, callback) {
            return this.rpcCall(
              listChannels,
              $root.api.v1.channel.ListChannelsRequest,
              $root.api.v1.channel.ListChannelsResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'ListChannels' }
        );

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
        Object.defineProperty(
          (ChannelService.prototype.deleteChannel = function deleteChannel(request, callback) {
            return this.rpcCall(
              deleteChannel,
              $root.api.v1.channel.DeleteChannelRequest,
              $root.api.v1.channel.DeleteChannelResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'DeleteChannel' }
        );

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

      channel.Channel = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Channel id.
         * @member {string} id
         * @memberof api.v1.channel.Channel
         * @instance
         */
        Channel.prototype.id = '';

        /**
         * Channel name.
         * @member {string} name
         * @memberof api.v1.channel.Channel
         * @instance
         */
        Channel.prototype.name = '';

        /**
         * Channel appserverId.
         * @member {string} appserverId
         * @memberof api.v1.channel.Channel
         * @instance
         */
        Channel.prototype.appserverId = '';

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
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.appserverId);
          if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt'))
            $root.google.protobuf.Timestamp.encode(
              message.createdAt,
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
          if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt'))
            $root.google.protobuf.Timestamp.encode(
              message.updatedAt,
              writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.Channel();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          if (message.name != null && message.hasOwnProperty('name'))
            if (!$util.isString(message.name)) return 'name: string expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
            if (error) return 'createdAt.' + error;
          }
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
            if (error) return 'updatedAt.' + error;
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
          if (object instanceof $root.api.v1.channel.Channel) return object;
          let message = new $root.api.v1.channel.Channel();
          if (object.id != null) message.id = String(object.id);
          if (object.name != null) message.name = String(object.name);
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          if (object.createdAt != null) {
            if (typeof object.createdAt !== 'object')
              throw TypeError('.api.v1.channel.Channel.createdAt: object expected');
            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
          }
          if (object.updatedAt != null) {
            if (typeof object.updatedAt !== 'object')
              throw TypeError('.api.v1.channel.Channel.updatedAt: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.id = '';
            object.name = '';
            object.appserverId = '';
            object.createdAt = null;
            object.updatedAt = null;
          }
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          if (message.createdAt != null && message.hasOwnProperty('createdAt'))
            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.Channel';
        };

        return Channel;
      })();

      channel.CreateChannelRequest = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateChannelRequest name.
         * @member {string} name
         * @memberof api.v1.channel.CreateChannelRequest
         * @instance
         */
        CreateChannelRequest.prototype.name = '';

        /**
         * CreateChannelRequest appserverId.
         * @member {string} appserverId
         * @memberof api.v1.channel.CreateChannelRequest
         * @instance
         */
        CreateChannelRequest.prototype.appserverId = '';

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
          if (!writer) writer = $Writer.create();
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.appserverId);
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.CreateChannelRequest();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.name != null && message.hasOwnProperty('name'))
            if (!$util.isString(message.name)) return 'name: string expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
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
          if (object instanceof $root.api.v1.channel.CreateChannelRequest) return object;
          let message = new $root.api.v1.channel.CreateChannelRequest();
          if (object.name != null) message.name = String(object.name);
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.name = '';
            object.appserverId = '';
          }
          if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.CreateChannelRequest';
        };

        return CreateChannelRequest;
      })();

      channel.GetByIdChannelRequest = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetByIdChannelRequest id.
         * @member {string} id
         * @memberof api.v1.channel.GetByIdChannelRequest
         * @instance
         */
        GetByIdChannelRequest.prototype.id = '';

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
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.GetByIdChannelRequest();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
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
          if (object instanceof $root.api.v1.channel.GetByIdChannelRequest) return object;
          let message = new $root.api.v1.channel.GetByIdChannelRequest();
          if (object.id != null) message.id = String(object.id);
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.GetByIdChannelRequest';
        };

        return GetByIdChannelRequest;
      })();

      channel.ListChannelsRequest = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            $root.google.protobuf.StringValue.encode(
              message.name,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            $root.google.protobuf.StringValue.encode(
              message.appserverId,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.ListChannelsRequest();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.name = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                break;
              }
              case 2: {
                message.appserverId = $root.google.protobuf.StringValue.decode(
                  reader,
                  reader.uint32()
                );
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.name != null && message.hasOwnProperty('name')) {
            let error = $root.google.protobuf.StringValue.verify(message.name);
            if (error) return 'name.' + error;
          }
          if (message.appserverId != null && message.hasOwnProperty('appserverId')) {
            let error = $root.google.protobuf.StringValue.verify(message.appserverId);
            if (error) return 'appserverId.' + error;
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
          if (object instanceof $root.api.v1.channel.ListChannelsRequest) return object;
          let message = new $root.api.v1.channel.ListChannelsRequest();
          if (object.name != null) {
            if (typeof object.name !== 'object')
              throw TypeError('.api.v1.channel.ListChannelsRequest.name: object expected');
            message.name = $root.google.protobuf.StringValue.fromObject(object.name);
          }
          if (object.appserverId != null) {
            if (typeof object.appserverId !== 'object')
              throw TypeError('.api.v1.channel.ListChannelsRequest.appserverId: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.name = null;
            object.appserverId = null;
          }
          if (message.name != null && message.hasOwnProperty('name'))
            object.name = $root.google.protobuf.StringValue.toObject(message.name, options);
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = $root.google.protobuf.StringValue.toObject(
              message.appserverId,
              options
            );
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.ListChannelsRequest';
        };

        return ListChannelsRequest;
      })();

      channel.DeleteChannelRequest = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteChannelRequest id.
         * @member {string} id
         * @memberof api.v1.channel.DeleteChannelRequest
         * @instance
         */
        DeleteChannelRequest.prototype.id = '';

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
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.DeleteChannelRequest();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
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
          if (object instanceof $root.api.v1.channel.DeleteChannelRequest) return object;
          let message = new $root.api.v1.channel.DeleteChannelRequest();
          if (object.id != null) message.id = String(object.id);
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.DeleteChannelRequest';
        };

        return DeleteChannelRequest;
      })();

      channel.CreateChannelResponse = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.channel != null && Object.hasOwnProperty.call(message, 'channel'))
            $root.api.v1.channel.Channel.encode(
              message.channel,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.CreateChannelResponse();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.channel != null && message.hasOwnProperty('channel')) {
            let error = $root.api.v1.channel.Channel.verify(message.channel);
            if (error) return 'channel.' + error;
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
          if (object instanceof $root.api.v1.channel.CreateChannelResponse) return object;
          let message = new $root.api.v1.channel.CreateChannelResponse();
          if (object.channel != null) {
            if (typeof object.channel !== 'object')
              throw TypeError('.api.v1.channel.CreateChannelResponse.channel: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.channel = null;
          if (message.channel != null && message.hasOwnProperty('channel'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.CreateChannelResponse';
        };

        return CreateChannelResponse;
      })();

      channel.GetByIdChannelResponse = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.channel != null && Object.hasOwnProperty.call(message, 'channel'))
            $root.api.v1.channel.Channel.encode(
              message.channel,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.GetByIdChannelResponse();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.channel != null && message.hasOwnProperty('channel')) {
            let error = $root.api.v1.channel.Channel.verify(message.channel);
            if (error) return 'channel.' + error;
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
          if (object instanceof $root.api.v1.channel.GetByIdChannelResponse) return object;
          let message = new $root.api.v1.channel.GetByIdChannelResponse();
          if (object.channel != null) {
            if (typeof object.channel !== 'object')
              throw TypeError('.api.v1.channel.GetByIdChannelResponse.channel: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.channel = null;
          if (message.channel != null && message.hasOwnProperty('channel'))
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.GetByIdChannelResponse';
        };

        return GetByIdChannelResponse;
      })();

      channel.ListChannelsResponse = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
          if (message.channels != null && message.channels.length)
            for (let i = 0; i < message.channels.length; ++i)
              $root.api.v1.channel.Channel.encode(
                message.channels[i],
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
              ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.ListChannelsResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                if (!(message.channels && message.channels.length)) message.channels = [];
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.channels != null && message.hasOwnProperty('channels')) {
            if (!Array.isArray(message.channels)) return 'channels: array expected';
            for (let i = 0; i < message.channels.length; ++i) {
              let error = $root.api.v1.channel.Channel.verify(message.channels[i]);
              if (error) return 'channels.' + error;
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
          if (object instanceof $root.api.v1.channel.ListChannelsResponse) return object;
          let message = new $root.api.v1.channel.ListChannelsResponse();
          if (object.channels) {
            if (!Array.isArray(object.channels))
              throw TypeError('.api.v1.channel.ListChannelsResponse.channels: array expected');
            message.channels = [];
            for (let i = 0; i < object.channels.length; ++i) {
              if (typeof object.channels[i] !== 'object')
                throw TypeError('.api.v1.channel.ListChannelsResponse.channels: object expected');
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
          if (!options) options = {};
          let object = {};
          if (options.arrays || options.defaults) object.channels = [];
          if (message.channels && message.channels.length) {
            object.channels = [];
            for (let j = 0; j < message.channels.length; ++j)
              object.channels[j] = $root.api.v1.channel.Channel.toObject(
                message.channels[j],
                options
              );
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.ListChannelsResponse';
        };

        return ListChannelsResponse;
      })();

      channel.DeleteChannelResponse = (function () {
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
          if (!writer) writer = $Writer.create();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.channel.DeleteChannelResponse();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
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
          if (object instanceof $root.api.v1.channel.DeleteChannelResponse) return object;
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.channel.DeleteChannelResponse';
        };

        return DeleteChannelResponse;
      })();

      return channel;
    })();

    v1.appserver = (function () {
      /**
       * Namespace appserver.
       * @memberof api.v1
       * @namespace
       */
      const appserver = {};

      appserver.AppserverService = (function () {
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

        (AppserverService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor =
          AppserverService;

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
         * Callback as used by {@link api.v1.appserver.AppserverService#createAppserver}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef CreateAppserverCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.CreateAppserverResponse} [response] CreateAppserverResponse
         */

        /**
         * Calls CreateAppserver.
         * @function createAppserver
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverRequest} request CreateAppserverRequest message or plain object
         * @param {api.v1.appserver.AppserverService.CreateAppserverCallback} callback Node-style callback called with the error, if any, and CreateAppserverResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.createAppserver = function createAppserver(
            request,
            callback
          ) {
            return this.rpcCall(
              createAppserver,
              $root.api.v1.appserver.CreateAppserverRequest,
              $root.api.v1.appserver.CreateAppserverResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'CreateAppserver' }
        );

        /**
         * Calls CreateAppserver.
         * @function createAppserver
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverRequest} request CreateAppserverRequest message or plain object
         * @returns {Promise<api.v1.appserver.CreateAppserverResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#getByIdAppserver}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef GetByIdAppserverCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.GetByIdAppserverResponse} [response] GetByIdAppserverResponse
         */

        /**
         * Calls GetByIdAppserver.
         * @function getByIdAppserver
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetByIdAppserverRequest} request GetByIdAppserverRequest message or plain object
         * @param {api.v1.appserver.AppserverService.GetByIdAppserverCallback} callback Node-style callback called with the error, if any, and GetByIdAppserverResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.getByIdAppserver = function getByIdAppserver(
            request,
            callback
          ) {
            return this.rpcCall(
              getByIdAppserver,
              $root.api.v1.appserver.GetByIdAppserverRequest,
              $root.api.v1.appserver.GetByIdAppserverResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'GetByIdAppserver' }
        );

        /**
         * Calls GetByIdAppserver.
         * @function getByIdAppserver
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetByIdAppserverRequest} request GetByIdAppserverRequest message or plain object
         * @returns {Promise<api.v1.appserver.GetByIdAppserverResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#listAppservers}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef ListAppserversCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.ListAppserversResponse} [response] ListAppserversResponse
         */

        /**
         * Calls ListAppservers.
         * @function listAppservers
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IListAppserversRequest} request ListAppserversRequest message or plain object
         * @param {api.v1.appserver.AppserverService.ListAppserversCallback} callback Node-style callback called with the error, if any, and ListAppserversResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.listAppservers = function listAppservers(request, callback) {
            return this.rpcCall(
              listAppservers,
              $root.api.v1.appserver.ListAppserversRequest,
              $root.api.v1.appserver.ListAppserversResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'ListAppservers' }
        );

        /**
         * Calls ListAppservers.
         * @function listAppservers
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IListAppserversRequest} request ListAppserversRequest message or plain object
         * @returns {Promise<api.v1.appserver.ListAppserversResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserver}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef DeleteAppserverCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.DeleteAppserverResponse} [response] DeleteAppserverResponse
         */

        /**
         * Calls DeleteAppserver.
         * @function deleteAppserver
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverRequest} request DeleteAppserverRequest message or plain object
         * @param {api.v1.appserver.AppserverService.DeleteAppserverCallback} callback Node-style callback called with the error, if any, and DeleteAppserverResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.deleteAppserver = function deleteAppserver(
            request,
            callback
          ) {
            return this.rpcCall(
              deleteAppserver,
              $root.api.v1.appserver.DeleteAppserverRequest,
              $root.api.v1.appserver.DeleteAppserverResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'DeleteAppserver' }
        );

        /**
         * Calls DeleteAppserver.
         * @function deleteAppserver
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverRequest} request DeleteAppserverRequest message or plain object
         * @returns {Promise<api.v1.appserver.DeleteAppserverResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#createAppserverSub}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef CreateAppserverSubCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.CreateAppserverSubResponse} [response] CreateAppserverSubResponse
         */

        /**
         * Calls CreateAppserverSub.
         * @function createAppserverSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverSubRequest} request CreateAppserverSubRequest message or plain object
         * @param {api.v1.appserver.AppserverService.CreateAppserverSubCallback} callback Node-style callback called with the error, if any, and CreateAppserverSubResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.createAppserverSub = function createAppserverSub(
            request,
            callback
          ) {
            return this.rpcCall(
              createAppserverSub,
              $root.api.v1.appserver.CreateAppserverSubRequest,
              $root.api.v1.appserver.CreateAppserverSubResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'CreateAppserverSub' }
        );

        /**
         * Calls CreateAppserverSub.
         * @function createAppserverSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverSubRequest} request CreateAppserverSubRequest message or plain object
         * @returns {Promise<api.v1.appserver.CreateAppserverSubResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#getUserAppserverSubs}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef GetUserAppserverSubsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.GetUserAppserverSubsResponse} [response] GetUserAppserverSubsResponse
         */

        /**
         * Calls GetUserAppserverSubs.
         * @function getUserAppserverSubs
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetUserAppserverSubsRequest} request GetUserAppserverSubsRequest message or plain object
         * @param {api.v1.appserver.AppserverService.GetUserAppserverSubsCallback} callback Node-style callback called with the error, if any, and GetUserAppserverSubsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.getUserAppserverSubs = function getUserAppserverSubs(
            request,
            callback
          ) {
            return this.rpcCall(
              getUserAppserverSubs,
              $root.api.v1.appserver.GetUserAppserverSubsRequest,
              $root.api.v1.appserver.GetUserAppserverSubsResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'GetUserAppserverSubs' }
        );

        /**
         * Calls GetUserAppserverSubs.
         * @function getUserAppserverSubs
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetUserAppserverSubsRequest} request GetUserAppserverSubsRequest message or plain object
         * @returns {Promise<api.v1.appserver.GetUserAppserverSubsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#getAllUsersAppserverSubs}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef GetAllUsersAppserverSubsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.GetAllUsersAppserverSubsResponse} [response] GetAllUsersAppserverSubsResponse
         */

        /**
         * Calls GetAllUsersAppserverSubs.
         * @function getAllUsersAppserverSubs
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsRequest} request GetAllUsersAppserverSubsRequest message or plain object
         * @param {api.v1.appserver.AppserverService.GetAllUsersAppserverSubsCallback} callback Node-style callback called with the error, if any, and GetAllUsersAppserverSubsResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.getAllUsersAppserverSubs = function getAllUsersAppserverSubs(
            request,
            callback
          ) {
            return this.rpcCall(
              getAllUsersAppserverSubs,
              $root.api.v1.appserver.GetAllUsersAppserverSubsRequest,
              $root.api.v1.appserver.GetAllUsersAppserverSubsResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'GetAllUsersAppserverSubs' }
        );

        /**
         * Calls GetAllUsersAppserverSubs.
         * @function getAllUsersAppserverSubs
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsRequest} request GetAllUsersAppserverSubsRequest message or plain object
         * @returns {Promise<api.v1.appserver.GetAllUsersAppserverSubsResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserverSub}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef DeleteAppserverSubCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.DeleteAppserverSubResponse} [response] DeleteAppserverSubResponse
         */

        /**
         * Calls DeleteAppserverSub.
         * @function deleteAppserverSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverSubRequest} request DeleteAppserverSubRequest message or plain object
         * @param {api.v1.appserver.AppserverService.DeleteAppserverSubCallback} callback Node-style callback called with the error, if any, and DeleteAppserverSubResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.deleteAppserverSub = function deleteAppserverSub(
            request,
            callback
          ) {
            return this.rpcCall(
              deleteAppserverSub,
              $root.api.v1.appserver.DeleteAppserverSubRequest,
              $root.api.v1.appserver.DeleteAppserverSubResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'DeleteAppserverSub' }
        );

        /**
         * Calls DeleteAppserverSub.
         * @function deleteAppserverSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverSubRequest} request DeleteAppserverSubRequest message or plain object
         * @returns {Promise<api.v1.appserver.DeleteAppserverSubResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#createAppserverRole}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef CreateAppserverRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.CreateAppserverRoleResponse} [response] CreateAppserverRoleResponse
         */

        /**
         * Calls CreateAppserverRole.
         * @function createAppserverRole
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverRoleRequest} request CreateAppserverRoleRequest message or plain object
         * @param {api.v1.appserver.AppserverService.CreateAppserverRoleCallback} callback Node-style callback called with the error, if any, and CreateAppserverRoleResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.createAppserverRole = function createAppserverRole(
            request,
            callback
          ) {
            return this.rpcCall(
              createAppserverRole,
              $root.api.v1.appserver.CreateAppserverRoleRequest,
              $root.api.v1.appserver.CreateAppserverRoleResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'CreateAppserverRole' }
        );

        /**
         * Calls CreateAppserverRole.
         * @function createAppserverRole
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverRoleRequest} request CreateAppserverRoleRequest message or plain object
         * @returns {Promise<api.v1.appserver.CreateAppserverRoleResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#getAllAppserverRoles}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef GetAllAppserverRolesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.GetAllAppserverRolesResponse} [response] GetAllAppserverRolesResponse
         */

        /**
         * Calls GetAllAppserverRoles.
         * @function getAllAppserverRoles
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetAllAppserverRolesRequest} request GetAllAppserverRolesRequest message or plain object
         * @param {api.v1.appserver.AppserverService.GetAllAppserverRolesCallback} callback Node-style callback called with the error, if any, and GetAllAppserverRolesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.getAllAppserverRoles = function getAllAppserverRoles(
            request,
            callback
          ) {
            return this.rpcCall(
              getAllAppserverRoles,
              $root.api.v1.appserver.GetAllAppserverRolesRequest,
              $root.api.v1.appserver.GetAllAppserverRolesResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'GetAllAppserverRoles' }
        );

        /**
         * Calls GetAllAppserverRoles.
         * @function getAllAppserverRoles
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IGetAllAppserverRolesRequest} request GetAllAppserverRolesRequest message or plain object
         * @returns {Promise<api.v1.appserver.GetAllAppserverRolesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserverRole}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef DeleteAppserverRoleCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.DeleteAppserverRoleResponse} [response] DeleteAppserverRoleResponse
         */

        /**
         * Calls DeleteAppserverRole.
         * @function deleteAppserverRole
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverRoleRequest} request DeleteAppserverRoleRequest message or plain object
         * @param {api.v1.appserver.AppserverService.DeleteAppserverRoleCallback} callback Node-style callback called with the error, if any, and DeleteAppserverRoleResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.deleteAppserverRole = function deleteAppserverRole(
            request,
            callback
          ) {
            return this.rpcCall(
              deleteAppserverRole,
              $root.api.v1.appserver.DeleteAppserverRoleRequest,
              $root.api.v1.appserver.DeleteAppserverRoleResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'DeleteAppserverRole' }
        );

        /**
         * Calls DeleteAppserverRole.
         * @function deleteAppserverRole
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverRoleRequest} request DeleteAppserverRoleRequest message or plain object
         * @returns {Promise<api.v1.appserver.DeleteAppserverRoleResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#createAppserverRoleSub}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef CreateAppserverRoleSubCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.CreateAppserverRoleSubResponse} [response] CreateAppserverRoleSubResponse
         */

        /**
         * Calls CreateAppserverRoleSub.
         * @function createAppserverRoleSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverRoleSubRequest} request CreateAppserverRoleSubRequest message or plain object
         * @param {api.v1.appserver.AppserverService.CreateAppserverRoleSubCallback} callback Node-style callback called with the error, if any, and CreateAppserverRoleSubResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.createAppserverRoleSub = function createAppserverRoleSub(
            request,
            callback
          ) {
            return this.rpcCall(
              createAppserverRoleSub,
              $root.api.v1.appserver.CreateAppserverRoleSubRequest,
              $root.api.v1.appserver.CreateAppserverRoleSubResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'CreateAppserverRoleSub' }
        );

        /**
         * Calls CreateAppserverRoleSub.
         * @function createAppserverRoleSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.ICreateAppserverRoleSubRequest} request CreateAppserverRoleSubRequest message or plain object
         * @returns {Promise<api.v1.appserver.CreateAppserverRoleSubResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link api.v1.appserver.AppserverService#deleteAppserverRoleSub}.
         * @memberof api.v1.appserver.AppserverService
         * @typedef DeleteAppserverRoleSubCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {api.v1.appserver.DeleteAppserverRoleSubResponse} [response] DeleteAppserverRoleSubResponse
         */

        /**
         * Calls DeleteAppserverRoleSub.
         * @function deleteAppserverRoleSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverRoleSubRequest} request DeleteAppserverRoleSubRequest message or plain object
         * @param {api.v1.appserver.AppserverService.DeleteAppserverRoleSubCallback} callback Node-style callback called with the error, if any, and DeleteAppserverRoleSubResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(
          (AppserverService.prototype.deleteAppserverRoleSub = function deleteAppserverRoleSub(
            request,
            callback
          ) {
            return this.rpcCall(
              deleteAppserverRoleSub,
              $root.api.v1.appserver.DeleteAppserverRoleSubRequest,
              $root.api.v1.appserver.DeleteAppserverRoleSubResponse,
              request,
              callback
            );
          }),
          'name',
          { value: 'DeleteAppserverRoleSub' }
        );

        /**
         * Calls DeleteAppserverRoleSub.
         * @function deleteAppserverRoleSub
         * @memberof api.v1.appserver.AppserverService
         * @instance
         * @param {api.v1.appserver.IDeleteAppserverRoleSubRequest} request DeleteAppserverRoleSubRequest message or plain object
         * @returns {Promise<api.v1.appserver.DeleteAppserverRoleSubResponse>} Promise
         * @variation 2
         */

        return AppserverService;
      })();

      appserver.Appserver = (function () {
        /**
         * Properties of an Appserver.
         * @memberof api.v1.appserver
         * @interface IAppserver
         * @property {string|null} [id] Appserver id
         * @property {string|null} [name] Appserver name
         * @property {boolean|null} [isOwner] Appserver isOwner
         * @property {google.protobuf.ITimestamp|null} [createdAt] Appserver createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Appserver updatedAt
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
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Appserver id.
         * @member {string} id
         * @memberof api.v1.appserver.Appserver
         * @instance
         */
        Appserver.prototype.id = '';

        /**
         * Appserver name.
         * @member {string} name
         * @memberof api.v1.appserver.Appserver
         * @instance
         */
        Appserver.prototype.name = '';

        /**
         * Appserver isOwner.
         * @member {boolean} isOwner
         * @memberof api.v1.appserver.Appserver
         * @instance
         */
        Appserver.prototype.isOwner = false;

        /**
         * Appserver createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof api.v1.appserver.Appserver
         * @instance
         */
        Appserver.prototype.createdAt = null;

        /**
         * Appserver updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof api.v1.appserver.Appserver
         * @instance
         */
        Appserver.prototype.updatedAt = null;

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
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
          if (message.isOwner != null && Object.hasOwnProperty.call(message, 'isOwner'))
            writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.isOwner);
          if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt'))
            $root.google.protobuf.Timestamp.encode(
              message.createdAt,
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
          if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt'))
            $root.google.protobuf.Timestamp.encode(
              message.updatedAt,
              writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
            ).ldelim();
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
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.Appserver();
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
                message.isOwner = reader.bool();
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
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          if (message.name != null && message.hasOwnProperty('name'))
            if (!$util.isString(message.name)) return 'name: string expected';
          if (message.isOwner != null && message.hasOwnProperty('isOwner'))
            if (typeof message.isOwner !== 'boolean') return 'isOwner: boolean expected';
          if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
            if (error) return 'createdAt.' + error;
          }
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
            if (error) return 'updatedAt.' + error;
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
          if (object instanceof $root.api.v1.appserver.Appserver) return object;
          let message = new $root.api.v1.appserver.Appserver();
          if (object.id != null) message.id = String(object.id);
          if (object.name != null) message.name = String(object.name);
          if (object.isOwner != null) message.isOwner = Boolean(object.isOwner);
          if (object.createdAt != null) {
            if (typeof object.createdAt !== 'object')
              throw TypeError('.api.v1.appserver.Appserver.createdAt: object expected');
            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
          }
          if (object.updatedAt != null) {
            if (typeof object.updatedAt !== 'object')
              throw TypeError('.api.v1.appserver.Appserver.updatedAt: object expected');
            message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
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
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.id = '';
            object.name = '';
            object.isOwner = false;
            object.createdAt = null;
            object.updatedAt = null;
          }
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
          if (message.isOwner != null && message.hasOwnProperty('isOwner'))
            object.isOwner = message.isOwner;
          if (message.createdAt != null && message.hasOwnProperty('createdAt'))
            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
            object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
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
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.Appserver';
        };

        return Appserver;
      })();

      appserver.AppserverSub = (function () {
        /**
         * Properties of an AppserverSub.
         * @memberof api.v1.appserver
         * @interface IAppserverSub
         * @property {string|null} [id] AppserverSub id
         * @property {string|null} [appserverId] AppserverSub appserverId
         * @property {google.protobuf.ITimestamp|null} [createdAt] AppserverSub createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] AppserverSub updatedAt
         */

        /**
         * Constructs a new AppserverSub.
         * @memberof api.v1.appserver
         * @classdesc Represents an AppserverSub.
         * @implements IAppserverSub
         * @constructor
         * @param {api.v1.appserver.IAppserverSub=} [properties] Properties to set
         */
        function AppserverSub(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppserverSub id.
         * @member {string} id
         * @memberof api.v1.appserver.AppserverSub
         * @instance
         */
        AppserverSub.prototype.id = '';

        /**
         * AppserverSub appserverId.
         * @member {string} appserverId
         * @memberof api.v1.appserver.AppserverSub
         * @instance
         */
        AppserverSub.prototype.appserverId = '';

        /**
         * AppserverSub createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof api.v1.appserver.AppserverSub
         * @instance
         */
        AppserverSub.prototype.createdAt = null;

        /**
         * AppserverSub updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof api.v1.appserver.AppserverSub
         * @instance
         */
        AppserverSub.prototype.updatedAt = null;

        /**
         * Creates a new AppserverSub instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {api.v1.appserver.IAppserverSub=} [properties] Properties to set
         * @returns {api.v1.appserver.AppserverSub} AppserverSub instance
         */
        AppserverSub.create = function create(properties) {
          return new AppserverSub(properties);
        };

        /**
         * Encodes the specified AppserverSub message. Does not implicitly {@link api.v1.appserver.AppserverSub.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {api.v1.appserver.IAppserverSub} message AppserverSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverSub.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.appserverId);
          if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt'))
            $root.google.protobuf.Timestamp.encode(
              message.createdAt,
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
            ).ldelim();
          if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt'))
            $root.google.protobuf.Timestamp.encode(
              message.updatedAt,
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified AppserverSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverSub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {api.v1.appserver.IAppserverSub} message AppserverSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverSub.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppserverSub message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.AppserverSub} AppserverSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverSub.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.AppserverSub();
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
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.AppserverSub} AppserverSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverSub.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppserverSub message.
         * @function verify
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppserverSub.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
            if (error) return 'createdAt.' + error;
          }
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
            if (error) return 'updatedAt.' + error;
          }
          return null;
        };

        /**
         * Creates an AppserverSub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.AppserverSub} AppserverSub
         */
        AppserverSub.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.AppserverSub) return object;
          let message = new $root.api.v1.appserver.AppserverSub();
          if (object.id != null) message.id = String(object.id);
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          if (object.createdAt != null) {
            if (typeof object.createdAt !== 'object')
              throw TypeError('.api.v1.appserver.AppserverSub.createdAt: object expected');
            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
          }
          if (object.updatedAt != null) {
            if (typeof object.updatedAt !== 'object')
              throw TypeError('.api.v1.appserver.AppserverSub.updatedAt: object expected');
            message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
          }
          return message;
        };

        /**
         * Creates a plain object from an AppserverSub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {api.v1.appserver.AppserverSub} message AppserverSub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppserverSub.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.id = '';
            object.appserverId = '';
            object.createdAt = null;
            object.updatedAt = null;
          }
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          if (message.createdAt != null && message.hasOwnProperty('createdAt'))
            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
            object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
          return object;
        };

        /**
         * Converts this AppserverSub to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.AppserverSub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppserverSub.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppserverSub
         * @function getTypeUrl
         * @memberof api.v1.appserver.AppserverSub
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppserverSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.AppserverSub';
        };

        return AppserverSub;
      })();

      appserver.AppserverAndSub = (function () {
        /**
         * Properties of an AppserverAndSub.
         * @memberof api.v1.appserver
         * @interface IAppserverAndSub
         * @property {string|null} [subId] AppserverAndSub subId
         * @property {api.v1.appserver.IAppserver|null} [appserver] AppserverAndSub appserver
         */

        /**
         * Constructs a new AppserverAndSub.
         * @memberof api.v1.appserver
         * @classdesc Represents an AppserverAndSub.
         * @implements IAppserverAndSub
         * @constructor
         * @param {api.v1.appserver.IAppserverAndSub=} [properties] Properties to set
         */
        function AppserverAndSub(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppserverAndSub subId.
         * @member {string} subId
         * @memberof api.v1.appserver.AppserverAndSub
         * @instance
         */
        AppserverAndSub.prototype.subId = '';

        /**
         * AppserverAndSub appserver.
         * @member {api.v1.appserver.IAppserver|null|undefined} appserver
         * @memberof api.v1.appserver.AppserverAndSub
         * @instance
         */
        AppserverAndSub.prototype.appserver = null;

        /**
         * Creates a new AppserverAndSub instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {api.v1.appserver.IAppserverAndSub=} [properties] Properties to set
         * @returns {api.v1.appserver.AppserverAndSub} AppserverAndSub instance
         */
        AppserverAndSub.create = function create(properties) {
          return new AppserverAndSub(properties);
        };

        /**
         * Encodes the specified AppserverAndSub message. Does not implicitly {@link api.v1.appserver.AppserverAndSub.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {api.v1.appserver.IAppserverAndSub} message AppserverAndSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverAndSub.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.subId != null && Object.hasOwnProperty.call(message, 'subId'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.subId);
          if (message.appserver != null && Object.hasOwnProperty.call(message, 'appserver'))
            $root.api.v1.appserver.Appserver.encode(
              message.appserver,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified AppserverAndSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverAndSub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {api.v1.appserver.IAppserverAndSub} message AppserverAndSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverAndSub.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppserverAndSub message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.AppserverAndSub} AppserverAndSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverAndSub.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.AppserverAndSub();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.subId = reader.string();
                break;
              }
              case 2: {
                message.appserver = $root.api.v1.appserver.Appserver.decode(
                  reader,
                  reader.uint32()
                );
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
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.AppserverAndSub} AppserverAndSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverAndSub.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppserverAndSub message.
         * @function verify
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppserverAndSub.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.subId != null && message.hasOwnProperty('subId'))
            if (!$util.isString(message.subId)) return 'subId: string expected';
          if (message.appserver != null && message.hasOwnProperty('appserver')) {
            let error = $root.api.v1.appserver.Appserver.verify(message.appserver);
            if (error) return 'appserver.' + error;
          }
          return null;
        };

        /**
         * Creates an AppserverAndSub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.AppserverAndSub} AppserverAndSub
         */
        AppserverAndSub.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.AppserverAndSub) return object;
          let message = new $root.api.v1.appserver.AppserverAndSub();
          if (object.subId != null) message.subId = String(object.subId);
          if (object.appserver != null) {
            if (typeof object.appserver !== 'object')
              throw TypeError('.api.v1.appserver.AppserverAndSub.appserver: object expected');
            message.appserver = $root.api.v1.appserver.Appserver.fromObject(object.appserver);
          }
          return message;
        };

        /**
         * Creates a plain object from an AppserverAndSub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {api.v1.appserver.AppserverAndSub} message AppserverAndSub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppserverAndSub.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.subId = '';
            object.appserver = null;
          }
          if (message.subId != null && message.hasOwnProperty('subId'))
            object.subId = message.subId;
          if (message.appserver != null && message.hasOwnProperty('appserver'))
            object.appserver = $root.api.v1.appserver.Appserver.toObject(
              message.appserver,
              options
            );
          return object;
        };

        /**
         * Converts this AppserverAndSub to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.AppserverAndSub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppserverAndSub.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppserverAndSub
         * @function getTypeUrl
         * @memberof api.v1.appserver.AppserverAndSub
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppserverAndSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.AppserverAndSub';
        };

        return AppserverAndSub;
      })();

      appserver.AppuserAndSub = (function () {
        /**
         * Properties of an AppuserAndSub.
         * @memberof api.v1.appserver
         * @interface IAppuserAndSub
         * @property {string|null} [subId] AppuserAndSub subId
         * @property {v1.appuser.IAppuser|null} [appuser] AppuserAndSub appuser
         */

        /**
         * Constructs a new AppuserAndSub.
         * @memberof api.v1.appserver
         * @classdesc Represents an AppuserAndSub.
         * @implements IAppuserAndSub
         * @constructor
         * @param {api.v1.appserver.IAppuserAndSub=} [properties] Properties to set
         */
        function AppuserAndSub(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppuserAndSub subId.
         * @member {string} subId
         * @memberof api.v1.appserver.AppuserAndSub
         * @instance
         */
        AppuserAndSub.prototype.subId = '';

        /**
         * AppuserAndSub appuser.
         * @member {v1.appuser.IAppuser|null|undefined} appuser
         * @memberof api.v1.appserver.AppuserAndSub
         * @instance
         */
        AppuserAndSub.prototype.appuser = null;

        /**
         * Creates a new AppuserAndSub instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {api.v1.appserver.IAppuserAndSub=} [properties] Properties to set
         * @returns {api.v1.appserver.AppuserAndSub} AppuserAndSub instance
         */
        AppuserAndSub.create = function create(properties) {
          return new AppuserAndSub(properties);
        };

        /**
         * Encodes the specified AppuserAndSub message. Does not implicitly {@link api.v1.appserver.AppuserAndSub.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {api.v1.appserver.IAppuserAndSub} message AppuserAndSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppuserAndSub.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.subId != null && Object.hasOwnProperty.call(message, 'subId'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.subId);
          if (message.appuser != null && Object.hasOwnProperty.call(message, 'appuser'))
            $root.v1.appuser.Appuser.encode(
              message.appuser,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified AppuserAndSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppuserAndSub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {api.v1.appserver.IAppuserAndSub} message AppuserAndSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppuserAndSub.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppuserAndSub message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.AppuserAndSub} AppuserAndSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppuserAndSub.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.AppuserAndSub();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.subId = reader.string();
                break;
              }
              case 2: {
                message.appuser = $root.v1.appuser.Appuser.decode(reader, reader.uint32());
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
         * Decodes an AppuserAndSub message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.AppuserAndSub} AppuserAndSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppuserAndSub.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppuserAndSub message.
         * @function verify
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppuserAndSub.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.subId != null && message.hasOwnProperty('subId'))
            if (!$util.isString(message.subId)) return 'subId: string expected';
          if (message.appuser != null && message.hasOwnProperty('appuser')) {
            let error = $root.v1.appuser.Appuser.verify(message.appuser);
            if (error) return 'appuser.' + error;
          }
          return null;
        };

        /**
         * Creates an AppuserAndSub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.AppuserAndSub} AppuserAndSub
         */
        AppuserAndSub.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.AppuserAndSub) return object;
          let message = new $root.api.v1.appserver.AppuserAndSub();
          if (object.subId != null) message.subId = String(object.subId);
          if (object.appuser != null) {
            if (typeof object.appuser !== 'object')
              throw TypeError('.api.v1.appserver.AppuserAndSub.appuser: object expected');
            message.appuser = $root.v1.appuser.Appuser.fromObject(object.appuser);
          }
          return message;
        };

        /**
         * Creates a plain object from an AppuserAndSub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {api.v1.appserver.AppuserAndSub} message AppuserAndSub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppuserAndSub.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.subId = '';
            object.appuser = null;
          }
          if (message.subId != null && message.hasOwnProperty('subId'))
            object.subId = message.subId;
          if (message.appuser != null && message.hasOwnProperty('appuser'))
            object.appuser = $root.v1.appuser.Appuser.toObject(message.appuser, options);
          return object;
        };

        /**
         * Converts this AppuserAndSub to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.AppuserAndSub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppuserAndSub.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppuserAndSub
         * @function getTypeUrl
         * @memberof api.v1.appserver.AppuserAndSub
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppuserAndSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.AppuserAndSub';
        };

        return AppuserAndSub;
      })();

      appserver.AppserverRole = (function () {
        /**
         * Properties of an AppserverRole.
         * @memberof api.v1.appserver
         * @interface IAppserverRole
         * @property {string|null} [id] AppserverRole id
         * @property {string|null} [name] AppserverRole name
         * @property {string|null} [appserverId] AppserverRole appserverId
         * @property {google.protobuf.ITimestamp|null} [createdAt] AppserverRole createdAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] AppserverRole updatedAt
         */

        /**
         * Constructs a new AppserverRole.
         * @memberof api.v1.appserver
         * @classdesc Represents an AppserverRole.
         * @implements IAppserverRole
         * @constructor
         * @param {api.v1.appserver.IAppserverRole=} [properties] Properties to set
         */
        function AppserverRole(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppserverRole id.
         * @member {string} id
         * @memberof api.v1.appserver.AppserverRole
         * @instance
         */
        AppserverRole.prototype.id = '';

        /**
         * AppserverRole name.
         * @member {string} name
         * @memberof api.v1.appserver.AppserverRole
         * @instance
         */
        AppserverRole.prototype.name = '';

        /**
         * AppserverRole appserverId.
         * @member {string} appserverId
         * @memberof api.v1.appserver.AppserverRole
         * @instance
         */
        AppserverRole.prototype.appserverId = '';

        /**
         * AppserverRole createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof api.v1.appserver.AppserverRole
         * @instance
         */
        AppserverRole.prototype.createdAt = null;

        /**
         * AppserverRole updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof api.v1.appserver.AppserverRole
         * @instance
         */
        AppserverRole.prototype.updatedAt = null;

        /**
         * Creates a new AppserverRole instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {api.v1.appserver.IAppserverRole=} [properties] Properties to set
         * @returns {api.v1.appserver.AppserverRole} AppserverRole instance
         */
        AppserverRole.create = function create(properties) {
          return new AppserverRole(properties);
        };

        /**
         * Encodes the specified AppserverRole message. Does not implicitly {@link api.v1.appserver.AppserverRole.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {api.v1.appserver.IAppserverRole} message AppserverRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverRole.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.appserverId);
          if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt'))
            $root.google.protobuf.Timestamp.encode(
              message.createdAt,
              writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
            ).ldelim();
          if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt'))
            $root.google.protobuf.Timestamp.encode(
              message.updatedAt,
              writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified AppserverRole message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {api.v1.appserver.IAppserverRole} message AppserverRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverRole.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppserverRole message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.AppserverRole} AppserverRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverRole.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.AppserverRole();
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
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.AppserverRole} AppserverRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverRole.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppserverRole message.
         * @function verify
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppserverRole.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          if (message.name != null && message.hasOwnProperty('name'))
            if (!$util.isString(message.name)) return 'name: string expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
            if (error) return 'createdAt.' + error;
          }
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
            let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
            if (error) return 'updatedAt.' + error;
          }
          return null;
        };

        /**
         * Creates an AppserverRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.AppserverRole} AppserverRole
         */
        AppserverRole.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.AppserverRole) return object;
          let message = new $root.api.v1.appserver.AppserverRole();
          if (object.id != null) message.id = String(object.id);
          if (object.name != null) message.name = String(object.name);
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          if (object.createdAt != null) {
            if (typeof object.createdAt !== 'object')
              throw TypeError('.api.v1.appserver.AppserverRole.createdAt: object expected');
            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
          }
          if (object.updatedAt != null) {
            if (typeof object.updatedAt !== 'object')
              throw TypeError('.api.v1.appserver.AppserverRole.updatedAt: object expected');
            message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
          }
          return message;
        };

        /**
         * Creates a plain object from an AppserverRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {api.v1.appserver.AppserverRole} message AppserverRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppserverRole.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.id = '';
            object.name = '';
            object.appserverId = '';
            object.createdAt = null;
            object.updatedAt = null;
          }
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          if (message.createdAt != null && message.hasOwnProperty('createdAt'))
            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
          if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
            object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
          return object;
        };

        /**
         * Converts this AppserverRole to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.AppserverRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppserverRole.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppserverRole
         * @function getTypeUrl
         * @memberof api.v1.appserver.AppserverRole
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppserverRole.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.AppserverRole';
        };

        return AppserverRole;
      })();

      appserver.AppserverRoleSub = (function () {
        /**
         * Properties of an AppserverRoleSub.
         * @memberof api.v1.appserver
         * @interface IAppserverRoleSub
         * @property {string|null} [id] AppserverRoleSub id
         * @property {string|null} [appserverRoleId] AppserverRoleSub appserverRoleId
         * @property {string|null} [appserverSubId] AppserverRoleSub appserverSubId
         */

        /**
         * Constructs a new AppserverRoleSub.
         * @memberof api.v1.appserver
         * @classdesc Represents an AppserverRoleSub.
         * @implements IAppserverRoleSub
         * @constructor
         * @param {api.v1.appserver.IAppserverRoleSub=} [properties] Properties to set
         */
        function AppserverRoleSub(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppserverRoleSub id.
         * @member {string} id
         * @memberof api.v1.appserver.AppserverRoleSub
         * @instance
         */
        AppserverRoleSub.prototype.id = '';

        /**
         * AppserverRoleSub appserverRoleId.
         * @member {string} appserverRoleId
         * @memberof api.v1.appserver.AppserverRoleSub
         * @instance
         */
        AppserverRoleSub.prototype.appserverRoleId = '';

        /**
         * AppserverRoleSub appserverSubId.
         * @member {string} appserverSubId
         * @memberof api.v1.appserver.AppserverRoleSub
         * @instance
         */
        AppserverRoleSub.prototype.appserverSubId = '';

        /**
         * Creates a new AppserverRoleSub instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {api.v1.appserver.IAppserverRoleSub=} [properties] Properties to set
         * @returns {api.v1.appserver.AppserverRoleSub} AppserverRoleSub instance
         */
        AppserverRoleSub.create = function create(properties) {
          return new AppserverRoleSub(properties);
        };

        /**
         * Encodes the specified AppserverRoleSub message. Does not implicitly {@link api.v1.appserver.AppserverRoleSub.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {api.v1.appserver.IAppserverRoleSub} message AppserverRoleSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverRoleSub.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          if (
            message.appserverRoleId != null &&
            Object.hasOwnProperty.call(message, 'appserverRoleId')
          )
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.appserverRoleId);
          if (
            message.appserverSubId != null &&
            Object.hasOwnProperty.call(message, 'appserverSubId')
          )
            writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.appserverSubId);
          return writer;
        };

        /**
         * Encodes the specified AppserverRoleSub message, length delimited. Does not implicitly {@link api.v1.appserver.AppserverRoleSub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {api.v1.appserver.IAppserverRoleSub} message AppserverRoleSub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppserverRoleSub.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppserverRoleSub message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.AppserverRoleSub} AppserverRoleSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverRoleSub.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.AppserverRoleSub();
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
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.AppserverRoleSub} AppserverRoleSub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppserverRoleSub.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppserverRoleSub message.
         * @function verify
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppserverRoleSub.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          if (message.appserverRoleId != null && message.hasOwnProperty('appserverRoleId'))
            if (!$util.isString(message.appserverRoleId)) return 'appserverRoleId: string expected';
          if (message.appserverSubId != null && message.hasOwnProperty('appserverSubId'))
            if (!$util.isString(message.appserverSubId)) return 'appserverSubId: string expected';
          return null;
        };

        /**
         * Creates an AppserverRoleSub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.AppserverRoleSub} AppserverRoleSub
         */
        AppserverRoleSub.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.AppserverRoleSub) return object;
          let message = new $root.api.v1.appserver.AppserverRoleSub();
          if (object.id != null) message.id = String(object.id);
          if (object.appserverRoleId != null)
            message.appserverRoleId = String(object.appserverRoleId);
          if (object.appserverSubId != null) message.appserverSubId = String(object.appserverSubId);
          return message;
        };

        /**
         * Creates a plain object from an AppserverRoleSub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {api.v1.appserver.AppserverRoleSub} message AppserverRoleSub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppserverRoleSub.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.id = '';
            object.appserverRoleId = '';
            object.appserverSubId = '';
          }
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          if (message.appserverRoleId != null && message.hasOwnProperty('appserverRoleId'))
            object.appserverRoleId = message.appserverRoleId;
          if (message.appserverSubId != null && message.hasOwnProperty('appserverSubId'))
            object.appserverSubId = message.appserverSubId;
          return object;
        };

        /**
         * Converts this AppserverRoleSub to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.AppserverRoleSub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppserverRoleSub.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppserverRoleSub
         * @function getTypeUrl
         * @memberof api.v1.appserver.AppserverRoleSub
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppserverRoleSub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.AppserverRoleSub';
        };

        return AppserverRoleSub;
      })();

      appserver.CreateAppserverRequest = (function () {
        /**
         * Properties of a CreateAppserverRequest.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverRequest
         * @property {string|null} [name] CreateAppserverRequest name
         */

        /**
         * Constructs a new CreateAppserverRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverRequest.
         * @implements ICreateAppserverRequest
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverRequest=} [properties] Properties to set
         */
        function CreateAppserverRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverRequest name.
         * @member {string} name
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @instance
         */
        CreateAppserverRequest.prototype.name = '';

        /**
         * Creates a new CreateAppserverRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverRequest} CreateAppserverRequest instance
         */
        CreateAppserverRequest.create = function create(properties) {
          return new CreateAppserverRequest(properties);
        };

        /**
         * Encodes the specified CreateAppserverRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRequest} message CreateAppserverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRequest} message CreateAppserverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverRequest} CreateAppserverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverRequest();
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
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverRequest} CreateAppserverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverRequest message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.name != null && message.hasOwnProperty('name'))
            if (!$util.isString(message.name)) return 'name: string expected';
          return null;
        };

        /**
         * Creates a CreateAppserverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverRequest} CreateAppserverRequest
         */
        CreateAppserverRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverRequest) return object;
          let message = new $root.api.v1.appserver.CreateAppserverRequest();
          if (object.name != null) message.name = String(object.name);
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {api.v1.appserver.CreateAppserverRequest} message CreateAppserverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.name = '';
          if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
          return object;
        };

        /**
         * Converts this CreateAppserverRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverRequest';
        };

        return CreateAppserverRequest;
      })();

      appserver.CreateAppserverResponse = (function () {
        /**
         * Properties of a CreateAppserverResponse.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverResponse
         * @property {api.v1.appserver.IAppserver|null} [appserver] CreateAppserverResponse appserver
         */

        /**
         * Constructs a new CreateAppserverResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverResponse.
         * @implements ICreateAppserverResponse
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverResponse=} [properties] Properties to set
         */
        function CreateAppserverResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverResponse appserver.
         * @member {api.v1.appserver.IAppserver|null|undefined} appserver
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @instance
         */
        CreateAppserverResponse.prototype.appserver = null;

        /**
         * Creates a new CreateAppserverResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverResponse} CreateAppserverResponse instance
         */
        CreateAppserverResponse.create = function create(properties) {
          return new CreateAppserverResponse(properties);
        };

        /**
         * Encodes the specified CreateAppserverResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverResponse} message CreateAppserverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserver != null && Object.hasOwnProperty.call(message, 'appserver'))
            $root.api.v1.appserver.Appserver.encode(
              message.appserver,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverResponse} message CreateAppserverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverResponse} CreateAppserverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.appserver = $root.api.v1.appserver.Appserver.decode(
                  reader,
                  reader.uint32()
                );
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
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverResponse} CreateAppserverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverResponse message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserver != null && message.hasOwnProperty('appserver')) {
            let error = $root.api.v1.appserver.Appserver.verify(message.appserver);
            if (error) return 'appserver.' + error;
          }
          return null;
        };

        /**
         * Creates a CreateAppserverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverResponse} CreateAppserverResponse
         */
        CreateAppserverResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverResponse) return object;
          let message = new $root.api.v1.appserver.CreateAppserverResponse();
          if (object.appserver != null) {
            if (typeof object.appserver !== 'object')
              throw TypeError(
                '.api.v1.appserver.CreateAppserverResponse.appserver: object expected'
              );
            message.appserver = $root.api.v1.appserver.Appserver.fromObject(object.appserver);
          }
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {api.v1.appserver.CreateAppserverResponse} message CreateAppserverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserver = null;
          if (message.appserver != null && message.hasOwnProperty('appserver'))
            object.appserver = $root.api.v1.appserver.Appserver.toObject(
              message.appserver,
              options
            );
          return object;
        };

        /**
         * Converts this CreateAppserverResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverResponse';
        };

        return CreateAppserverResponse;
      })();

      appserver.GetByIdAppserverRequest = (function () {
        /**
         * Properties of a GetByIdAppserverRequest.
         * @memberof api.v1.appserver
         * @interface IGetByIdAppserverRequest
         * @property {string|null} [id] GetByIdAppserverRequest id
         */

        /**
         * Constructs a new GetByIdAppserverRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetByIdAppserverRequest.
         * @implements IGetByIdAppserverRequest
         * @constructor
         * @param {api.v1.appserver.IGetByIdAppserverRequest=} [properties] Properties to set
         */
        function GetByIdAppserverRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetByIdAppserverRequest id.
         * @member {string} id
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @instance
         */
        GetByIdAppserverRequest.prototype.id = '';

        /**
         * Creates a new GetByIdAppserverRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {api.v1.appserver.IGetByIdAppserverRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.GetByIdAppserverRequest} GetByIdAppserverRequest instance
         */
        GetByIdAppserverRequest.create = function create(properties) {
          return new GetByIdAppserverRequest(properties);
        };

        /**
         * Encodes the specified GetByIdAppserverRequest message. Does not implicitly {@link api.v1.appserver.GetByIdAppserverRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {api.v1.appserver.IGetByIdAppserverRequest} message GetByIdAppserverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetByIdAppserverRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          return writer;
        };

        /**
         * Encodes the specified GetByIdAppserverRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdAppserverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {api.v1.appserver.IGetByIdAppserverRequest} message GetByIdAppserverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetByIdAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetByIdAppserverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetByIdAppserverRequest} GetByIdAppserverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetByIdAppserverRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetByIdAppserverRequest();
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
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetByIdAppserverRequest} GetByIdAppserverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetByIdAppserverRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetByIdAppserverRequest message.
         * @function verify
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetByIdAppserverRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          return null;
        };

        /**
         * Creates a GetByIdAppserverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetByIdAppserverRequest} GetByIdAppserverRequest
         */
        GetByIdAppserverRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetByIdAppserverRequest) return object;
          let message = new $root.api.v1.appserver.GetByIdAppserverRequest();
          if (object.id != null) message.id = String(object.id);
          return message;
        };

        /**
         * Creates a plain object from a GetByIdAppserverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {api.v1.appserver.GetByIdAppserverRequest} message GetByIdAppserverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetByIdAppserverRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          return object;
        };

        /**
         * Converts this GetByIdAppserverRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetByIdAppserverRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetByIdAppserverRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetByIdAppserverRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetByIdAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetByIdAppserverRequest';
        };

        return GetByIdAppserverRequest;
      })();

      appserver.GetByIdAppserverResponse = (function () {
        /**
         * Properties of a GetByIdAppserverResponse.
         * @memberof api.v1.appserver
         * @interface IGetByIdAppserverResponse
         * @property {api.v1.appserver.IAppserver|null} [appserver] GetByIdAppserverResponse appserver
         */

        /**
         * Constructs a new GetByIdAppserverResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetByIdAppserverResponse.
         * @implements IGetByIdAppserverResponse
         * @constructor
         * @param {api.v1.appserver.IGetByIdAppserverResponse=} [properties] Properties to set
         */
        function GetByIdAppserverResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetByIdAppserverResponse appserver.
         * @member {api.v1.appserver.IAppserver|null|undefined} appserver
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @instance
         */
        GetByIdAppserverResponse.prototype.appserver = null;

        /**
         * Creates a new GetByIdAppserverResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {api.v1.appserver.IGetByIdAppserverResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.GetByIdAppserverResponse} GetByIdAppserverResponse instance
         */
        GetByIdAppserverResponse.create = function create(properties) {
          return new GetByIdAppserverResponse(properties);
        };

        /**
         * Encodes the specified GetByIdAppserverResponse message. Does not implicitly {@link api.v1.appserver.GetByIdAppserverResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {api.v1.appserver.IGetByIdAppserverResponse} message GetByIdAppserverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetByIdAppserverResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserver != null && Object.hasOwnProperty.call(message, 'appserver'))
            $root.api.v1.appserver.Appserver.encode(
              message.appserver,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified GetByIdAppserverResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetByIdAppserverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {api.v1.appserver.IGetByIdAppserverResponse} message GetByIdAppserverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetByIdAppserverResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetByIdAppserverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetByIdAppserverResponse} GetByIdAppserverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetByIdAppserverResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetByIdAppserverResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.appserver = $root.api.v1.appserver.Appserver.decode(
                  reader,
                  reader.uint32()
                );
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
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetByIdAppserverResponse} GetByIdAppserverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetByIdAppserverResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetByIdAppserverResponse message.
         * @function verify
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetByIdAppserverResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserver != null && message.hasOwnProperty('appserver')) {
            let error = $root.api.v1.appserver.Appserver.verify(message.appserver);
            if (error) return 'appserver.' + error;
          }
          return null;
        };

        /**
         * Creates a GetByIdAppserverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetByIdAppserverResponse} GetByIdAppserverResponse
         */
        GetByIdAppserverResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetByIdAppserverResponse) return object;
          let message = new $root.api.v1.appserver.GetByIdAppserverResponse();
          if (object.appserver != null) {
            if (typeof object.appserver !== 'object')
              throw TypeError(
                '.api.v1.appserver.GetByIdAppserverResponse.appserver: object expected'
              );
            message.appserver = $root.api.v1.appserver.Appserver.fromObject(object.appserver);
          }
          return message;
        };

        /**
         * Creates a plain object from a GetByIdAppserverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {api.v1.appserver.GetByIdAppserverResponse} message GetByIdAppserverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetByIdAppserverResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserver = null;
          if (message.appserver != null && message.hasOwnProperty('appserver'))
            object.appserver = $root.api.v1.appserver.Appserver.toObject(
              message.appserver,
              options
            );
          return object;
        };

        /**
         * Converts this GetByIdAppserverResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetByIdAppserverResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetByIdAppserverResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetByIdAppserverResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetByIdAppserverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetByIdAppserverResponse';
        };

        return GetByIdAppserverResponse;
      })();

      appserver.ListAppserversRequest = (function () {
        /**
         * Properties of a ListAppserversRequest.
         * @memberof api.v1.appserver
         * @interface IListAppserversRequest
         * @property {google.protobuf.IStringValue|null} [name] ListAppserversRequest name
         */

        /**
         * Constructs a new ListAppserversRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a ListAppserversRequest.
         * @implements IListAppserversRequest
         * @constructor
         * @param {api.v1.appserver.IListAppserversRequest=} [properties] Properties to set
         */
        function ListAppserversRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListAppserversRequest name.
         * @member {google.protobuf.IStringValue|null|undefined} name
         * @memberof api.v1.appserver.ListAppserversRequest
         * @instance
         */
        ListAppserversRequest.prototype.name = null;

        /**
         * Creates a new ListAppserversRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {api.v1.appserver.IListAppserversRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.ListAppserversRequest} ListAppserversRequest instance
         */
        ListAppserversRequest.create = function create(properties) {
          return new ListAppserversRequest(properties);
        };

        /**
         * Encodes the specified ListAppserversRequest message. Does not implicitly {@link api.v1.appserver.ListAppserversRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {api.v1.appserver.IListAppserversRequest} message ListAppserversRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAppserversRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            $root.google.protobuf.StringValue.encode(
              message.name,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified ListAppserversRequest message, length delimited. Does not implicitly {@link api.v1.appserver.ListAppserversRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {api.v1.appserver.IListAppserversRequest} message ListAppserversRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAppserversRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListAppserversRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.ListAppserversRequest} ListAppserversRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAppserversRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.ListAppserversRequest();
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
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.ListAppserversRequest} ListAppserversRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAppserversRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListAppserversRequest message.
         * @function verify
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListAppserversRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.name != null && message.hasOwnProperty('name')) {
            let error = $root.google.protobuf.StringValue.verify(message.name);
            if (error) return 'name.' + error;
          }
          return null;
        };

        /**
         * Creates a ListAppserversRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.ListAppserversRequest} ListAppserversRequest
         */
        ListAppserversRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.ListAppserversRequest) return object;
          let message = new $root.api.v1.appserver.ListAppserversRequest();
          if (object.name != null) {
            if (typeof object.name !== 'object')
              throw TypeError('.api.v1.appserver.ListAppserversRequest.name: object expected');
            message.name = $root.google.protobuf.StringValue.fromObject(object.name);
          }
          return message;
        };

        /**
         * Creates a plain object from a ListAppserversRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {api.v1.appserver.ListAppserversRequest} message ListAppserversRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListAppserversRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.name = null;
          if (message.name != null && message.hasOwnProperty('name'))
            object.name = $root.google.protobuf.StringValue.toObject(message.name, options);
          return object;
        };

        /**
         * Converts this ListAppserversRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.ListAppserversRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListAppserversRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListAppserversRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.ListAppserversRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListAppserversRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.ListAppserversRequest';
        };

        return ListAppserversRequest;
      })();

      appserver.ListAppserversResponse = (function () {
        /**
         * Properties of a ListAppserversResponse.
         * @memberof api.v1.appserver
         * @interface IListAppserversResponse
         * @property {Array.<api.v1.appserver.IAppserver>|null} [appservers] ListAppserversResponse appservers
         */

        /**
         * Constructs a new ListAppserversResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a ListAppserversResponse.
         * @implements IListAppserversResponse
         * @constructor
         * @param {api.v1.appserver.IListAppserversResponse=} [properties] Properties to set
         */
        function ListAppserversResponse(properties) {
          this.appservers = [];
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListAppserversResponse appservers.
         * @member {Array.<api.v1.appserver.IAppserver>} appservers
         * @memberof api.v1.appserver.ListAppserversResponse
         * @instance
         */
        ListAppserversResponse.prototype.appservers = $util.emptyArray;

        /**
         * Creates a new ListAppserversResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {api.v1.appserver.IListAppserversResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.ListAppserversResponse} ListAppserversResponse instance
         */
        ListAppserversResponse.create = function create(properties) {
          return new ListAppserversResponse(properties);
        };

        /**
         * Encodes the specified ListAppserversResponse message. Does not implicitly {@link api.v1.appserver.ListAppserversResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {api.v1.appserver.IListAppserversResponse} message ListAppserversResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAppserversResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appservers != null && message.appservers.length)
            for (let i = 0; i < message.appservers.length; ++i)
              $root.api.v1.appserver.Appserver.encode(
                message.appservers[i],
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
              ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified ListAppserversResponse message, length delimited. Does not implicitly {@link api.v1.appserver.ListAppserversResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {api.v1.appserver.IListAppserversResponse} message ListAppserversResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListAppserversResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListAppserversResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.ListAppserversResponse} ListAppserversResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAppserversResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.ListAppserversResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                if (!(message.appservers && message.appservers.length)) message.appservers = [];
                message.appservers.push(
                  $root.api.v1.appserver.Appserver.decode(reader, reader.uint32())
                );
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
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.ListAppserversResponse} ListAppserversResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListAppserversResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListAppserversResponse message.
         * @function verify
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListAppserversResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appservers != null && message.hasOwnProperty('appservers')) {
            if (!Array.isArray(message.appservers)) return 'appservers: array expected';
            for (let i = 0; i < message.appservers.length; ++i) {
              let error = $root.api.v1.appserver.Appserver.verify(message.appservers[i]);
              if (error) return 'appservers.' + error;
            }
          }
          return null;
        };

        /**
         * Creates a ListAppserversResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.ListAppserversResponse} ListAppserversResponse
         */
        ListAppserversResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.ListAppserversResponse) return object;
          let message = new $root.api.v1.appserver.ListAppserversResponse();
          if (object.appservers) {
            if (!Array.isArray(object.appservers))
              throw TypeError(
                '.api.v1.appserver.ListAppserversResponse.appservers: array expected'
              );
            message.appservers = [];
            for (let i = 0; i < object.appservers.length; ++i) {
              if (typeof object.appservers[i] !== 'object')
                throw TypeError(
                  '.api.v1.appserver.ListAppserversResponse.appservers: object expected'
                );
              message.appservers[i] = $root.api.v1.appserver.Appserver.fromObject(
                object.appservers[i]
              );
            }
          }
          return message;
        };

        /**
         * Creates a plain object from a ListAppserversResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {api.v1.appserver.ListAppserversResponse} message ListAppserversResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListAppserversResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.arrays || options.defaults) object.appservers = [];
          if (message.appservers && message.appservers.length) {
            object.appservers = [];
            for (let j = 0; j < message.appservers.length; ++j)
              object.appservers[j] = $root.api.v1.appserver.Appserver.toObject(
                message.appservers[j],
                options
              );
          }
          return object;
        };

        /**
         * Converts this ListAppserversResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.ListAppserversResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListAppserversResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ListAppserversResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.ListAppserversResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ListAppserversResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.ListAppserversResponse';
        };

        return ListAppserversResponse;
      })();

      appserver.DeleteAppserverRequest = (function () {
        /**
         * Properties of a DeleteAppserverRequest.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverRequest
         * @property {string|null} [id] DeleteAppserverRequest id
         */

        /**
         * Constructs a new DeleteAppserverRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverRequest.
         * @implements IDeleteAppserverRequest
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverRequest=} [properties] Properties to set
         */
        function DeleteAppserverRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteAppserverRequest id.
         * @member {string} id
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @instance
         */
        DeleteAppserverRequest.prototype.id = '';

        /**
         * Creates a new DeleteAppserverRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverRequest} DeleteAppserverRequest instance
         */
        DeleteAppserverRequest.create = function create(properties) {
          return new DeleteAppserverRequest(properties);
        };

        /**
         * Encodes the specified DeleteAppserverRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRequest} message DeleteAppserverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRequest} message DeleteAppserverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverRequest} DeleteAppserverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverRequest();
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
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverRequest} DeleteAppserverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverRequest message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverRequest} DeleteAppserverRequest
         */
        DeleteAppserverRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverRequest) return object;
          let message = new $root.api.v1.appserver.DeleteAppserverRequest();
          if (object.id != null) message.id = String(object.id);
          return message;
        };

        /**
         * Creates a plain object from a DeleteAppserverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {api.v1.appserver.DeleteAppserverRequest} message DeleteAppserverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          return object;
        };

        /**
         * Converts this DeleteAppserverRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverRequest';
        };

        return DeleteAppserverRequest;
      })();

      appserver.DeleteAppserverResponse = (function () {
        /**
         * Properties of a DeleteAppserverResponse.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverResponse
         */

        /**
         * Constructs a new DeleteAppserverResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverResponse.
         * @implements IDeleteAppserverResponse
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverResponse=} [properties] Properties to set
         */
        function DeleteAppserverResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteAppserverResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverResponse} DeleteAppserverResponse instance
         */
        DeleteAppserverResponse.create = function create(properties) {
          return new DeleteAppserverResponse(properties);
        };

        /**
         * Encodes the specified DeleteAppserverResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverResponse} message DeleteAppserverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverResponse} message DeleteAppserverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverResponse} DeleteAppserverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverResponse();
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
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverResponse} DeleteAppserverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverResponse message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverResponse} DeleteAppserverResponse
         */
        DeleteAppserverResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverResponse) return object;
          return new $root.api.v1.appserver.DeleteAppserverResponse();
        };

        /**
         * Creates a plain object from a DeleteAppserverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {api.v1.appserver.DeleteAppserverResponse} message DeleteAppserverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverResponse.toObject = function toObject() {
          return {};
        };

        /**
         * Converts this DeleteAppserverResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverResponse';
        };

        return DeleteAppserverResponse;
      })();

      appserver.CreateAppserverSubRequest = (function () {
        /**
         * Properties of a CreateAppserverSubRequest.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverSubRequest
         * @property {string|null} [appserverId] CreateAppserverSubRequest appserverId
         */

        /**
         * Constructs a new CreateAppserverSubRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverSubRequest.
         * @implements ICreateAppserverSubRequest
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverSubRequest=} [properties] Properties to set
         */
        function CreateAppserverSubRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverSubRequest appserverId.
         * @member {string} appserverId
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @instance
         */
        CreateAppserverSubRequest.prototype.appserverId = '';

        /**
         * Creates a new CreateAppserverSubRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverSubRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverSubRequest} CreateAppserverSubRequest instance
         */
        CreateAppserverSubRequest.create = function create(properties) {
          return new CreateAppserverSubRequest(properties);
        };

        /**
         * Encodes the specified CreateAppserverSubRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverSubRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverSubRequest} message CreateAppserverSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverSubRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.appserverId);
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverSubRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverSubRequest} message CreateAppserverSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverSubRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverSubRequest} CreateAppserverSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverSubRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverSubRequest();
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
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverSubRequest} CreateAppserverSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverSubRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverSubRequest message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverSubRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          return null;
        };

        /**
         * Creates a CreateAppserverSubRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverSubRequest} CreateAppserverSubRequest
         */
        CreateAppserverSubRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverSubRequest) return object;
          let message = new $root.api.v1.appserver.CreateAppserverSubRequest();
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverSubRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {api.v1.appserver.CreateAppserverSubRequest} message CreateAppserverSubRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverSubRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserverId = '';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          return object;
        };

        /**
         * Converts this CreateAppserverSubRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverSubRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverSubRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverSubRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverSubRequest';
        };

        return CreateAppserverSubRequest;
      })();

      appserver.CreateAppserverSubResponse = (function () {
        /**
         * Properties of a CreateAppserverSubResponse.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverSubResponse
         * @property {api.v1.appserver.IAppserverSub|null} [appserverSub] CreateAppserverSubResponse appserverSub
         */

        /**
         * Constructs a new CreateAppserverSubResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverSubResponse.
         * @implements ICreateAppserverSubResponse
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverSubResponse=} [properties] Properties to set
         */
        function CreateAppserverSubResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverSubResponse appserverSub.
         * @member {api.v1.appserver.IAppserverSub|null|undefined} appserverSub
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @instance
         */
        CreateAppserverSubResponse.prototype.appserverSub = null;

        /**
         * Creates a new CreateAppserverSubResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverSubResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverSubResponse} CreateAppserverSubResponse instance
         */
        CreateAppserverSubResponse.create = function create(properties) {
          return new CreateAppserverSubResponse(properties);
        };

        /**
         * Encodes the specified CreateAppserverSubResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverSubResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverSubResponse} message CreateAppserverSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverSubResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverSub != null && Object.hasOwnProperty.call(message, 'appserverSub'))
            $root.api.v1.appserver.AppserverSub.encode(
              message.appserverSub,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverSubResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverSubResponse} message CreateAppserverSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverSubResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverSubResponse} CreateAppserverSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverSubResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverSubResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.appserverSub = $root.api.v1.appserver.AppserverSub.decode(
                  reader,
                  reader.uint32()
                );
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
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverSubResponse} CreateAppserverSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverSubResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverSubResponse message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverSubResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverSub != null && message.hasOwnProperty('appserverSub')) {
            let error = $root.api.v1.appserver.AppserverSub.verify(message.appserverSub);
            if (error) return 'appserverSub.' + error;
          }
          return null;
        };

        /**
         * Creates a CreateAppserverSubResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverSubResponse} CreateAppserverSubResponse
         */
        CreateAppserverSubResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverSubResponse) return object;
          let message = new $root.api.v1.appserver.CreateAppserverSubResponse();
          if (object.appserverSub != null) {
            if (typeof object.appserverSub !== 'object')
              throw TypeError(
                '.api.v1.appserver.CreateAppserverSubResponse.appserverSub: object expected'
              );
            message.appserverSub = $root.api.v1.appserver.AppserverSub.fromObject(
              object.appserverSub
            );
          }
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverSubResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {api.v1.appserver.CreateAppserverSubResponse} message CreateAppserverSubResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverSubResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserverSub = null;
          if (message.appserverSub != null && message.hasOwnProperty('appserverSub'))
            object.appserverSub = $root.api.v1.appserver.AppserverSub.toObject(
              message.appserverSub,
              options
            );
          return object;
        };

        /**
         * Converts this CreateAppserverSubResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverSubResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverSubResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverSubResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverSubResponse';
        };

        return CreateAppserverSubResponse;
      })();

      appserver.GetUserAppserverSubsRequest = (function () {
        /**
         * Properties of a GetUserAppserverSubsRequest.
         * @memberof api.v1.appserver
         * @interface IGetUserAppserverSubsRequest
         */

        /**
         * Constructs a new GetUserAppserverSubsRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetUserAppserverSubsRequest.
         * @implements IGetUserAppserverSubsRequest
         * @constructor
         * @param {api.v1.appserver.IGetUserAppserverSubsRequest=} [properties] Properties to set
         */
        function GetUserAppserverSubsRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetUserAppserverSubsRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.IGetUserAppserverSubsRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest instance
         */
        GetUserAppserverSubsRequest.create = function create(properties) {
          return new GetUserAppserverSubsRequest(properties);
        };

        /**
         * Encodes the specified GetUserAppserverSubsRequest message. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.IGetUserAppserverSubsRequest} message GetUserAppserverSubsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserAppserverSubsRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          return writer;
        };

        /**
         * Encodes the specified GetUserAppserverSubsRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.IGetUserAppserverSubsRequest} message GetUserAppserverSubsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserAppserverSubsRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserAppserverSubsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserAppserverSubsRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetUserAppserverSubsRequest();
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
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserAppserverSubsRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserAppserverSubsRequest message.
         * @function verify
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserAppserverSubsRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          return null;
        };

        /**
         * Creates a GetUserAppserverSubsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetUserAppserverSubsRequest} GetUserAppserverSubsRequest
         */
        GetUserAppserverSubsRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetUserAppserverSubsRequest) return object;
          return new $root.api.v1.appserver.GetUserAppserverSubsRequest();
        };

        /**
         * Creates a plain object from a GetUserAppserverSubsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.GetUserAppserverSubsRequest} message GetUserAppserverSubsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserAppserverSubsRequest.toObject = function toObject() {
          return {};
        };

        /**
         * Converts this GetUserAppserverSubsRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserAppserverSubsRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserAppserverSubsRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetUserAppserverSubsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserAppserverSubsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetUserAppserverSubsRequest';
        };

        return GetUserAppserverSubsRequest;
      })();

      appserver.GetUserAppserverSubsResponse = (function () {
        /**
         * Properties of a GetUserAppserverSubsResponse.
         * @memberof api.v1.appserver
         * @interface IGetUserAppserverSubsResponse
         * @property {Array.<api.v1.appserver.IAppserverAndSub>|null} [appservers] GetUserAppserverSubsResponse appservers
         */

        /**
         * Constructs a new GetUserAppserverSubsResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetUserAppserverSubsResponse.
         * @implements IGetUserAppserverSubsResponse
         * @constructor
         * @param {api.v1.appserver.IGetUserAppserverSubsResponse=} [properties] Properties to set
         */
        function GetUserAppserverSubsResponse(properties) {
          this.appservers = [];
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserAppserverSubsResponse appservers.
         * @member {Array.<api.v1.appserver.IAppserverAndSub>} appservers
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @instance
         */
        GetUserAppserverSubsResponse.prototype.appservers = $util.emptyArray;

        /**
         * Creates a new GetUserAppserverSubsResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.IGetUserAppserverSubsResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse instance
         */
        GetUserAppserverSubsResponse.create = function create(properties) {
          return new GetUserAppserverSubsResponse(properties);
        };

        /**
         * Encodes the specified GetUserAppserverSubsResponse message. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.IGetUserAppserverSubsResponse} message GetUserAppserverSubsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserAppserverSubsResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appservers != null && message.appservers.length)
            for (let i = 0; i < message.appservers.length; ++i)
              $root.api.v1.appserver.AppserverAndSub.encode(
                message.appservers[i],
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
              ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified GetUserAppserverSubsResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetUserAppserverSubsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.IGetUserAppserverSubsResponse} message GetUserAppserverSubsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserAppserverSubsResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserAppserverSubsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserAppserverSubsResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetUserAppserverSubsResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                if (!(message.appservers && message.appservers.length)) message.appservers = [];
                message.appservers.push(
                  $root.api.v1.appserver.AppserverAndSub.decode(reader, reader.uint32())
                );
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
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserAppserverSubsResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserAppserverSubsResponse message.
         * @function verify
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserAppserverSubsResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appservers != null && message.hasOwnProperty('appservers')) {
            if (!Array.isArray(message.appservers)) return 'appservers: array expected';
            for (let i = 0; i < message.appservers.length; ++i) {
              let error = $root.api.v1.appserver.AppserverAndSub.verify(message.appservers[i]);
              if (error) return 'appservers.' + error;
            }
          }
          return null;
        };

        /**
         * Creates a GetUserAppserverSubsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetUserAppserverSubsResponse} GetUserAppserverSubsResponse
         */
        GetUserAppserverSubsResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetUserAppserverSubsResponse) return object;
          let message = new $root.api.v1.appserver.GetUserAppserverSubsResponse();
          if (object.appservers) {
            if (!Array.isArray(object.appservers))
              throw TypeError(
                '.api.v1.appserver.GetUserAppserverSubsResponse.appservers: array expected'
              );
            message.appservers = [];
            for (let i = 0; i < object.appservers.length; ++i) {
              if (typeof object.appservers[i] !== 'object')
                throw TypeError(
                  '.api.v1.appserver.GetUserAppserverSubsResponse.appservers: object expected'
                );
              message.appservers[i] = $root.api.v1.appserver.AppserverAndSub.fromObject(
                object.appservers[i]
              );
            }
          }
          return message;
        };

        /**
         * Creates a plain object from a GetUserAppserverSubsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.GetUserAppserverSubsResponse} message GetUserAppserverSubsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserAppserverSubsResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.arrays || options.defaults) object.appservers = [];
          if (message.appservers && message.appservers.length) {
            object.appservers = [];
            for (let j = 0; j < message.appservers.length; ++j)
              object.appservers[j] = $root.api.v1.appserver.AppserverAndSub.toObject(
                message.appservers[j],
                options
              );
          }
          return object;
        };

        /**
         * Converts this GetUserAppserverSubsResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserAppserverSubsResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserAppserverSubsResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetUserAppserverSubsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserAppserverSubsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetUserAppserverSubsResponse';
        };

        return GetUserAppserverSubsResponse;
      })();

      appserver.GetAllUsersAppserverSubsRequest = (function () {
        /**
         * Properties of a GetAllUsersAppserverSubsRequest.
         * @memberof api.v1.appserver
         * @interface IGetAllUsersAppserverSubsRequest
         * @property {string|null} [appserverId] GetAllUsersAppserverSubsRequest appserverId
         */

        /**
         * Constructs a new GetAllUsersAppserverSubsRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetAllUsersAppserverSubsRequest.
         * @implements IGetAllUsersAppserverSubsRequest
         * @constructor
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsRequest=} [properties] Properties to set
         */
        function GetAllUsersAppserverSubsRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllUsersAppserverSubsRequest appserverId.
         * @member {string} appserverId
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @instance
         */
        GetAllUsersAppserverSubsRequest.prototype.appserverId = '';

        /**
         * Creates a new GetAllUsersAppserverSubsRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsRequest} GetAllUsersAppserverSubsRequest instance
         */
        GetAllUsersAppserverSubsRequest.create = function create(properties) {
          return new GetAllUsersAppserverSubsRequest(properties);
        };

        /**
         * Encodes the specified GetAllUsersAppserverSubsRequest message. Does not implicitly {@link api.v1.appserver.GetAllUsersAppserverSubsRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsRequest} message GetAllUsersAppserverSubsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllUsersAppserverSubsRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.appserverId);
          return writer;
        };

        /**
         * Encodes the specified GetAllUsersAppserverSubsRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetAllUsersAppserverSubsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsRequest} message GetAllUsersAppserverSubsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllUsersAppserverSubsRequest.encodeDelimited = function encodeDelimited(
          message,
          writer
        ) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllUsersAppserverSubsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsRequest} GetAllUsersAppserverSubsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllUsersAppserverSubsRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetAllUsersAppserverSubsRequest();
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
         * Decodes a GetAllUsersAppserverSubsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsRequest} GetAllUsersAppserverSubsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllUsersAppserverSubsRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllUsersAppserverSubsRequest message.
         * @function verify
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllUsersAppserverSubsRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          return null;
        };

        /**
         * Creates a GetAllUsersAppserverSubsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsRequest} GetAllUsersAppserverSubsRequest
         */
        GetAllUsersAppserverSubsRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetAllUsersAppserverSubsRequest)
            return object;
          let message = new $root.api.v1.appserver.GetAllUsersAppserverSubsRequest();
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          return message;
        };

        /**
         * Creates a plain object from a GetAllUsersAppserverSubsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {api.v1.appserver.GetAllUsersAppserverSubsRequest} message GetAllUsersAppserverSubsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllUsersAppserverSubsRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserverId = '';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          return object;
        };

        /**
         * Converts this GetAllUsersAppserverSubsRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllUsersAppserverSubsRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllUsersAppserverSubsRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllUsersAppserverSubsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetAllUsersAppserverSubsRequest';
        };

        return GetAllUsersAppserverSubsRequest;
      })();

      appserver.GetAllUsersAppserverSubsResponse = (function () {
        /**
         * Properties of a GetAllUsersAppserverSubsResponse.
         * @memberof api.v1.appserver
         * @interface IGetAllUsersAppserverSubsResponse
         * @property {Array.<api.v1.appserver.IAppuserAndSub>|null} [appusers] GetAllUsersAppserverSubsResponse appusers
         */

        /**
         * Constructs a new GetAllUsersAppserverSubsResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetAllUsersAppserverSubsResponse.
         * @implements IGetAllUsersAppserverSubsResponse
         * @constructor
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsResponse=} [properties] Properties to set
         */
        function GetAllUsersAppserverSubsResponse(properties) {
          this.appusers = [];
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllUsersAppserverSubsResponse appusers.
         * @member {Array.<api.v1.appserver.IAppuserAndSub>} appusers
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @instance
         */
        GetAllUsersAppserverSubsResponse.prototype.appusers = $util.emptyArray;

        /**
         * Creates a new GetAllUsersAppserverSubsResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsResponse} GetAllUsersAppserverSubsResponse instance
         */
        GetAllUsersAppserverSubsResponse.create = function create(properties) {
          return new GetAllUsersAppserverSubsResponse(properties);
        };

        /**
         * Encodes the specified GetAllUsersAppserverSubsResponse message. Does not implicitly {@link api.v1.appserver.GetAllUsersAppserverSubsResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsResponse} message GetAllUsersAppserverSubsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllUsersAppserverSubsResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appusers != null && message.appusers.length)
            for (let i = 0; i < message.appusers.length; ++i)
              $root.api.v1.appserver.AppuserAndSub.encode(
                message.appusers[i],
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
              ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified GetAllUsersAppserverSubsResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetAllUsersAppserverSubsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.IGetAllUsersAppserverSubsResponse} message GetAllUsersAppserverSubsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllUsersAppserverSubsResponse.encodeDelimited = function encodeDelimited(
          message,
          writer
        ) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllUsersAppserverSubsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsResponse} GetAllUsersAppserverSubsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllUsersAppserverSubsResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetAllUsersAppserverSubsResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                if (!(message.appusers && message.appusers.length)) message.appusers = [];
                message.appusers.push(
                  $root.api.v1.appserver.AppuserAndSub.decode(reader, reader.uint32())
                );
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
         * Decodes a GetAllUsersAppserverSubsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsResponse} GetAllUsersAppserverSubsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllUsersAppserverSubsResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllUsersAppserverSubsResponse message.
         * @function verify
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllUsersAppserverSubsResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appusers != null && message.hasOwnProperty('appusers')) {
            if (!Array.isArray(message.appusers)) return 'appusers: array expected';
            for (let i = 0; i < message.appusers.length; ++i) {
              let error = $root.api.v1.appserver.AppuserAndSub.verify(message.appusers[i]);
              if (error) return 'appusers.' + error;
            }
          }
          return null;
        };

        /**
         * Creates a GetAllUsersAppserverSubsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetAllUsersAppserverSubsResponse} GetAllUsersAppserverSubsResponse
         */
        GetAllUsersAppserverSubsResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetAllUsersAppserverSubsResponse)
            return object;
          let message = new $root.api.v1.appserver.GetAllUsersAppserverSubsResponse();
          if (object.appusers) {
            if (!Array.isArray(object.appusers))
              throw TypeError(
                '.api.v1.appserver.GetAllUsersAppserverSubsResponse.appusers: array expected'
              );
            message.appusers = [];
            for (let i = 0; i < object.appusers.length; ++i) {
              if (typeof object.appusers[i] !== 'object')
                throw TypeError(
                  '.api.v1.appserver.GetAllUsersAppserverSubsResponse.appusers: object expected'
                );
              message.appusers[i] = $root.api.v1.appserver.AppuserAndSub.fromObject(
                object.appusers[i]
              );
            }
          }
          return message;
        };

        /**
         * Creates a plain object from a GetAllUsersAppserverSubsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {api.v1.appserver.GetAllUsersAppserverSubsResponse} message GetAllUsersAppserverSubsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllUsersAppserverSubsResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.arrays || options.defaults) object.appusers = [];
          if (message.appusers && message.appusers.length) {
            object.appusers = [];
            for (let j = 0; j < message.appusers.length; ++j)
              object.appusers[j] = $root.api.v1.appserver.AppuserAndSub.toObject(
                message.appusers[j],
                options
              );
          }
          return object;
        };

        /**
         * Converts this GetAllUsersAppserverSubsResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllUsersAppserverSubsResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllUsersAppserverSubsResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetAllUsersAppserverSubsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllUsersAppserverSubsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetAllUsersAppserverSubsResponse';
        };

        return GetAllUsersAppserverSubsResponse;
      })();

      appserver.DeleteAppserverSubRequest = (function () {
        /**
         * Properties of a DeleteAppserverSubRequest.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverSubRequest
         * @property {string|null} [id] DeleteAppserverSubRequest id
         */

        /**
         * Constructs a new DeleteAppserverSubRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverSubRequest.
         * @implements IDeleteAppserverSubRequest
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverSubRequest=} [properties] Properties to set
         */
        function DeleteAppserverSubRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteAppserverSubRequest id.
         * @member {string} id
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @instance
         */
        DeleteAppserverSubRequest.prototype.id = '';

        /**
         * Creates a new DeleteAppserverSubRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverSubRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverSubRequest} DeleteAppserverSubRequest instance
         */
        DeleteAppserverSubRequest.create = function create(properties) {
          return new DeleteAppserverSubRequest(properties);
        };

        /**
         * Encodes the specified DeleteAppserverSubRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverSubRequest} message DeleteAppserverSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverSubRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverSubRequest} message DeleteAppserverSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverSubRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverSubRequest} DeleteAppserverSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverSubRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverSubRequest();
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
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverSubRequest} DeleteAppserverSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverSubRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverSubRequest message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverSubRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverSubRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverSubRequest} DeleteAppserverSubRequest
         */
        DeleteAppserverSubRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverSubRequest) return object;
          let message = new $root.api.v1.appserver.DeleteAppserverSubRequest();
          if (object.id != null) message.id = String(object.id);
          return message;
        };

        /**
         * Creates a plain object from a DeleteAppserverSubRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {api.v1.appserver.DeleteAppserverSubRequest} message DeleteAppserverSubRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverSubRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          return object;
        };

        /**
         * Converts this DeleteAppserverSubRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverSubRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverSubRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverSubRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverSubRequest';
        };

        return DeleteAppserverSubRequest;
      })();

      appserver.DeleteAppserverSubResponse = (function () {
        /**
         * Properties of a DeleteAppserverSubResponse.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverSubResponse
         */

        /**
         * Constructs a new DeleteAppserverSubResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverSubResponse.
         * @implements IDeleteAppserverSubResponse
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverSubResponse=} [properties] Properties to set
         */
        function DeleteAppserverSubResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteAppserverSubResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverSubResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverSubResponse} DeleteAppserverSubResponse instance
         */
        DeleteAppserverSubResponse.create = function create(properties) {
          return new DeleteAppserverSubResponse(properties);
        };

        /**
         * Encodes the specified DeleteAppserverSubResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverSubResponse} message DeleteAppserverSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverSubResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverSubResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverSubResponse} message DeleteAppserverSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverSubResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverSubResponse} DeleteAppserverSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverSubResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverSubResponse();
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
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverSubResponse} DeleteAppserverSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverSubResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverSubResponse message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverSubResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverSubResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverSubResponse} DeleteAppserverSubResponse
         */
        DeleteAppserverSubResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverSubResponse) return object;
          return new $root.api.v1.appserver.DeleteAppserverSubResponse();
        };

        /**
         * Creates a plain object from a DeleteAppserverSubResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {api.v1.appserver.DeleteAppserverSubResponse} message DeleteAppserverSubResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverSubResponse.toObject = function toObject() {
          return {};
        };

        /**
         * Converts this DeleteAppserverSubResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverSubResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverSubResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverSubResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverSubResponse';
        };

        return DeleteAppserverSubResponse;
      })();

      appserver.CreateAppserverRoleRequest = (function () {
        /**
         * Properties of a CreateAppserverRoleRequest.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverRoleRequest
         * @property {string|null} [appserverId] CreateAppserverRoleRequest appserverId
         * @property {string|null} [name] CreateAppserverRoleRequest name
         */

        /**
         * Constructs a new CreateAppserverRoleRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverRoleRequest.
         * @implements ICreateAppserverRoleRequest
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverRoleRequest=} [properties] Properties to set
         */
        function CreateAppserverRoleRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverRoleRequest appserverId.
         * @member {string} appserverId
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @instance
         */
        CreateAppserverRoleRequest.prototype.appserverId = '';

        /**
         * CreateAppserverRoleRequest name.
         * @member {string} name
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @instance
         */
        CreateAppserverRoleRequest.prototype.name = '';

        /**
         * Creates a new CreateAppserverRoleRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverRoleRequest} CreateAppserverRoleRequest instance
         */
        CreateAppserverRoleRequest.create = function create(properties) {
          return new CreateAppserverRoleRequest(properties);
        };

        /**
         * Encodes the specified CreateAppserverRoleRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleRequest} message CreateAppserverRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.appserverId);
          if (message.name != null && Object.hasOwnProperty.call(message, 'name'))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverRoleRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleRequest} message CreateAppserverRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverRoleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverRoleRequest} CreateAppserverRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverRoleRequest();
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
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverRoleRequest} CreateAppserverRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverRoleRequest message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverRoleRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          if (message.name != null && message.hasOwnProperty('name'))
            if (!$util.isString(message.name)) return 'name: string expected';
          return null;
        };

        /**
         * Creates a CreateAppserverRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverRoleRequest} CreateAppserverRoleRequest
         */
        CreateAppserverRoleRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverRoleRequest) return object;
          let message = new $root.api.v1.appserver.CreateAppserverRoleRequest();
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          if (object.name != null) message.name = String(object.name);
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.CreateAppserverRoleRequest} message CreateAppserverRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverRoleRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.appserverId = '';
            object.name = '';
          }
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          if (message.name != null && message.hasOwnProperty('name')) object.name = message.name;
          return object;
        };

        /**
         * Converts this CreateAppserverRoleRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverRoleRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverRoleRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverRoleRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverRoleRequest';
        };

        return CreateAppserverRoleRequest;
      })();

      appserver.CreateAppserverRoleResponse = (function () {
        /**
         * Properties of a CreateAppserverRoleResponse.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverRoleResponse
         * @property {api.v1.appserver.IAppserverRole|null} [appserverRole] CreateAppserverRoleResponse appserverRole
         */

        /**
         * Constructs a new CreateAppserverRoleResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverRoleResponse.
         * @implements ICreateAppserverRoleResponse
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverRoleResponse=} [properties] Properties to set
         */
        function CreateAppserverRoleResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverRoleResponse appserverRole.
         * @member {api.v1.appserver.IAppserverRole|null|undefined} appserverRole
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @instance
         */
        CreateAppserverRoleResponse.prototype.appserverRole = null;

        /**
         * Creates a new CreateAppserverRoleResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverRoleResponse} CreateAppserverRoleResponse instance
         */
        CreateAppserverRoleResponse.create = function create(properties) {
          return new CreateAppserverRoleResponse(properties);
        };

        /**
         * Encodes the specified CreateAppserverRoleResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleResponse} message CreateAppserverRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverRole != null && Object.hasOwnProperty.call(message, 'appserverRole'))
            $root.api.v1.appserver.AppserverRole.encode(
              message.appserverRole,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverRoleResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleResponse} message CreateAppserverRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverRoleResponse} CreateAppserverRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverRoleResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.appserverRole = $root.api.v1.appserver.AppserverRole.decode(
                  reader,
                  reader.uint32()
                );
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
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverRoleResponse} CreateAppserverRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverRoleResponse message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverRoleResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverRole != null && message.hasOwnProperty('appserverRole')) {
            let error = $root.api.v1.appserver.AppserverRole.verify(message.appserverRole);
            if (error) return 'appserverRole.' + error;
          }
          return null;
        };

        /**
         * Creates a CreateAppserverRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverRoleResponse} CreateAppserverRoleResponse
         */
        CreateAppserverRoleResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverRoleResponse) return object;
          let message = new $root.api.v1.appserver.CreateAppserverRoleResponse();
          if (object.appserverRole != null) {
            if (typeof object.appserverRole !== 'object')
              throw TypeError(
                '.api.v1.appserver.CreateAppserverRoleResponse.appserverRole: object expected'
              );
            message.appserverRole = $root.api.v1.appserver.AppserverRole.fromObject(
              object.appserverRole
            );
          }
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.CreateAppserverRoleResponse} message CreateAppserverRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverRoleResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserverRole = null;
          if (message.appserverRole != null && message.hasOwnProperty('appserverRole'))
            object.appserverRole = $root.api.v1.appserver.AppserverRole.toObject(
              message.appserverRole,
              options
            );
          return object;
        };

        /**
         * Converts this CreateAppserverRoleResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverRoleResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverRoleResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverRoleResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverRoleResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverRoleResponse';
        };

        return CreateAppserverRoleResponse;
      })();

      appserver.GetAllAppserverRolesRequest = (function () {
        /**
         * Properties of a GetAllAppserverRolesRequest.
         * @memberof api.v1.appserver
         * @interface IGetAllAppserverRolesRequest
         * @property {string|null} [appserverId] GetAllAppserverRolesRequest appserverId
         */

        /**
         * Constructs a new GetAllAppserverRolesRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetAllAppserverRolesRequest.
         * @implements IGetAllAppserverRolesRequest
         * @constructor
         * @param {api.v1.appserver.IGetAllAppserverRolesRequest=} [properties] Properties to set
         */
        function GetAllAppserverRolesRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllAppserverRolesRequest appserverId.
         * @member {string} appserverId
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @instance
         */
        GetAllAppserverRolesRequest.prototype.appserverId = '';

        /**
         * Creates a new GetAllAppserverRolesRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {api.v1.appserver.IGetAllAppserverRolesRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest instance
         */
        GetAllAppserverRolesRequest.create = function create(properties) {
          return new GetAllAppserverRolesRequest(properties);
        };

        /**
         * Encodes the specified GetAllAppserverRolesRequest message. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {api.v1.appserver.IGetAllAppserverRolesRequest} message GetAllAppserverRolesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllAppserverRolesRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverId != null && Object.hasOwnProperty.call(message, 'appserverId'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.appserverId);
          return writer;
        };

        /**
         * Encodes the specified GetAllAppserverRolesRequest message, length delimited. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {api.v1.appserver.IGetAllAppserverRolesRequest} message GetAllAppserverRolesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllAppserverRolesRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllAppserverRolesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllAppserverRolesRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetAllAppserverRolesRequest();
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
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllAppserverRolesRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllAppserverRolesRequest message.
         * @function verify
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllAppserverRolesRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            if (!$util.isString(message.appserverId)) return 'appserverId: string expected';
          return null;
        };

        /**
         * Creates a GetAllAppserverRolesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetAllAppserverRolesRequest} GetAllAppserverRolesRequest
         */
        GetAllAppserverRolesRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetAllAppserverRolesRequest) return object;
          let message = new $root.api.v1.appserver.GetAllAppserverRolesRequest();
          if (object.appserverId != null) message.appserverId = String(object.appserverId);
          return message;
        };

        /**
         * Creates a plain object from a GetAllAppserverRolesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {api.v1.appserver.GetAllAppserverRolesRequest} message GetAllAppserverRolesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllAppserverRolesRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserverId = '';
          if (message.appserverId != null && message.hasOwnProperty('appserverId'))
            object.appserverId = message.appserverId;
          return object;
        };

        /**
         * Converts this GetAllAppserverRolesRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllAppserverRolesRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllAppserverRolesRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetAllAppserverRolesRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllAppserverRolesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetAllAppserverRolesRequest';
        };

        return GetAllAppserverRolesRequest;
      })();

      appserver.GetAllAppserverRolesResponse = (function () {
        /**
         * Properties of a GetAllAppserverRolesResponse.
         * @memberof api.v1.appserver
         * @interface IGetAllAppserverRolesResponse
         * @property {Array.<api.v1.appserver.IAppserverRole>|null} [appserverRoles] GetAllAppserverRolesResponse appserverRoles
         */

        /**
         * Constructs a new GetAllAppserverRolesResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a GetAllAppserverRolesResponse.
         * @implements IGetAllAppserverRolesResponse
         * @constructor
         * @param {api.v1.appserver.IGetAllAppserverRolesResponse=} [properties] Properties to set
         */
        function GetAllAppserverRolesResponse(properties) {
          this.appserverRoles = [];
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllAppserverRolesResponse appserverRoles.
         * @member {Array.<api.v1.appserver.IAppserverRole>} appserverRoles
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @instance
         */
        GetAllAppserverRolesResponse.prototype.appserverRoles = $util.emptyArray;

        /**
         * Creates a new GetAllAppserverRolesResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {api.v1.appserver.IGetAllAppserverRolesResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse instance
         */
        GetAllAppserverRolesResponse.create = function create(properties) {
          return new GetAllAppserverRolesResponse(properties);
        };

        /**
         * Encodes the specified GetAllAppserverRolesResponse message. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {api.v1.appserver.IGetAllAppserverRolesResponse} message GetAllAppserverRolesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllAppserverRolesResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.appserverRoles != null && message.appserverRoles.length)
            for (let i = 0; i < message.appserverRoles.length; ++i)
              $root.api.v1.appserver.AppserverRole.encode(
                message.appserverRoles[i],
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
              ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified GetAllAppserverRolesResponse message, length delimited. Does not implicitly {@link api.v1.appserver.GetAllAppserverRolesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {api.v1.appserver.IGetAllAppserverRolesResponse} message GetAllAppserverRolesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllAppserverRolesResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllAppserverRolesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllAppserverRolesResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.GetAllAppserverRolesResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                if (!(message.appserverRoles && message.appserverRoles.length))
                  message.appserverRoles = [];
                message.appserverRoles.push(
                  $root.api.v1.appserver.AppserverRole.decode(reader, reader.uint32())
                );
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
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllAppserverRolesResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllAppserverRolesResponse message.
         * @function verify
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllAppserverRolesResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverRoles != null && message.hasOwnProperty('appserverRoles')) {
            if (!Array.isArray(message.appserverRoles)) return 'appserverRoles: array expected';
            for (let i = 0; i < message.appserverRoles.length; ++i) {
              let error = $root.api.v1.appserver.AppserverRole.verify(message.appserverRoles[i]);
              if (error) return 'appserverRoles.' + error;
            }
          }
          return null;
        };

        /**
         * Creates a GetAllAppserverRolesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.GetAllAppserverRolesResponse} GetAllAppserverRolesResponse
         */
        GetAllAppserverRolesResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.GetAllAppserverRolesResponse) return object;
          let message = new $root.api.v1.appserver.GetAllAppserverRolesResponse();
          if (object.appserverRoles) {
            if (!Array.isArray(object.appserverRoles))
              throw TypeError(
                '.api.v1.appserver.GetAllAppserverRolesResponse.appserverRoles: array expected'
              );
            message.appserverRoles = [];
            for (let i = 0; i < object.appserverRoles.length; ++i) {
              if (typeof object.appserverRoles[i] !== 'object')
                throw TypeError(
                  '.api.v1.appserver.GetAllAppserverRolesResponse.appserverRoles: object expected'
                );
              message.appserverRoles[i] = $root.api.v1.appserver.AppserverRole.fromObject(
                object.appserverRoles[i]
              );
            }
          }
          return message;
        };

        /**
         * Creates a plain object from a GetAllAppserverRolesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {api.v1.appserver.GetAllAppserverRolesResponse} message GetAllAppserverRolesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllAppserverRolesResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.arrays || options.defaults) object.appserverRoles = [];
          if (message.appserverRoles && message.appserverRoles.length) {
            object.appserverRoles = [];
            for (let j = 0; j < message.appserverRoles.length; ++j)
              object.appserverRoles[j] = $root.api.v1.appserver.AppserverRole.toObject(
                message.appserverRoles[j],
                options
              );
          }
          return object;
        };

        /**
         * Converts this GetAllAppserverRolesResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllAppserverRolesResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllAppserverRolesResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.GetAllAppserverRolesResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllAppserverRolesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.GetAllAppserverRolesResponse';
        };

        return GetAllAppserverRolesResponse;
      })();

      appserver.DeleteAppserverRoleRequest = (function () {
        /**
         * Properties of a DeleteAppserverRoleRequest.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverRoleRequest
         * @property {string|null} [id] DeleteAppserverRoleRequest id
         */

        /**
         * Constructs a new DeleteAppserverRoleRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverRoleRequest.
         * @implements IDeleteAppserverRoleRequest
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverRoleRequest=} [properties] Properties to set
         */
        function DeleteAppserverRoleRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteAppserverRoleRequest id.
         * @member {string} id
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @instance
         */
        DeleteAppserverRoleRequest.prototype.id = '';

        /**
         * Creates a new DeleteAppserverRoleRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest instance
         */
        DeleteAppserverRoleRequest.create = function create(properties) {
          return new DeleteAppserverRoleRequest(properties);
        };

        /**
         * Encodes the specified DeleteAppserverRoleRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleRequest} message DeleteAppserverRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverRoleRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleRequest} message DeleteAppserverRoleRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverRoleRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverRoleRequest();
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
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverRoleRequest message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverRoleRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverRoleRequest} DeleteAppserverRoleRequest
         */
        DeleteAppserverRoleRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverRoleRequest) return object;
          let message = new $root.api.v1.appserver.DeleteAppserverRoleRequest();
          if (object.id != null) message.id = String(object.id);
          return message;
        };

        /**
         * Creates a plain object from a DeleteAppserverRoleRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {api.v1.appserver.DeleteAppserverRoleRequest} message DeleteAppserverRoleRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverRoleRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          return object;
        };

        /**
         * Converts this DeleteAppserverRoleRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverRoleRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverRoleRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverRoleRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverRoleRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverRoleRequest';
        };

        return DeleteAppserverRoleRequest;
      })();

      appserver.DeleteAppserverRoleResponse = (function () {
        /**
         * Properties of a DeleteAppserverRoleResponse.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverRoleResponse
         */

        /**
         * Constructs a new DeleteAppserverRoleResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverRoleResponse.
         * @implements IDeleteAppserverRoleResponse
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverRoleResponse=} [properties] Properties to set
         */
        function DeleteAppserverRoleResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteAppserverRoleResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse instance
         */
        DeleteAppserverRoleResponse.create = function create(properties) {
          return new DeleteAppserverRoleResponse(properties);
        };

        /**
         * Encodes the specified DeleteAppserverRoleResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleResponse} message DeleteAppserverRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverRoleResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleResponse} message DeleteAppserverRoleResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverRoleResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverRoleResponse();
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
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverRoleResponse message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverRoleResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverRoleResponse} DeleteAppserverRoleResponse
         */
        DeleteAppserverRoleResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverRoleResponse) return object;
          return new $root.api.v1.appserver.DeleteAppserverRoleResponse();
        };

        /**
         * Creates a plain object from a DeleteAppserverRoleResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {api.v1.appserver.DeleteAppserverRoleResponse} message DeleteAppserverRoleResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverRoleResponse.toObject = function toObject() {
          return {};
        };

        /**
         * Converts this DeleteAppserverRoleResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverRoleResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverRoleResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverRoleResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverRoleResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverRoleResponse';
        };

        return DeleteAppserverRoleResponse;
      })();

      appserver.CreateAppserverRoleSubRequest = (function () {
        /**
         * Properties of a CreateAppserverRoleSubRequest.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverRoleSubRequest
         * @property {string|null} [appserverRoleId] CreateAppserverRoleSubRequest appserverRoleId
         * @property {string|null} [appserverSubId] CreateAppserverRoleSubRequest appserverSubId
         */

        /**
         * Constructs a new CreateAppserverRoleSubRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverRoleSubRequest.
         * @implements ICreateAppserverRoleSubRequest
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverRoleSubRequest=} [properties] Properties to set
         */
        function CreateAppserverRoleSubRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverRoleSubRequest appserverRoleId.
         * @member {string} appserverRoleId
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @instance
         */
        CreateAppserverRoleSubRequest.prototype.appserverRoleId = '';

        /**
         * CreateAppserverRoleSubRequest appserverSubId.
         * @member {string} appserverSubId
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @instance
         */
        CreateAppserverRoleSubRequest.prototype.appserverSubId = '';

        /**
         * Creates a new CreateAppserverRoleSubRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleSubRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest instance
         */
        CreateAppserverRoleSubRequest.create = function create(properties) {
          return new CreateAppserverRoleSubRequest(properties);
        };

        /**
         * Encodes the specified CreateAppserverRoleSubRequest message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleSubRequest} message CreateAppserverRoleSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleSubRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.appserverRoleId != null &&
            Object.hasOwnProperty.call(message, 'appserverRoleId')
          )
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.appserverRoleId);
          if (
            message.appserverSubId != null &&
            Object.hasOwnProperty.call(message, 'appserverSubId')
          )
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.appserverSubId);
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverRoleSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleSubRequest} message CreateAppserverRoleSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverRoleSubRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleSubRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverRoleSubRequest();
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
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleSubRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverRoleSubRequest message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverRoleSubRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverRoleId != null && message.hasOwnProperty('appserverRoleId'))
            if (!$util.isString(message.appserverRoleId)) return 'appserverRoleId: string expected';
          if (message.appserverSubId != null && message.hasOwnProperty('appserverSubId'))
            if (!$util.isString(message.appserverSubId)) return 'appserverSubId: string expected';
          return null;
        };

        /**
         * Creates a CreateAppserverRoleSubRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverRoleSubRequest} CreateAppserverRoleSubRequest
         */
        CreateAppserverRoleSubRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverRoleSubRequest) return object;
          let message = new $root.api.v1.appserver.CreateAppserverRoleSubRequest();
          if (object.appserverRoleId != null)
            message.appserverRoleId = String(object.appserverRoleId);
          if (object.appserverSubId != null) message.appserverSubId = String(object.appserverSubId);
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverRoleSubRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.CreateAppserverRoleSubRequest} message CreateAppserverRoleSubRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverRoleSubRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) {
            object.appserverRoleId = '';
            object.appserverSubId = '';
          }
          if (message.appserverRoleId != null && message.hasOwnProperty('appserverRoleId'))
            object.appserverRoleId = message.appserverRoleId;
          if (message.appserverSubId != null && message.hasOwnProperty('appserverSubId'))
            object.appserverSubId = message.appserverSubId;
          return object;
        };

        /**
         * Converts this CreateAppserverRoleSubRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverRoleSubRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverRoleSubRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverRoleSubRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverRoleSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverRoleSubRequest';
        };

        return CreateAppserverRoleSubRequest;
      })();

      appserver.CreateAppserverRoleSubResponse = (function () {
        /**
         * Properties of a CreateAppserverRoleSubResponse.
         * @memberof api.v1.appserver
         * @interface ICreateAppserverRoleSubResponse
         * @property {api.v1.appserver.IAppserverRoleSub|null} [appserverRoleSub] CreateAppserverRoleSubResponse appserverRoleSub
         */

        /**
         * Constructs a new CreateAppserverRoleSubResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a CreateAppserverRoleSubResponse.
         * @implements ICreateAppserverRoleSubResponse
         * @constructor
         * @param {api.v1.appserver.ICreateAppserverRoleSubResponse=} [properties] Properties to set
         */
        function CreateAppserverRoleSubResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAppserverRoleSubResponse appserverRoleSub.
         * @member {api.v1.appserver.IAppserverRoleSub|null|undefined} appserverRoleSub
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @instance
         */
        CreateAppserverRoleSubResponse.prototype.appserverRoleSub = null;

        /**
         * Creates a new CreateAppserverRoleSubResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleSubResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse instance
         */
        CreateAppserverRoleSubResponse.create = function create(properties) {
          return new CreateAppserverRoleSubResponse(properties);
        };

        /**
         * Encodes the specified CreateAppserverRoleSubResponse message. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleSubResponse} message CreateAppserverRoleSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleSubResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.appserverRoleSub != null &&
            Object.hasOwnProperty.call(message, 'appserverRoleSub')
          )
            $root.api.v1.appserver.AppserverRoleSub.encode(
              message.appserverRoleSub,
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified CreateAppserverRoleSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.CreateAppserverRoleSubResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.ICreateAppserverRoleSubResponse} message CreateAppserverRoleSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAppserverRoleSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAppserverRoleSubResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleSubResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.CreateAppserverRoleSubResponse();
          while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.appserverRoleSub = $root.api.v1.appserver.AppserverRoleSub.decode(
                  reader,
                  reader.uint32()
                );
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
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAppserverRoleSubResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAppserverRoleSubResponse message.
         * @function verify
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAppserverRoleSubResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.appserverRoleSub != null && message.hasOwnProperty('appserverRoleSub')) {
            let error = $root.api.v1.appserver.AppserverRoleSub.verify(message.appserverRoleSub);
            if (error) return 'appserverRoleSub.' + error;
          }
          return null;
        };

        /**
         * Creates a CreateAppserverRoleSubResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.CreateAppserverRoleSubResponse} CreateAppserverRoleSubResponse
         */
        CreateAppserverRoleSubResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.CreateAppserverRoleSubResponse)
            return object;
          let message = new $root.api.v1.appserver.CreateAppserverRoleSubResponse();
          if (object.appserverRoleSub != null) {
            if (typeof object.appserverRoleSub !== 'object')
              throw TypeError(
                '.api.v1.appserver.CreateAppserverRoleSubResponse.appserverRoleSub: object expected'
              );
            message.appserverRoleSub = $root.api.v1.appserver.AppserverRoleSub.fromObject(
              object.appserverRoleSub
            );
          }
          return message;
        };

        /**
         * Creates a plain object from a CreateAppserverRoleSubResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.CreateAppserverRoleSubResponse} message CreateAppserverRoleSubResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAppserverRoleSubResponse.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.appserverRoleSub = null;
          if (message.appserverRoleSub != null && message.hasOwnProperty('appserverRoleSub'))
            object.appserverRoleSub = $root.api.v1.appserver.AppserverRoleSub.toObject(
              message.appserverRoleSub,
              options
            );
          return object;
        };

        /**
         * Converts this CreateAppserverRoleSubResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAppserverRoleSubResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateAppserverRoleSubResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.CreateAppserverRoleSubResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateAppserverRoleSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.CreateAppserverRoleSubResponse';
        };

        return CreateAppserverRoleSubResponse;
      })();

      appserver.DeleteAppserverRoleSubRequest = (function () {
        /**
         * Properties of a DeleteAppserverRoleSubRequest.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverRoleSubRequest
         * @property {string|null} [id] DeleteAppserverRoleSubRequest id
         */

        /**
         * Constructs a new DeleteAppserverRoleSubRequest.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverRoleSubRequest.
         * @implements IDeleteAppserverRoleSubRequest
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverRoleSubRequest=} [properties] Properties to set
         */
        function DeleteAppserverRoleSubRequest(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteAppserverRoleSubRequest id.
         * @member {string} id
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @instance
         */
        DeleteAppserverRoleSubRequest.prototype.id = '';

        /**
         * Creates a new DeleteAppserverRoleSubRequest instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleSubRequest=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest instance
         */
        DeleteAppserverRoleSubRequest.create = function create(properties) {
          return new DeleteAppserverRoleSubRequest(properties);
        };

        /**
         * Encodes the specified DeleteAppserverRoleSubRequest message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubRequest.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleSubRequest} message DeleteAppserverRoleSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleSubRequest.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverRoleSubRequest message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleSubRequest} message DeleteAppserverRoleSubRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleSubRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverRoleSubRequest message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleSubRequest.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverRoleSubRequest();
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
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleSubRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverRoleSubRequest message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverRoleSubRequest.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          if (message.id != null && message.hasOwnProperty('id'))
            if (!$util.isString(message.id)) return 'id: string expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverRoleSubRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverRoleSubRequest} DeleteAppserverRoleSubRequest
         */
        DeleteAppserverRoleSubRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverRoleSubRequest) return object;
          let message = new $root.api.v1.appserver.DeleteAppserverRoleSubRequest();
          if (object.id != null) message.id = String(object.id);
          return message;
        };

        /**
         * Creates a plain object from a DeleteAppserverRoleSubRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {api.v1.appserver.DeleteAppserverRoleSubRequest} message DeleteAppserverRoleSubRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverRoleSubRequest.toObject = function toObject(message, options) {
          if (!options) options = {};
          let object = {};
          if (options.defaults) object.id = '';
          if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
          return object;
        };

        /**
         * Converts this DeleteAppserverRoleSubRequest to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverRoleSubRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverRoleSubRequest
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverRoleSubRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverRoleSubRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverRoleSubRequest';
        };

        return DeleteAppserverRoleSubRequest;
      })();

      appserver.DeleteAppserverRoleSubResponse = (function () {
        /**
         * Properties of a DeleteAppserverRoleSubResponse.
         * @memberof api.v1.appserver
         * @interface IDeleteAppserverRoleSubResponse
         */

        /**
         * Constructs a new DeleteAppserverRoleSubResponse.
         * @memberof api.v1.appserver
         * @classdesc Represents a DeleteAppserverRoleSubResponse.
         * @implements IDeleteAppserverRoleSubResponse
         * @constructor
         * @param {api.v1.appserver.IDeleteAppserverRoleSubResponse=} [properties] Properties to set
         */
        function DeleteAppserverRoleSubResponse(properties) {
          if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteAppserverRoleSubResponse instance using the specified properties.
         * @function create
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleSubResponse=} [properties] Properties to set
         * @returns {api.v1.appserver.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse instance
         */
        DeleteAppserverRoleSubResponse.create = function create(properties) {
          return new DeleteAppserverRoleSubResponse(properties);
        };

        /**
         * Encodes the specified DeleteAppserverRoleSubResponse message. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubResponse.verify|verify} messages.
         * @function encode
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleSubResponse} message DeleteAppserverRoleSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleSubResponse.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          return writer;
        };

        /**
         * Encodes the specified DeleteAppserverRoleSubResponse message, length delimited. Does not implicitly {@link api.v1.appserver.DeleteAppserverRoleSubResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.IDeleteAppserverRoleSubResponse} message DeleteAppserverRoleSubResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAppserverRoleSubResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAppserverRoleSubResponse message from the specified reader or buffer.
         * @function decode
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {api.v1.appserver.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleSubResponse.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          let end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.api.v1.appserver.DeleteAppserverRoleSubResponse();
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
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {api.v1.appserver.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAppserverRoleSubResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAppserverRoleSubResponse message.
         * @function verify
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAppserverRoleSubResponse.verify = function verify(message) {
          if (typeof message !== 'object' || message === null) return 'object expected';
          return null;
        };

        /**
         * Creates a DeleteAppserverRoleSubResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {api.v1.appserver.DeleteAppserverRoleSubResponse} DeleteAppserverRoleSubResponse
         */
        DeleteAppserverRoleSubResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.api.v1.appserver.DeleteAppserverRoleSubResponse)
            return object;
          return new $root.api.v1.appserver.DeleteAppserverRoleSubResponse();
        };

        /**
         * Creates a plain object from a DeleteAppserverRoleSubResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {api.v1.appserver.DeleteAppserverRoleSubResponse} message DeleteAppserverRoleSubResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAppserverRoleSubResponse.toObject = function toObject() {
          return {};
        };

        /**
         * Converts this DeleteAppserverRoleSubResponse to JSON.
         * @function toJSON
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAppserverRoleSubResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteAppserverRoleSubResponse
         * @function getTypeUrl
         * @memberof api.v1.appserver.DeleteAppserverRoleSubResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteAppserverRoleSubResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/api.v1.appserver.DeleteAppserverRoleSubResponse';
        };

        return DeleteAppserverRoleSubResponse;
      })();

      return appserver;
    })();

    return v1;
  })();

  return api;
})());

export const google = ($root.google = (() => {
  /**
   * Namespace google.
   * @exports google
   * @namespace
   */
  const google = {};

  google.protobuf = (function () {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    const protobuf = {};

    protobuf.Timestamp = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Timestamp seconds.
       * @member {number|Long} seconds
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

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
        if (!writer) writer = $Writer.create();
        if (message.seconds != null && Object.hasOwnProperty.call(message, 'seconds'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.seconds);
        if (message.nanos != null && Object.hasOwnProperty.call(message, 'nanos'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.nanos);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.Timestamp();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.seconds != null && message.hasOwnProperty('seconds'))
          if (
            !$util.isInteger(message.seconds) &&
            !(
              message.seconds &&
              $util.isInteger(message.seconds.low) &&
              $util.isInteger(message.seconds.high)
            )
          )
            return 'seconds: integer|Long expected';
        if (message.nanos != null && message.hasOwnProperty('nanos'))
          if (!$util.isInteger(message.nanos)) return 'nanos: integer expected';
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
        if (object instanceof $root.google.protobuf.Timestamp) return object;
        let message = new $root.google.protobuf.Timestamp();
        if (object.seconds != null)
          if ($util.Long) (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
          else if (typeof object.seconds === 'string')
            message.seconds = parseInt(object.seconds, 10);
          else if (typeof object.seconds === 'number') message.seconds = object.seconds;
          else if (typeof object.seconds === 'object')
            message.seconds = new $util.LongBits(
              object.seconds.low >>> 0,
              object.seconds.high >>> 0
            ).toNumber();
        if (object.nanos != null) message.nanos = object.nanos | 0;
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          if ($util.Long) {
            let long = new $util.Long(0, 0, false);
            object.seconds =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                  ? long.toNumber()
                  : long;
          } else object.seconds = options.longs === String ? '0' : 0;
          object.nanos = 0;
        }
        if (message.seconds != null && message.hasOwnProperty('seconds'))
          if (typeof message.seconds === 'number')
            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
          else
            object.seconds =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.seconds)
                : options.longs === Number
                  ? new $util.LongBits(
                      message.seconds.low >>> 0,
                      message.seconds.high >>> 0
                    ).toNumber()
                  : message.seconds;
        if (message.nanos != null && message.hasOwnProperty('nanos')) object.nanos = message.nanos;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.Timestamp';
      };

      return Timestamp;
    })();

    protobuf.DoubleValue = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.DoubleValue();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (typeof message.value !== 'number') return 'value: number expected';
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
        if (object instanceof $root.google.protobuf.DoubleValue) return object;
        let message = new $root.google.protobuf.DoubleValue();
        if (object.value != null) message.value = Number(object.value);
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.value = 0;
        if (message.value != null && message.hasOwnProperty('value'))
          object.value =
            options.json && !isFinite(message.value) ? String(message.value) : message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.DoubleValue';
      };

      return DoubleValue;
    })();

    protobuf.FloatValue = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 5 =*/ 13).float(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.FloatValue();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (typeof message.value !== 'number') return 'value: number expected';
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
        if (object instanceof $root.google.protobuf.FloatValue) return object;
        let message = new $root.google.protobuf.FloatValue();
        if (object.value != null) message.value = Number(object.value);
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.value = 0;
        if (message.value != null && message.hasOwnProperty('value'))
          object.value =
            options.json && !isFinite(message.value) ? String(message.value) : message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.FloatValue';
      };

      return FloatValue;
    })();

    protobuf.Int64Value = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Int64Value value.
       * @member {number|Long} value
       * @memberof google.protobuf.Int64Value
       * @instance
       */
      Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.Int64Value();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (
            !$util.isInteger(message.value) &&
            !(
              message.value &&
              $util.isInteger(message.value.low) &&
              $util.isInteger(message.value.high)
            )
          )
            return 'value: integer|Long expected';
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
        if (object instanceof $root.google.protobuf.Int64Value) return object;
        let message = new $root.google.protobuf.Int64Value();
        if (object.value != null)
          if ($util.Long) (message.value = $util.Long.fromValue(object.value)).unsigned = false;
          else if (typeof object.value === 'string') message.value = parseInt(object.value, 10);
          else if (typeof object.value === 'number') message.value = object.value;
          else if (typeof object.value === 'object')
            message.value = new $util.LongBits(
              object.value.low >>> 0,
              object.value.high >>> 0
            ).toNumber();
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
        if (!options) options = {};
        let object = {};
        if (options.defaults)
          if ($util.Long) {
            let long = new $util.Long(0, 0, false);
            object.value =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                  ? long.toNumber()
                  : long;
          } else object.value = options.longs === String ? '0' : 0;
        if (message.value != null && message.hasOwnProperty('value'))
          if (typeof message.value === 'number')
            object.value = options.longs === String ? String(message.value) : message.value;
          else
            object.value =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.value)
                : options.longs === Number
                  ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber()
                  : message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.Int64Value';
      };

      return Int64Value;
    })();

    protobuf.UInt64Value = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * UInt64Value value.
       * @member {number|Long} value
       * @memberof google.protobuf.UInt64Value
       * @instance
       */
      UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.UInt64Value();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (
            !$util.isInteger(message.value) &&
            !(
              message.value &&
              $util.isInteger(message.value.low) &&
              $util.isInteger(message.value.high)
            )
          )
            return 'value: integer|Long expected';
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
        if (object instanceof $root.google.protobuf.UInt64Value) return object;
        let message = new $root.google.protobuf.UInt64Value();
        if (object.value != null)
          if ($util.Long) (message.value = $util.Long.fromValue(object.value)).unsigned = true;
          else if (typeof object.value === 'string') message.value = parseInt(object.value, 10);
          else if (typeof object.value === 'number') message.value = object.value;
          else if (typeof object.value === 'object')
            message.value = new $util.LongBits(
              object.value.low >>> 0,
              object.value.high >>> 0
            ).toNumber(true);
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
        if (!options) options = {};
        let object = {};
        if (options.defaults)
          if ($util.Long) {
            let long = new $util.Long(0, 0, true);
            object.value =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                  ? long.toNumber()
                  : long;
          } else object.value = options.longs === String ? '0' : 0;
        if (message.value != null && message.hasOwnProperty('value'))
          if (typeof message.value === 'number')
            object.value = options.longs === String ? String(message.value) : message.value;
          else
            object.value =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.value)
                : options.longs === Number
                  ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(
                      true
                    )
                  : message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.UInt64Value';
      };

      return UInt64Value;
    })();

    protobuf.Int32Value = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.Int32Value();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (!$util.isInteger(message.value)) return 'value: integer expected';
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
        if (object instanceof $root.google.protobuf.Int32Value) return object;
        let message = new $root.google.protobuf.Int32Value();
        if (object.value != null) message.value = object.value | 0;
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.value = 0;
        if (message.value != null && message.hasOwnProperty('value')) object.value = message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.Int32Value';
      };

      return Int32Value;
    })();

    protobuf.UInt32Value = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.UInt32Value();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (!$util.isInteger(message.value)) return 'value: integer expected';
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
        if (object instanceof $root.google.protobuf.UInt32Value) return object;
        let message = new $root.google.protobuf.UInt32Value();
        if (object.value != null) message.value = object.value >>> 0;
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.value = 0;
        if (message.value != null && message.hasOwnProperty('value')) object.value = message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.UInt32Value';
      };

      return UInt32Value;
    })();

    protobuf.BoolValue = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.BoolValue();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (typeof message.value !== 'boolean') return 'value: boolean expected';
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
        if (object instanceof $root.google.protobuf.BoolValue) return object;
        let message = new $root.google.protobuf.BoolValue();
        if (object.value != null) message.value = Boolean(object.value);
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.value = false;
        if (message.value != null && message.hasOwnProperty('value')) object.value = message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.BoolValue';
      };

      return BoolValue;
    })();

    protobuf.StringValue = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * StringValue value.
       * @member {string} value
       * @memberof google.protobuf.StringValue
       * @instance
       */
      StringValue.prototype.value = '';

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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.StringValue();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (!$util.isString(message.value)) return 'value: string expected';
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
        if (object instanceof $root.google.protobuf.StringValue) return object;
        let message = new $root.google.protobuf.StringValue();
        if (object.value != null) message.value = String(object.value);
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
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.value = '';
        if (message.value != null && message.hasOwnProperty('value')) object.value = message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.StringValue';
      };

      return StringValue;
    })();

    protobuf.BytesValue = (function () {
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
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
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
        if (!writer) writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, 'value'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.value);
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
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.BytesValue();
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
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
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
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.value != null && message.hasOwnProperty('value'))
          if (
            !(
              (message.value && typeof message.value.length === 'number') ||
              $util.isString(message.value)
            )
          )
            return 'value: buffer expected';
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
        if (object instanceof $root.google.protobuf.BytesValue) return object;
        let message = new $root.google.protobuf.BytesValue();
        if (object.value != null)
          if (typeof object.value === 'string')
            $util.base64.decode(
              object.value,
              (message.value = $util.newBuffer($util.base64.length(object.value))),
              0
            );
          else if (object.value.length >= 0) message.value = object.value;
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
        if (!options) options = {};
        let object = {};
        if (options.defaults)
          if (options.bytes === String) object.value = '';
          else {
            object.value = [];
            if (options.bytes !== Array) object.value = $util.newBuffer(object.value);
          }
        if (message.value != null && message.hasOwnProperty('value'))
          object.value =
            options.bytes === String
              ? $util.base64.encode(message.value, 0, message.value.length)
              : options.bytes === Array
                ? Array.prototype.slice.call(message.value)
                : message.value;
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
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/google.protobuf.BytesValue';
      };

      return BytesValue;
    })();

    return protobuf;
  })();

  return google;
})());

export const v1 = ($root.v1 = (() => {
  /**
   * Namespace v1.
   * @exports v1
   * @namespace
   */
  const v1 = {};

  v1.appuser = (function () {
    /**
     * Namespace appuser.
     * @memberof v1
     * @namespace
     */
    const appuser = {};

    appuser.AppuserService = (function () {
      /**
       * Constructs a new AppuserService service.
       * @memberof v1.appuser
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

      (AppuserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor =
        AppuserService;

      /**
       * Creates new AppuserService service using the specified rpc implementation.
       * @function create
       * @memberof v1.appuser.AppuserService
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
       * Callback as used by {@link v1.appuser.AppuserService#createAppuser}.
       * @memberof v1.appuser.AppuserService
       * @typedef CreateAppuserCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {v1.appuser.CreateAppuserResponse} [response] CreateAppuserResponse
       */

      /**
       * Calls CreateAppuser.
       * @function createAppuser
       * @memberof v1.appuser.AppuserService
       * @instance
       * @param {v1.appuser.ICreateAppuserRequest} request CreateAppuserRequest message or plain object
       * @param {v1.appuser.AppuserService.CreateAppuserCallback} callback Node-style callback called with the error, if any, and CreateAppuserResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (AppuserService.prototype.createAppuser = function createAppuser(request, callback) {
          return this.rpcCall(
            createAppuser,
            $root.v1.appuser.CreateAppuserRequest,
            $root.v1.appuser.CreateAppuserResponse,
            request,
            callback
          );
        }),
        'name',
        { value: 'CreateAppuser' }
      );

      /**
       * Calls CreateAppuser.
       * @function createAppuser
       * @memberof v1.appuser.AppuserService
       * @instance
       * @param {v1.appuser.ICreateAppuserRequest} request CreateAppuserRequest message or plain object
       * @returns {Promise<v1.appuser.CreateAppuserResponse>} Promise
       * @variation 2
       */

      return AppuserService;
    })();

    /**
     * AppUserStatus enum.
     * @name v1.appuser.AppUserStatus
     * @enum {number}
     * @property {number} APP_USER_STATUS_UNSPECIFIED=0 APP_USER_STATUS_UNSPECIFIED value
     * @property {number} APP_USER_STATUS_INACTIVE=1 APP_USER_STATUS_INACTIVE value
     * @property {number} APP_USER_STATUS_ONLINE=2 APP_USER_STATUS_ONLINE value
     * @property {number} APP_USER_STATUS_OFFLINE=3 APP_USER_STATUS_OFFLINE value
     * @property {number} APP_USER_STATUS_AWAY=4 APP_USER_STATUS_AWAY value
     */
    appuser.AppUserStatus = (function () {
      const valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'APP_USER_STATUS_UNSPECIFIED')] = 0;
      values[(valuesById[1] = 'APP_USER_STATUS_INACTIVE')] = 1;
      values[(valuesById[2] = 'APP_USER_STATUS_ONLINE')] = 2;
      values[(valuesById[3] = 'APP_USER_STATUS_OFFLINE')] = 3;
      values[(valuesById[4] = 'APP_USER_STATUS_AWAY')] = 4;
      return values;
    })();

    appuser.Appuser = (function () {
      /**
       * Properties of an Appuser.
       * @memberof v1.appuser
       * @interface IAppuser
       * @property {string|null} [id] Appuser id
       * @property {string|null} [username] Appuser username
       * @property {v1.appuser.AppUserStatus|null} [onlineStatus] Appuser onlineStatus
       * @property {google.protobuf.ITimestamp|null} [createdAt] Appuser createdAt
       * @property {google.protobuf.ITimestamp|null} [updatedAt] Appuser updatedAt
       */

      /**
       * Constructs a new Appuser.
       * @memberof v1.appuser
       * @classdesc Represents an Appuser.
       * @implements IAppuser
       * @constructor
       * @param {v1.appuser.IAppuser=} [properties] Properties to set
       */
      function Appuser(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Appuser id.
       * @member {string} id
       * @memberof v1.appuser.Appuser
       * @instance
       */
      Appuser.prototype.id = '';

      /**
       * Appuser username.
       * @member {string} username
       * @memberof v1.appuser.Appuser
       * @instance
       */
      Appuser.prototype.username = '';

      /**
       * Appuser onlineStatus.
       * @member {v1.appuser.AppUserStatus} onlineStatus
       * @memberof v1.appuser.Appuser
       * @instance
       */
      Appuser.prototype.onlineStatus = 0;

      /**
       * Appuser createdAt.
       * @member {google.protobuf.ITimestamp|null|undefined} createdAt
       * @memberof v1.appuser.Appuser
       * @instance
       */
      Appuser.prototype.createdAt = null;

      /**
       * Appuser updatedAt.
       * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
       * @memberof v1.appuser.Appuser
       * @instance
       */
      Appuser.prototype.updatedAt = null;

      /**
       * Creates a new Appuser instance using the specified properties.
       * @function create
       * @memberof v1.appuser.Appuser
       * @static
       * @param {v1.appuser.IAppuser=} [properties] Properties to set
       * @returns {v1.appuser.Appuser} Appuser instance
       */
      Appuser.create = function create(properties) {
        return new Appuser(properties);
      };

      /**
       * Encodes the specified Appuser message. Does not implicitly {@link v1.appuser.Appuser.verify|verify} messages.
       * @function encode
       * @memberof v1.appuser.Appuser
       * @static
       * @param {v1.appuser.IAppuser} message Appuser message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Appuser.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
        if (message.username != null && Object.hasOwnProperty.call(message, 'username'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.username);
        if (message.onlineStatus != null && Object.hasOwnProperty.call(message, 'onlineStatus'))
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.onlineStatus);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt'))
          $root.google.protobuf.Timestamp.encode(
            message.createdAt,
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
        if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt'))
          $root.google.protobuf.Timestamp.encode(
            message.updatedAt,
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified Appuser message, length delimited. Does not implicitly {@link v1.appuser.Appuser.verify|verify} messages.
       * @function encodeDelimited
       * @memberof v1.appuser.Appuser
       * @static
       * @param {v1.appuser.IAppuser} message Appuser message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Appuser.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Appuser message from the specified reader or buffer.
       * @function decode
       * @memberof v1.appuser.Appuser
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {v1.appuser.Appuser} Appuser
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Appuser.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.v1.appuser.Appuser();
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
              message.onlineStatus = reader.int32();
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
       * Decodes an Appuser message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof v1.appuser.Appuser
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {v1.appuser.Appuser} Appuser
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Appuser.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Appuser message.
       * @function verify
       * @memberof v1.appuser.Appuser
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Appuser.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.id != null && message.hasOwnProperty('id'))
          if (!$util.isString(message.id)) return 'id: string expected';
        if (message.username != null && message.hasOwnProperty('username'))
          if (!$util.isString(message.username)) return 'username: string expected';
        if (message.onlineStatus != null && message.hasOwnProperty('onlineStatus'))
          switch (message.onlineStatus) {
            default:
              return 'onlineStatus: enum value expected';
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
              break;
          }
        if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
          let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
          if (error) return 'createdAt.' + error;
        }
        if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
          let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
          if (error) return 'updatedAt.' + error;
        }
        return null;
      };

      /**
       * Creates an Appuser message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof v1.appuser.Appuser
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {v1.appuser.Appuser} Appuser
       */
      Appuser.fromObject = function fromObject(object) {
        if (object instanceof $root.v1.appuser.Appuser) return object;
        let message = new $root.v1.appuser.Appuser();
        if (object.id != null) message.id = String(object.id);
        if (object.username != null) message.username = String(object.username);
        switch (object.onlineStatus) {
          default:
            if (typeof object.onlineStatus === 'number') {
              message.onlineStatus = object.onlineStatus;
              break;
            }
            break;
          case 'APP_USER_STATUS_UNSPECIFIED':
          case 0:
            message.onlineStatus = 0;
            break;
          case 'APP_USER_STATUS_INACTIVE':
          case 1:
            message.onlineStatus = 1;
            break;
          case 'APP_USER_STATUS_ONLINE':
          case 2:
            message.onlineStatus = 2;
            break;
          case 'APP_USER_STATUS_OFFLINE':
          case 3:
            message.onlineStatus = 3;
            break;
          case 'APP_USER_STATUS_AWAY':
          case 4:
            message.onlineStatus = 4;
            break;
        }
        if (object.createdAt != null) {
          if (typeof object.createdAt !== 'object')
            throw TypeError('.v1.appuser.Appuser.createdAt: object expected');
          message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
        }
        if (object.updatedAt != null) {
          if (typeof object.updatedAt !== 'object')
            throw TypeError('.v1.appuser.Appuser.updatedAt: object expected');
          message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
        }
        return message;
      };

      /**
       * Creates a plain object from an Appuser message. Also converts values to other types if specified.
       * @function toObject
       * @memberof v1.appuser.Appuser
       * @static
       * @param {v1.appuser.Appuser} message Appuser
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Appuser.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          object.id = '';
          object.username = '';
          object.onlineStatus = options.enums === String ? 'APP_USER_STATUS_UNSPECIFIED' : 0;
          object.createdAt = null;
          object.updatedAt = null;
        }
        if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
        if (message.username != null && message.hasOwnProperty('username'))
          object.username = message.username;
        if (message.onlineStatus != null && message.hasOwnProperty('onlineStatus'))
          object.onlineStatus =
            options.enums === String
              ? $root.v1.appuser.AppUserStatus[message.onlineStatus] === undefined
                ? message.onlineStatus
                : $root.v1.appuser.AppUserStatus[message.onlineStatus]
              : message.onlineStatus;
        if (message.createdAt != null && message.hasOwnProperty('createdAt'))
          object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
        if (message.updatedAt != null && message.hasOwnProperty('updatedAt'))
          object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
        return object;
      };

      /**
       * Converts this Appuser to JSON.
       * @function toJSON
       * @memberof v1.appuser.Appuser
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Appuser.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for Appuser
       * @function getTypeUrl
       * @memberof v1.appuser.Appuser
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      Appuser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/v1.appuser.Appuser';
      };

      return Appuser;
    })();

    appuser.CreateAppuserRequest = (function () {
      /**
       * Properties of a CreateAppuserRequest.
       * @memberof v1.appuser
       * @interface ICreateAppuserRequest
       * @property {string|null} [id] CreateAppuserRequest id
       * @property {string|null} [username] CreateAppuserRequest username
       */

      /**
       * Constructs a new CreateAppuserRequest.
       * @memberof v1.appuser
       * @classdesc Represents a CreateAppuserRequest.
       * @implements ICreateAppuserRequest
       * @constructor
       * @param {v1.appuser.ICreateAppuserRequest=} [properties] Properties to set
       */
      function CreateAppuserRequest(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * CreateAppuserRequest id.
       * @member {string} id
       * @memberof v1.appuser.CreateAppuserRequest
       * @instance
       */
      CreateAppuserRequest.prototype.id = '';

      /**
       * CreateAppuserRequest username.
       * @member {string} username
       * @memberof v1.appuser.CreateAppuserRequest
       * @instance
       */
      CreateAppuserRequest.prototype.username = '';

      /**
       * Creates a new CreateAppuserRequest instance using the specified properties.
       * @function create
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {v1.appuser.ICreateAppuserRequest=} [properties] Properties to set
       * @returns {v1.appuser.CreateAppuserRequest} CreateAppuserRequest instance
       */
      CreateAppuserRequest.create = function create(properties) {
        return new CreateAppuserRequest(properties);
      };

      /**
       * Encodes the specified CreateAppuserRequest message. Does not implicitly {@link v1.appuser.CreateAppuserRequest.verify|verify} messages.
       * @function encode
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {v1.appuser.ICreateAppuserRequest} message CreateAppuserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateAppuserRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, 'id'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.id);
        if (message.username != null && Object.hasOwnProperty.call(message, 'username'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.username);
        return writer;
      };

      /**
       * Encodes the specified CreateAppuserRequest message, length delimited. Does not implicitly {@link v1.appuser.CreateAppuserRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {v1.appuser.ICreateAppuserRequest} message CreateAppuserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateAppuserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CreateAppuserRequest message from the specified reader or buffer.
       * @function decode
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {v1.appuser.CreateAppuserRequest} CreateAppuserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateAppuserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.v1.appuser.CreateAppuserRequest();
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
       * Decodes a CreateAppuserRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {v1.appuser.CreateAppuserRequest} CreateAppuserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateAppuserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CreateAppuserRequest message.
       * @function verify
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CreateAppuserRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.id != null && message.hasOwnProperty('id'))
          if (!$util.isString(message.id)) return 'id: string expected';
        if (message.username != null && message.hasOwnProperty('username'))
          if (!$util.isString(message.username)) return 'username: string expected';
        return null;
      };

      /**
       * Creates a CreateAppuserRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {v1.appuser.CreateAppuserRequest} CreateAppuserRequest
       */
      CreateAppuserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.v1.appuser.CreateAppuserRequest) return object;
        let message = new $root.v1.appuser.CreateAppuserRequest();
        if (object.id != null) message.id = String(object.id);
        if (object.username != null) message.username = String(object.username);
        return message;
      };

      /**
       * Creates a plain object from a CreateAppuserRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {v1.appuser.CreateAppuserRequest} message CreateAppuserRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CreateAppuserRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          object.id = '';
          object.username = '';
        }
        if (message.id != null && message.hasOwnProperty('id')) object.id = message.id;
        if (message.username != null && message.hasOwnProperty('username'))
          object.username = message.username;
        return object;
      };

      /**
       * Converts this CreateAppuserRequest to JSON.
       * @function toJSON
       * @memberof v1.appuser.CreateAppuserRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CreateAppuserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CreateAppuserRequest
       * @function getTypeUrl
       * @memberof v1.appuser.CreateAppuserRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CreateAppuserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/v1.appuser.CreateAppuserRequest';
      };

      return CreateAppuserRequest;
    })();

    appuser.CreateAppuserResponse = (function () {
      /**
       * Properties of a CreateAppuserResponse.
       * @memberof v1.appuser
       * @interface ICreateAppuserResponse
       */

      /**
       * Constructs a new CreateAppuserResponse.
       * @memberof v1.appuser
       * @classdesc Represents a CreateAppuserResponse.
       * @implements ICreateAppuserResponse
       * @constructor
       * @param {v1.appuser.ICreateAppuserResponse=} [properties] Properties to set
       */
      function CreateAppuserResponse(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new CreateAppuserResponse instance using the specified properties.
       * @function create
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {v1.appuser.ICreateAppuserResponse=} [properties] Properties to set
       * @returns {v1.appuser.CreateAppuserResponse} CreateAppuserResponse instance
       */
      CreateAppuserResponse.create = function create(properties) {
        return new CreateAppuserResponse(properties);
      };

      /**
       * Encodes the specified CreateAppuserResponse message. Does not implicitly {@link v1.appuser.CreateAppuserResponse.verify|verify} messages.
       * @function encode
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {v1.appuser.ICreateAppuserResponse} message CreateAppuserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateAppuserResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified CreateAppuserResponse message, length delimited. Does not implicitly {@link v1.appuser.CreateAppuserResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {v1.appuser.ICreateAppuserResponse} message CreateAppuserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateAppuserResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CreateAppuserResponse message from the specified reader or buffer.
       * @function decode
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {v1.appuser.CreateAppuserResponse} CreateAppuserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateAppuserResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.v1.appuser.CreateAppuserResponse();
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
       * Decodes a CreateAppuserResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {v1.appuser.CreateAppuserResponse} CreateAppuserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateAppuserResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CreateAppuserResponse message.
       * @function verify
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CreateAppuserResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a CreateAppuserResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {v1.appuser.CreateAppuserResponse} CreateAppuserResponse
       */
      CreateAppuserResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.v1.appuser.CreateAppuserResponse) return object;
        return new $root.v1.appuser.CreateAppuserResponse();
      };

      /**
       * Creates a plain object from a CreateAppuserResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {v1.appuser.CreateAppuserResponse} message CreateAppuserResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CreateAppuserResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this CreateAppuserResponse to JSON.
       * @function toJSON
       * @memberof v1.appuser.CreateAppuserResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CreateAppuserResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CreateAppuserResponse
       * @function getTypeUrl
       * @memberof v1.appuser.CreateAppuserResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CreateAppuserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/v1.appuser.CreateAppuserResponse';
      };

      return CreateAppuserResponse;
    })();

    return appuser;
  })();

  return v1;
})());

export { $root as default };
