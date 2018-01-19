export var TestModule = (function () {
    /**
     * @param {?} parentModule
     */
    function TestModule(parentModule) {
        if (parentModule) {
            throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.");
        }
    }
  }