/**
 * @fileoverview PropertyPanel shows project's property
 */
'use strict';

Entry.PropertyPanel = function() {
    this.modes = {};
    this.selected = null;
};

(function(p) {
    /**
     * Generate View
     */
    p.generateView = function(parentDom, option) {
        const container = $(parentDom);
      //* 이거 주석처리해서 밑에 안나옴 밑 파티션
        this._view = Entry.Dom('div', {
            class: 'propertyPanel',
            parent: container,
        }); 
     
      
/*
        this._tabView = Entry.Dom('div', {
            class: 'propertyTab',
            parent: this._view,
        });

        this._contentView = Entry.Dom('div', {
            class: 'propertyContent',
            parent: this._view,
        });   */

        this._cover = Entry.Dom('div', {
            classes: ['propertyPanelCover',  /*'entryRemove' */],
            parent: this._view,
            
        });

        
        $('.propertyPanelCover').each(function() { 
         
            

            $(this).before($('<span>').html("<style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"5\" color=\"#DE6449\" face=\"Black Han Sans\"> 골드버그란 명칭은 미국의 만화가, 루브 골드버그의 이름에서 유래되었습니다.</font><br/>"));
            
            $(this).before($('<span>').html("<br/><style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"4\" color=\"#754F44\" face=\"Do Hyeon\">간단한 결과에 도달하기까지의 과정을 다양하고 복잡하게 창의적으로 설계하여 끊어짐 없이 연속된 동작을 만들어내는 장치를 골드버그 장치라고 할 수 있습니다.</font><br/>"));

            $(this).before($('<span>').html("<br/><style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><style=\"text-align:center\";><font size=\"5\"  color=\"#eb9f9f\" face=\"Do Hyeon\">골드버그의 제약조건은</font></style><br/>"));

            $(this).before($('<span>').html("<br/><style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"5\" color=\"#eb9f9f\" face=\"Do Hyeon\">복잡한 기계의 사용이 아닌 실생활에서 흔히 볼 수 있는 여러 사물들을 사용해야 합니다.</font><br/>"));

            $(this).before($('<span>').html(" <style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"5\" color=\"#eb9f9f\" face=\"Do Hyeon\">여러가지 단계가 존재해야 합니다.</font><br/>"));

            $(this).before($('<span>').html(" <style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"5\" color=\"#eb9f9f\" face=\"Do Hyeon\">여러 단계를 거쳐간다 하더라도 목표달성을 반드시 해야 합니다.</font><br/>"));

            $(this).before($('<span>').html("<br/><style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"4\" color=\"#d68189\" face=\"Do Hyeon\">골드버그 장치를 제작하다 보면 어려 연관성 없는 사물을 연관 지어야 하다 보니 창의성 개발에 도움을 주며, 개인이 아닌 팀플레이로 제작하기 때문에 협동심, 커뮤니케이션을 길러주고 직접 제작을 하다 보니 듣기만 하는 주입식 교육보다는 좀 더 효과적으로 교육이 가능하고, 여러 과학적 사고력을 크게 키울 수 있다는 장점이 있습니다.       </font>     <br/>"));

        
            
        });

         

        /*  $('.propertyPanelCover').each(function() {
           
            $(this).before($('<span>').text('골드버그란 명칭은 미국의 만화가,  루브 골드버그의 이름에서 유래되었습니다.'));
            $(this).text().replace(/\r?\n/g, '<br />'); 
           
           
             $(this).before($('<text2>').text("간단한 결과에 도달하기까지의 과정을 다양하고 복잡하게 창의적으로 설계하여 끊어짐 없이 연속된 동작을 만들어내는 장치를 골드버그 장치라고 할 수 있습니다."));
             
           }); */
        

        const splitter = Entry.Dom('div', {
            class: 'entryObjectSelectedImgWorkspace',
            parent: container,
        }); 
        this.initializeSplitter(splitter);
    }; 
    

    p.addMode = function(mode, contentObj) {
        if (this.modes[mode]) {
            this.removeMode(mode);
        }

        let contentDom = contentObj.getView();
        // will be removed after apply new Dom class
        contentDom = Entry.Dom(contentDom, {
            parent: this._contentView,
        });

        const tabDom = Entry.Dom(`<div>${Lang.Menus[mode]}</div>`, {
            classes: ['propertyTabElement', `propertyTab${mode}`],
            parent: this._tabView,
        });
        const that = this;
        tabDom.bind('click', () => {
            that.select(mode);
        });

        if (mode == 'console') {
            contentObj.codeMirror.refresh();
        }

        if (this.modes[mode]) {
            this.modes[mode].tabDom.remove();
            this.modes[mode].contentDom.remove();
            if (mode == 'hw') {
                $(this.modes).removeClass('.propertyTabhw');
                $('.propertyTabhw').unbind('dblclick');
            }
        }

        this.modes[mode] = {
            obj: contentObj,
            tabDom,
            contentDom,
        };

        if (mode == 'hw') {
            $('.propertyTabhw').bind('dblclick', () => {
                Entry.dispatchEvent('hwModeChange');
            });
        }
    };

    p.removeMode = function(mode) {
        if (this.modes[mode]) {
            this.modes[mode].tabDom.remove();
            this.modes[mode].contentDom.remove();
            if (mode == 'hw') {
                $(this.modes).removeClass('.propertyTabhw');
                $('.propertyTabhw').unbind('dblclick');
            }
        }

        const keys = Object.keys(this.modes);
        if (keys && keys.length > 0) {
            this.select(keys[0]);
        }
    };

    p.resize = function(canvasSize) {
        const selected = this.selected;
        if (!selected) {
            return;
        }
        const canvasHeight = (canvasSize * 9) / 16;
        this._view.css({
            width: `${canvasSize}px`,
            top: `${canvasHeight + 35 + 40 + 48 - 22}px`,
        });
        if (canvasSize >= 430) {
            this._view.removeClass('collapsed');
        } else {
            this._view.addClass('collapsed');
        }

        Entry.dispatchEvent('windowResized');

        const obj = this.modes[selected].obj;
        if (selected == 'hw') {
            if (this.modes.hw.obj.listPorts) {
                obj.resizeList();
            } else {
                obj.resize && obj.resize();
            }
        } else {
            obj.resize && obj.resize();
        }
    };

    p.select = function(modeName) {
        for (const key in this.modes) {
            const mode = this.modes[key];
            mode.tabDom.removeClass('selected');
            mode.contentDom.addClass('entryRemove');
            $(mode.contentDom).detach();
            mode.obj.visible = false;
        }

        const selected = this.modes[modeName];
        $(this._contentView).append(selected.contentDom);
        selected.tabDom.addClass('selected');
        selected.contentDom.removeClass('entryRemove');
        if (selected.obj.resize) {
            selected.obj.resize();
        }
        selected.obj.visible = true;
        this.selected = modeName;
    };

    p.initializeSplitter = function(splitter) {
        const that = this;
        splitter.bind('mousedown touchstart', function(e) {
            e.preventDefault();
            if (Entry.disposeEvent) {
                Entry.disposeEvent.notify();
            }
            const container = Entry.container;
            that._cover.removeClass('entryRemove');
            that._cover._isVisible = true;
            container.splitterEnable = true;
            if (Entry.documentMousemove) {
                container.resizeEvent = Entry.documentMousemove.attach(this, (e) => {
                    if (container.splitterEnable) {
                        Entry.resizeElement({
                            canvasWidth: e.clientX || e.x,
                        });
                    }
                });
            }
            $(document).bind('mouseup.container:splitter touchend.container:splitter', func);
        });

        const func = function(e) {
            const container = Entry.container;
            const listener = container.resizeEvent;
            if (listener) {
                container.splitterEnable = false;
                listener.destroy();
                delete container.resizeEvent;
            }
            if (that._cover._isVisible) {
                that._cover._isVisible = false;
                that._cover.addClass('entryRemove');
            }
            $(document).unbind('.container:splitter');
        };
    };
    
})(Entry.PropertyPanel.prototype);
