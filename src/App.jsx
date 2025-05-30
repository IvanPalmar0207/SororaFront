//React-router-dom
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//Pages
import Index from './pages'
import Login from './pages/auth/login'
import Register from './pages/auth/Register'
import Home from './pages/session/home'
import MyRelationship from './pages/session/myRelationship'
import TestInfo from './pages/session/testInfo'
import MyNets from './pages/session/myNets'
import WhatToDo from './pages/session/whatToDo'
import Connect from './pages/session/connect'
import Tips from './pages/session/tips'
import MoreInfoTip from './pages/session/moreInfoTip'
import Notes from './pages/session/notes'
import FormNotes from './pages/session/formNotes'
import ForgotPassword from './pages/auth/forgotPassword'
import ConfirmPassword from './pages/auth/confirmPassword'
import Attention from './pages/session/attention'
import MoreInfoRoute from './pages/session/moreInfoRoute'
import TrustNet from './pages/session/trustNet'
import FormContact from './pages/session/formContact'
import Testimonies from './pages/session/testimonies'
import MoreInfoTestimonie from './pages/session/moreInfoTestimonies'
import Alternatives from './pages/session/alternatives'
import MoreInfoAlternatives from './pages/session/moreInfoAlternatives'
import Podcast from './pages/session/podcast'
import ProfileUser from './pages/auth/profileUser'
import Credits from './pages/session/credits'
import TellRed from './pages/session/tellRed'
import BoilFrog from './pages/session/boilFrog'
import PodcastLove from './pages/session/podcastLove'
//Admin Pages
import ManageTips from './pages/admin/manageTips'
import FormTips from './pages/admin/formTips'
import ManageAR from './pages/admin/manageAR'
import FormAR from './pages/admin/formAR'
import ManageCatAr from './pages/admin/manageCatAr'
import FormCatAr from './pages/admin/formCatAr'
import ManageTestimonies from './pages/admin/manageTestimonies'
import FormTestimonies from './pages/admin/formTestimonies'
import ManageAlternative from './pages/admin/manageAlternative'
import FormAlternative from './pages/admin/formAlternative'
import ManageMediaAlt from './pages/admin/managaMediaAlt'
import FormMediaAlt from './pages/admin/formMediaAlt'
import ManagePodcast from './pages/admin/managePodcast'
import FormPodcast from './pages/admin/formPodcast'
import ManageExams from './pages/admin/manageExam'
import FormExams from './pages/admin/formExams'
import ManageQuestion from './pages/admin/manageQuestion'
import FormQuestion from './pages/admin/formQuestion'
import ManageScore from './pages/admin/manageScore'
import FormScore from './pages/admin/formScore'
import FormAction from './pages/admin/formAction'
import ManageAction from './pages/admin/manageAction'
//Providers
import { UserProvider } from './context/userContext'
import { TipProvider } from './context/tipContext'
import { NoteProvider } from './context/noteContext'
import { ArProvider } from './context/arContext'
import { CatProvider } from './context/catContext'
import { TestimonieProvider } from './context/testContext'
import { ProviderAlternative } from './context/alternativeContext'
import { PodcastProvider } from './context/podcastContex'
import { ExamProvider } from './context/examContext'
import { ContactUserProvider } from './context/contactUserContext'
//Components
import ProtectedRoutes from './components/protectedRoutes'
import NoTokenRoute from './components/noTokenRoute'
import NavBar from './components/navBar'
import ScrollTop from './components/scrollTop'
import Footer from './components/footer'
import AdminRoutes from './components/adminRoutes'
import HelpUser from './components/helpUsers'
function App() {    

    return (
        <BrowserRouter>            
            <ScrollTop />
            <UserProvider>                                
                <TipProvider>
                <NoteProvider>
                <ArProvider>
                <CatProvider>
                <TestimonieProvider>
                <ProviderAlternative>
                <PodcastProvider>
                <ExamProvider>     
                <ContactUserProvider>
                    <Routes>                  
                    
                    {/*
                        User Route
                    */}
                    <Route path='/' element={<Index />}/>

                    {/*
                        Home Route
                    */}

                    <Route path='home' element={
                        <>
                            <NavBar routeTab={'home'}/>
                            <Home />
                            <HelpUser />
                            <Footer />
                        </>    
                    } />

                    {/*
                        Relatioship Route
                    */}         
                                                                                                    

                    {/*
                        My Nets Route
                    */}
                    <Route path='/myNets' element={
                        <>
                            <NavBar routeTab={'myNets'} />
                            <MyNets />
                            <HelpUser />
                            <Footer />
                        </>
                    }/>

                    {/*
                        What To Do Route
                    */}
                    <Route path='/whatToDo' element={
                        <>
                            <NavBar routeTab={'whatToDo'}/>
                            <WhatToDo />
                            <HelpUser />
                            <Footer />
                        </>
                       }                       
                    />

                    {/*
                        Connect Route
                    */}
                    <Route path='/connectNet'element={
                        <>
                            <NavBar routeTab={'connectNet'}/>
                            <Connect />
                            <HelpUser />
                            <Footer />
                        </>
                    }                        
                    />
                    {/*
                        Tips Route
                    */} 
                    <Route path='/tips' element={
                        <>
                            <NavBar routeTab={'tips'}/>
                            <Tips />
                            <HelpUser />
                            <Footer />
                        </>
                    }                    
                    />

                    <Route path='moreInfoTip/:id' element={
                        <>
                            <NavBar routeTab={'moreInfoTips'} />
                            <MoreInfoTip />
                            <HelpUser />
                            <Footer />
                        </>
                    } />

                    <Route path='attention' element={
                        <>
                            <NavBar routeTab={'attention'}/>
                            <Attention />
                            <HelpUser />
                            <Footer />
                        </>
                    }                    
                    />

                    <Route path='moreInfoRoute/:id' element={
                        <>
                            <NavBar routeTab={'moreAttention'}/>
                            <MoreInfoRoute />
                            <HelpUser />
                            <Footer />
                        </>
                    }                    
                    />                    

                    <Route path='netTestimonie' element={
                        <>
                            <NavBar routeTab={'testimonie'}/>
                            <Testimonies />
                            <HelpUser />
                            <Footer />
                        </>
                    } />

                    <Route path='moreInfoTest/:id' element={
                        <>
                            <NavBar routeTab={'moreTest'}/>
                            <MoreInfoTestimonie />
                            <HelpUser />
                            <Footer />
                        </>
                    }/>

                    <Route path='alternatives' element={
                        <>
                            <NavBar routeTab={'alternative'}/>
                            <Alternatives />
                            <HelpUser />
                            <Footer />
                        </>
                    }/>

                    <Route path='moreInfoAlt/:id' element={
                        <>
                            <NavBar routeTab={'altMore'}/>
                            <MoreInfoAlternatives />
                            <HelpUser />
                            <Footer />
                        </>
                    } />

                    <Route path='podcast' element={
                        <>
                            <NavBar routeTab={'podcast'}/>
                            <Podcast />
                            <HelpUser />
                            <Footer />
                        </>
                    } />

                    <Route path='credits' element={
                        <>
                            <NavBar routeTab={'credits'}/>
                            <Credits />
                            <HelpUser />
                            <Footer />
                        </>
                    } />

                    <Route path='tellRed' element={
                        <>
                            <NavBar routeTab={'tellRed'}/>
                            <TellRed />
                            <HelpUser />
                            <Footer />
                        </>
                    }/>

                    <Route path='podcastLove' element={
                        <>
                            <NavBar routeTab={'podcastLove'}/>
                            <PodcastLove />
                            <HelpUser />
                            <Footer />
                        </>
                    } />

                    {/*
                        Auth Routes
                    */}
                    <Route element={<NoTokenRoute />}>                        
                        <Route path='login' element={
                            <>
                                <NavBar routeTab={'login'}/>
                                <Login />                                
                            </>
                        }/>

                        <Route path='register' element={
                            <>
                                <NavBar routeTab={'register'}/>
                                <Register />                                
                            </>
                        }/>          

                        <Route path='forgotPassword' element={
                            <>
                                <NavBar />
                                <ForgotPassword />
                            </>
                        }/>          

                        <Route path='confirmPassword/:token' element={
                            <>
                                <NavBar />
                                <ConfirmPassword />
                            </>
                        }/>

                    </Route>

                    {/*
                        User Routes
                    */}                    
                    <Route element={<ProtectedRoutes />}>                        
                        <Route path='notes' element={
                            <>
                                <NavBar routeTab={'notes'}/>
                                <Notes />
                                <HelpUser />
                                <Footer />                                
                            </>
                        }                            
                        />
                        <Route path='addNote' element={
                            <>
                                <NavBar routeTab={'formNote'}/>
                                <FormNotes />
                                <HelpUser />
                                <Footer />
                            </>
                        }
                        />
                        <Route path='updateNote/:id' element={
                            <>
                                <NavBar routeTab={'formNote'}/>
                                <FormNotes />
                                <HelpUser />
                                <Footer />
                            </>
                        }
                        />

                        <Route path='profileUser/:id' element={
                            <>
                                <NavBar/>
                                <ProfileUser />
                                <HelpUser />
                                <Footer />
                            </>
                        } />

                        <Route path='trustNet' element={
                        <>
                            <NavBar routeTab={'trustNet'}/>
                            <TrustNet />
                            <HelpUser />
                            <Footer />
                        </>
                        }                    
                        />

                        <Route path='formContactU' element={
                            <>
                                <NavBar routeTab={'trustNetForm'} />
                                <FormContact />
                                <HelpUser />
                                <Footer />
                            </>
                        } />                          
                    </Route>  

                    <Route element={<ProtectedRoutes />}>

                        <Route path='/boilFrog/:id' element={
                            <>
                                <NavBar routeTab={'testInfo'}/>
                                <BoilFrog />
                                <HelpUser />
                                <Footer />
                            </>
                        } />

                        <Route path='/relationship' element={
                            <>
                                <NavBar routeTab={'relationship'}/>
                                <MyRelationship />
                                <HelpUser />
                                <Footer />
                            </>
                        } />        

                        <Route path='/testInfo/:id' element={
                            <>
                                <NavBar routeTab={'testInfo'}/>
                                <TestInfo />
                                <HelpUser />
                                <Footer />
                            </>
                        }/>
                    </Route>                

                    {/*
                        Admin Routes  
                    */}
                    <Route element={<AdminRoutes />}>
                        <Route path='manageTips' element={
                            <>
                                <NavBar/>
                                <ManageTips />
                            </>
                        } />
                        <Route path='addTip' element={
                            <>
                                <NavBar />
                                <FormTips />
                            </>                                                    
                            } />
                        <Route path='updateTip/:id' element={
                            <>
                                <NavBar />
                                <FormTips />
                            </>
                        } />

                        <Route path='manageAr/:id' element={
                            <>
                                <NavBar />
                                <ManageAR />
                            </>
                        }/>

                        <Route path='addAr/:idCat' element={
                            <>
                                <NavBar />
                                <FormAR />
                            </>
                        }/>

                        <Route path='updateAr/:id/:idCat' element={
                            <>
                                <NavBar />
                                <FormAR />
                            </>
                        }/>

                        <Route path='manageCat' element={
                            <>
                                <NavBar />
                                <ManageCatAr />
                            </>
                        }                                                                    
                        />

                        <Route path='addCat' element={
                            <>
                                <NavBar />
                                <FormCatAr />
                            </>
                        }/>

                        <Route path='updateCat/:id' element={
                            <>
                                <NavBar />
                                <FormCatAr />
                            </>
                        }/>

                        <Route path='manageTest' element={
                            <>
                                <NavBar />
                                <ManageTestimonies />
                            </>
                        }/>

                        <Route path='addTest' element={
                            <>
                                <NavBar/>
                                <FormTestimonies />
                            </>
                        }/>

                        <Route path='updateTest/:id' element={
                            <>
                                <NavBar />
                                <FormTestimonies />
                            </>
                        }/>

                        <Route path='manageAlternative' element={
                            <>
                                <NavBar />
                                <ManageAlternative />
                            </>
                        } />

                        <Route path='addAlternative' element={
                            <>
                                <NavBar />
                                <FormAlternative />
                            </>
                        }/>

                        <Route path='updateAlternative/:id' element={
                            <>
                                <NavBar />
                                <FormAlternative />
                            </>
                        }/>

                        <Route path='manageMediaAl/:id' element={
                            <>
                                <NavBar />
                                <ManageMediaAlt />
                            </>
                        }/>
                        
                        <Route path='formMediaAlt/:id' element={
                            <>
                                <NavBar />
                                <FormMediaAlt />
                            </>
                        } />

                        <Route path='managePodcast' element={
                            <>
                                <NavBar />
                                <ManagePodcast />
                            </>
                        }/>

                        <Route path='addPodcast' element={
                            <>
                                <NavBar />
                                <FormPodcast />
                            </>
                        }/>              

                        <Route path='manageExams' element={
                            <>
                                <NavBar />
                                <ManageExams />
                            </>
                        }/>          

                        <Route path='addExam' element={
                            <>
                                <NavBar />
                                <FormExams />
                            </>
                        }/>          

                        <Route path='updateExam/:id' element={
                            <>
                                <NavBar />
                                <FormExams />
                            </>
                        }/>          

                        <Route path='manageQuestion/:id' element={
                            <>
                                <NavBar />
                                <ManageQuestion />
                            </>
                        }/>

                        <Route path='addQuestion/:id' element={
                            <>
                                <NavBar />
                                <FormQuestion />
                            </>
                        } />

                        <Route path='manageScore/:id' element={
                            <>
                                <NavBar />
                                <ManageScore />
                            </>
                        }/>

                        <Route path='addScore/:id' element={
                            <>
                                <NavBar />
                                <FormScore />
                            </>
                        }/>          

                        <Route path='manageAction/:id' element={
                            <>
                                <NavBar />
                                <ManageAction />
                            </>
                        }/>

                        <Route path='addAction/:id' element={
                            <>
                                <NavBar />
                                <FormAction />
                            </>
                        }/>              

                    </Route>    

                    {/*
                        Not Found Routes
                    */}
                    
                    </Routes>
                </ContactUserProvider>               
                </ExamProvider>
                </PodcastProvider>
                </ProviderAlternative>
                </TestimonieProvider>                    
                </CatProvider>
                </ArProvider>
                </NoteProvider>
                </TipProvider>
            </UserProvider>
        </BrowserRouter>        
  )
}

export default App
