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
import Notes from './pages/session/notes'
import FormNotes from './pages/session/formNotes'
import ForgotPassword from './pages/auth/forgotPassword'
import ConfirmPassword from './pages/auth/confirmPassword'
import Attention from './pages/session/attention'
import MoreInfoRoute from './pages/session/moreInfoRoute'
import TrustNet from './pages/session/trustNet'
import Testimonies from './pages/session/testimonies'
import MoreInfoTestimonie from './pages/session/moreInfoTestimonies'
import Alternatives from './pages/session/alternatives'
import MoreInfoAlternatives from './pages/session/moreInfoAlternatives'
import Podcast from './pages/session/podcast'
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
//Components
import ProtectedRoutes from './components/protectedRoutes'
import NoTokenRoute from './components/noTokenRoute'
import NavBar from './components/navBar'
import ScrollTop from './components/scrollTop'
import Footer from './components/footer'
import AdminRoutes from './components/adminRoutes'

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
                            <Footer />
                        </>
                    }
                    
                    />

                    <Route path='attention' element={
                        <>
                            <NavBar routeTab={'attention'}/>
                            <Attention />
                            <Footer />
                        </>
                    }                    
                    />

                    <Route path='moreInfoRoute/:id' element={
                        <>
                            <NavBar routeTab={'moreAttention'}/>
                            <MoreInfoRoute />
                            <Footer />
                        </>
                    }                    
                    />

                    <Route path='trustNet' element={
                        <>
                            <NavBar routeTab={'trustNet'}/>
                            <TrustNet />
                            <Footer />
                        </>
                    }                    
                    />

                    <Route path='netTestimonie' element={
                        <>
                            <NavBar routeTab={'testimonie'}/>
                            <Testimonies />
                            <Footer />
                        </>
                    } />

                    <Route path='moreInfoTest/:id' element={
                        <>
                            <NavBar routeTab={'moreTest'}/>
                            <MoreInfoTestimonie />
                            <Footer />
                        </>
                    }/>

                    <Route path='alternatives' element={
                        <>
                            <NavBar routeTab={'alternative'}/>
                            <Alternatives />
                            <Footer />
                        </>
                    }/>

                    <Route path='moreInfoAlt/:id' element={
                        <>
                            <NavBar routeTab={'altMore'}/>
                            <MoreInfoAlternatives />
                            <Footer />
                        </>
                    } />

                    <Route path='podcast' element={
                        <>
                            <NavBar routeTab={'podcast'}/>
                            <Podcast />
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
                                <Footer />
                            </>
                        }                            
                        />
                        <Route path='addNote' element={
                            <>
                                <NavBar routeTab={'formNote'}/>
                                <FormNotes />
                                <Footer />
                            </>
                        }
                        />
                        <Route path='updateNote/:id' element={
                            <>
                                <NavBar routeTab={'formNote'}/>
                                <FormNotes />
                                <Footer />
                            </>
                        }
                        />
                    </Route>  

                    <Route element={<ProtectedRoutes />}>
                        <Route path='/relationship' element={
                            <>
                                <NavBar routeTab={'relationship'}/>
                                <MyRelationship />
                                <Footer />
                            </>
                        } />        

                        <Route path='/testInfo/:id' element={
                            <>
                                <NavBar routeTab={'testInfo'}/>
                                <TestInfo />
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

                        <Route path='manageAr' element={
                            <>
                                <NavBar />
                                <ManageAR />
                            </>
                        }/>

                        <Route path='addAr' element={
                            <>
                                <NavBar />
                                <FormAR />
                            </>
                        }/>

                        <Route path='updateAr/:id' element={
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

                    </Route>    

                    {/*
                        Not Found Routes
                    */}
                    
                    </Routes>
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
