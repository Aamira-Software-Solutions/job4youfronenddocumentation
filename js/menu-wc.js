'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' : 'data-target="#xs-components-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' :
                                            'id="xs-components-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' }>
                                            <li class="link">
                                                <a href="components/AboutCandidateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutCandidateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutJobComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutJobComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddExperienceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddExperienceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllJobsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllJobsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanyListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompanyMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCompanyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateNewEmailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateNewPhoneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewPhoneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePreferredJobLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePreferredJobLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditExperienceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditExperienceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployerAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployerAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployerQuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployerQuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrordialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrordialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExistingReferralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExistingReferralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetpasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgetpasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntroVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntroVideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JobsInterestedInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsInterestedInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KeyPointsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeyPointsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PendingReferralRequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PendingReferralRequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostJobComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostJobComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreferredJobLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreferredJobLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefereeAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefereeAccountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefereeScoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefereeScoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralBonusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralBonusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralReviewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralReviewPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReferralReviewRequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReferralReviewRequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SavedJobsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedJobsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchAgentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchAgentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupLandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupLandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupconfirmationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupconfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SystemVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SystemVideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestAndOtherDocumentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestAndOtherDocumentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserEducationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserEducationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserNamePhotoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserNamePhotoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPersonalInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPersonalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserSkillComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSkillComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserWorkExperienceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserWorkExperienceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' : 'data-target="#xs-injectables-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' :
                                        'id="xs-injectables-links-module-AppModule-b6de1b31d59476a3cfc095fbf0417402"' }>
                                        <li class="link">
                                            <a href="injectables/ErrordialogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrordialogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ErrordialogComponent.html" data-type="entity-link" >ErrordialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ForgetpasswordComponent.html" data-type="entity-link" >ForgetpasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResetpasswordComponent.html" data-type="entity-link" >ResetpasswordComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountCredentials.html" data-type="entity-link" >AccountCredentials</a>
                            </li>
                            <li class="link">
                                <a href="classes/email.html" data-type="entity-link" >email</a>
                            </li>
                            <li class="link">
                                <a href="classes/phone.html" data-type="entity-link" >phone</a>
                            </li>
                            <li class="link">
                                <a href="classes/Skills.html" data-type="entity-link" >Skills</a>
                            </li>
                            <li class="link">
                                <a href="classes/tokenVerification.html" data-type="entity-link" >tokenVerification</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileInfo.html" data-type="entity-link" >UserProfileInfo</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogService.html" data-type="entity-link" >DialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrordialogService.html" data-type="entity-link" >ErrordialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ForgetpasswordService.html" data-type="entity-link" >ForgetpasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignupconfirmService.html" data-type="entity-link" >SignupconfirmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignupService.html" data-type="entity-link" >SignupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDashboardService.html" data-type="entity-link" >UserDashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileService.html" data-type="entity-link" >UserProfileService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpConfigInterceptor.html" data-type="entity-link" >HttpConfigInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterestedJob.html" data-type="entity-link" >InterestedJob</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JobSaved.html" data-type="entity-link" >JobSaved</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});