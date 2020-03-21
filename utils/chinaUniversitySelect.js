!(function(){
    var event = {
        makeCenter : function(){
            $('#choose-box-wrapper').css("display","block");
            $('#choose-box-wrapper').css("position","absolute");
            $('#choose-box-wrapper').css("top", Math.max(0, (($(window).height() - $('#choose-box-wrapper').outerHeight()) / 2) + $(window).scrollTop()) + "px");
            $('#choose-box-wrapper').css("left", Math.max(0, (($(window).width() - $('#choose-box-wrapper').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        },
        initProvince : function(){
            //原先的省份列表清空
            $('#choose-a-province').html('');
            for(var i=0;i<schoolList.length;i++)
            {
                $('#choose-a-province').append('<a class="province-item" province-id="'+schoolList[i].id+'">'+schoolList[i].name+'</a>');
            }
            //添加省份列表项的click事件
            $('.province-item').bind('click', function(){
                    var item=$(this);
                    var province = item.attr('province-id');
                    var choosenItem = item.parent().find('.choosen');
                    if(choosenItem){
                        $(choosenItem).removeClass('choosen');
                    }
                        
                    item.addClass('choosen');
                    //更新大学列表
                    event.initSchool(province);
                }
            );
        },
        initSchool : function(provinceID){
            //原先的学校列表清空
            $('#choose-a-school').html('');
            var schools = schoolList[provinceID-1].school;
            for(var i=0;i<schools.length;i++)
            {
                $('#choose-a-school').append('<a class="school-item" school-id="'+schools[i].id+'">'+schools[i].name+'</a>');
            }
            //添加大学列表项的click事件
            $('.school-item').bind('click', function(){
                    var item=$(this);
                    var school = item.attr('school-id');
                    //更新选择大学文本框中的值
                    $('#selectSchool').val(item.text());
                    //关闭弹窗
                    $('#choose-box-wrapper').css("display","none");
                }
            );

        },
        selectSchool : function(){
            $('#selectSchool').click(function(){
                //将窗口居中
                event.makeCenter();

                //初始化省份列表
                event.initProvince();

                //默认情况下, 给第一个省份添加choosen样式
                $('[province-id="1"]').addClass('choosen');

                //初始化大学列表
                event.initSchool(1);
            });
        },
        close : function(){
            $('#close').focus(function(){
                $('#choose-box-wrapper').css("display","none");
            });
        },
        searchSchool : function(){
            $('#searchSchool').focus(function(){
                $(this).val('');
            });
            $('#searchSchool').keyup(function(){
                var searchVal = $(this).val();
                var searchResult = [];
                $.each(schoolList, function(i, n){
                        $.each(n['school'], function(k, item){
                        if (item.name.indexOf(searchVal) != -1){
                            searchResult.push(item);
                        }
                    });
                });

                $('#choose-a-school').html('');
                for (var i=0; i < searchResult.length; i++){
                    $('#choose-a-school').append('<a class="school-item" school-id="'+searchResult[i].id+'">'+searchResult[i].name+'</a>');
                }
                //添加大学列表项的click事件
                $('.school-item').bind('click', function(){
                        var item=$(this);
                        var school = item.attr('school-id');
                        //更新选择大学文本框中的值
                        $('#selectSchool').val(item.text());
                        //关闭弹窗
                        $('#choose-box-wrapper').css("display","none");
                    }
                );
            });

        },
        init : function(){
            //初始化选择、关闭、查询
            this.selectSchool();
            this.close();
            this.searchSchool();
        }
    };

    event.init();
    module.exports = { event }//必须在这里暴露接口，以便被外界访问，不然就不能访问
});