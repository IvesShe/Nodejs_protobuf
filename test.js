/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.websocket = (function() {

    /**
     * Namespace websocket.
     * @exports websocket
     * @namespace
     */
    var websocket = {};

    websocket.WebsocketMessage = (function() {

        /**
         * Properties of a WebsocketMessage.
         * @memberof websocket
         * @interface IWebsocketMessage
         * @property {number|null} [uid] WebsocketMessage uid
         * @property {number|null} [type] WebsocketMessage type
         * @property {string|null} [name] WebsocketMessage name
         * @property {string|null} [sex] WebsocketMessage sex
         * @property {string|null} [number] WebsocketMessage number
         * @property {Uint8Array|null} [message] WebsocketMessage message
         * @property {Array.<number>|null} [buy] WebsocketMessage buy
         * @property {Array.<websocket.WebsocketMessage.IBook>|null} [buybook] WebsocketMessage buybook
         */

        /**
         * Constructs a new WebsocketMessage.
         * @memberof websocket
         * @classdesc Represents a WebsocketMessage.
         * @implements IWebsocketMessage
         * @constructor
         * @param {websocket.IWebsocketMessage=} [properties] Properties to set
         */
        function WebsocketMessage(properties) {
            this.buy = [];
            this.buybook = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebsocketMessage uid.
         * @member {number} uid
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.uid = 0;

        /**
         * WebsocketMessage type.
         * @member {number} type
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.type = 0;

        /**
         * WebsocketMessage name.
         * @member {string} name
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.name = "";

        /**
         * WebsocketMessage sex.
         * @member {string} sex
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.sex = "";

        /**
         * WebsocketMessage number.
         * @member {string} number
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.number = "";

        /**
         * WebsocketMessage message.
         * @member {Uint8Array} message
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.message = $util.newBuffer([]);

        /**
         * WebsocketMessage buy.
         * @member {Array.<number>} buy
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.buy = $util.emptyArray;

        /**
         * WebsocketMessage buybook.
         * @member {Array.<websocket.WebsocketMessage.IBook>} buybook
         * @memberof websocket.WebsocketMessage
         * @instance
         */
        WebsocketMessage.prototype.buybook = $util.emptyArray;

        /**
         * Creates a new WebsocketMessage instance using the specified properties.
         * @function create
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {websocket.IWebsocketMessage=} [properties] Properties to set
         * @returns {websocket.WebsocketMessage} WebsocketMessage instance
         */
        WebsocketMessage.create = function create(properties) {
            return new WebsocketMessage(properties);
        };

        /**
         * Encodes the specified WebsocketMessage message. Does not implicitly {@link websocket.WebsocketMessage.verify|verify} messages.
         * @function encode
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {websocket.IWebsocketMessage} message WebsocketMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebsocketMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sex);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.number);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.message);
            if (message.buy != null && message.buy.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.buy.length; ++i)
                    writer.int32(message.buy[i]);
                writer.ldelim();
            }
            if (message.buybook != null && message.buybook.length)
                for (var i = 0; i < message.buybook.length; ++i)
                    $root.websocket.WebsocketMessage.Book.encode(message.buybook[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebsocketMessage message, length delimited. Does not implicitly {@link websocket.WebsocketMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {websocket.IWebsocketMessage} message WebsocketMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebsocketMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebsocketMessage message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.WebsocketMessage} WebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebsocketMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WebsocketMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.sex = reader.string();
                    break;
                case 5:
                    message.number = reader.string();
                    break;
                case 6:
                    message.message = reader.bytes();
                    break;
                case 7:
                    if (!(message.buy && message.buy.length))
                        message.buy = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.buy.push(reader.int32());
                    } else
                        message.buy.push(reader.int32());
                    break;
                case 8:
                    if (!(message.buybook && message.buybook.length))
                        message.buybook = [];
                    message.buybook.push($root.websocket.WebsocketMessage.Book.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WebsocketMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {websocket.WebsocketMessage} WebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebsocketMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebsocketMessage message.
         * @function verify
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebsocketMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isString(message.sex))
                    return "sex: string expected";
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isString(message.number))
                    return "number: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            if (message.buy != null && message.hasOwnProperty("buy")) {
                if (!Array.isArray(message.buy))
                    return "buy: array expected";
                for (var i = 0; i < message.buy.length; ++i)
                    if (!$util.isInteger(message.buy[i]))
                        return "buy: integer[] expected";
            }
            if (message.buybook != null && message.hasOwnProperty("buybook")) {
                if (!Array.isArray(message.buybook))
                    return "buybook: array expected";
                for (var i = 0; i < message.buybook.length; ++i) {
                    var error = $root.websocket.WebsocketMessage.Book.verify(message.buybook[i]);
                    if (error)
                        return "buybook." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WebsocketMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {websocket.WebsocketMessage} WebsocketMessage
         */
        WebsocketMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.websocket.WebsocketMessage)
                return object;
            var message = new $root.websocket.WebsocketMessage();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.sex != null)
                message.sex = String(object.sex);
            if (object.number != null)
                message.number = String(object.number);
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length)
                    message.message = object.message;
            if (object.buy) {
                if (!Array.isArray(object.buy))
                    throw TypeError(".websocket.WebsocketMessage.buy: array expected");
                message.buy = [];
                for (var i = 0; i < object.buy.length; ++i)
                    message.buy[i] = object.buy[i] | 0;
            }
            if (object.buybook) {
                if (!Array.isArray(object.buybook))
                    throw TypeError(".websocket.WebsocketMessage.buybook: array expected");
                message.buybook = [];
                for (var i = 0; i < object.buybook.length; ++i) {
                    if (typeof object.buybook[i] !== "object")
                        throw TypeError(".websocket.WebsocketMessage.buybook: object expected");
                    message.buybook[i] = $root.websocket.WebsocketMessage.Book.fromObject(object.buybook[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WebsocketMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof websocket.WebsocketMessage
         * @static
         * @param {websocket.WebsocketMessage} message WebsocketMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebsocketMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.buy = [];
                object.buybook = [];
            }
            if (options.defaults) {
                object.uid = 0;
                object.type = 0;
                object.name = "";
                object.sex = "";
                object.number = "";
                if (options.bytes === String)
                    object.message = "";
                else {
                    object.message = [];
                    if (options.bytes !== Array)
                        object.message = $util.newBuffer(object.message);
                }
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
            if (message.buy && message.buy.length) {
                object.buy = [];
                for (var j = 0; j < message.buy.length; ++j)
                    object.buy[j] = message.buy[j];
            }
            if (message.buybook && message.buybook.length) {
                object.buybook = [];
                for (var j = 0; j < message.buybook.length; ++j)
                    object.buybook[j] = $root.websocket.WebsocketMessage.Book.toObject(message.buybook[j], options);
            }
            return object;
        };

        /**
         * Converts this WebsocketMessage to JSON.
         * @function toJSON
         * @memberof websocket.WebsocketMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebsocketMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        WebsocketMessage.Book = (function() {

            /**
             * Properties of a Book.
             * @memberof websocket.WebsocketMessage
             * @interface IBook
             * @property {number|null} [bookType] Book bookType
             * @property {number|null} [bookID] Book bookID
             */

            /**
             * Constructs a new Book.
             * @memberof websocket.WebsocketMessage
             * @classdesc Represents a Book.
             * @implements IBook
             * @constructor
             * @param {websocket.WebsocketMessage.IBook=} [properties] Properties to set
             */
            function Book(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Book bookType.
             * @member {number} bookType
             * @memberof websocket.WebsocketMessage.Book
             * @instance
             */
            Book.prototype.bookType = 0;

            /**
             * Book bookID.
             * @member {number} bookID
             * @memberof websocket.WebsocketMessage.Book
             * @instance
             */
            Book.prototype.bookID = 0;

            /**
             * Creates a new Book instance using the specified properties.
             * @function create
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {websocket.WebsocketMessage.IBook=} [properties] Properties to set
             * @returns {websocket.WebsocketMessage.Book} Book instance
             */
            Book.create = function create(properties) {
                return new Book(properties);
            };

            /**
             * Encodes the specified Book message. Does not implicitly {@link websocket.WebsocketMessage.Book.verify|verify} messages.
             * @function encode
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {websocket.WebsocketMessage.IBook} message Book message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Book.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bookType != null && Object.hasOwnProperty.call(message, "bookType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bookType);
                if (message.bookID != null && Object.hasOwnProperty.call(message, "bookID"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bookID);
                return writer;
            };

            /**
             * Encodes the specified Book message, length delimited. Does not implicitly {@link websocket.WebsocketMessage.Book.verify|verify} messages.
             * @function encodeDelimited
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {websocket.WebsocketMessage.IBook} message Book message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Book.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Book message from the specified reader or buffer.
             * @function decode
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {websocket.WebsocketMessage.Book} Book
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Book.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.WebsocketMessage.Book();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bookType = reader.int32();
                        break;
                    case 2:
                        message.bookID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Book message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {websocket.WebsocketMessage.Book} Book
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Book.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Book message.
             * @function verify
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Book.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bookType != null && message.hasOwnProperty("bookType"))
                    if (!$util.isInteger(message.bookType))
                        return "bookType: integer expected";
                if (message.bookID != null && message.hasOwnProperty("bookID"))
                    if (!$util.isInteger(message.bookID))
                        return "bookID: integer expected";
                return null;
            };

            /**
             * Creates a Book message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {websocket.WebsocketMessage.Book} Book
             */
            Book.fromObject = function fromObject(object) {
                if (object instanceof $root.websocket.WebsocketMessage.Book)
                    return object;
                var message = new $root.websocket.WebsocketMessage.Book();
                if (object.bookType != null)
                    message.bookType = object.bookType | 0;
                if (object.bookID != null)
                    message.bookID = object.bookID | 0;
                return message;
            };

            /**
             * Creates a plain object from a Book message. Also converts values to other types if specified.
             * @function toObject
             * @memberof websocket.WebsocketMessage.Book
             * @static
             * @param {websocket.WebsocketMessage.Book} message Book
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Book.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.bookType = 0;
                    object.bookID = 0;
                }
                if (message.bookType != null && message.hasOwnProperty("bookType"))
                    object.bookType = message.bookType;
                if (message.bookID != null && message.hasOwnProperty("bookID"))
                    object.bookID = message.bookID;
                return object;
            };

            /**
             * Converts this Book to JSON.
             * @function toJSON
             * @memberof websocket.WebsocketMessage.Book
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Book.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Book;
        })();

        return WebsocketMessage;
    })();

    websocket.Other = (function() {

        /**
         * Properties of an Other.
         * @memberof websocket
         * @interface IOther
         * @property {string|null} [Method] Other Method
         * @property {string|null} [From] Other From
         * @property {string|null} [To] Other To
         * @property {number|null} [Code] Other Code
         * @property {Uint8Array|null} [parameters] Other parameters
         */

        /**
         * Constructs a new Other.
         * @memberof websocket
         * @classdesc Represents an Other.
         * @implements IOther
         * @constructor
         * @param {websocket.IOther=} [properties] Properties to set
         */
        function Other(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Other Method.
         * @member {string} Method
         * @memberof websocket.Other
         * @instance
         */
        Other.prototype.Method = "";

        /**
         * Other From.
         * @member {string} From
         * @memberof websocket.Other
         * @instance
         */
        Other.prototype.From = "";

        /**
         * Other To.
         * @member {string} To
         * @memberof websocket.Other
         * @instance
         */
        Other.prototype.To = "";

        /**
         * Other Code.
         * @member {number} Code
         * @memberof websocket.Other
         * @instance
         */
        Other.prototype.Code = 0;

        /**
         * Other parameters.
         * @member {Uint8Array} parameters
         * @memberof websocket.Other
         * @instance
         */
        Other.prototype.parameters = $util.newBuffer([]);

        /**
         * Creates a new Other instance using the specified properties.
         * @function create
         * @memberof websocket.Other
         * @static
         * @param {websocket.IOther=} [properties] Properties to set
         * @returns {websocket.Other} Other instance
         */
        Other.create = function create(properties) {
            return new Other(properties);
        };

        /**
         * Encodes the specified Other message. Does not implicitly {@link websocket.Other.verify|verify} messages.
         * @function encode
         * @memberof websocket.Other
         * @static
         * @param {websocket.IOther} message Other message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Other.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Method != null && Object.hasOwnProperty.call(message, "Method"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Method);
            if (message.From != null && Object.hasOwnProperty.call(message, "From"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.From);
            if (message.To != null && Object.hasOwnProperty.call(message, "To"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.To);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Code);
            if (message.parameters != null && Object.hasOwnProperty.call(message, "parameters"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.parameters);
            return writer;
        };

        /**
         * Encodes the specified Other message, length delimited. Does not implicitly {@link websocket.Other.verify|verify} messages.
         * @function encodeDelimited
         * @memberof websocket.Other
         * @static
         * @param {websocket.IOther} message Other message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Other.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Other message from the specified reader or buffer.
         * @function decode
         * @memberof websocket.Other
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {websocket.Other} Other
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Other.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.websocket.Other();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Method = reader.string();
                    break;
                case 2:
                    message.From = reader.string();
                    break;
                case 3:
                    message.To = reader.string();
                    break;
                case 4:
                    message.Code = reader.int32();
                    break;
                case 5:
                    message.parameters = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Other message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof websocket.Other
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {websocket.Other} Other
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Other.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Other message.
         * @function verify
         * @memberof websocket.Other
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Other.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Method != null && message.hasOwnProperty("Method"))
                if (!$util.isString(message.Method))
                    return "Method: string expected";
            if (message.From != null && message.hasOwnProperty("From"))
                if (!$util.isString(message.From))
                    return "From: string expected";
            if (message.To != null && message.hasOwnProperty("To"))
                if (!$util.isString(message.To))
                    return "To: string expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.parameters != null && message.hasOwnProperty("parameters"))
                if (!(message.parameters && typeof message.parameters.length === "number" || $util.isString(message.parameters)))
                    return "parameters: buffer expected";
            return null;
        };

        /**
         * Creates an Other message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof websocket.Other
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {websocket.Other} Other
         */
        Other.fromObject = function fromObject(object) {
            if (object instanceof $root.websocket.Other)
                return object;
            var message = new $root.websocket.Other();
            if (object.Method != null)
                message.Method = String(object.Method);
            if (object.From != null)
                message.From = String(object.From);
            if (object.To != null)
                message.To = String(object.To);
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.parameters != null)
                if (typeof object.parameters === "string")
                    $util.base64.decode(object.parameters, message.parameters = $util.newBuffer($util.base64.length(object.parameters)), 0);
                else if (object.parameters.length)
                    message.parameters = object.parameters;
            return message;
        };

        /**
         * Creates a plain object from an Other message. Also converts values to other types if specified.
         * @function toObject
         * @memberof websocket.Other
         * @static
         * @param {websocket.Other} message Other
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Other.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Method = "";
                object.From = "";
                object.To = "";
                object.Code = 0;
                if (options.bytes === String)
                    object.parameters = "";
                else {
                    object.parameters = [];
                    if (options.bytes !== Array)
                        object.parameters = $util.newBuffer(object.parameters);
                }
            }
            if (message.Method != null && message.hasOwnProperty("Method"))
                object.Method = message.Method;
            if (message.From != null && message.hasOwnProperty("From"))
                object.From = message.From;
            if (message.To != null && message.hasOwnProperty("To"))
                object.To = message.To;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.parameters != null && message.hasOwnProperty("parameters"))
                object.parameters = options.bytes === String ? $util.base64.encode(message.parameters, 0, message.parameters.length) : options.bytes === Array ? Array.prototype.slice.call(message.parameters) : message.parameters;
            return object;
        };

        /**
         * Converts this Other to JSON.
         * @function toJSON
         * @memberof websocket.Other
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Other.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Other;
    })();

    return websocket;
})();

module.exports = $root;
