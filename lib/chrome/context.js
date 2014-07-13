/* See license.txt for terms of usage */

"use strict";

const { FBTrace } = require("../core/trace.js");
const { EventTarget } = require("sdk/event/target");
const { Class } = require("sdk/core/heritage");

const Trace = FBTrace.to("DBG_CONTEXT");

/**
 * This object represents a context that is responsible for collecting
 * data about the current target (e.g. a web page). You can see this
 * object as a Document (see Document-View design pattern).
 * 
 * TODO: hook create/destroy to framework events
 */
const Context = Class(
/** @lends Context */
{
  extends: EventTarget,

  initialize: function(options) {
    EventTarget.prototype.initialize.call(this);

    this.target = options.target;

    Trace.sysout("context.initialize; " + this.getTitle(), this.target);
  },

  destroy: function() {
    Trace.sysout("context.destroy; ");
  },

  getTitle: function() {
    return this.target.url;
  }
});

// Exports from this module
exports.Context = Context;
