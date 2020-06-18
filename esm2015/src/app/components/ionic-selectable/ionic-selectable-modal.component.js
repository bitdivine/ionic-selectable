/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll, IonSearchbar, NavParams } from '@ionic/angular';
export class IonicSelectableModalComponent {
    /**
     * @param {?} navParams
     * @param {?} _element
     */
    constructor(navParams, _element) {
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    this.selectComponent._selectedItems.push(item);
                }));
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    /**
     * @return {?}
     */
    get _canClearCssClass() {
        return this.selectComponent.canClear;
    }
    /**
     * @return {?}
     */
    get _isMultipleCssClass() {
        return this.selectComponent.isMultiple;
    }
    /**
     * @return {?}
     */
    get _isSearchingCssClass() {
        return this.selectComponent._isSearching;
    }
    /**
     * @return {?}
     */
    get _isIos() {
        return this.selectComponent._isIos;
    }
    /**
     * @return {?}
     */
    _isMD() {
        return this.selectComponent._isMD;
    }
    /**
     * @return {?}
     */
    get _isAddItemTemplateVisibleCssClass() {
        return this.selectComponent._isAddItemTemplateVisible;
    }
    /**
     * @return {?}
     */
    onResize() {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._searchbarComponent.setFocus();
            }), 1000);
        }
    }
}
IonicSelectableModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'ionic-selectable-modal',
                template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\n      [(ngModel)]=\"selectComponent._searchText\"\n      (ionChange)=\"selectComponent._filterItems()\"\n      (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\"\n      [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-selectable-message\"\n      *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-selectable-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-selectable-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list class=\"ion-no-margin\"\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\n      class=\"ionic-selectable-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\n            [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n        [ngClass]=\"{\n          'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\n    [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-virtual-scroll class=\"ion-no-margin\"\n    *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\"\n    [items]=\"selectComponent._filteredGroups[0].items\"\n    [headerFn]=\"selectComponent.virtualScrollHeaderFn\"\n    [approxItemHeight]=\"selectComponent.virtualScrollApproxItemHeight\">\n    <ion-item-divider *virtualHeader=\"let header\"\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n      {{header}}\n    </ion-item-divider>\n    <ion-item button=\"true\" detail=\"false\" *virtualItem=\"let item\"\n      (click)=\"selectComponent._select(item)\" class=\"ionic-selectable-item\"\n      [ngClass]=\"{\n        'ionic-selectable-item-is-selected': selectComponent._isItemSelected(item),\n        'ionic-selectable-item-is-disabled': selectComponent._isItemDisabled(item)\n      }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n      <!-- Need span for text ellipsis. -->\n      <span *ngIf=\"selectComponent.itemTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <!-- Need ion-label for text ellipsis. -->\n      <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n        {{selectComponent._formatItem(item)}}\n      </ion-label>\n      <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n        <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </div>\n      </div>\n      <span *ngIf=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n        [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n      </span>\n      <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n        [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n        [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n        [slot]=\"selectComponent.itemIconSlot\">\n      </ion-icon>\n      <ion-button *ngIf=\"selectComponent.canSaveItem\"\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n        (click)=\"selectComponent._saveItem($event, item)\">\n        <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n        class=\"ionic-selectable-item-button\" slot=\"end\" fill=\"outline\"\n        (click)=\"selectComponent._deleteItemClick($event, item)\">\n        <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-virtual-scroll>\n</ion-content>\n<div class=\"ionic-selectable-add-item-template\"\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-selectable-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n"
            }] }
];
/** @nocollapse */
IonicSelectableModalComponent.ctorParameters = () => [
    { type: NavParams },
    { type: ElementRef }
];
IonicSelectableModalComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [IonContent,] }],
    _searchbarComponent: [{ type: ViewChild, args: ['searchbarComponent',] }],
    _infiniteScroll: [{ type: ViewChild, args: [IonInfiniteScroll,] }],
    _cssClass: [{ type: HostBinding, args: ['class.ionic-selectable-modal',] }],
    _canClearCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-modal-can-clear',] }],
    _isMultipleCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-multiple',] }],
    _isSearchingCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-searching',] }],
    _isIos: [{ type: HostBinding, args: ['class.ionic-selectable-modal-ios',] }],
    _isMD: [{ type: HostBinding, args: ['class.ionic-selectable-modal-md',] }],
    _isAddItemTemplateVisibleCssClass: [{ type: HostBinding, args: ['class.ionic-selectable-modal-is-add-item-template-visible',] }],
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /** @type {?} */
    IonicSelectableModalComponent.prototype._content;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._header;
    /** @type {?} */
    IonicSelectableModalComponent.prototype.selectComponent;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._searchbarComponent;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._infiniteScroll;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._cssClass;
    /**
     * @type {?}
     * @private
     */
    IonicSelectableModalComponent.prototype.navParams;
    /** @type {?} */
    IonicSelectableModalComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYy1zZWxlY3RhYmxlLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jb21wb25lbnRzL2lvbmljLXNlbGVjdGFibGUvaW9uaWMtc2VsZWN0YWJsZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU94RixNQUFNLE9BQU8sNkJBQTZCOzs7OztJQTBDeEMsWUFDVSxTQUFvQixFQUNyQixRQUFvQjtRQURuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFsQzdCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFvQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6RSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEU7U0FDRjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBbERELElBQ0ksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQzs7OztJQUNELElBQ0ksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQ0ksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7SUFDM0MsQ0FBQzs7OztJQUNELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFDRCxJQUNJLGlDQUFpQztRQUNuQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTiw4REFBOEQ7UUFDOUQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBdUJELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pFLDZEQUE2RDtZQUM3RCxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RDLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx5aVZBQXNEO2FBQ3ZEOzs7O1lBTnFELFNBQVM7WUFENUIsVUFBVTs7O3VCQVMxQyxTQUFTLFNBQUMsVUFBVTtrQ0FJcEIsU0FBUyxTQUFDLG9CQUFvQjs4QkFFOUIsU0FBUyxTQUFDLGlCQUFpQjt3QkFFM0IsV0FBVyxTQUFDLDhCQUE4QjtnQ0FFMUMsV0FBVyxTQUFDLHdDQUF3QztrQ0FJcEQsV0FBVyxTQUFDLDBDQUEwQzttQ0FJdEQsV0FBVyxTQUFDLDJDQUEyQztxQkFJdkQsV0FBVyxTQUFDLGtDQUFrQztvQkFJOUMsV0FBVyxTQUFDLGlDQUFpQztnREFJN0MsV0FBVyxTQUFDLDJEQUEyRDt1QkFJdkUsWUFBWSxTQUFDLGVBQWU7Ozs7SUFsQzdCLGlEQUNxQjs7SUFDckIsZ0RBQXFCOztJQUNyQix3REFBMEM7O0lBQzFDLDREQUNrQzs7SUFDbEMsd0RBQ21DOztJQUNuQyxrREFDaUI7Ozs7O0lBaUNmLGtEQUE0Qjs7SUFDNUIsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbkNvbnRlbnQsIElvbkluZmluaXRlU2Nyb2xsLCBJb25TZWFyY2hiYXIsIE5hdlBhcmFtcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpb25pYy1zZWxlY3RhYmxlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbmljLXNlbGVjdGFibGUtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoSW9uQ29udGVudClcbiAgX2NvbnRlbnQ6IElvbkNvbnRlbnQ7XG4gIF9oZWFkZXI6IEhUTUxFbGVtZW50O1xuICBzZWxlY3RDb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoYmFyQ29tcG9uZW50JylcbiAgX3NlYXJjaGJhckNvbXBvbmVudDogSW9uU2VhcmNoYmFyO1xuICBAVmlld0NoaWxkKElvbkluZmluaXRlU2Nyb2xsKVxuICBfaW5maW5pdGVTY3JvbGw6IElvbkluZmluaXRlU2Nyb2xsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwnKVxuICBfY3NzQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtY2FuLWNsZWFyJylcbiAgZ2V0IF9jYW5DbGVhckNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5jYW5DbGVhcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtbXVsdGlwbGUnKVxuICBnZXQgX2lzTXVsdGlwbGVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb21wb25lbnQuaXNNdWx0aXBsZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtaXMtc2VhcmNoaW5nJylcbiAgZ2V0IF9pc1NlYXJjaGluZ0Nzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5faXNTZWFyY2hpbmc7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlvcycpXG4gIGdldCBfaXNJb3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9pc0lvcztcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtbW9kYWwtbWQnKVxuICBfaXNNRCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb21wb25lbnQuX2lzTUQ7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1vZGFsLWlzLWFkZC1pdGVtLXRlbXBsYXRlLXZpc2libGUnKVxuICBnZXQgX2lzQWRkSXRlbVRlbXBsYXRlVmlzaWJsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbXBvbmVudC5faXNBZGRJdGVtVGVtcGxhdGVWaXNpYmxlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvblJlc2l6ZSgpIHtcbiAgICAvLyBpb24tZm9vdGVyIGluc2lkZSB0aGUgdGVtcGxhdGUgbWlnaHQgY2hhbmdlIGl0cyBoZWlnaHQgd2hlblxuICAgIC8vIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2VzLlxuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICkge1xuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdzZWxlY3RDb21wb25lbnQnKTtcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudC5fbW9kYWxDb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zID0gW107XG5cbiAgICBpZiAoIXRoaXMuc2VsZWN0Q29tcG9uZW50Ll9pc051bGxPcldoaXRlU3BhY2UodGhpcy5zZWxlY3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RDb21wb25lbnQuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLnNlbGVjdENvbXBvbmVudC52YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDb21wb25lbnQuX3NlbGVjdGVkSXRlbXMucHVzaCh0aGlzLnNlbGVjdENvbXBvbmVudC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuc2VsZWN0Q29tcG9uZW50Ll9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9oZWFkZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLWhlYWRlcicpO1xuXG4gICAgaWYgKHRoaXMuX3NlYXJjaGJhckNvbXBvbmVudCAmJiB0aGlzLnNlbGVjdENvbXBvbmVudC5zaG91bGRGb2N1c1NlYXJjaGJhcikge1xuICAgICAgLy8gRm9jdXMgYWZ0ZXIgYSBkZWxheSBiZWNhdXNlIGZvY3VzIGRvZXNuJ3Qgd29yayB3aXRob3V0IGl0LlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlYXJjaGJhckNvbXBvbmVudC5zZXRGb2N1cygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG59XG4iXX0=