(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js ***!
  \***************************************************************************/
/*! exports provided: AngularFileUploaderService, AngularFileUploaderComponent, AngularFileUploaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFileUploaderService", function() { return AngularFileUploaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFileUploaderComponent", function() { return AngularFileUploaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFileUploaderModule", function() { return AngularFileUploaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularFileUploaderService = /** @class */ (function () {
    function AngularFileUploaderService() {
    }
    AngularFileUploaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    AngularFileUploaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularFileUploaderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularFileUploaderService_Factory() { return new AngularFileUploaderService(); }, token: AngularFileUploaderService, providedIn: "root" });
    return AngularFileUploaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularFileUploaderComponent = /** @class */ (function () {
    function AngularFileUploaderComponent() {
        this.config = {};
        this.resetUpload = this.config["resetUpload"];
        this.ApiResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idDate = +new Date();
        this.reg = /(?:\.([^.]+))?$/;
        this.selectedFiles = [];
        this.notAllowedList = [];
        this.Caption = [];
        this.singleFile = true;
        this.progressBarShow = false;
        this.uploadBtn = false;
        this.uploadMsg = false;
        this.afterUpload = false;
        this.uploadClick = true;
        //console.log("id: ",this.id);
        //console.log("idDate: ",this.idDate);
        //console.log(Math.random());
    }
    /**
     * @param {?} rst
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.ngOnChanges = /**
     * @param {?} rst
     * @return {?}
     */
    function (rst) {
        if (rst["config"]) {
            this.theme = this.config["theme"] || "";
            this.id =
                this.config["id"] ||
                    parseInt((this.idDate / 10000).toString().split(".")[1]) +
                        Math.floor(Math.random() * 20) * 10000;
            this.hideProgressBar = this.config["hideProgressBar"] || false;
            this.hideResetBtn = this.config["hideResetBtn"] || false;
            this.hideSelectBtn = this.config["hideSelectBtn"] || false;
            this.uploadBtnText = this.config["uploadBtnText"] || "Upload";
            this.maxSize = this.config["maxSize"] || 20;
            this.uploadAPI = this.config["uploadAPI"]["url"];
            this.formatsAllowed =
                this.config["formatsAllowed"] || ".jpg,.png,.pdf,.docx,.txt,.gif,.jpeg";
            this.multiple = this.config["multiple"] || false;
            this.headers = this.config["uploadAPI"]["headers"] || {};
            this.attachPinText =
                this.config["attachPinText"] || "Attach supporting documents..";
            //console.log("config: ", this.config);
            //console.log(this.config["maxSize"]);
            //console.log(this.headers);
            //console.log("rst: ", rst);
        }
        if (rst["resetUpload"]) {
            if (rst["resetUpload"].currentValue === true) {
                this.resetFileUpload();
            }
        }
    };
    /**
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //console.log("Id: ", this.id);
        this.resetUpload = false;
    };
    /**
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.resetFileUpload = /**
     * @return {?}
     */
    function () {
        this.selectedFiles = [];
        this.Caption = [];
        this.notAllowedList = [];
        this.uploadMsg = false;
        this.uploadBtn = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        //console.log(this.maxSize + this.formatsAllowed + this.multiple);
        this.notAllowedList = [];
        //console.log("onchange hit");
        if (this.afterUpload || !this.multiple) {
            this.selectedFiles = [];
            this.Caption = [];
            this.afterUpload = false;
        }
        //FORMATS ALLOWED LIST
        //console.log("FORMATS ALLOWED LIST= "+this.formatsAllowed);
        //NO OF FORMATS ALLOWED
        /** @type {?} */
        var formatsCount;
        formatsCount = this.formatsAllowed.match(new RegExp("\\.", "g"));
        formatsCount = formatsCount.length;
        //console.log("NO OF FORMATS ALLOWED= "+formatsCount);
        //console.log("-------------------------------");
        //ITERATE SELECTED FILES
        /** @type {?} */
        var file;
        if (event.type == "drop") {
            file = event.dataTransfer.files;
            //console.log("type: drop");
        }
        else {
            file = event.target.files || event.srcElement.files;
            //console.log("type: change");
        }
        //console.log(file);
        /** @type {?} */
        var currentFileExt;
        /** @type {?} */
        var ext;
        /** @type {?} */
        var frmtAllowed;
        for (var i = 0; i < file.length; i++) {
            //CHECK FORMAT
            //CURRENT FILE EXTENSION
            currentFileExt = this.reg.exec(file[i].name);
            currentFileExt = currentFileExt[1];
            //console.log(file[i].name);
            frmtAllowed = false;
            //FORMAT ALLOWED LIST ITERATE
            for (var j = formatsCount; j > 0; j--) {
                ext = this.formatsAllowed.split(".")[j];
                //console.log("FORMAT LIST ("+j+")= "+ext.split(",")[0]);
                if (j == formatsCount) {
                    ext = this.formatsAllowed.split(".")[j] + ",";
                } //check format
                if (currentFileExt.toLowerCase() == ext.split(",")[0]) {
                    frmtAllowed = true;
                }
            }
            if (frmtAllowed) {
                //console.log("FORMAT ALLOWED");
                //CHECK SIZE
                if (file[i].size > this.maxSize * 1024000) {
                    //console.log("SIZE NOT ALLOWED ("+file[i].size+")");
                    this.notAllowedList.push({
                        fileName: file[i].name,
                        fileSize: this.convertSize(file[i].size),
                        errorMsg: "Invalid size"
                    });
                    continue;
                }
                else {
                    //format allowed and size allowed then add file to selectedFile array
                    this.selectedFiles.push(file[i]);
                }
            }
            else {
                //console.log("FORMAT NOT ALLOWED");
                this.notAllowedList.push({
                    fileName: file[i].name,
                    fileSize: this.convertSize(file[i].size),
                    errorMsg: "Invalid format"
                });
                continue;
            }
        }
        if (this.selectedFiles.length !== 0) {
            this.uploadBtn = true;
            if (this.theme == "attachPin")
                this.uploadFiles();
        }
        else {
            this.uploadBtn = false;
        }
        this.uploadMsg = false;
        this.uploadClick = true;
        this.percentComplete = 0;
        event.target.value = null;
    };
    /**
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.uploadFiles = /**
     * @return {?}
     */
    function () {
        //console.log(this.selectedFiles);
        var _this = this;
        //console.log(this.selectedFiles);
        /** @type {?} */
        var i;
        this.progressBarShow = true;
        this.uploadClick = false;
        this.notAllowedList = [];
        /** @type {?} */
        var isError = false;
        /** @type {?} */
        var xhr = new XMLHttpRequest();
        /** @type {?} */
        var formData = new FormData();
        for (i = 0; i < this.selectedFiles.length; i++) {
            if (this.Caption[i] == undefined)
                this.Caption[i] = "file" + i;
            //Add DATA TO BE SENT
            formData.append(this.Caption[i], this.selectedFiles[i] /*, this.selectedFiles[i].name*/);
            //console.log(this.selectedFiles[i]+"{"+this.Caption[i]+" (Caption)}");
        }
        if (i > 1) {
            this.singleFile = false;
        }
        else {
            this.singleFile = true;
        }
        xhr.onreadystatechange = function (evnt) {
            //console.log("onready");
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    isError = true;
                    _this.progressBarShow = false;
                    _this.uploadBtn = false;
                    _this.uploadMsg = true;
                    _this.afterUpload = true;
                    _this.uploadMsgText = "Upload Failed !";
                    _this.uploadMsgClass = "text-danger lead";
                    //console.log(this.uploadMsgText);
                    //console.log(evnt);
                }
                _this.ApiResponse.emit(xhr);
            }
        };
        xhr.upload.onprogress = function (evnt) {
            _this.uploadBtn = false; // button should be disabled by process uploading
            if (evnt.lengthComputable) {
                _this.percentComplete = Math.round((evnt.loaded / evnt.total) * 100);
            }
            //console.log("Progress..."/*+this.percentComplete+" %"*/);
        };
        xhr.onload = function (evnt) {
            //console.log("onload");
            //console.log(evnt);
            _this.progressBarShow = false;
            _this.uploadBtn = false;
            _this.uploadMsg = true;
            _this.afterUpload = true;
            if (!isError) {
                _this.uploadMsgText = "Successfully Uploaded !";
                _this.uploadMsgClass = "text-success lead";
                //console.log(this.uploadMsgText + " " + this.selectedFiles.length + " file");
            }
        };
        xhr.onerror = function (evnt) {
            //console.log("onerror");
            //console.log(evnt);
        };
        xhr.open("POST", this.uploadAPI, true);
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(this.headers)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var key = _b.value;
                // Object.keys will give an Array of keys
                xhr.setRequestHeader(key, this.headers[key]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //let token = sessionStorage.getItem("token");
        //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        //xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        xhr.send(formData);
        var e_1, _c;
    };
    /**
     * @param {?} i
     * @param {?} sf_na
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.removeFile = /**
     * @param {?} i
     * @param {?} sf_na
     * @return {?}
     */
    function (i, sf_na) {
        //console.log("remove file clicked " + i)
        if (sf_na == "sf") {
            this.selectedFiles.splice(i, 1);
            this.Caption.splice(i, 1);
        }
        else {
            this.notAllowedList.splice(i, 1);
        }
        if (this.selectedFiles.length == 0) {
            this.uploadBtn = false;
        }
    };
    /**
     * @param {?} fileSize
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.convertSize = /**
     * @param {?} fileSize
     * @return {?}
     */
    function (fileSize) {
        //console.log(fileSize + " - "+ str);
        return fileSize < 1024000
            ? (fileSize / 1024).toFixed(2) + " KB"
            : (fileSize / 1024000).toFixed(2) + " MB";
    };
    /**
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.attachpinOnclick = /**
     * @return {?}
     */
    function () {
        //console.log("ID: ", this.id);
        (/** @type {?} */ (document.getElementById("sel" + this.id))).click();
        //$("#"+"sel"+this.id).click();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        //console.log("drop: ", event);
        //console.log("drop: ", event.dataTransfer.files);
        this.onChange(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AngularFileUploaderComponent.prototype.allowDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        //console.log("allowDrop: ",event)
    };
    AngularFileUploaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "angular-file-uploader",
                    template: "<div class=\"container\" *ngIf=\"(theme !== 'attachPin')\" id=\"default\">\n\n    <!-- Drag n Drop theme Starts -->\n    <div *ngIf=\"theme == 'dragNDrop'\" id=\"dragNDrop\" [ngClass]=\"(hideSelectBtn && hideResetBtn) ? null : 'dragNDropBtmPad'\" class=\"dragNDrop\">\n        <div style=\"position:relative;\">\n            <div id=\"div1\" class=\"div1 afu-dragndrop-box\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\">\n                <p class=\"afu-dragndrop-text\">Drag N Drop</p>\n            </div>\n            <!-- <span class='label label-info' id=\"upload-file-info{{id}}\">{{selectedFiles[0]?.name}}</span> -->\n        </div>\n    </div>\n    <!-- Drag n Drop theme Ends -->\n\n    <label for=\"sel{{id}}\" class=\"btn btn-primary btn-sm afu-select-btn\" *ngIf=\"!hideSelectBtn\">Select File<span *ngIf=\"multiple\">s</span></label>\n    <input type=\"file\" id=\"sel{{id}}\" style=\"display: none\" *ngIf=\"!hideSelectBtn\" (change)=\"onChange($event)\" title=\"Select file\"\n        name=\"files[]\" [accept]=formatsAllowed [attr.multiple]=\"multiple ? '' : null\" />\n    <button class=\"btn btn-info btn-sm resetBtn afu-reset-btn\" (click)=\"resetFileUpload()\" *ngIf=\"!hideResetBtn\">Reset</button>\n    <br *ngIf=\"!hideSelectBtn\">\n    <p class=\"constraints-info afu-constraints-info\">({{formatsAllowed}}) Size limit- {{(convertSize(maxSize *1024000))}}</p>\n    <!--Selected file list-->\n    <div class=\"row afu-valid-file\" *ngFor=\"let sf of selectedFiles;let i=index\" >\n        <p class=\"col-xs-3 textOverflow\"><span class=\"text-primary\">{{sf.name}}</span></p>\n        <p class=\"col-xs-3 padMarg sizeC\"><strong>({{convertSize(sf.size)}})</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n        <!--  <input class=\"col-xs-3 progress caption\"  type=\"text\"  placeholder=\"Caption..\"  [(ngModel)]=\"Caption[i]\"  *ngIf=\"uploadClick\"/> -->\n        <div class=\"progress col-xs-3 padMarg afu-progress-bar\" *ngIf=\"singleFile && progressBarShow && !hideProgressBar\">\n            <span class=\"progress-bar progress-bar-success\" role=\"progressbar\" [ngStyle]=\"{'width':percentComplete+'%'}\">{{percentComplete}}%</span>\n        </div>\n        <a class=\"col-xs-1\" role=\"button\" (click)=\"removeFile(i,'sf')\" *ngIf=\"uploadClick\"><i class=\"fa fa-times\"></i></a>\n    </div>\n    <!--Invalid file list-->\n    <div class=\"row text-danger afu-invalid-file\" *ngFor=\"let na of notAllowedList;let j=index\">\n        <p class=\"col-xs-3 textOverflow\"><span>{{na['fileName']}}</span></p>\n        <p class=\"col-xs-3 padMarg sizeC\"><strong>({{na['fileSize']}})</strong></p>\n        <p class=\"col-xs-3 \">{{na['errorMsg']}}</p>\n        <a class=\"col-xs-1 delFileIcon\" role=\"button\" (click)=\"removeFile(j,'na')\" *ngIf=\"uploadClick\">&nbsp;<i class=\"fa fa-times\"></i></a>\n    </div>\n\n    <p *ngIf=\"uploadMsg\" class=\"{{uploadMsgClass}} + afu-upload-status\">{{uploadMsgText}}<p>\n    <div *ngIf=\"!singleFile && progressBarShow && !hideProgressBar\">\n        <div class=\"progress col-xs-4 padMarg afu-progress-bar\">\n            <span class=\"progress-bar progress-bar-success\" role=\"progressbar\" [ngStyle]=\"{'width':percentComplete+'%'}\">{{percentComplete}}%</span>\n        </div>\n        <br>\n        <br>\n    </div>\n    <button class=\"btn btn-success afu-upload-btn\" type=\"button\" (click)=\"uploadFiles()\" [disabled]=!uploadBtn>{{uploadBtnText}}</button>\n    <br>\n</div>\n\n<!--/////////////////////////// ATTACH PIN THEME  //////////////////////////////////////////////////////////-->\n<div *ngIf=\"theme == 'attachPin'\" id=\"attachPin\">\n    <div style=\"position:relative;padding-left:6px\">\n        <a class='btn up_btn afu-attach-pin' (click)=\"attachpinOnclick()\">\n            {{attachPinText}}\n            <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\n            <!-- <p style=\"margin-top:10px\">({{formatsAllowed}}) Size limit- {{(convertSize(maxSize * 1024000))}}</p> -->\n            <input type=\"file\" id=\"sel{{id}}\" (change)=\"onChange($event)\" style=\"display: none\" title=\"Select file\" name=\"files[]\" [accept]=formatsAllowed\n                [attr.multiple]=\"multiple ? '' : null\" />\n            <br>\n        </a>\n        &nbsp;\n        <span class='label label-info' id=\"upload-file-info{{id}}\">{{selectedFiles[0]?.name}}</span>\n    </div>\n</div>\n\n<!--/////////////////////////// DRAG N DROP THEME  //////////////////////////////////////////////////////////-->\n<!-- <div *ngIf=\"theme == 'dragNDrop'\" id=\"dragNDrop\">\n  <div style=\"position:relative;padding-left:6px\">\n    <div id=\"div1\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\">\n      <p>Drag N Drop</p>\n    </div>\n    <span class='label label-info' id=\"upload-file-info{{id}}\">{{selectedFiles[0]?.name}}</span>\n  </div>\n</div> -->",
                    styles: [".constraints-info{margin-top:10px;font-style:italic}.padMarg{padding:0;margin-bottom:0}.caption{margin-right:5px}.textOverflow{white-space:nowrap;padding-right:0;overflow:hidden;text-overflow:ellipsis}.up_btn{color:#000;background-color:transparent;border:2px solid #5c5b5b;border-radius:22px}.delFileIcon{text-decoration:none;color:#ce0909}.dragNDrop .div1{display:border-box;border:2px dashed #5c5b5b;height:6rem;width:20rem}.dragNDrop .div1>p{text-align:center;font-weight:700;color:#5c5b5b;margin-top:1.4em}.dragNDropBtmPad{padding-bottom:2rem}@media screen and (max-width:620px){.caption{padding:0}}@media screen and (max-width:510px){.sizeC{width:25%}}@media screen and (max-width:260px){.caption,.sizeC{font-size:10px}}.resetBtn{margin-left:3px}"]
                },] },
    ];
    AngularFileUploaderComponent.ctorParameters = function () { return []; };
    AngularFileUploaderComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resetUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ApiResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AngularFileUploaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularFileUploaderModule = /** @class */ (function () {
    function AngularFileUploaderModule() {
    }
    AngularFileUploaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [AngularFileUploaderComponent],
                    exports: [AngularFileUploaderComponent]
                },] },
    ];
    return AngularFileUploaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1maWxlLXVwbG9hZGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWZpbGUtdXBsb2FkZXIvbGliL2FuZ3VsYXItZmlsZS11cGxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLWZpbGUtdXBsb2FkZXIvbGliL2FuZ3VsYXItZmlsZS11cGxvYWRlci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItZmlsZS11cGxvYWRlci9saWIvYW5ndWxhci1maWxlLXVwbG9hZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGaWxlVXBsb2FkZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYW5ndWxhci1maWxlLXVwbG9hZGVyXCIsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiICpuZ0lmPVwiKHRoZW1lICE9PSAnYXR0YWNoUGluJylcIiBpZD1cImRlZmF1bHRcIj5cblxuICAgIDwhLS0gRHJhZyBuIERyb3AgdGhlbWUgU3RhcnRzIC0tPlxuICAgIDxkaXYgKm5nSWY9XCJ0aGVtZSA9PSAnZHJhZ05Ecm9wJ1wiIGlkPVwiZHJhZ05Ecm9wXCIgW25nQ2xhc3NdPVwiKGhpZGVTZWxlY3RCdG4gJiYgaGlkZVJlc2V0QnRuKSA/IG51bGwgOiAnZHJhZ05Ecm9wQnRtUGFkJ1wiIGNsYXNzPVwiZHJhZ05Ecm9wXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXYxXCIgY2xhc3M9XCJkaXYxIGFmdS1kcmFnbmRyb3AtYm94XCIgKGRyb3ApPVwiZHJvcCgkZXZlbnQpXCIgKGRyYWdvdmVyKT1cImFsbG93RHJvcCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhZnUtZHJhZ25kcm9wLXRleHRcIj5EcmFnIE4gRHJvcDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz0nbGFiZWwgbGFiZWwtaW5mbycgaWQ9XCJ1cGxvYWQtZmlsZS1pbmZve3tpZH19XCI+e3tzZWxlY3RlZEZpbGVzWzBdPy5uYW1lfX08L3NwYW4+IC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIERyYWcgbiBEcm9wIHRoZW1lIEVuZHMgLS0+XG5cbiAgICA8bGFiZWwgZm9yPVwic2Vse3tpZH19XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGFmdS1zZWxlY3QtYnRuXCIgKm5nSWY9XCIhaGlkZVNlbGVjdEJ0blwiPlNlbGVjdCBGaWxlPHNwYW4gKm5nSWY9XCJtdWx0aXBsZVwiPnM8L3NwYW4+PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInNlbHt7aWR9fVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiICpuZ0lmPVwiIWhpZGVTZWxlY3RCdG5cIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiB0aXRsZT1cIlNlbGVjdCBmaWxlXCJcbiAgICAgICAgbmFtZT1cImZpbGVzW11cIiBbYWNjZXB0XT1mb3JtYXRzQWxsb3dlZCBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZSA/ICcnIDogbnVsbFwiIC8+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tc20gcmVzZXRCdG4gYWZ1LXJlc2V0LWJ0blwiIChjbGljayk9XCJyZXNldEZpbGVVcGxvYWQoKVwiICpuZ0lmPVwiIWhpZGVSZXNldEJ0blwiPlJlc2V0PC9idXR0b24+XG4gICAgPGJyICpuZ0lmPVwiIWhpZGVTZWxlY3RCdG5cIj5cbiAgICA8cCBjbGFzcz1cImNvbnN0cmFpbnRzLWluZm8gYWZ1LWNvbnN0cmFpbnRzLWluZm9cIj4oe3tmb3JtYXRzQWxsb3dlZH19KSBTaXplIGxpbWl0LSB7eyhjb252ZXJ0U2l6ZShtYXhTaXplICoxMDI0MDAwKSl9fTwvcD5cbiAgICA8IS0tU2VsZWN0ZWQgZmlsZSBsaXN0LS0+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBhZnUtdmFsaWQtZmlsZVwiICpuZ0Zvcj1cImxldCBzZiBvZiBzZWxlY3RlZEZpbGVzO2xldCBpPWluZGV4XCIgPlxuICAgICAgICA8cCBjbGFzcz1cImNvbC14cy0zIHRleHRPdmVyZmxvd1wiPjxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+e3tzZi5uYW1lfX08L3NwYW4+PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImNvbC14cy0zIHBhZE1hcmcgc2l6ZUNcIj48c3Ryb25nPih7e2NvbnZlcnRTaXplKHNmLnNpemUpfX0pPC9zdHJvbmc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9wPlxuICAgICAgICA8IS0tICA8aW5wdXQgY2xhc3M9XCJjb2wteHMtMyBwcm9ncmVzcyBjYXB0aW9uXCIgIHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiQ2FwdGlvbi4uXCIgIFsobmdNb2RlbCldPVwiQ2FwdGlvbltpXVwiICAqbmdJZj1cInVwbG9hZENsaWNrXCIvPiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIGNvbC14cy0zIHBhZE1hcmcgYWZ1LXByb2dyZXNzLWJhclwiICpuZ0lmPVwic2luZ2xlRmlsZSAmJiBwcm9ncmVzc0JhclNob3cgJiYgIWhpZGVQcm9ncmVzc0JhclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3NcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzpwZXJjZW50Q29tcGxldGUrJyUnfVwiPnt7cGVyY2VudENvbXBsZXRlfX0lPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgY2xhc3M9XCJjb2wteHMtMVwiIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlRmlsZShpLCdzZicpXCIgKm5nSWY9XCJ1cGxvYWRDbGlja1wiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+PC9hPlxuICAgIDwvZGl2PlxuICAgIDwhLS1JbnZhbGlkIGZpbGUgbGlzdC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1kYW5nZXIgYWZ1LWludmFsaWQtZmlsZVwiICpuZ0Zvcj1cImxldCBuYSBvZiBub3RBbGxvd2VkTGlzdDtsZXQgaj1pbmRleFwiPlxuICAgICAgICA8cCBjbGFzcz1cImNvbC14cy0zIHRleHRPdmVyZmxvd1wiPjxzcGFuPnt7bmFbJ2ZpbGVOYW1lJ119fTwvc3Bhbj48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiY29sLXhzLTMgcGFkTWFyZyBzaXplQ1wiPjxzdHJvbmc+KHt7bmFbJ2ZpbGVTaXplJ119fSk8L3N0cm9uZz48L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiY29sLXhzLTMgXCI+e3tuYVsnZXJyb3JNc2cnXX19PC9wPlxuICAgICAgICA8YSBjbGFzcz1cImNvbC14cy0xIGRlbEZpbGVJY29uXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmVGaWxlKGosJ25hJylcIiAqbmdJZj1cInVwbG9hZENsaWNrXCI+Jm5ic3A7PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8cCAqbmdJZj1cInVwbG9hZE1zZ1wiIGNsYXNzPVwie3t1cGxvYWRNc2dDbGFzc319ICsgYWZ1LXVwbG9hZC1zdGF0dXNcIj57e3VwbG9hZE1zZ1RleHR9fTxwPlxuICAgIDxkaXYgKm5nSWY9XCIhc2luZ2xlRmlsZSAmJiBwcm9ncmVzc0JhclNob3cgJiYgIWhpZGVQcm9ncmVzc0JhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgY29sLXhzLTQgcGFkTWFyZyBhZnUtcHJvZ3Jlc3MtYmFyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3VjY2Vzc1wiIHJvbGU9XCJwcm9ncmVzc2JhclwiIFtuZ1N0eWxlXT1cInsnd2lkdGgnOnBlcmNlbnRDb21wbGV0ZSsnJSd9XCI+e3twZXJjZW50Q29tcGxldGV9fSU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGFmdS11cGxvYWQtYnRuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGxvYWRGaWxlcygpXCIgW2Rpc2FibGVkXT0hdXBsb2FkQnRuPnt7dXBsb2FkQnRuVGV4dH19PC9idXR0b24+XG4gICAgPGJyPlxuPC9kaXY+XG5cbjwhLS0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQVRUQUNIIFBJTiBUSEVNRSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy0tPlxuPGRpdiAqbmdJZj1cInRoZW1lID09ICdhdHRhY2hQaW4nXCIgaWQ9XCJhdHRhY2hQaW5cIj5cbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjZweFwiPlxuICAgICAgICA8YSBjbGFzcz0nYnRuIHVwX2J0biBhZnUtYXR0YWNoLXBpbicgKGNsaWNrKT1cImF0dGFjaHBpbk9uY2xpY2soKVwiPlxuICAgICAgICAgICAge3thdHRhY2hQaW5UZXh0fX1cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGFwZXJjbGlwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgPCEtLSA8cCBzdHlsZT1cIm1hcmdpbi10b3A6MTBweFwiPih7e2Zvcm1hdHNBbGxvd2VkfX0pIFNpemUgbGltaXQtIHt7KGNvbnZlcnRTaXplKG1heFNpemUgKiAxMDI0MDAwKSl9fTwvcD4gLS0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInNlbHt7aWR9fVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIHRpdGxlPVwiU2VsZWN0IGZpbGVcIiBuYW1lPVwiZmlsZXNbXVwiIFthY2NlcHRdPWZvcm1hdHNBbGxvd2VkXG4gICAgICAgICAgICAgICAgW2F0dHIubXVsdGlwbGVdPVwibXVsdGlwbGUgPyAnJyA6IG51bGxcIiAvPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICA8L2E+XG4gICAgICAgICZuYnNwO1xuICAgICAgICA8c3BhbiBjbGFzcz0nbGFiZWwgbGFiZWwtaW5mbycgaWQ9XCJ1cGxvYWQtZmlsZS1pbmZve3tpZH19XCI+e3tzZWxlY3RlZEZpbGVzWzBdPy5uYW1lfX08L3NwYW4+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBEUkFHIE4gRFJPUCBUSEVNRSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy0tPlxuPCEtLSA8ZGl2ICpuZ0lmPVwidGhlbWUgPT0gJ2RyYWdORHJvcCdcIiBpZD1cImRyYWdORHJvcFwiPlxuICA8ZGl2IHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7cGFkZGluZy1sZWZ0OjZweFwiPlxuICAgIDxkaXYgaWQ9XCJkaXYxXCIgKGRyb3ApPVwiZHJvcCgkZXZlbnQpXCIgKGRyYWdvdmVyKT1cImFsbG93RHJvcCgkZXZlbnQpXCI+XG4gICAgICA8cD5EcmFnIE4gRHJvcDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz0nbGFiZWwgbGFiZWwtaW5mbycgaWQ9XCJ1cGxvYWQtZmlsZS1pbmZve3tpZH19XCI+e3tzZWxlY3RlZEZpbGVzWzBdPy5uYW1lfX08L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+IC0tPmAgLFxuICBzdHlsZXM6IFtgLmNvbnN0cmFpbnRzLWluZm97bWFyZ2luLXRvcDoxMHB4O2ZvbnQtc3R5bGU6aXRhbGljfS5wYWRNYXJne3BhZGRpbmc6MDttYXJnaW4tYm90dG9tOjB9LmNhcHRpb257bWFyZ2luLXJpZ2h0OjVweH0udGV4dE92ZXJmbG93e3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nLXJpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LnVwX2J0bntjb2xvcjojMDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjJweCBzb2xpZCAjNWM1YjViO2JvcmRlci1yYWRpdXM6MjJweH0uZGVsRmlsZUljb257dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2NlMDkwOX0uZHJhZ05Ecm9wIC5kaXYxe2Rpc3BsYXk6Ym9yZGVyLWJveDtib3JkZXI6MnB4IGRhc2hlZCAjNWM1YjViO2hlaWdodDo2cmVtO3dpZHRoOjIwcmVtfS5kcmFnTkRyb3AgLmRpdjE+cHt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDo3MDA7Y29sb3I6IzVjNWI1YjttYXJnaW4tdG9wOjEuNGVtfS5kcmFnTkRyb3BCdG1QYWR7cGFkZGluZy1ib3R0b206MnJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYyMHB4KXsuY2FwdGlvbntwYWRkaW5nOjB9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTEwcHgpey5zaXplQ3t3aWR0aDoyNSV9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MjYwcHgpey5jYXB0aW9uLC5zaXplQ3tmb250LXNpemU6MTBweH19LnJlc2V0QnRue21hcmdpbi1sZWZ0OjNweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRmlsZVVwbG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoKVxuICByZXNldFVwbG9hZDogYm9vbGVhbiA9IHRoaXMuY29uZmlnW1wicmVzZXRVcGxvYWRcIl07XG4gIEBPdXRwdXQoKVxuICBBcGlSZXNwb25zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0aGVtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBoaWRlUHJvZ3Jlc3NCYXI6IGJvb2xlYW47XG4gIG1heFNpemU6IG51bWJlcjtcbiAgdXBsb2FkQVBJOiBzdHJpbmc7XG4gIGZvcm1hdHNBbGxvd2VkOiBzdHJpbmc7XG4gIG11bHRpcGxlOiBib29sZWFuO1xuICBoZWFkZXJzOiBhbnk7XG4gIGhpZGVSZXNldEJ0bjogYm9vbGVhbjtcbiAgaGlkZVNlbGVjdEJ0bjogYm9vbGVhbjtcbiAgYXR0YWNoUGluVGV4dDogc3RyaW5nO1xuICB1cGxvYWRCdG5UZXh0OiBzdHJpbmc7XG5cbiAgaWREYXRlOiBudW1iZXIgPSArbmV3IERhdGUoKTtcbiAgcmVnOiBSZWdFeHAgPSAvKD86XFwuKFteLl0rKSk/JC87XG4gIHNlbGVjdGVkRmlsZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgbm90QWxsb3dlZExpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcbiAgQ2FwdGlvbjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBzaW5nbGVGaWxlID0gdHJ1ZTtcbiAgcHJvZ3Jlc3NCYXJTaG93ID0gZmFsc2U7XG4gIHVwbG9hZEJ0biA9IGZhbHNlO1xuICB1cGxvYWRNc2cgPSBmYWxzZTtcbiAgYWZ0ZXJVcGxvYWQgPSBmYWxzZTtcbiAgdXBsb2FkQ2xpY2sgPSB0cnVlO1xuICB1cGxvYWRNc2dUZXh0OiBzdHJpbmc7XG4gIHVwbG9hZE1zZ0NsYXNzOiBzdHJpbmc7XG4gIHBlcmNlbnRDb21wbGV0ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vY29uc29sZS5sb2coXCJpZDogXCIsdGhpcy5pZCk7XG4gICAgLy9jb25zb2xlLmxvZyhcImlkRGF0ZTogXCIsdGhpcy5pZERhdGUpO1xuICAgIC8vY29uc29sZS5sb2coTWF0aC5yYW5kb20oKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhyc3Q6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAocnN0W1wiY29uZmlnXCJdKSB7XG4gICAgICB0aGlzLnRoZW1lID0gdGhpcy5jb25maWdbXCJ0aGVtZVwiXSB8fCBcIlwiO1xuICAgICAgdGhpcy5pZCA9XG4gICAgICAgIHRoaXMuY29uZmlnW1wiaWRcIl0gfHxcbiAgICAgICAgcGFyc2VJbnQoKHRoaXMuaWREYXRlIC8gMTAwMDApLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdKSArXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICogMTAwMDA7XG4gICAgICB0aGlzLmhpZGVQcm9ncmVzc0JhciA9IHRoaXMuY29uZmlnW1wiaGlkZVByb2dyZXNzQmFyXCJdIHx8IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlUmVzZXRCdG4gPSB0aGlzLmNvbmZpZ1tcImhpZGVSZXNldEJ0blwiXSB8fCBmYWxzZTtcbiAgICAgIHRoaXMuaGlkZVNlbGVjdEJ0biA9IHRoaXMuY29uZmlnW1wiaGlkZVNlbGVjdEJ0blwiXSB8fCBmYWxzZTtcbiAgICAgIHRoaXMudXBsb2FkQnRuVGV4dCA9IHRoaXMuY29uZmlnW1widXBsb2FkQnRuVGV4dFwiXSB8fCBcIlVwbG9hZFwiO1xuICAgICAgdGhpcy5tYXhTaXplID0gdGhpcy5jb25maWdbXCJtYXhTaXplXCJdIHx8IDIwO1xuICAgICAgdGhpcy51cGxvYWRBUEkgPSB0aGlzLmNvbmZpZ1tcInVwbG9hZEFQSVwiXVtcInVybFwiXTtcbiAgICAgIHRoaXMuZm9ybWF0c0FsbG93ZWQgPVxuICAgICAgICB0aGlzLmNvbmZpZ1tcImZvcm1hdHNBbGxvd2VkXCJdIHx8IFwiLmpwZywucG5nLC5wZGYsLmRvY3gsLnR4dCwuZ2lmLC5qcGVnXCI7XG4gICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy5jb25maWdbXCJtdWx0aXBsZVwiXSB8fCBmYWxzZTtcbiAgICAgIHRoaXMuaGVhZGVycyA9IHRoaXMuY29uZmlnW1widXBsb2FkQVBJXCJdW1wiaGVhZGVyc1wiXSB8fCB7fTtcbiAgICAgIHRoaXMuYXR0YWNoUGluVGV4dCA9XG4gICAgICAgIHRoaXMuY29uZmlnW1wiYXR0YWNoUGluVGV4dFwiXSB8fCBcIkF0dGFjaCBzdXBwb3J0aW5nIGRvY3VtZW50cy4uXCI7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiY29uZmlnOiBcIiwgdGhpcy5jb25maWcpO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbmZpZ1tcIm1heFNpemVcIl0pO1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmhlYWRlcnMpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInJzdDogXCIsIHJzdCk7XG4gICAgfVxuXG4gICAgaWYgKHJzdFtcInJlc2V0VXBsb2FkXCJdKSB7XG4gICAgICBpZiAocnN0W1wicmVzZXRVcGxvYWRcIl0uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMucmVzZXRGaWxlVXBsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIklkOiBcIiwgdGhpcy5pZCk7XG4gICAgdGhpcy5yZXNldFVwbG9hZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVzZXRGaWxlVXBsb2FkKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRGaWxlcyA9IFtdO1xuICAgIHRoaXMuQ2FwdGlvbiA9IFtdO1xuICAgIHRoaXMubm90QWxsb3dlZExpc3QgPSBbXTtcbiAgICB0aGlzLnVwbG9hZE1zZyA9IGZhbHNlO1xuICAgIHRoaXMudXBsb2FkQnRuID0gZmFsc2U7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm1heFNpemUgKyB0aGlzLmZvcm1hdHNBbGxvd2VkICsgdGhpcy5tdWx0aXBsZSk7XG4gICAgdGhpcy5ub3RBbGxvd2VkTGlzdCA9IFtdO1xuICAgIC8vY29uc29sZS5sb2coXCJvbmNoYW5nZSBoaXRcIik7XG4gICAgaWYgKHRoaXMuYWZ0ZXJVcGxvYWQgfHwgIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlcyA9IFtdO1xuICAgICAgdGhpcy5DYXB0aW9uID0gW107XG4gICAgICB0aGlzLmFmdGVyVXBsb2FkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vRk9STUFUUyBBTExPV0VEIExJU1RcbiAgICAvL2NvbnNvbGUubG9nKFwiRk9STUFUUyBBTExPV0VEIExJU1Q9IFwiK3RoaXMuZm9ybWF0c0FsbG93ZWQpO1xuICAgIC8vTk8gT0YgRk9STUFUUyBBTExPV0VEXG4gICAgbGV0IGZvcm1hdHNDb3VudDogYW55O1xuICAgIGZvcm1hdHNDb3VudCA9IHRoaXMuZm9ybWF0c0FsbG93ZWQubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFwuXCIsIFwiZ1wiKSk7XG4gICAgZm9ybWF0c0NvdW50ID0gZm9ybWF0c0NvdW50Lmxlbmd0aDtcbiAgICAvL2NvbnNvbGUubG9nKFwiTk8gT0YgRk9STUFUUyBBTExPV0VEPSBcIitmb3JtYXRzQ291bnQpO1xuICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4gICAgLy9JVEVSQVRFIFNFTEVDVEVEIEZJTEVTXG4gICAgbGV0IGZpbGU6IEZpbGVMaXN0O1xuICAgIGlmIChldmVudC50eXBlID09IFwiZHJvcFwiKSB7XG4gICAgICBmaWxlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgLy9jb25zb2xlLmxvZyhcInR5cGU6IGRyb3BcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXMgfHwgZXZlbnQuc3JjRWxlbWVudC5maWxlcztcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0eXBlOiBjaGFuZ2VcIik7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coZmlsZSk7XG4gICAgbGV0IGN1cnJlbnRGaWxlRXh0OiBhbnk7XG4gICAgbGV0IGV4dDogYW55O1xuICAgIGxldCBmcm10QWxsb3dlZDogYm9vbGVhbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vQ0hFQ0sgRk9STUFUXG4gICAgICAvL0NVUlJFTlQgRklMRSBFWFRFTlNJT05cbiAgICAgIGN1cnJlbnRGaWxlRXh0ID0gdGhpcy5yZWcuZXhlYyhmaWxlW2ldLm5hbWUpO1xuICAgICAgY3VycmVudEZpbGVFeHQgPSBjdXJyZW50RmlsZUV4dFsxXTtcbiAgICAgIC8vY29uc29sZS5sb2coZmlsZVtpXS5uYW1lKTtcbiAgICAgIGZybXRBbGxvd2VkID0gZmFsc2U7XG4gICAgICAvL0ZPUk1BVCBBTExPV0VEIExJU1QgSVRFUkFURVxuICAgICAgZm9yIChsZXQgaiA9IGZvcm1hdHNDb3VudDsgaiA+IDA7IGotLSkge1xuICAgICAgICBleHQgPSB0aGlzLmZvcm1hdHNBbGxvd2VkLnNwbGl0KFwiLlwiKVtqXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZPUk1BVCBMSVNUIChcIitqK1wiKT0gXCIrZXh0LnNwbGl0KFwiLFwiKVswXSk7XG4gICAgICAgIGlmIChqID09IGZvcm1hdHNDb3VudCkge1xuICAgICAgICAgIGV4dCA9IHRoaXMuZm9ybWF0c0FsbG93ZWQuc3BsaXQoXCIuXCIpW2pdICsgXCIsXCI7XG4gICAgICAgIH0gLy9jaGVjayBmb3JtYXRcbiAgICAgICAgaWYgKGN1cnJlbnRGaWxlRXh0LnRvTG93ZXJDYXNlKCkgPT0gZXh0LnNwbGl0KFwiLFwiKVswXSkge1xuICAgICAgICAgIGZybXRBbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJtdEFsbG93ZWQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZPUk1BVCBBTExPV0VEXCIpO1xuICAgICAgICAvL0NIRUNLIFNJWkVcbiAgICAgICAgaWYgKGZpbGVbaV0uc2l6ZSA+IHRoaXMubWF4U2l6ZSAqIDEwMjQwMDApIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU0laRSBOT1QgQUxMT1dFRCAoXCIrZmlsZVtpXS5zaXplK1wiKVwiKTtcbiAgICAgICAgICB0aGlzLm5vdEFsbG93ZWRMaXN0LnB1c2goe1xuICAgICAgICAgICAgZmlsZU5hbWU6IGZpbGVbaV0ubmFtZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiB0aGlzLmNvbnZlcnRTaXplKGZpbGVbaV0uc2l6ZSksXG4gICAgICAgICAgICBlcnJvck1zZzogXCJJbnZhbGlkIHNpemVcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vZm9ybWF0IGFsbG93ZWQgYW5kIHNpemUgYWxsb3dlZCB0aGVuIGFkZCBmaWxlIHRvIHNlbGVjdGVkRmlsZSBhcnJheVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlcy5wdXNoKGZpbGVbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiRk9STUFUIE5PVCBBTExPV0VEXCIpO1xuICAgICAgICB0aGlzLm5vdEFsbG93ZWRMaXN0LnB1c2goe1xuICAgICAgICAgIGZpbGVOYW1lOiBmaWxlW2ldLm5hbWUsXG4gICAgICAgICAgZmlsZVNpemU6IHRoaXMuY29udmVydFNpemUoZmlsZVtpXS5zaXplKSxcbiAgICAgICAgICBlcnJvck1zZzogXCJJbnZhbGlkIGZvcm1hdFwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy51cGxvYWRCdG4gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudGhlbWUgPT0gXCJhdHRhY2hQaW5cIikgdGhpcy51cGxvYWRGaWxlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwbG9hZEJ0biA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnVwbG9hZE1zZyA9IGZhbHNlO1xuICAgIHRoaXMudXBsb2FkQ2xpY2sgPSB0cnVlO1xuICAgIHRoaXMucGVyY2VudENvbXBsZXRlID0gMDtcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBudWxsO1xuICB9XG5cbiAgdXBsb2FkRmlsZXMoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkRmlsZXMpO1xuXG4gICAgbGV0IGk6IGFueTtcbiAgICB0aGlzLnByb2dyZXNzQmFyU2hvdyA9IHRydWU7XG4gICAgdGhpcy51cGxvYWRDbGljayA9IGZhbHNlO1xuICAgIHRoaXMubm90QWxsb3dlZExpc3QgPSBbXTtcbiAgICBsZXQgaXNFcnJvciA9IGZhbHNlO1xuXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuQ2FwdGlvbltpXSA9PSB1bmRlZmluZWQpIFxuICAgICAgICB0aGlzLkNhcHRpb25baV0gPSBcImZpbGVcIiArIGk7XG4gICAgICAvL0FkZCBEQVRBIFRPIEJFIFNFTlRcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgdGhpcy5DYXB0aW9uW2ldLFxuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZXNbaV0gLyosIHRoaXMuc2VsZWN0ZWRGaWxlc1tpXS5uYW1lKi9cbiAgICAgICk7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRGaWxlc1tpXStcIntcIit0aGlzLkNhcHRpb25baV0rXCIgKENhcHRpb24pfVwiKTtcbiAgICB9XG5cbiAgICBpZiAoaSA+IDEpIHtcbiAgICAgIHRoaXMuc2luZ2xlRmlsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpbmdsZUZpbGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBldm50ID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJvbnJlYWR5XCIpO1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBpc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudXBsb2FkQnRuID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy51cGxvYWRNc2cgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWZ0ZXJVcGxvYWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudXBsb2FkTXNnVGV4dCA9IFwiVXBsb2FkIEZhaWxlZCAhXCI7XG4gICAgICAgICAgdGhpcy51cGxvYWRNc2dDbGFzcyA9IFwidGV4dC1kYW5nZXIgbGVhZFwiO1xuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy51cGxvYWRNc2dUZXh0KTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2bnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuQXBpUmVzcG9uc2UuZW1pdCh4aHIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBldm50ID0+IHtcbiAgICAgIHRoaXMudXBsb2FkQnRuID0gZmFsc2U7IC8vIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWQgYnkgcHJvY2VzcyB1cGxvYWRpbmdcbiAgICAgIGlmIChldm50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgdGhpcy5wZXJjZW50Q29tcGxldGUgPSBNYXRoLnJvdW5kKChldm50LmxvYWRlZCAvIGV2bnQudG90YWwpICogMTAwKTtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coXCJQcm9ncmVzcy4uLlwiLyordGhpcy5wZXJjZW50Q29tcGxldGUrXCIgJVwiKi8pO1xuICAgIH07XG5cbiAgICB4aHIub25sb2FkID0gZXZudCA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwib25sb2FkXCIpO1xuICAgICAgLy9jb25zb2xlLmxvZyhldm50KTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXJTaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLnVwbG9hZEJ0biA9IGZhbHNlO1xuICAgICAgdGhpcy51cGxvYWRNc2cgPSB0cnVlO1xuICAgICAgdGhpcy5hZnRlclVwbG9hZCA9IHRydWU7XG4gICAgICBpZiAoIWlzRXJyb3IpIHtcbiAgICAgICAgdGhpcy51cGxvYWRNc2dUZXh0ID0gXCJTdWNjZXNzZnVsbHkgVXBsb2FkZWQgIVwiO1xuICAgICAgICB0aGlzLnVwbG9hZE1zZ0NsYXNzID0gXCJ0ZXh0LXN1Y2Nlc3MgbGVhZFwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudXBsb2FkTXNnVGV4dCArIFwiIFwiICsgdGhpcy5zZWxlY3RlZEZpbGVzLmxlbmd0aCArIFwiIGZpbGVcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHhoci5vbmVycm9yID0gZXZudCA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwib25lcnJvclwiKTtcbiAgICAgIC8vY29uc29sZS5sb2coZXZudCk7XG4gICAgfTtcblxuICAgIHhoci5vcGVuKFwiUE9TVFwiLCB0aGlzLnVwbG9hZEFQSSwgdHJ1ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5oZWFkZXJzKSkge1xuICAgICAgLy8gT2JqZWN0LmtleXMgd2lsbCBnaXZlIGFuIEFycmF5IG9mIGtleXNcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdGhpcy5oZWFkZXJzW2tleV0pO1xuICAgIH1cbiAgICAvL2xldCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICAvL3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgIC8veGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dG9rZW59YCk7XG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICB9XG5cbiAgcmVtb3ZlRmlsZShpOiBhbnksIHNmX25hOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwicmVtb3ZlIGZpbGUgY2xpY2tlZCBcIiArIGkpXG4gICAgaWYgKHNmX25hID09IFwic2ZcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZEZpbGVzLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMuQ2FwdGlvbi5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm90QWxsb3dlZExpc3Quc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMudXBsb2FkQnRuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29udmVydFNpemUoZmlsZVNpemU6IG51bWJlcikge1xuICAgIC8vY29uc29sZS5sb2coZmlsZVNpemUgKyBcIiAtIFwiKyBzdHIpO1xuICAgIHJldHVybiBmaWxlU2l6ZSA8IDEwMjQwMDBcbiAgICAgID8gKGZpbGVTaXplIC8gMTAyNCkudG9GaXhlZCgyKSArIFwiIEtCXCJcbiAgICAgIDogKGZpbGVTaXplIC8gMTAyNDAwMCkudG9GaXhlZCgyKSArIFwiIE1CXCI7XG4gIH1cblxuICBhdHRhY2hwaW5PbmNsaWNrKCkge1xuICAgIC8vY29uc29sZS5sb2coXCJJRDogXCIsIHRoaXMuaWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsXCIgKyB0aGlzLmlkKSEuY2xpY2soKTtcbiAgICAvLyQoXCIjXCIrXCJzZWxcIit0aGlzLmlkKS5jbGljaygpO1xuICB9XG5cbiAgZHJvcChldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiZHJvcDogXCIsIGV2ZW50KTtcbiAgICAvL2NvbnNvbGUubG9nKFwiZHJvcDogXCIsIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XG4gIH1cbiAgYWxsb3dEcm9wKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XG4gICAgLy9jb25zb2xlLmxvZyhcImFsbG93RHJvcDogXCIsZXZlbnQpXG4gIH1cbn1cblxuLyogaW50ZXJmYWNlIENPTkZJRyB7XG4gIHVwbG9hZEFQSTogc3RyaW5nO1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIGZvcm1hdHNBbGxvd2VkPzogc3RyaW5nO1xuICBtYXhTaXplPzogbnVtYmVyO1xuICBpZD86IG51bWJlcjtcbiAgcmVzZXRVcGxvYWQ/OiBib29sZWFuO1xuICB0aGVtZT86IHN0cmluZztcbiAgaGlkZVByb2dyZXNzQmFyPzogYm9vbGVhbjtcbiB9XG4gKi8iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFuZ3VsYXJGaWxlVXBsb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItZmlsZS11cGxvYWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJGaWxlVXBsb2FkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhckZpbGVVcGxvYWRlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZpbGVVcGxvYWRlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O3FDQUpEO0NBUUM7Ozs7Ozs7SUMyR0M7UUFsQ0EsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVqQixnQkFBVyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZWpDLFdBQU0sR0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDN0IsUUFBRyxHQUFXLGlCQUFpQixDQUFDO1FBQ2hDLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQWtCLEVBQUUsQ0FBQztRQUNuQyxZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLElBQUksQ0FBQzs7OztLQVNsQjs7Ozs7SUFFRCxrREFBVzs7OztJQUFYLFVBQVksR0FBa0I7UUFDNUIsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDakIsUUFBUSxDQUFD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

/***/ }),

/***/ "./src/app/main/aboutus/aboutus.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/aboutus/aboutus.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host nb-layout-header a {\r\n    font-size: 2rem;\r\n    text-decoration: none;\r\n  }\r\n  :host nb-layout-column {\r\n    height: 50vw;\r\n  }\r\n  :host nb-layout-column:first-child {\r\n    background: #f4f4f7;\r\n  }\r\n  .header-container{\r\n    width: 100%;\r\n    justify-content: space-between;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/main/aboutus/aboutus.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/aboutus/aboutus.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header> View Projects</nb-card-header>\r\n  <nb-card-body>\r\n    Know more about the various research projects going on at PESU.Join Us\r\n  </nb-card-body>\r\n</nb-card>\r\n<nb-card>\r\n    <nb-card-header>Collaborate</nb-card-header>\r\n    <nb-card-body>\r\n      Collaborate and work on projects your interested in.\r\n    </nb-card-body>\r\n  </nb-card>\r\n  <nb-card>\r\n      <nb-card-header>Follow research groups </nb-card-header>\r\n      <nb-card-body>\r\n          Be a part of PESU Research groups to work on amazing projects and recieve excellent guidance.\r\n      </nb-card-body>\r\n    </nb-card>\r\n"

/***/ }),

/***/ "./src/app/main/aboutus/aboutus.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/aboutus/aboutus.component.ts ***!
  \***************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(sidebar) {
        this.sidebar = sidebar;
    }
    AboutusComponent.prototype.ngOnInit = function () {
        this.sidebar.collapse();
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/main/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/main/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"]])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/main/get-post.service.ts":
/*!******************************************!*\
  !*** ./src/app/main/get-post.service.ts ***!
  \******************************************/
/*! exports provided: GetPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostService", function() { return GetPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetPostService = /** @class */ (function () {
    function GetPostService(http) {
        this.http = http;
    }
    GetPostService.prototype.getPosts = function () {
        //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => console.log(data));
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };
    GetPostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetPostService);
    return GetPostService;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes move_wave {\r\n    0% {\r\n        -webkit-transform: translateX(0) translateZ(0) scaleY(1);\r\n                transform: translateX(0) translateZ(0) scaleY(1)\r\n    }\r\n    50% {\r\n        -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55);\r\n                transform: translateX(-25%) translateZ(0) scaleY(0.55)\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(-50%) translateZ(0) scaleY(1);\r\n                transform: translateX(-50%) translateZ(0) scaleY(1)\r\n    }\r\n}\r\n\r\n@keyframes move_wave {\r\n    0% {\r\n        -webkit-transform: translateX(0) translateZ(0) scaleY(1);\r\n                transform: translateX(0) translateZ(0) scaleY(1)\r\n    }\r\n    50% {\r\n        -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55);\r\n                transform: translateX(-25%) translateZ(0) scaleY(0.55)\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(-50%) translateZ(0) scaleY(1);\r\n                transform: translateX(-50%) translateZ(0) scaleY(1)\r\n    }\r\n}\r\n\r\n.bg-img {\r\n  width: 50%;\r\n  position: relative;\r\n  z-index: 15;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n  z-index: 16;\r\n}\r\n\r\n.logoDiv {\r\n  left: 50vw;\r\n  top: 15vh;\r\n  position: absolute;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 16;\r\n  border-radius: 500px;\r\n  background-color: white;\r\n  width: 15%;\r\n}\r\n\r\n.getStarted {\r\n  left: 50vw;\r\n  top: 25vh;\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n  position: absolute;\r\n  z-index: 16;\r\n}\r\n\r\n.waveWrapper {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n    margin: auto;\r\n    background-color: rgb(176, 210, 211);\r\n}\r\n\r\n.waveWrapperInner {\r\n    position: absolute;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    height: 91%;\r\n    bottom: -1px;\r\n    /*background-image: linear-gradient(to top, #007bff 20%, #87CEFA 80%);*/\r\n    /*background-image: url('../../../assets/research2.jpg');*/\r\n\r\n}\r\n\r\n.bgTop {\r\n    z-index: 15;\r\n    opacity: 0.5;\r\n}\r\n\r\n.bgMiddle {\r\n    z-index: 10;\r\n    opacity: 0.75;\r\n}\r\n\r\n.bgBottom {\r\n    z-index: 5;\r\n}\r\n\r\n.wave {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 200%;\r\n    height: 100%;\r\n    background-repeat: repeat no-repeat;\r\n    background-position: 0 bottom;\r\n    -webkit-transform-origin: center bottom;\r\n            transform-origin: center bottom;\r\n}\r\n\r\n.waveTop {\r\n    background-size: 50% 100px;\r\n}\r\n\r\n.waveAnimation .waveTop {\r\n  animation: move-wave 3s;\r\n   -webkit-animation: move-wave 3s;\r\n   -webkit-animation-delay: 1s;\r\n   animation-delay: 1s;\r\n}\r\n\r\n.waveMiddle {\r\n    background-size: 50% 120px;\r\n}\r\n\r\n.waveAnimation .waveMiddle {\r\n    -webkit-animation: move_wave 10s linear infinite;\r\n            animation: move_wave 10s linear infinite;\r\n}\r\n\r\n.waveBottom {\r\n    background-size: 50% 100px;\r\n}\r\n\r\n.waveAnimation .waveBottom {\r\n    -webkit-animation: move_wave 15s linear infinite;\r\n            animation: move_wave 15s linear infinite;\r\n}\r\n\r\ndiv.left {\r\n  width: 15vw;\r\n  height: 30vh;\r\n  border-radius: 10px;\r\n  background: #ffffff;\r\n  z-index: 20;\r\n}\r\n\r\ndiv.right {\r\n  width: 15vw;\r\n  height: 30vh;\r\n  border-radius: 10px;\r\n  background: #ffffff;\r\n  z-index: 20;\r\n}\r\n\r\ndiv.middle {\r\n  width: 15vw;\r\n  height: 30vh;\r\n  border-radius: 10px;\r\n  background: #ffffff;\r\n  z-index: 20;\r\n}\r\n\r\n.wrapper {\r\n  bottom: 20vh;\r\n  position: absolute;\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.change{\r\n  font-size:16px;\r\n}\r\n\r\n.cardHeader {\r\n  background-color: #EFB169;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<div style=\"position: absolute; top: 4.75rem\" class=\"waveWrapper waveAnimation\">\r\n\r\n    <img src=\"/assets/research2.jpg\" class=\"bg-img\"/>\r\n    <div class=\"logoDiv\">\r\n      <img src=\"/assets/logo_tmp.png\" width=\"85%\" style=\"margin-left: auto; margin-right: auto; display: block;\" />\r\n    </div>\r\n    <a routerLink=\"/auth/register\" (click)=\"toggleNamedColor()\" class = \"btn\" nbButton shape=\"semi-round\" outline class=\"getStarted\" href=\"#\" [ngStyle]=\"{'background-color': '#EFB169', 'color' : 'black'}\">Get started</a>\r\n\r\n    <div>\r\n      <div class=\"waveWrapperInner bgTop\">\r\n    \r\n        <div class=\"wave waveTop\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')\">\r\n    \r\n        </div>\r\n      </div>\r\n  \r\n    <div class=\"waveWrapperInner bgMiddle\">\r\n    \r\n      <div class=\"wave waveMiddle\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')\"></div>\r\n    </div>\r\n    <div class=\"waveWrapperInner bgBottom\">\r\n    \r\n      <div class=\"wave waveBottom\" style=\"background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')\"></div>\r\n    </div>\r\n   \r\n<!--<div style=\"postion:relative;padding-top:9%;background-color:#B5D0E0;padding-left=8%\">-->\r\n    <div class=\"wrapper\">\r\n      <div style=\"width: 22.5vw;\"></div>\r\n      <div class=\"left\">\r\n        <nb-card style=\"height: 45vh;\">\r\n          <nb-card-header class=\"cardHeader\">View Projects<p></p> </nb-card-header>\r\n          <nb-card-body class=\"change\">\r\n            Browse through the projects of other students in your college, and follow them as they bring forth new advancements in the sciences.\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n      <div style=\"width: 5vw;\"></div>\r\n      <div class=\"middle\">\r\n        <nb-card style=\"height: 45vh;\">\r\n          <nb-card-header class=\"cardHeader\">Collaborate<p></p> </nb-card-header>\r\n          <nb-card-body class=\"change\">\r\n            Collaborate and work on projects with the help of mentors, or just with fellow scholars, the tools are all here.\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n      <div style=\"width: 5vw;\"></div>\r\n      <div class=\"right\">\r\n        <nb-card style=\"height: 45vh;\">\r\n          <nb-card-header class=\"cardHeader\">Follow Research Groups</nb-card-header>\r\n          <nb-card-body class=\"change\">\r\n            Follow and work under research groups, with experienced teachers as mentors. Have your projects featured on their page.\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--</div>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(sidebar) {
        this.sidebar = sidebar;
        this.buttonColor = 'white';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.sidebar.collapse();
    };
    HomeComponent.prototype.toggleNamedColor = function () {
        this.buttonColor = '#87CEFA';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/main/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/main/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ "./src/app/main/post/post.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/main/aboutus/aboutus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        children: [
            {
                path: 'posts',
                component: _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"]
            },
            {
                path: 'profile',
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
            },
            {
                path: 'aboutus',
                component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"]
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            },
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            },
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"]
            ],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host nb-layout-header a {\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n}\r\n:host nb-layout-column:first-child {\r\n  background: rgb(176, 210, 211);\r\n}\r\n.header-container{\r\n  justify-content: space-between;\r\n}\r\n.left-sidebar{\r\n  transition: width 0.3s ease;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\r\n  <nb-layout-header fixed>\r\n    <img src=\"/assets/minilogo_tmp.png\" style=\"height: 10vh;\"/>\r\n    <img src=\"/assets/pes_logo.png\" style=\"height: 5vh;\"/>\r\n    <nb-actions style=\"margin-left: auto; margin-right: 0; margin-bottom: auto\">\r\n      <nb-action>\r\n      <nb-user size=\"large\"\r\n               name=\"Jonh Doe\"\r\n               title=\"Engineer\"\r\n               badgeStatus=\"success\"\r\n               badgePosition=\"bottom right\" [nbContextMenu]=\"items\">\r\n      </nb-user>\r\n      </nb-action>\r\n    </nb-actions>\r\n  </nb-layout-header>\r\n\r\n  <nb-sidebar class=\"left-sidebar\">\r\n            <nb-menu [items]=\"item_menu\">\r\n            </nb-menu>\r\n            <nb-sidebar-footer center>♥ from the Devs Team</nb-sidebar-footer>      \r\n  </nb-sidebar>\r\n  <nb-layout-column class=\"main-content\" [nbSpinner]=\"loading\"><router-outlet></router-outlet></nb-layout-column>\r\n  \r\n</nb-layout>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(menuService, router) {
        var _this = this;
        this.menuService = menuService;
        this.items = [{ title: 'Profile', link: ['/profile'] }, { title: 'Logout', link: [''] }];
        this.loading = false;
        this.item_menu = [
            {
                title: 'Groups',
                expanded: false,
                icon: 'ion ion-android-radio-button-off',
                children: [
                    {
                        title: 'SE Research Group',
                        link: ['/posts'],
                    }
                ],
            },
            {
                title: 'Projects',
                expanded: false,
                icon: 'ion ion-android-radio-button-off',
                children: [
                    {
                        title: 'SE Project Group',
                        link: ['/posts'],
                    }
                ],
            },
            {
                title: 'Reimbursements',
                link: [],
            },
        ];
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.loading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.loading = false;
            }
        });
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/main/posts/posts.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/main/post/post.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/main/aboutus/aboutus.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _get_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get-post.service */ "./src/app/main/get-post.service.ts");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// tslint:disable-next-line:max-line-length







//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbRouteTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_11__["AngularFileUploaderModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerModule"]
            ],
            providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"], _get_post_service__WEBPACK_IMPORTED_MODULE_10__["GetPostService"]],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__["AboutusComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/post/post.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/post/post.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postAuthor {\r\n  float: right;\r\n  position: relative;\r\n}\r\n.postBy {\r\n  font-weight: lighter;\r\n}\r\n.groupImg {\r\n  float: left;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  height: 5vh;\r\n  width: 5vh;\r\n  overflow: hidden;\r\n}\r\n.postTitleBar {\r\n  font-weight: 500;\r\n  padding-bottom: 2vh;\r\n}\r\n.postCard {\r\n  padding: 2vh 2vh 2vh 2vh;\r\n}\r\n.postFormat {\r\n  background-color: lightsteelblue;\r\n}\r\n.flexbox{\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/main/post/post.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/post/post.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-tabset>\r\n  <nb-tab tabTitle=\"Posts\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Make a new post  \r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"flexbox\"><input nbInput round><button nbButton>Post</button></div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n    <nb-card *ngIf=\"postLoadincomplete\">\r\n      <nb-card-body [nbSpinner]=\"postLoadincomplete\"></nb-card-body>\r\n    </nb-card>\r\n    <nb-card class=\"postFormat\" *ngFor=\"let item of posts\">\r\n      <nb-card-header class=\"postCard\"><img class=\"groupImg\" src=\"{{postInfo.groupPic}}\" alt=\"postimg\" /><span class=\"postCard\">{{item.id}}</span></nb-card-header>\r\n      <nb-card-body class=\"postCard\">\r\n        <div class=\"postTitleBar\">\r\n          <span class=\"postTitle\">{{item.title}}</span>\r\n          <span class=\"postAuthor\"><span class=\"postBy\">posted by: </span>{{item.userId}}</span>\r\n        </div>\r\n        <nb-card>\r\n          <nb-card-body>\r\n            {{item.body}}\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </nb-tab>\r\n  <nb-tab tabTitle=\"Documents\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        <span>This is document header</span>\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <span>This is a document box</span>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </nb-tab>\r\n  <nb-tab tabTitle=\"Group Info\">\r\n    <nb-card>\r\n      <nb-card-body>\r\n        Group details should come here\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </nb-tab>\r\n</nb-tabset>"

/***/ }),

/***/ "./src/app/main/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-post.service */ "./src/app/main/get-post.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(getpost, ref, sidebar) {
        this.getpost = getpost;
        this.ref = ref;
        this.sidebar = sidebar;
        this.postInfo = {
            group: "Gr",
            groupPic: "assets/prof_def.jpg",
            author: "Usr",
            heading: "head",
            body: "body"
        };
    }
    PostComponent.prototype.getPostsForUser = function () {
        var _this = this;
        this.postLoadincomplete = true;
        this.getpost.getPosts()
            .subscribe(function (data) { _this.posts = data; }, function (err) {
            _this.postLoadincomplete = false;
            console.error(err);
        }, function () {
            _this.postLoadincomplete = false;
            _this.ref.markForCheck();
        });
    };
    PostComponent.prototype.ngOnInit = function () {
        this.sidebar.expand();
        this.getPostsForUser();
        console.log("started");
        //console.log(this.posts);
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/main/post/post.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/main/post/post.component.css")],
        }),
        __metadata("design:paramtypes", [_get_post_service__WEBPACK_IMPORTED_MODULE_1__["GetPostService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/main/posts/posts.component.css":
/*!************************************************!*\
  !*** ./src/app/main/posts/posts.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host nb-tab {\r\n  padding: 1rem;\r\n}\r\n.basicDetails {\r\n  height: 20vh;\r\n}\r\n.basicRight {\r\n  position: relative;\r\n  left: 5vh;\r\n  display: inline-block;\r\n  padding-top: 2vh;\r\n  padding-right: 2vh;\r\n  padding-left: 2vh;\r\n  background-color: sandybrown;\r\n  color: white;\r\n}\r\n.basicImg {\r\n  float: left;\r\n  position: relative;\r\n  border-radius: 50%;\r\n  height: 20vh;\r\n  width: 20vh;\r\n  overflow: hidden;\r\n}\r\n.profilePicture {\r\n  opacity: 1;\r\n  transition: .5s ease;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.basicImg:hover .profilePicture {\r\n  opacity: 0.3;\r\n}\r\n.basicImgEdit {\r\n  transition: 0.5s ease;\r\n  opacity: 0;\r\n  border-radius: 10%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n.basicImg:hover .basicImgEdit {\r\n  opacity: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/posts/posts.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-body>\r\n    <div class=\"basicDetails\">\r\n      <div class=\"basicImg\">\r\n        <img class=\"profilePicture\" src=\"{{user.picture}}\" alt=\"profile picture\" align=\"left\" />\r\n        <div class=\"basicImgEdit\"><button nbButton>Edit</button></div>\r\n      </div>\r\n      <nb-card class=\"basicRight\">\r\n          <b>Name: {{user.name}}<p>Email: {{user.email}}</b>\r\n      </nb-card>\r\n    </div>\r\n    <nb-tabset>\r\n      <nb-tab tabTitle=\"Personal Details\" id=\"personal\">\r\n        <div style=\"padding-top: 1%\">\r\n        <input type=\"text\" id=\"editButtonName\" disabled nbInput shape=\"rectangle\" placeholder=\"Erica\" style=\"width: 60%; margin-left: 4.5vh\">\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Full Name</div></div>\r\n      <div style=\"padding-top: 1%\">\r\n        <input type=\"text\" id=\"editButtonContact\" disabled nbInput shape=\"rectangle\" placeholder=\"9876789876\" style=\"width: 60%;\">\r\n      <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Phone Number</div></div>\r\n        <div style=\"padding-top: 1%\">\r\n        <input type=\"text\" id=\"editButtonDob\" disabled nbInput shape=\"rectangle\" placeholder=\"16/06/1997\" style=\"width: 60%; margin-left: 2vh\">\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Date Of Birth</div></div>\r\n        <div style=\"padding-top: 1%\">\r\n        <input type=\"text\" id=\"editButtonGender\" disabled nbInput shape=\"rectangle\" placeholder=\"Female\" style=\"width: 60%; margin-left: 7vh\">\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Gender</div></div>\r\n        <div style=\"padding-top: 1%\">\r\n        <input type=\"text\" id=\"editButtonUsn\" disabled nbInput shape=\"rectangle\" placeholder=\"01FB15ECS020\" style=\"width: 60%; margin-left: 9.5vh\">\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">USN</div></div>\r\n        <div id=\"saveContactPadding\" style=\"float: left; padding-top: 2%;\"><a style=\"visibility: hidden; display: none\" id=\"saveButtonDetails\" (click)=\"saveContact()\" nbButton>Save</a></div>\r\n        <div style=\"float: left; padding-top: 2%\"><a style=\"visibility: hidden; display: none\" id=\"cancelButtonDetails\" (click)=\"cancelContact()\" nbButton>Cancel</a></div>\r\n        <div id=\"editContactPadding\" style=\"float: left; padding-right: 5%; padding-top: 2%\"><a style=\"display: inline\" id=\"editButtonDetails\" (click)=\"editContact()\" nbButton>Edit</a></div>\r\n      </nb-tab>\r\n\r\n\r\n      <nb-tab tabTitle=\"Interests and Skills\">\r\n        <!--<div style=\"padding-bottom: 2%\">-->\r\n          <div style=\"padding-top: 1%\">\r\n        <textarea rows=\"6\" id=\"ButtonInterests\" disabled nbInput shape=\"rectangle\" placeholder=\"Interested in Data Science\" style=\"width: 60%;\"></textarea>\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Interests</div></div>\r\n        <div style=\"padding-top: 1.7%\">\r\n        <textarea rows=\"5\" id=\"ButtonSkills\" disabled nbInput shape=\"rectangle\" placeholder=\"Basics in C\" style=\"width: 60%; margin-left: 3vh\"></textarea>\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Skills</div></div>\r\n        <!--<input type=\"text\" id=\"editButtonInterests\" disabled nbInput shape=\"rectangle\" placeholder=\"Interested in Data Science\" style=\"width: 60%\">-->\r\n        <div id=\"saveInterestsPadding\" style=\"float: left; padding-top: 2%;\"><a style=\"visibility: hidden; display: none\" id=\"saveButtonSkills\" (click)=\"saveInterests()\" nbButton>Save</a></div>\r\n        <div style=\"float: left; padding-top: 2%\"><a style=\"visibility: hidden; display: none\" id=\"cancelButtonSkills\" (click)=\"cancelInterests()\" nbButton>Cancel</a></div>\r\n        <div id=\"editInterestsPadding\" style=\"float: left; padding-right: 5%; padding-top: 2%\"><a style=\"display: inline\" id=\"editButtonSkills\" (click)=\"editInterests()\" nbButton>Edit</a></div>\r\n        <!--<div style=\"float: right\"><a (click)=\"saveInterests()\" nbButton>Save</a></div>\r\n        <div style=\"float: right; padding-right: 5%\"><a (click)=\"editInterests()\" nbButton>Edit</a></div>-->\r\n        <!--</div>-->\r\n        <!--<div>\r\n        <input type=\"text\" id=\"editButtonSkills\" disabled nbInput shape=\"rectangle\" placeholder=\"Basics in C\" style=\"width: 60%\">\r\n        <div style=\"float: right\"><a (click)=\"editSkills()\" nbButton>Edit</a></div>\r\n        <div style=\"float: right; padding-right: 5%\"><a (click)=\"saveSkills()\" nbButton>Save</a></div></div>-->\r\n      </nb-tab>\r\n      <nb-tab tabTitle=\"Bio\">\r\n        <div style=\"padding-top: 1%\">\r\n        <textarea rows=\"14\" id=\"editButtonBio\" disabled nbInput shape=\"rectangle\" placeholder=\"Software Engineer. Works in Microsoft\" style=\"width: 60%;\"></textarea>\r\n        <div style=\"margin: 1%; float: left; font-family: sans-serif; font-weight: bold;\">Bio</div></div>\r\n        <div id=\"saveBioPadding\" style=\"float: left; padding-top: 2%;\"><a style=\"visibility: hidden; display: none\" id=\"saveButtonData\" (click)=\"saveBio()\" nbButton>Save</a></div>\r\n        <div style=\"float: left; padding-top: 2%\"><a style=\"visibility: hidden; display: none\" id=\"cancelButtonData\" (click)=\"cancelBio()\" nbButton>Cancel</a></div>\r\n        <div id=\"editBioPadding\" style=\"float: left; padding-right: 5%; padding-top: 2%\"><a style=\"display: inline\" id=\"editButtonData\" (click)=\"editBio()\" nbButton>Edit</a></div>\r\n        <!--<input type=\"text\" id=\"editButtonBio\" disabled nbInput shape=\"rectangle\" placeholder=\"Software Engineer. Works in Microsoft\" style=\"width: 60%\">\r\n        <div style=\"float: right\"><a (click)=\"saveBio()\" nbButton>Save</a></div>\r\n        <div style=\"float: right; padding-right: 5%\"><a (click)=\"editBio()\" nbButton>Edit</a></div>-->\r\n      </nb-tab>\r\n    </nb-tabset>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/posts/posts.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/posts/posts.component.ts ***!
  \***********************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = /** @class */ (function () {
    function PostsComponent(sidebar) {
        this.sidebar = sidebar;
        this.user = {
            userId: "001",
            picture: "assets/prof_def.jpg",
            name: "Alk",
            email: "test@test.com",
        };
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.sidebar.expand();
    };
    PostsComponent.prototype.editContact = function () {
        var editContactElement = document.getElementById('editButtonContact');
        var editDobElement = document.getElementById('editButtonDob');
        var editNameElement = document.getElementById('editButtonName');
        var editGenderElement = document.getElementById('editButtonGender');
        var editUsnElement = document.getElementById('editButtonUsn');
        this.editContactValue = editContactElement.value;
        //console.log(this.editContactValue);
        this.editDobValue = editDobElement.value;
        this.editNameValue = editNameElement.value;
        this.editGenderValue = editGenderElement.value;
        this.editUsnValue = editUsnElement.value;
        //var personalDetails = <HTMLInputElement>document.getElementById('personal');
        var savePadding = document.getElementById('saveContactPadding');
        //var editPadding = <HTMLInputElement>document.getElementById('editContactPadding');
        var editButtonPersonal = document.getElementById('editButtonDetails');
        var saveButtonPersonal = document.getElementById('saveButtonDetails');
        var cancelButtonPersonal = document.getElementById('cancelButtonDetails');
        //editButtonPersonal.innerHTML = "Save";
        editButtonPersonal.style.visibility = "hidden";
        editButtonPersonal.style.display = "none";
        cancelButtonPersonal.style.visibility = "visible";
        cancelButtonPersonal.style.display = "inline";
        saveButtonPersonal.style.visibility = "visible";
        saveButtonPersonal.style.display = "inline";
        savePadding.style.paddingRight = "5%";
        editContactElement.removeAttribute('disabled');
        editDobElement.removeAttribute('disabled');
        editNameElement.removeAttribute('disabled');
        editGenderElement.removeAttribute('disabled');
        editUsnElement.removeAttribute('disabled');
        //console.log("edit");
        /*editButtonPersonal.onclick=function(){
            console.log("called");
            //var saveContactElement = <HTMLInputElement>document.getElementById('editButtonContact');
            //var saveDobElement = <HTMLInputElement>document.getElementById('editButtonDob');
            editContactElement.setAttribute('disabled','disabled');
            editDobElement.setAttribute('disabled','disabled');
            cancelButtonPersonal.style.visibility = "hidden";
            editButtonPersonal.innerHTML = "Edit";
        };*/
        /*cancelButtonPersonal.addEventListener('click', function(){
          editContactElement.innerHTML=editContactValue;
          editDobElement.innerHTML = editDobValue;
          cancelButtonPersonal.style.visibility = "hidden";
          editButtonPersonal.innerHTML = "Edit";
          editButtonPersonal.addEventListener('click',editContact());
        });*/
    };
    PostsComponent.prototype.saveContact = function () {
        var saveContactElement = document.getElementById('editButtonContact');
        var saveDobElement = document.getElementById('editButtonDob');
        var saveNameElement = document.getElementById('editButtonName');
        var saveGenderElement = document.getElementById('editButtonGender');
        var saveUsnElement = document.getElementById('editButtonUsn');
        var editButtonPersonal = document.getElementById('editButtonDetails');
        var saveButtonPersonal = document.getElementById('saveButtonDetails');
        var cancelButtonPersonal = document.getElementById('cancelButtonDetails');
        var savePadding = document.getElementById('saveContactPadding');
        editButtonPersonal.style.visibility = "visible";
        editButtonPersonal.style.display = "inline";
        cancelButtonPersonal.style.visibility = "hidden";
        cancelButtonPersonal.style.display = "none";
        saveButtonPersonal.style.visibility = "hidden";
        saveButtonPersonal.style.display = "none";
        savePadding.style.paddingRight = "0%";
        saveContactElement.setAttribute('disabled', 'disabled');
        saveDobElement.setAttribute('disabled', 'disabled');
        saveNameElement.setAttribute('disabled', 'disabled');
        saveGenderElement.setAttribute('disabled', 'disabled');
        saveUsnElement.setAttribute('disabled', 'disabled');
    };
    PostsComponent.prototype.cancelContact = function () {
        var cancelContactElement = document.getElementById('editButtonContact');
        var cancelDobElement = document.getElementById('editButtonDob');
        var cancelNameElement = document.getElementById('editButtonName');
        var cancelGenderElement = document.getElementById('editButtonGender');
        var cancelUsnElement = document.getElementById('editButtonUsn');
        var editButtonPersonal = document.getElementById('editButtonDetails');
        var saveButtonPersonal = document.getElementById('saveButtonDetails');
        var cancelButtonPersonal = document.getElementById('cancelButtonDetails');
        var savePadding = document.getElementById('saveContactPadding');
        editButtonPersonal.style.visibility = "visible";
        editButtonPersonal.style.display = "inline";
        cancelButtonPersonal.style.visibility = "hidden";
        cancelButtonPersonal.style.display = "none";
        saveButtonPersonal.style.visibility = "hidden";
        saveButtonPersonal.style.display = "none";
        cancelContactElement.value = this.editContactValue;
        //console.log(this.editContactValue);
        cancelDobElement.value = this.editDobValue;
        cancelNameElement.value = this.editNameValue;
        cancelGenderElement.value = this.editGenderValue;
        cancelUsnElement.value = this.editUsnValue;
        savePadding.style.paddingRight = "0%";
        cancelContactElement.setAttribute('disabled', 'disabled');
        cancelDobElement.setAttribute('disabled', 'disabled');
        cancelNameElement.setAttribute('disabled', 'disabled');
        cancelGenderElement.setAttribute('disabled', 'disabled');
        cancelUsnElement.setAttribute('disabled', 'disabled');
    };
    PostsComponent.prototype.editInterests = function () {
        //var fieldElement2 = <HTMLInputElement>document.getElementById('editButtonInterests');
        //fieldElement2.removeAttribute('disabled');
        var editInterestsElement = document.getElementById('ButtonInterests');
        var editSkillsElement = document.getElementById('ButtonSkills');
        this.editInterestsValue = editInterestsElement.value;
        this.editSkillsValue = editSkillsElement.value;
        var savePadding = document.getElementById('saveInterestsPadding');
        var editButtonInterests = document.getElementById('editButtonSkills');
        var saveButtonInterests = document.getElementById('saveButtonSkills');
        var cancelButtonInterests = document.getElementById('cancelButtonSkills');
        editButtonInterests.style.visibility = "hidden";
        editButtonInterests.style.display = "none";
        cancelButtonInterests.style.visibility = "visible";
        cancelButtonInterests.style.display = "inline";
        saveButtonInterests.style.visibility = "visible";
        saveButtonInterests.style.display = "inline";
        savePadding.style.paddingRight = "5%";
        editInterestsElement.removeAttribute('disabled');
        editSkillsElement.removeAttribute('disabled');
    };
    PostsComponent.prototype.saveInterests = function () {
        //var fieldElement3 = <HTMLInputElement>document.getElementById('editButtonInterests');
        //fieldElement3.setAttribute('disabled','disabled');
        var saveInterestsElement = document.getElementById('ButtonInterests');
        var saveSkillsElement = document.getElementById('ButtonSkills');
        var editButtonInterests = document.getElementById('editButtonSkills');
        var saveButtonInterests = document.getElementById('saveButtonSkills');
        var cancelButtonInterests = document.getElementById('cancelButtonSkills');
        var savePadding = document.getElementById('saveInterestsPadding');
        editButtonInterests.style.visibility = "visible";
        editButtonInterests.style.display = "inline";
        cancelButtonInterests.style.visibility = "hidden";
        cancelButtonInterests.style.display = "none";
        saveButtonInterests.style.visibility = "hidden";
        saveButtonInterests.style.display = "none";
        savePadding.style.paddingRight = "0%";
        saveInterestsElement.setAttribute('disabled', 'disabled');
        saveSkillsElement.setAttribute('disabled', 'disabled');
    };
    PostsComponent.prototype.cancelInterests = function () {
        var cancelInterestsElement = document.getElementById('ButtonInterests');
        var cancelSkillsElement = document.getElementById('ButtonSkills');
        var editButtonInterests = document.getElementById('editButtonSkills');
        var saveButtonInterests = document.getElementById('saveButtonSkills');
        var cancelButtonInterests = document.getElementById('cancelButtonSkills');
        var savePadding = document.getElementById('saveInterestsPadding');
        editButtonInterests.style.visibility = "visible";
        editButtonInterests.style.display = "inline";
        cancelButtonInterests.style.visibility = "hidden";
        cancelButtonInterests.style.display = "none";
        saveButtonInterests.style.visibility = "hidden";
        saveButtonInterests.style.display = "none";
        cancelInterestsElement.value = this.editInterestsValue;
        //console.log(this.editContactValue);
        cancelSkillsElement.value = this.editSkillsValue;
        savePadding.style.paddingRight = "0%";
        cancelInterestsElement.setAttribute('disabled', 'disabled');
        cancelSkillsElement.setAttribute('disabled', 'disabled');
    };
    PostsComponent.prototype.editBio = function () {
        //var fieldElement4 = <HTMLInputElement>document.getElementById('editButtonBio');
        //fieldElement4.removeAttribute('disabled');
        var editBioElement = document.getElementById('editButtonBio');
        this.editBioValue = editBioElement.value;
        var savePadding = document.getElementById('saveBioPadding');
        var editButtonBio = document.getElementById('editButtonData');
        var saveButtonBio = document.getElementById('saveButtonData');
        var cancelButtonBio = document.getElementById('cancelButtonData');
        editButtonBio.style.visibility = "hidden";
        editButtonBio.style.display = "none";
        cancelButtonBio.style.visibility = "visible";
        cancelButtonBio.style.display = "inline";
        saveButtonBio.style.visibility = "visible";
        saveButtonBio.style.display = "inline";
        savePadding.style.paddingRight = "5%";
        editBioElement.removeAttribute('disabled');
    };
    PostsComponent.prototype.saveBio = function () {
        var saveBioElement = document.getElementById('editButtonBio');
        var editButtonBio = document.getElementById('editButtonData');
        var saveButtonBio = document.getElementById('saveButtonData');
        var cancelButtonBio = document.getElementById('cancelButtonData');
        var savePadding = document.getElementById('saveBioPadding');
        editButtonBio.style.visibility = "visible";
        editButtonBio.style.display = "inline";
        cancelButtonBio.style.visibility = "hidden";
        cancelButtonBio.style.display = "none";
        saveButtonBio.style.visibility = "hidden";
        saveButtonBio.style.display = "none";
        savePadding.style.paddingRight = "0%";
        saveBioElement.setAttribute('disabled', 'disabled');
        //var fieldElement5 = <HTMLInputElement>document.getElementById('editButtonBio');
        //fieldElement5.setAttribute('disabled','disabled');
    };
    PostsComponent.prototype.cancelBio = function () {
        var cancelBioElement = document.getElementById('editButtonBio');
        var editButtonBio = document.getElementById('editButtonData');
        var saveButtonBio = document.getElementById('saveButtonData');
        var cancelButtonBio = document.getElementById('cancelButtonData');
        var savePadding = document.getElementById('saveBioPadding');
        editButtonBio.style.visibility = "visible";
        editButtonBio.style.display = "inline";
        cancelButtonBio.style.visibility = "hidden";
        cancelButtonBio.style.display = "none";
        saveButtonBio.style.visibility = "hidden";
        saveButtonBio.style.display = "none";
        cancelBioElement.value = this.editBioValue;
        //console.log(this.editContactValue);
        savePadding.style.paddingRight = "0%";
        cancelBioElement.setAttribute('disabled', 'disabled');
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/main/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/main/posts/posts.component.css")],
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map