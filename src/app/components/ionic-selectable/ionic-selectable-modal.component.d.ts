import { AfterViewInit, ElementRef } from '@angular/core';
import { IonContent, IonInfiniteScroll, IonSearchbar, NavParams } from '@ionic/angular';
import { IonicSelectableComponent } from './ionic-selectable.component';
export declare class IonicSelectableModalComponent implements AfterViewInit {
    private navParams;
    _element: ElementRef;
    _content: IonContent;
    _header: HTMLElement;
    selectComponent: IonicSelectableComponent;
    _searchbarComponent: IonSearchbar;
    _infiniteScroll: IonInfiniteScroll;
    _cssClass: boolean;
    // @ts-ignore
    get _canClearCssClass(): boolean;
    // @ts-ignore
    get _isMultipleCssClass(): boolean;
    // @ts-ignore
    get _isSearchingCssClass(): boolean;
    // @ts-ignore
    get _isIos(): boolean;
    // @ts-ignore
    _isMD(): boolean;
    // @ts-ignore
    get _isAddItemTemplateVisibleCssClass(): boolean;
    // @ts-ignore
    onResize(): void;
    // @ts-ignore
    constructor(navParams: NavParams, _element: ElementRef);
    // @ts-ignore
    ngAfterViewInit(): void; }
