$(document).ready(function() {
    console.log('request data');
    $.ajax({
        url: 'http://api.electis.ru/profile/',
        type: 'GET',
//        data: form,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic "+btoa("test:testtest"));
        },
        error: function (data) {
            console.log(data);
        },
        success: function (data) {
            console.log(data);
            for (const profile of data) {
                $("#command_list").append(`
<div id="profile_id-${profile.id}" class="card py-4 col-md-12">
    <div class="card-wrapper">
        <div class="card-img">
            <img src="${profile.image}" title>
        </div>
        <div class="card-box">
            <div class="text-box">
                <h4 class="card-title mbr-fonts-style mbr-normal" mbr-theme-style="display-5" mbr-if="showTitle" data-app-selector=".card-title">${profile.name}</h4>
                <p class="mbr-text mbr-fonts-style status mbr-normal" mbr-theme-style="display-4" data-app-selector=".status" mbr-if="showStatus">${profile.function}</p>
                <p class="mbr-text mbr-fonts-style mbr-normal" mbr-theme-style="display-4" mbr-if="showText" data-app-selector=".card-box > p, .mbr-section-btn">${profile.about}</p>
            </div>
            <div class="ico-wrap" mbr-if="showcont">
                <div class="ico-box">
                    <a href="tel:${profile.phone}"><span class="px-2 mbr-iconfont mbr-iconfont-social mbri-mobile2"></span></a>
                    <p class="mbr-text mbr-fonts-style phone mbr-normal display-4">${profile.phone}</p>
                </div>
                <div class="ico-box">
                    <a href="mailto:${profile.social_email}"><span class="px-2 mbr-iconfont mbr-iconfont-social mbri-letter"></span></a>
                    <p class="mbr-text mbr-fonts-style phone mbr-normal display-4">${profile.social_email}</p>
                </div>
                <div class="ico-box">
                    <a href="${profile.social_page}" target="_blank"><span class="px-2 mbr-iconfont mbr-iconfont-social mbri-link"></span></a>
                    <p class="mbr-text mbr-fonts-style phone mbr-normal display-4">${profile.social_page}</p>
                </div>
                <div class="ico-box">
                    <a href="${profile.social_vk}" target="_blank"><span class="px-2 mbr-iconfont mbr-iconfont-social socicon-vkontakte socicon"></span></a>
                    <a href="${profile.social_fb}" target="_blank"><span class="px-2 mbr-iconfont mbr-iconfont-social socicon-facebook socicon"></span></a>
                    <a href="${profile.social_ok}" target="_blank"><span class="px-2 mbr-iconfont mbr-iconfont-social socicon-odnoklassniki socicon"></span></a>
                    <a href="${profile.social_insta}" target="_blank"><span class="px-2 mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span></a>
                    <a href="${profile.social_youtube}" target="_blank"><span class="px-2 mbr-iconfont mbr-iconfont-social socicon-youtube socicon"></span></a>
                </div>
            </div>
        </div>
    </div>
</div>
                `);

            }
        },
    });
});
