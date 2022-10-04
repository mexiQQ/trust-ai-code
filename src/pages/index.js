import * as React from "react"
import { BrowserView, MobileView, isBrowser } from 'react-device-detect';

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black h-16 text-white fixed w-full">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-16 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">DCAA@2023</div>
            {/* <div className="mr-5 text-sm text-gray-300">
              <a href="#about">About</a>
            </div> */}
            <BrowserView className="flex"><div className="mr-5 text-sm text-gray-300">
              <a href="#cfp">CFP</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#schedule">Schedule</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#speakers">Speakers</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#organizers">Organizers</a>
            </div></BrowserView>
            {/* <div className="mr-5 text-sm text-gray-300">
              <a href="#contact">Contact</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="pt-16">
        <div className="flex flex-row ">
          <div className="w-full" style={{
            "backgroundImage": 'url("https://aaai.org/Conferences/AAAI-23/wp-content/uploads/2022/06/AAAI-23-Website-Banner_2560x593.png")',
            "height": "50vh",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "center",
            "backgroundSize": "cover",
            "paddingTop": "22vh"
          }}>
          </div>
        </div>

        <div id="cfp" style={{"background":"#f5f5f5"}} className="pt-10">
          <div className="text-black text-4xl font-semibold text-center">
            The First Workshop on DL-Hardware Co-Design for AI Acceleration
          </div>
          <div className="text-black text-center mt-2">
            Colocated with the <a href="https://aaai.org/Conferences/AAAI-23/" className="underline">37th AAAI Conference on Artificial Intelligence</a>
          </div>

          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="mt-5 text-xl text-gray-600 px-3 md:px-0 md:text-justify ">
              <div className="text-4xl">Call for Papers</div>
              <div className="mt-5 leading-8">As deep learning (DL) continues to permeate all areas of computing, algorithm engineers are increasingly relying on hardware system design solutions to improve the efficiency and performance of deep learning models. However, the vast majority of DL studies rarely consider limitations such as power/energy, memory footprint, and model size of real-world computing platforms, and even less consider the computational speed of hardware systems and their own computational characteristics. Addressing all of these metrics is critical if advances in DL are to be widely used on real device platforms and scenarios, especially those with high requirements for computational efficiencies, such as mobile devices and AR/VR. Therefore, it is desirable to design and optimize both the DL models and the hardware computing platforms. The workshop provides a great venue for the international research community to share mutual challenges and solutions between deep neural network learning and computing system platforms, with a focus on accelerating AI technologies on real system platforms through DL-hardware co-design.
              </div>
              <div className="mt-5">
                <ul className="list-disc pl-5">
                  <li>Neural network pruning & quantization & distillation</li>
                  <li>Deep learning acceleration for applications</li>
                  <li>Hardware-aware network architecture search & design</li>
                  <li>Applications of deep learning on mobile and AR/VR</li>
                  <li>New theory and fundamentals of DL-hardware co-design</li>
                  <li>Deep learning to improve computer architecture design</li>
                  <li>Real-time and energy-efficient deep learning systems</li>
                  <li>Hardware accelerators for deep learning</li>
                </ul>
              </div>
              <div className="mt-5 leading-8">
              The workshop will be a half-day meeting comprising several invited talks from distinguished researchers in the field, spotlight lightning talks and a poster session where contributing paper presenters can discuss their work, and a concluding panel discussion focusing on future directions. Attendance is open to all registered participants.
              </div>

              <div className="mt-5 leading-8">
              Submitted technical papers can be up to 4 pages long (excluding references and appendices). Position papers are welcome. All papers must be submitted in PDF format using the AAAI-23 author kit. Papers will be peer-reviewed and selected for spotlight and/or poster presentation.Submission site: 
              <MobileView><a className="text-blue-600" href="https://cmt3.research.microsoft.com/DCAA2023/Submission/Index">click here</a></MobileView>
              <BrowserView><a className="text-blue-600" href="https://cmt3.research.microsoft.com/DCAA2023/Submission/Index">https://cmt3.research.microsoft.com/DCAA2023/Submission/Index</a></BrowserView>
              </div>

              <div className="text-2xl mt-5">Important Dates (GMT)</div>

              <BrowserView>
                <div className="mt-5 leading-8 flex">
                  <div className="flex-1">
                    <div>Paper Submission Deadline</div>
                    <div>Notification of Acceptance</div>
                    <div>Camera-Reday Deadline</div>
                    <div>Workshop Date</div>
                  </div>
                  <div className="flex-1">
                    <div>November 4, 2022</div>
                    <div>November 18, 2022</div>
                    <div>TBD</div>
                    <div>February 13-14, 2023</div>
                  </div>
                </div>
              </BrowserView>
              <MobileView>
              <div className="mt-5 leading-8 flex">
                <div className="flex-1 text-xl">
                  <div>Paper Submission Deadline:</div>
                  <div className="text-base mb-3">November 4, 2022</div>
                  <div>Notification of Acceptance:</div>
                  <div className="text-base mb-3">November 18, 2022</div>
                  <div>Camera-Reday Deadline:</div>
                  <div className="text-base mb-3">TBD</div>
                  <div>Workshop Date:</div>
                  <div className="text-base mb-3">February 13-14, 2023</div>
                </div>
              </div> 
              </MobileView>
            </div>
          </div>
        </div>

        <div id="schedule" className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Agenda (Tentative)</div>
          <div className="mt-5">
            {/* <div>Rows highlighted in green are LIVE whereas rows highlighted in yellow are PRE-RECORDED. The poster session is distributed across multiple ZOOM.</div>  */}
          </div>
          <div className="overflow-scroll md:overflow-auto">
            <div className="mt-10" style={{width: "1000px"}}>
              <div className="flex border-b-2 pb-3">
                <div className="w-100">08:00am-08:10am</div>
                <div className="flex-1 text-center">Opening remarks</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">08:10am-08:40am</div>
                <div className="flex-1 text-center">Invited talk 1</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">08:40am-09:10am</div>
                <div className="flex-1 text-center">Lightning talks of invited papers and social networking of participants</div>
                <div className="w-100">Livestream</div>
              </div> 
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">09:10am-09:30am</div>
                <div className="flex-1 text-center">Paper presentations and discussion</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">09:30am-10:00am</div>
                <div className="flex-1 text-center">Coffee break</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">10:00am-10:30am</div>
                <div className="flex-1 text-center">Poster sessions</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">10:30am-11:00am</div>
                <div className="flex-1 text-center">Invited talk 2</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">11:00am-12:00am</div>
                <div className="flex-1 text-center">Panel discussion</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">End</div>
              </div>
            </div>
          </div>
        </div>

        <div id="speakers" style={{"background":"#f5f5f5"}}>
          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="text-4xl">Keynote Speakers</div>
            <div className="w-full text-center h-96 p-36 text-3xl">To Be Confirmed</div>
            {/* <div className="flex mt-10">
              <div className="flex-1">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
              <div className="flex-1 ml-5">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex-1">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
              <div className="flex-1 ml-5">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex-1">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
              <div className="flex-1 ml-5">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
            </div> */}
          </div>
        </div>

        <div id="organizers" className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Organizing Chairs</div>
          <div className="mt-10">
            <div className={isBrowser?"flex text-center mt-10":"flex text-center mt-10 flex-wrap"}>
              <div className={isBrowser?"flex-1":"mt-3"}>
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/dongkuan.jpg?raw=true" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="http://personal.psu.edu/dux19/">Dongkuan (DK) Xu</a></div>
                <div>Assistant Professor</div>
                <div>North Carolina State University</div>
              </div>
              <div className={isBrowser?"flex-1":"mt-5"}>
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://www6.njit.edu/uws/ldapimage.php?uid=hw32&format=full" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://web.njit.edu/~hw32/">Hua Wei</a></div>
                <div>Assistant Professor</div>
                <div>New Jersey Institute of Technology</div>
              </div>
              <div className={isBrowser?"flex-1":"mt-5"}>
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://www.ang-li.com/images/profile.png" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://www.ang-li.com/">Ang Li</a></div>
                <div>Research Associate</div>
                <div>Qualcomm AI Research</div> 
              </div>
            </div>

            <div className={isBrowser?"flex text-center mt-10":"flex text-center flex-wrap"}>
              <div className={isBrowser?"flex-1":"mt-5"}>
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/peipei.jpeg?raw=true" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://peipeizhou-eecs.github.io/">Peipei Zhou</a></div>
                <div>Assistant Professor</div>
                <div>University of Pittsburgh</div> 
              </div> 
              <div className={isBrowser?"flex-1":"mt-5"}>
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://caiwending.cse.uconn.edu/wp-content/uploads/sites/2888/2019/08/DSC_8595.jpg" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://caiwending.cse.uconn.edu/">Caiwen Ding</a></div>
                <div>Assistant Professor</div>
                <div>University of Connecticut</div> 
              </div>
              <div className={isBrowser?"flex-1":"mt-5 m-auto"}>
                <div className="h-48 overflow-hidden">
                  <img className={isBrowser?"w-1/2 m-auto":"m-auto"} src="https://i0.wp.com/eiclab.net/wp-content/uploads/2019/09/Yingyan_Lin_Profile.jpg?resize=250%2C216&ssl=1" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://eiclab.net/team-2/">Yingyan (Celine) Lin</a></div>
                <div>Associate Professor</div>
                <div>Georgia Institute of Technology</div> 
              </div>
            </div>
          </div>

          <div className={isBrowser?"flex text-center mt-10":"flex text-center flex-wrap"}>
            <div className={isBrowser?"flex-1":"mt-5"}>
              <div className="h-48 overflow-hidden">
                <img className="w-1/2 m-auto" src="https://coe.northeastern.edu/wp-content/uploads/profiles/ece/wang-y.jpg" />
              </div>
              <div className="mt-3"><a className="text-blue-600" href="https://coe.northeastern.edu/people/wang-yanzhi/">Yanzhi Wang</a></div>
              <div>Associate Professor</div>
              <div>Northeastern University</div> 
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div>

          <div className="text-4xl mt-10">Publicity Chair</div>
            <div className={isBrowser?"flex text-center mt-10":"flex text-center flex-wrap"}>
              <div className={isBrowser?"flex-1":"mt-5"}>
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/jianwei.jpg?raw=true" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://jianwei.gatsbyjs.io/">Jianwei Li</a></div>
                <div>Moffett.AI</div>
              </div>
              <div className="flex-1"></div>
              <div className="flex-1"></div>
            </div> 
          </div>

        <div className="text-center py-10 text-sm text-gray-300 bg-black">
          <div>© 2022 NCSU DK Lab, All rights reserved</div>
          <div>(Last update: Sep 9, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
