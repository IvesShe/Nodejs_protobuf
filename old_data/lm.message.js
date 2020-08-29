/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.lm = (function() {

    /**
     * Namespace lm.
     * @exports lm
     * @namespace
     */
    var lm = {};

    lm.helloworld = (function() {

        /**
         * Properties of a helloworld.
         * @memberof lm
         * @interface Ihelloworld
         * @property {number} id helloworld id
         * @property {string} str helloworld str
         * @property {number|null} [opt] helloworld opt
         */

        /**
         * Constructs a new helloworld.
         * @memberof lm
         * @classdesc Represents a helloworld.
         * @implements Ihelloworld
         * @constructor
         * @param {lm.Ihelloworld=} [properties] Properties to set
         */
        function helloworld(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * helloworld id.
         * @member {number} id
         * @memberof lm.helloworld
         * @instance
         */
        helloworld.prototype.id = 0;

        /**
         * helloworld str.
         * @member {string} str
         * @memberof lm.helloworld
         * @instance
         */
        helloworld.prototype.str = "";

        /**
         * helloworld opt.
         * @member {number} opt
         * @memberof lm.helloworld
         * @instance
         */
        helloworld.prototype.opt = 0;

        /**
         * Creates a new helloworld instance using the specified properties.
         * @function create
         * @memberof lm.helloworld
         * @static
         * @param {lm.Ihelloworld=} [properties] Properties to set
         * @returns {lm.helloworld} helloworld instance
         */
        helloworld.create = function create(properties) {
            return new helloworld(properties);
        };

        /**
         * Encodes the specified helloworld message. Does not implicitly {@link lm.helloworld.verify|verify} messages.
         * @function encode
         * @memberof lm.helloworld
         * @static
         * @param {lm.Ihelloworld} message helloworld message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        helloworld.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.str);
            if (message.opt != null && Object.hasOwnProperty.call(message, "opt"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.opt);
            return writer;
        };

        /**
         * Encodes the specified helloworld message, length delimited. Does not implicitly {@link lm.helloworld.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lm.helloworld
         * @static
         * @param {lm.Ihelloworld} message helloworld message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        helloworld.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a helloworld message from the specified reader or buffer.
         * @function decode
         * @memberof lm.helloworld
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lm.helloworld} helloworld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        helloworld.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lm.helloworld();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.str = reader.string();
                    break;
                case 3:
                    message.opt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("str"))
                throw $util.ProtocolError("missing required 'str'", { instance: message });
            return message;
        };

        /**
         * Decodes a helloworld message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lm.helloworld
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lm.helloworld} helloworld
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        helloworld.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a helloworld message.
         * @function verify
         * @memberof lm.helloworld
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        helloworld.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.str))
                return "str: string expected";
            if (message.opt != null && message.hasOwnProperty("opt"))
                if (!$util.isInteger(message.opt))
                    return "opt: integer expected";
            return null;
        };

        /**
         * Creates a helloworld message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lm.helloworld
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lm.helloworld} helloworld
         */
        helloworld.fromObject = function fromObject(object) {
            if (object instanceof $root.lm.helloworld)
                return object;
            var message = new $root.lm.helloworld();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.str != null)
                message.str = String(object.str);
            if (object.opt != null)
                message.opt = object.opt | 0;
            return message;
        };

        /**
         * Creates a plain object from a helloworld message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lm.helloworld
         * @static
         * @param {lm.helloworld} message helloworld
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        helloworld.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.str = "";
                object.opt = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            if (message.opt != null && message.hasOwnProperty("opt"))
                object.opt = message.opt;
            return object;
        };

        /**
         * Converts this helloworld to JSON.
         * @function toJSON
         * @memberof lm.helloworld
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        helloworld.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return helloworld;
    })();

    return lm;
})();

module.exports = $root;
