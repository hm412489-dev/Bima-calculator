function injectSidebarStyles(_0xg1a65a,_0xea72f){_0xea72f="selyts-motsuc-rabedis-amib".split("").reverse().join("");_0xg1a65a='\u006A\u006D\u006C\u006E\u006B\u0069';if(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xea72f))return;const _0x8b5bb=`
    /* Hamburger Button in Header */
    .sidebar-menu-btn {
        background: var(--tab-wrapper-bg);
        color: var(--text-main);
        border: 1.5px solid var(--card-border);
        width: 38px;
        height: 38px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 17px;
        margin-right: 8px;
        transition: all 0.2s ease;
        flex-shrink: 0;
    }
    .sidebar-menu-btn:hover {
        background: var(--primary);
        color: #ffffff;
        border-color: var(--primary);
        transform: scale(1.05);
    }

    /* Sidebar Drawer Overlay */
    .sidebar-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .sidebar-overlay.active {
        display: block;
        opacity: 1;
    }

    /* Sidebar Panel */
    .sidebar-panel {
        position: fixed;
        top: 0;
        left: -330px;
        width: 310px;
        max-width: 86vw;
        height: 100%;
        background: var(--card-bg);
        border-right: 2px solid var(--card-border);
        box-shadow: 10px 0 40px rgba(0, 0, 0, 0.35);
        z-index: 10001;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
    }
    .sidebar-overlay.active .sidebar-panel {
        transform: translateX(330px);
    }

    /* Sidebar Header */
    .sidebar-header {
        padding: 18px 16px;
        background: var(--tab-wrapper-bg);
        border-bottom: 2px solid var(--card-border);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sidebar-brand {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .sidebar-brand-icon {
        width: 38px;
        height: 38px;
        border-radius: 12px;
        background: var(--primary);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 19px;
    }
    .sidebar-brand-text h3 {
        font-size: 15px;
        font-weight: 800;
        color: var(--text-main);
        line-height: 1.2;
    }
    .sidebar-brand-text span {
        font-size: 11.5px;
        color: var(--text-muted);
        font-weight: 600;
    }
    .sidebar-close-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: transparent;
        border: 1px solid var(--card-border);
        color: var(--text-muted);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        transition: all 0.2s;
    }
    .sidebar-close-btn:hover {
        background: #ef4444;
        color: #ffffff;
        border-color: #ef4444;
    }

    /* Sidebar Menu List */
    .sidebar-content {
        flex: 1;
        overflow-y: auto;
        padding: 14px 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .sidebar-nav-item {
        width: 100%;
        list-style: none;
    }
    .sidebar-nav-btn {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 14px;
        border-radius: 14px;
        border: 1.5px solid var(--card-border);
        background: var(--card-bg);
        color: var(--text-main);
        font-family: inherit;
        font-size: 14.5px;
        font-weight: 800;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
    }
    .sidebar-nav-btn i.icon {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: var(--tab-wrapper-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: var(--primary);
        flex-shrink: 0;
        transition: all 0.2s;
    }
    .sidebar-nav-btn:hover {
        background: var(--tab-wrapper-bg);
        border-color: var(--primary);
        color: var(--primary);
        transform: translateX(4px);
    }
    .sidebar-nav-btn:hover i.icon {
        background: var(--primary);
        color: #ffffff;
    }

    /* Sidebar Footer */
    .sidebar-footer {
        padding: 14px 16px;
        background: var(--tab-wrapper-bg);
        border-top: 1.5px solid var(--card-border);
        font-size: 12px;
        text-align: center;
        color: var(--text-muted);
        font-weight: 700;
    }
    .sidebar-footer strong {
        color: var(--primary);
    }

    /* ─── Generic Sidebar Popup Modals ─── */
    .sb-modal-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.72);
        backdrop-filter: blur(7px);
        -webkit-backdrop-filter: blur(7px);
        justify-content: center;
        align-items: center;
        z-index: 10010;
        padding: 14px;
        animation: fadeIn 0.2s ease-out;
    }
    .sb-modal-card {
        background: var(--card-bg);
        border: 2px solid var(--primary);
        border-radius: 22px;
        width: 100%;
        max-width: 650px;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 0 25px 60px rgba(0,0,0,0.4);
        overflow: hidden;
    }
    .sb-modal-header {
        padding: 16px 20px;
        background: var(--tab-wrapper-bg);
        border-bottom: 2px solid var(--card-border);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sb-modal-header h3 {
        font-size: 17px;
        font-weight: 800;
        color: var(--text-main);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .sb-modal-header h3 i {
        color: var(--primary);
    }
    .sb-modal-body {
        padding: 18px 20px;
        overflow-y: auto;
        font-size: 14.5px;
        color: var(--text-main);
        line-height: 1.6;
    }

    /* Contacts Directory */
    .contact-dept-title {
        background: var(--tab-wrapper-bg);
        padding: 8px 12px;
        border-radius: 10px;
        font-weight: 800;
        color: var(--primary);
        margin: 14px 0 8px 0;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-left: 4px solid var(--primary);
    }
    .contact-card {
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        border-radius: 12px;
        padding: 10px 12px;
        margin-bottom: 6px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .contact-card .officer-name {
        font-weight: 800;
        color: var(--text-main);
        font-size: 14.5px;
    }
    .contact-card .officer-desig {
        font-size: 12.5px;
        color: var(--text-muted);
        font-weight: 600;
    }
    .contact-card .phone-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
    }
    .phone-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--results-bg);
        color: var(--results-label);
        border: 1px solid var(--results-border);
        padding: 4px 10px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 800;
        font-size: 13px;
        transition: 0.2s;
    }
    .phone-badge:hover {
        background: var(--primary);
        color: #ffffff;
        border-color: var(--primary);
    }

    /* Bank Account Cards */
    .bank-card {
        background: var(--tab-wrapper-bg);
        border: 1.5px solid var(--card-border);
        border-radius: 14px;
        padding: 14px;
        margin-bottom: 10px;
    }
    .bank-card h4 {
        font-size: 15px;
        font-weight: 800;
        color: var(--primary);
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .bank-info-row {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        border-bottom: 1px dashed var(--card-border);
        font-size: 13.5px;
    }
    .bank-info-row:last-child {
        border-bottom: none;
    }
    .bank-info-row .val {
        font-weight: 800;
        color: var(--text-main);
    }

    /* Feature & Guide Bullets */
    .feature-item {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        background: var(--tab-wrapper-bg);
        padding: 12px 14px;
        border-radius: 12px;
        border: 1px solid var(--card-border);
    }
    .feature-item i {
        font-size: 20px;
        color: var(--primary);
        margin-top: 3px;
    }
    .guide-step {
        background: var(--tab-wrapper-bg);
        border-left: 4px solid var(--primary);
        padding: 10px 14px;
        border-radius: 0 12px 12px 0;
        margin-bottom: 10px;
    }
    .guide-step strong {
        color: var(--primary);
    }

    /* About Me Box */
    .about-card {
        text-align: center;
        padding: 10px 4px;
    }
    .about-avatar {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background: var(--primary);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        margin: 0 auto 10px auto;
        box-shadow: 0 6px 18px rgba(13, 148, 136, 0.35);
    }
    `;const _0xf82gfa=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("elyts".split("").reverse().join(""));_0xf82gfa['\u0069\u0064']=_0xea72f;_0xf82gfa['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=_0x8b5bb;document['\u0068\u0065\u0061\u0064']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xf82gfa);}function createSidebarDOM(_0x7abb){if(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("yalrevOrabediSamib".split("").reverse().join("")))return;const _0xd3ef=`
    <div class="sidebar-overlay" id="bimaSidebarOverlay" onclick="handleSidebarOverlayClick(event)">
        <div class="sidebar-panel" onclick="event.stopPropagation()">
            <!-- হেডার -->
            <div class="sidebar-header">
                <div class="sidebar-brand">
                    <div class="sidebar-brand-icon"><i class="fas fa-shield-halved"></i></div>
                    <div class="sidebar-brand-text">
                        <h3>আলফা ইসলামী লাইফ</h3>
                        <span>ইনফরমেশন ও সাপোর্ট হাব</span>
                    </div>
                </div>
                <button type="button" class="sidebar-close-btn" onclick="toggleSidebar(false)" title="বন্ধ করুন">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- মেনু তালিকা (৫টি নির্ধারিত অপশন) -->
            <div class="sidebar-content">
                <li class="sidebar-nav-item">
                    <button class="sidebar-nav-btn" onclick="openSbModal('contacts')">
                        <i class="fas fa-phone-volume icon"></i>
                        <span>কর্মকর্তাদের ফোন নম্বর</span>
                    </button>
                </li>
                <li class="sidebar-nav-item">
                    <button class="sidebar-nav-btn" onclick="openSbModal('bank')">
                        <i class="fas fa-building-columns icon"></i>
                        <span>ব্যাংক একাউন্ট ডিটেইলস</span>
                    </button>
                </li>
                <li class="sidebar-nav-item">
                    <button class="sidebar-nav-btn" onclick="openSbModal('features')">
                        <i class="fas fa-wand-magic-sparkles icon"></i>
                        <span>অ্যাপ ফিচারসমূহ</span>
                    </button>
                </li>
                <li class="sidebar-nav-item">
                    <button class="sidebar-nav-btn" onclick="openSbModal('guide')">
                        <i class="fas fa-book-open-reader icon"></i>
                        <span>ব্যবহার নির্দেশিকা</span>
                    </button>
                </li>
                <li class="sidebar-nav-item">
                    <button class="sidebar-nav-btn" onclick="openSbModal('about')">
                        <i class="fas fa-user-tie icon"></i>
                        <span>About Me (ডেভেলপার)</span>
                    </button>
                </li>
            </div>

            <!-- ফুটার -->
            <div class="sidebar-footer">
                ✨ Developed by <strong>IT EMON</strong> ✨<br>
                <span>বীমা ক্যালকুলেটর ও ইনফো পোর্টাল</span>
            </div>
        </div>
    </div>

    <!-- ইনফরমেশন পপআপ মডাল কন্টেইনার -->
    <div class="sb-modal-overlay" id="sbUniversalModal" onclick="if(event.target.id==='sbUniversalModal')closeSbModal()">
        <div class="sb-modal-card" onclick="event.stopPropagation()">
            <div class="sb-modal-header">
                <h3 id="sbModalTitle"><i class="fas fa-info-circle"></i> তথ্য</h3>
                <button type="button" class="sidebar-close-btn" onclick="closeSbModal()"><i class="fas fa-times"></i></button>
            </div>
            <div class="sb-modal-body" id="sbModalBody"></div>
        </div>
    </div>
    `;_0x7abb=(642115^642113)+(972015^972009);document['\u0062\u006F\u0064\u0079']['\u0069\u006E\u0073\u0065\u0072\u0074\u0041\u0064\u006A\u0061\u0063\u0065\u006E\u0074\u0048\u0054\u004D\u004C']("dneerofeb".split("").reverse().join(""),_0xd3ef);}function injectMenuButtonToHeader(_0xac_0xc9f){if(document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ntBuneMrabedis".split("").reverse().join("")))return;const _0x_0xead=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0068\u0065\u0061\u0064\u0065\u0072\u002D\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072\u0020\u0068\u0032");_0xac_0xc9f=(871552^871557)+(226161^226163);if(!_0x_0xead)return;const _0x826b5e=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("nottub".split("").reverse().join(""));_0x826b5e['\u0074\u0079\u0070\u0065']="nottub".split("").reverse().join("");_0x826b5e['\u0069\u0064']="\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u004D\u0065\u006E\u0075\u0042\u0074\u006E";_0x826b5e['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002D\u006D\u0065\u006E\u0075\u002D\u0062\u0074\u006E";_0x826b5e['\u0074\u0069\u0074\u006C\u0065']="\u09A8\u09C1\u09B2\u09C1\u0996 \u09C1\u09A8\u09C7\u09AE".split("").reverse().join("");_0x826b5e['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=">i/<>\"srab-af saf\"=ssalc i<".split("").reverse().join("");_0x826b5e['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=()=>toggleSidebar(!![]);_0x_0xead['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0069\u006E\u0073\u0065\u0072\u0074\u0042\u0065\u0066\u006F\u0072\u0065'](_0x826b5e,_0x_0xead);}function toggleSidebar(open=!![]){var _0x10bde=(950576^950580)+(356998^356995);const _0xa1b3f=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0069\u006D\u0061\u0053\u0069\u0064\u0065\u0062\u0061\u0072\u004F\u0076\u0065\u0072\u006C\u0061\u0079");_0x10bde="nodidp".split("").reverse().join("");if(!_0xa1b3f)return;if(open){_0xa1b3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");document['\u0062\u006F\u0064\u0079']['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0076\u0065\u0072\u0066\u006C\u006F\u0077']="\u0068\u0069\u0064\u0064\u0065\u006E";}else{_0xa1b3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");document['\u0062\u006F\u0064\u0079']['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0076\u0065\u0072\u0066\u006C\u006F\u0077']='';}}function handleSidebarOverlayClick(e){if(e['\u0074\u0061\u0072\u0067\u0065\u0074']&&e['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0069\u0064']==="\u0062\u0069\u006D\u0061\u0053\u0069\u0064\u0065\u0062\u0061\u0072\u004F\u0076\u0065\u0072\u006C\u0061\u0079"){toggleSidebar(false);}}function openSbModal(type){toggleSidebar(false);const _0x2beb=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ladoMlasrevinUbs".split("").reverse().join(""));const _0x1f36gd=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0062\u004D\u006F\u0064\u0061\u006C\u0054\u0069\u0074\u006C\u0065");var _0x9bgb=(873491^873495)+(537035^537032);const _0x3775ea=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0062\u004D\u006F\u0064\u0061\u006C\u0042\u006F\u0064\u0079");_0x9bgb=786988^786986;if(!_0x2beb||!_0x1f36gd||!_0x3775ea)return;if(type==="stcatnoc".split("").reverse().join("")){_0x1f36gd['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u09B0\u09AC\u09CD\u09AE\u09A8 \u09A8\u09CB\u09AB \u09B0\u09C7\u09A6\u09BE\u09A4\u09CD\u09B0\u0995\u09AE\u09CD\u09B0\u0995 \u09A4\u09CD\u09AA\u09BE\u09B0\u09CD\u09AA\u09AC\u09CD\u09A4\u09BF\u09DF\u09BE\u09A6 >i/<>\"emulov-enohp-af saf\"=ssalc i<".split("").reverse().join("");_0x3775ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=renderContactsContent();}else if(type==="\u0062\u0061\u006E\u006B"){_0x1f36gd['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u003C\u0069\u0020\u0063\u006C\u0061\u0073\u0073\u003D\u0022\u0066\u0061\u0073\u0020\u0066\u0061\u002D\u0062\u0075\u0069\u006C\u0064\u0069\u006E\u0067\u002D\u0063\u006F\u006C\u0075\u006D\u006E\u0073\u0022\u003E\u003C\u002F\u0069\u003E\u0020\u09AC\u09CD\u09AF\u09BE\u0982\u0995\u0020\u098F\u0995\u09BE\u0989\u09A8\u09CD\u099F\u0020\u0993\u0020\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F\u0020\u09A4\u09A5\u09CD\u09AF";_0x3775ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=renderBankContent();}else if(type==="serutaef".split("").reverse().join("")){_0x1f36gd['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u003C\u0069\u0020\u0063\u006C\u0061\u0073\u0073\u003D\u0022\u0066\u0061\u0073\u0020\u0066\u0061\u002D\u0077\u0061\u006E\u0064\u002D\u006D\u0061\u0067\u0069\u0063\u002D\u0073\u0070\u0061\u0072\u006B\u006C\u0065\u0073\u0022\u003E\u003C\u002F\u0069\u003E\u0020\u0985\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u09B6\u0995\u09CD\u09A4\u09BF\u09B6\u09BE\u09B2\u09C0\u0020\u09AB\u09BF\u099A\u09BE\u09B0\u09B8\u09AE\u09C2\u09B9";_0x3775ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=renderFeaturesContent();}else if(type==="\u0067\u0075\u0069\u0064\u0065"){_0x1f36gd['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u09BE\u0995\u09BF\u09B6\u09C7\u09A6\u09CD\u09B0\u09BF\u09A8 \u09B0\u09BE\u09B9\u09AC\u09AF\u09CD\u09AC \u09AA\u09BE\u09AF\u09CD\u0985 >i/<>\"redaer-nepo-koob-af saf\"=ssalc i<".split("").reverse().join("");_0x3775ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=renderGuideContent();}else if(type==="\u0061\u0062\u006F\u0075\u0074"){_0x1f36gd['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u003C\u0069\u0020\u0063\u006C\u0061\u0073\u0073\u003D\u0022\u0066\u0061\u0073\u0020\u0066\u0061\u002D\u0075\u0073\u0065\u0072\u002D\u0074\u0069\u0065\u0022\u003E\u003C\u002F\u0069\u003E\u0020\u09A1\u09C7\u09AD\u09C7\u09B2\u09AA\u09BE\u09B0\u0020\u09AA\u09B0\u09BF\u099A\u09BF\u09A4\u09BF\u0020\u0028\u0041\u0062\u006F\u0075\u0074\u0020\u004D\u0065\u0029";_0x3775ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=renderAboutContent();}_0x2beb['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u0066\u006C\u0065\u0078";document['\u0062\u006F\u0064\u0079']['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0076\u0065\u0072\u0066\u006C\u006F\u0077']="\u0068\u0069\u0064\u0064\u0065\u006E";}function closeSbModal(){var _0x3907fc=(289595^289587)+(161764^161765);const _0x6fd=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0062\u0055\u006E\u0069\u0076\u0065\u0072\u0073\u0061\u006C\u004D\u006F\u0064\u0061\u006C");_0x3907fc='\u006E\u0067\u0067\u006C\u006A\u0063';if(_0x6fd){_0x6fd['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u006E\u006F\u006E\u0065";document['\u0062\u006F\u0064\u0079']['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0076\u0065\u0072\u0066\u006C\u006F\u0077']='';}}function renderContactsContent(){return`
    <div style="background:var(--results-bg); border:1.5px solid var(--results-border); padding:10px 14px; border-radius:12px; font-weight:700; color:var(--results-label); margin-bottom:12px;">
        🏢 <strong>প্রধান কার্যালয়:</strong> এ জে টাওয়ার, প্লট # ৪, সোনারগাঁও লিংক রোড, কাওরান বাজার, ঢাকা-১২১৫।<br>
        📞 <strong>হটলাইন:</strong> <a href="tel:09678300200" class="phone-badge">০৯৬৭৮-৩০০২০০</a> | <a href="tel:0255013304" class="phone-badge">০২৫৫০১৩৩০৪-৫</a>
    </div>

    <!-- আইসিটি ও সফটওয়্যার বিভাগ -->
    <div class="contact-dept-title"><i class="fas fa-laptop-code"></i> আইসিটি ও সফটওয়্যার বিভাগ</div>
    <div class="contact-card">
        <div class="officer-name">মোঃ নাজমুল আকবর জুয়েল</div>
        <div class="officer-desig">এএমডি এন্ড হেড, আইসিটি বিভাগ</div>
        <div class="phone-row">
            <a href="tel:01711227298" class="phone-badge"><i class="fas fa-phone"></i> ০১৭১১-২২৭২৯৮</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ১০৪</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মোঃ জাকারিয়া রানা</div>
        <div class="officer-desig">ডিএম (নেটওয়ার্ক এন্ড হার্ডওয়্যার)</div>
        <div class="phone-row">
            <a href="tel:01915779855" class="phone-badge"><i class="fas fa-phone"></i> ০১৯১৫৭৭৯৮৫৫</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ১১০</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">রাজিব কুমার দেব</div>
        <div class="officer-desig">ডিএম (সফটওয়‍্যার মেইনটেনেন্স)</div>
        <div class="phone-row">
            <a href="tel:01731686694" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৩১৬৮৬৬৯৪</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ১০৯</span>
        </div>
    </div>

    <!-- আন্ডাররাইটিং ও কাস্টমার সার্ভিস -->
    <div class="contact-dept-title"><i class="fas fa-file-signature"></i> আন্ডাররাইটিং ও কাস্টমার সার্ভিস বিভাগ</div>
    <div class="contact-card">
        <div class="officer-name">ছানা উল্ল্যা মজুমদার</div>
        <div class="officer-desig">এসভিপি, আন্ডাররাইটিং ও কাস্টমার সার্ভিস</div>
        <div class="phone-row">
            <a href="tel:01787683504" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫০৪</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২০২</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">শিবু নারায়ন ভৌমিক</div>
        <div class="officer-desig">এসইও, আন্ডাররাইটিং সেকশন</div>
        <div class="phone-row">
            <a href="tel:01787683507" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫০৭</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২১৩</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মোঃ মেজবাহ্ উদ্দিন ভূঁইয়া</div>
        <div class="officer-desig">এসইও, আন্ডাররাইটিং সেকশন</div>
        <div class="phone-row">
            <a href="tel:01716373116" class="phone-badge"><i class="fas fa-phone"></i> ০১৭১৬৩৭৩১১৬</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২০৮</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মোঃ সাইফ রহমান সাকিন</div>
        <div class="officer-desig">এসইও, আন্ডাররাইটিং সেকশন</div>
        <div class="phone-row">
            <a href="tel:01531172450" class="phone-badge"><i class="fas fa-phone"></i> ০১৫৩১-১৭২৪৫০</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২৩০</span>
        </div>
    </div>

    <!-- দাবী ও ম্যাচিউরিটি বিভাগ -->
    <div class="contact-dept-title"><i class="fas fa-hand-holding-dollar"></i> মৃত্যু দাবী ও মেয়াদোত্তর (ম্যাচিউরিটি)</div>
    <div class="contact-card">
        <div class="officer-name">মোঃ বশির আল হেলাল</div>
        <div class="officer-desig">সিনিয়র অফিসার, মৃত্যু দাবী সেকশন</div>
        <div class="phone-row">
            <a href="tel:01787683503" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫০৩</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২১৪</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মোহাম্মদ সাইফুল ইসলাম</div>
        <div class="officer-desig">ইও, ম্যাচিউরিটি (মেয়াদোত্তর) সেকশন</div>
        <div class="phone-row">
            <a href="tel:01787683516" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫১৬</a>
            <a href="tel:01812424398" class="phone-badge"><i class="fas fa-phone"></i> ০১৮১২৪২৪৩৯৮</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২২৯</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">এএসএম নাজমুস সাকিব</div>
        <div class="officer-desig">সহযোগী বীমা দাবী ও সমর্পণ সেকশন</div>
        <div class="phone-row">
            <a href="tel:01787683545" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫৪৫</a>
            <a href="tel:01787683514" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫১৪</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২২০</span>
        </div>
    </div>

    <!-- অর্থ ও হিসাব বিভাগ -->
    <div class="contact-dept-title"><i class="fas fa-calculator"></i> অর্থ ও হিসাব বিভাগ</div>
    <div class="contact-card">
        <div class="officer-name">মোঃ আলমগীর আলম</div>
        <div class="officer-desig">এসইভিপি এন্ড ইনচার্জ, অর্থ ও হিসাব বিভাগ</div>
        <div class="phone-row">
            <a href="tel:01715913989" class="phone-badge"><i class="fas fa-phone"></i> ০১৭১৫৯১৩৯৮৯</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ১০৫</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মোঃ আতিকুল ইসলাম চৌধুরী</div>
        <div class="officer-desig">ডিভিপি, পিআর কালেকশন সেকশন</div>
        <div class="phone-row">
            <a href="tel:01851878780" class="phone-badge"><i class="fas fa-phone"></i> ০১৮৫১৮৭৮৭৮০</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ১০৮</span>
        </div>
    </div>

    <!-- এজেন্সী সার্ভিস ও ব্রাঞ্চ কন্ট্রোল -->
    <div class="contact-dept-title"><i class="fas fa-users-gear"></i> এজেন্সী সার্ভিস ও ব্রাঞ্চ কন্ট্রোল</div>
    <div class="contact-card">
        <div class="officer-name">মোহাম্মদ লোকমান হোসেন</div>
        <div class="officer-desig">ডিভিপি, এজেন্সি সার্ভিস বিভাগ</div>
        <div class="phone-row">
            <a href="tel:01918185957" class="phone-badge"><i class="fas fa-phone"></i> ০১৯১৮১৮৫৯৫৭</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২০৩</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মীর আসিফ আদনান</div>
        <div class="officer-desig">ইও, ব্রাঞ্চ কন্ট্রোল ও লিংক পরিবর্তন</div>
        <div class="phone-row">
            <a href="tel:01770268123" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৭০২৬৮১২৩</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২০৬</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">বিকাশ বড়ুয়া ও আবিদ ফেরদৌস</div>
        <div class="officer-desig">কোড ইস্যু ও আইডিআরএ মডিউল সেকশন</div>
        <div class="phone-row">
            <a href="tel:01843100887" class="phone-badge"><i class="fas fa-phone"></i> ০১৮৪৩-১০০৮৮৭</a>
            <a href="tel:01533080323" class="phone-badge"><i class="fas fa-phone"></i> ০১৫৩৩-০৮০৩২৩</a>
            <span class="phone-badge" style="background:var(--tab-wrapper-bg); color:var(--text-muted);">IP: ২১৬</span>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">মোঃ মাজহারুল ইসলাম</div>
        <div class="officer-desig">জেও, আইডিআরএ এজেন্ট লাইসেন্স ও নবায়ন</div>
        <div class="phone-row">
            <a href="tel:01777661659" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৭৭৬৬১৬৫৯</a>
        </div>
    </div>

    <!-- অন্যান্য সেবা ও জরুরি ডেস্ক -->
    <div class="contact-dept-title"><i class="fas fa-circle-info"></i> অন্যান্য সেবা ও জরুরি ডেস্ক</div>
    <div class="contact-card">
        <div class="officer-name">ডাঃ আলফা (Dr. Alpha)</div>
        <div class="officer-desig">২৪/৭ কল ও অ্যাপ স্বাস্থ্য সেবা</div>
        <div class="phone-row">
            <a href="tel:09643240240" class="phone-badge" style="background:#0d9488; color:#fff;"><i class="fas fa-headset"></i> ০৯৬৪৩-২৪০-২৪০</a>
        </div>
    </div>
    <div class="contact-card">
        <div class="officer-name">আলফা কেয়ার হেল্প ডেস্ক</div>
        <div class="officer-desig">লাইফ স্টাইল ও হসপিটালাইজেশন সাপোর্ট</div>
        <div class="phone-row">
            <a href="tel:01787683506" class="phone-badge"><i class="fas fa-phone"></i> ০১৭৮৭-৬৮৩৫০৬</a>
            <a href="tel:09666400200" class="phone-badge"><i class="fas fa-phone"></i> ০৯৬৬৬-৪০০২০০ (১১১)</a>
        </div>
    </div>
    `;}function renderBankContent(){return`
    <div style="background:var(--results-bg); border:1.5px solid var(--results-border); padding:12px 14px; border-radius:12px; color:var(--results-label); font-weight:700; margin-bottom:14px;">
        📌 <strong>একাউন্টের নাম:</strong> Alpha Islami Life Insurance Limited<br>
        (সকল ব্যাংক ও এমএফএস-এ প্রিমিয়াম জমা দেওয়ার জন্য এই একাউন্টসমূহ প্রযোজ্য)
    </div>

    <!-- 1. Al-Arafah Islami Bank Ltd -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ১. Al-Arafah Islami Bank Ltd (AIBL)</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Head Office, Corporate Br. 911,2A</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">1431220000565</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">15272694</span></div>
    </div>

    <!-- 2. Bank Asia Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ২. Bank Asia Limited</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Principal Branch (Islamic Window)</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">50313000120</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">70275357</span></div>
    </div>

    <!-- 3. Brac Bank -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৩. Brac Bank</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">New Eskaton Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">1520104673692000</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">60261397</span></div>
    </div>

    <!-- 4. Dutch-Bangla Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৪. Dutch-Bangla Bank Limited (DBBL)</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">1071200003717</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">90262537</span></div>
    </div>

    <!-- 5. Eastern Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৫. Eastern Bank Limited (EBL)</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Sonargaon Road Branch</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">1051220312863</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">95276586</span></div>
    </div>

    <!-- 6. Janata Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৬. Janata Bank Limited</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">0100-217-73234</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">135262568</span></div>
    </div>

    <!-- 7. Mutual Trust Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৭. Mutual Trust Bank Limited (MTBL)</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Corporate Head Office / Main Branch</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">871520000021</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">145270816</span></div>
    </div>

    <!-- 8. NCC Bank Ltd. -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৮. NCC Bank Ltd.</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">00270325000734</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">160262533</span></div>
    </div>

    <!-- 9. Pubali Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ৯. Pubali Bank Limited</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Principal Branch (Islamic Window)</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">3556102000085</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">175275357</span></div>
    </div>

    <!-- 10. Social Islami Bank Ltd -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ১০. Social Islami Bank Ltd (SIBL)</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">871360000254</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">195262537</span></div>
    </div>

    <!-- 11. Sonali Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ১১. Sonali Bank Limited</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">117203000258</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">200262530</span></div>
    </div>

    <!-- 12. Southeast Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ১২. Southeast Bank Limited</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">1513100000520</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">205262535</span></div>
    </div>

    <!-- 13. The Premier Bank Limited -->
    <div class="bank-card">
        <h4><i class="fas fa-building-columns"></i> ১৩. The Premier Bank Limited</h4>
        <div class="bank-info-row"><span>Branch:</span> <span class="val">Kawran Bazar Branch, Dhaka</span></div>
        <div class="bank-info-row"><span>Account No:</span> <span class="val">10713100005685</span></div>
        <div class="bank-info-row"><span>Routing No:</span> <span class="val">235262534</span></div>
    </div>

    <!-- মোবাইল ব্যাংকিং -->
    <div class="bank-card" style="border: 2px dashed var(--primary); background:var(--tab-wrapper-bg);">
        <h4 style="color:#d97706;"><i class="fas fa-mobile-screen-button"></i> মোবাইল ব্যাংকিং (MFS Payment)</h4>
        <div style="font-size:13.5px; line-height:1.7; margin-top:6px;">
            • <strong>bKash / Nagad:</strong> "Make Payment" অপশনে গিয়ে কোম্পানির মার্চেন্ট নম্বরে সরাসরি প্রিমিয়াম পরিশোধ করা যায়। রেফারেন্স হিসেবে গ্রাহকের পলিসি নম্বর লিখুন।<br>
            • <strong>Rocket:</strong> বিলার কোড ব্যবহার করে পলিসি প্রিমিয়াম জমা দেওয়ার সুবিধা।
        </div>
    </div>
    `;}function renderFeaturesContent(){return`
    <div class="feature-item">
        <i class="fas fa-calculator"></i>
        <div>
            <strong>সব ধরনের প্ল্যান ক্যালকুলেশন:</strong>
            ডিপিএস গোল্ড (DPS Gold), সঞ্চয়ী (01), দ্বিবার্ষিক (02), ৩ কিস্তি (03), ৪ কিস্তি (04), ৫ কিস্তি (05), শিক্ষা সুরক্ষা (06) এবং এককালীন এফডিআর (09) পলিসির প্রিমিয়াম হিসাব।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-shield-heart"></i>
        <div>
            <strong>সকল সহযোগী বীমা (Riders) সাপোর্ট:</strong>
            ADB, PDAB, Plus, Critical Care (CC), Waiver of Premium (WP), IBR, Hospital Care (HC) এবং Occupation Extra (OE) নির্ভুলভাবে যুক্ত ও পৃথক হিসাব।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-hand-pointer"></i>
        <div>
            <strong>লং-প্রেস ডিটেইলস পপআপ:</strong>
            যেকোনো প্ল্যান বা সহযোগী বীমার ওপর আঙুল দিয়ে ধরে রাখলে (লং-প্রেস) তার সম্পূর্ণ শর্ত ও সুবিধার বাংলা বিবরণ ভেসে ওঠে।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-lightbulb"></i>
        <div>
            <strong>বাজেট থেকে ২০টি স্মার্ট সাজেশন:</strong>
            গ্রাহকের কাঙ্ক্ষিত মাসিক/বার্ষিক কিস্তি বাজেট লিখলে স্বয়ংক্রিয়ভাবে নিকটবর্তী ২০টি সেরা বীমা অংকের বিকল্প প্রস্তাবনা।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-stethoscope"></i>
        <div>
            <strong>আন্ডাররাইটিং ও মেডিকেল চার্ট:</strong>
            প্রস্তাবকের বয়স ও বীমা অংক অনুযায়ী স্বয়ংক্রিয়ভাবে প্রযোজ্য মেডিকেল টেস্ট (NMS, FMR, PUR, FBS, ECG ইত্যাদি) প্রদর্শন।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-cake-candles"></i>
        <div>
            <strong>স্মার্ট বয়স ক্যালকুলেটর:</strong>
            জন্ম তারিখ থেকে সরাসরি নির্ভুল বীমা বয়স (Round Age) বের করার অন্তর্নির্মিত টুল।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-copy"></i>
        <div>
            <strong>এক ক্লিকে প্রপোজাল কপি ও প্রিন্ট:</strong>
            হিসাব বিবরণী মুহূর্তেই সুন্দর ফরম্যাটে কপি করে WhatsApp-এ পাঠানো অথবা সরাসরি প্রফেশনাল PDF প্রিন্ট করার সুবিধা।
        </div>
    </div>

    <div class="feature-item">
        <i class="fas fa-wifi"></i>
        <div>
            <strong>১০০% অফলাইন PWA সুবিধা:</strong>
            ইন্টারনেট সংযোগ ছাড়াও অ্যাপটি মোবাইল ও কম্পিউটারে অনায়াসে কাজ করে।
        </div>
    </div>
    `;}function renderGuideContent(){return`
    <div class="guide-step">
        <strong>ধাপ ১: পলিসি ও কিস্তির ধরন বেছে নিন</strong><br>
        উপরের ট্যাব থেকে কাঙ্ক্ষিত প্ল্যান (যেমন: DPS, 01, 02 ইত্যাদি) নির্বাচন করুন এবং মাসিক, ত্রৈমাসিক, ষাণ্মাসিক বা বাৎসরিক মোড সিলেক্ট করুন।
    </div>

    <div class="guide-step">
        <strong>ধাপ ২: বয়স ও মেয়াদ নির্ধারণ করুন</strong><br>
        গ্রাহকের বয়স লিখুন অথবা "বয়স ক্যালকুলেটর" বোতামে চেপে জন্ম তারিখ দিয়ে স্বয়ংক্রিয় বয়স বসান। এরপর মেয়াদের তালিকা থেকে বছর নির্ধারণ করুন।
    </div>

    <div class="guide-step">
        <strong>ধাপ ৩: সহযোগী বীমা (Riders) যুক্ত করুন</strong><br>
        গ্রাহক অতিরিক্ত সুরক্ষা চাইলে ADB, Plus, CC, WP বা HC চেকবক্সে টিক দিন। হসপিটাল কেয়ার (HC)-এ স্ত্রী ও সন্তানদের বয়সও আলাদা যোগ করা যায়।
    </div>

    <div class="guide-step">
        <strong>ধাপ ৪: প্ল্যানের বিস্তারিত জানতে লং প্রেস করুন</strong><br>
        যে কোনো প্ল্যানের বাটন অথবা সহযোগী বীমার ওপর <strong>০.৫ সেকেন্ড চেপে ধরে রাখলে</strong> তার বিস্তারিত নিয়ম ও লাভ পপআপে দেখতে পাবেন।
    </div>

    <div class="guide-step">
        <strong>ধাপ ৫: বাজেট সাজেশন বা বীমা অংক দিন</strong><br>
        গ্রাহকের নির্দিষ্ট বাজেট থাকলে "বাজেট বক্সে" কিস্তির টাকা লিখুন এবং পছন্দের প্রস্তাব সিলেক্ট করুন। অথবা সরাসরি মূল বীমা অংক টাইপ করুন।
    </div>

    <div class="guide-step">
        <strong>ধাপ ৬: মেডিকেল শর্ত দেখুন ও কোটেশন পাঠান</strong><br>
        নিচে প্রযোজ্য মেডিকেল টেস্ট দেখুন। এরপর <strong>"কপি রেজাল্ট"</strong> চাপ দিয়ে গ্রাহকের WhatsApp-এ পাঠান অথবা <strong>"প্রিন্ট/PDF"</strong> করুন।
    </div>
    `;}function renderAboutContent(){return`
    <div class="about-card">
        <div class="about-avatar"><i class="fas fa-laptop-code"></i></div>
        <h3 style="font-size:18px; font-weight:900; color:var(--text-main); margin-bottom:2px;">IT EMON</h3>
        <div style="font-size:13.5px; font-weight:800; color:var(--primary); margin-bottom:14px;">IT Officer</div>
        
        <div style="display:flex; flex-direction:column; gap:10px; text-align:left; font-size:13.5px; line-height:1.65; margin-bottom:14px;">
            <div style="background:var(--tab-wrapper-bg); border:1.5px solid var(--card-border); border-radius:12px; padding:12px 14px;">
                <div style="font-weight:800; color:var(--primary); margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-bullseye"></i> লক্ষ্য ও উদ্দেশ্য
                </div>
                <div>
                    আলফা ইসলামী লাইফ ইনস্যুরেন্স পিএলসি-এর সকল সম্মানিত কর্মকর্তা ও মাঠ প্রতিনিধিদের কাজকে আরও সহজ, দ্রুত ও ত্রুটিমুক্ত করার লক্ষ্যে ব্যক্তিগত/স্থানীয় ব্যবহারের লক্ষে শিক্ষামূলকভাবে এই আধুনিক বীমা ক্যালকুলেটর ও ইনফরমেশন সিস্টেমটি তৈরি করা হয়েছে। তবে এতে যেকোনো তথ্য ভুল বা অসম্পূর্ণ থাকতে পারে; অনিচ্ছাকৃত কোনো ভুল বা অসম্পূর্ণ তথ্য থাকলে তার জন্য আন্তরিকভাবে ক্ষমাপ্রার্থী।
                </div>
            </div>

            <div style="background:var(--tab-wrapper-bg); border:1.5px solid var(--card-border); border-radius:12px; padding:12px 14px;">
                <div style="font-weight:800; color:var(--primary); margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-layer-group"></i> ব্যবহৃত প্রযুক্তি
                </div>
                <div>
                    • <strong>Frontend:</strong> Progressive Web App (PWA), HTML5, Responsive CSS3<br>
                    • <strong>Engine:</strong> Vanilla JavaScript (ES6+ Engine)<br>
                    • <strong>Offline System:</strong> Service Worker & Cache Storage
                </div>
            </div>

            <div style="background:var(--results-bg); border:1px solid var(--results-border); border-radius:12px; padding:10px 12px; font-size:12.5px; color:var(--results-label);">
                <i class="fas fa-shield-halved"></i> <strong>বিশেষ দ্রষ্টব্য:</strong> এটি মাঠ পর্যায়ে দ্রুত হিসাব ও কোটেশন তৈরির সুবিধার্থে প্রস্তুতকৃত একটি ডিজিটাল সহায়িকা।
            </div>
        </div>

        <div style="font-size:12px; color:var(--text-muted); font-weight:700; border-top:1px dashed var(--card-border); padding-top:10px;">
            ভার্সন: ২.৫ (লেটেস্ট আপডেট) | সর্বস্বত্ব সংরক্ষিত © ২০২৬
        </div>
    </div>
    `;}document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064",()=>{injectSidebarStyles();createSidebarDOM();injectMenuButtonToHeader();});document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodyek".split("").reverse().join(""),e=>{if(e['\u006B\u0065\u0079']==="\u0045\u0073\u0063\u0061\u0070\u0065"){toggleSidebar(false);closeSbModal();}});window['\u0074\u006F\u0067\u0067\u006C\u0065\u0053\u0069\u0064\u0065\u0062\u0061\u0072']=toggleSidebar;window['\u006F\u0070\u0065\u006E\u0053\u0062\u004D\u006F\u0064\u0061\u006C']=openSbModal;window['\u0063\u006C\u006F\u0073\u0065\u0053\u0062\u004D\u006F\u0064\u0061\u006C']=closeSbModal;