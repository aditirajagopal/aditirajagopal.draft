import React from 'react';
import Img from "gatsby-image"
import '../styles/index.scss';
import ScrollableAnchor from 'react-scrollable-anchor'

export default function IndexPage( {data} ) {
  return (
    <div className="w-100 vh-100">
      <header className="header_bg dt w-100 vh-100 bw6 b--gradient">
        <article className="pa2 pa2-m pa5-ns w-70-ns">
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              aditi rajagopal.
            </span>
          </h3>
          <h4 className="f3 fw1">Artist. Engineer. Inventor. Advocate.</h4>
          <div className="fn fl-ns pr4-ns">
            <time className="f5 ttu tracked gray bb">
              M-F, 8:30-5 CST (roughly)
            </time>
            <div className="flex pa3 navy">
              <Img className="w2" sizes={data.ibeem.sizes} />
              <span className="lh-title ml3">Software Engineer @ IBM (working on the IBM Cloud Container Service UI)</span>
            </div>
            <time className="f5 ttu tracked gray bb">
              Side Projects & Initiatives
            </time>
            <div className="flex pa3 navy">
              <Img className="w2" sizes={data.swe.sizes} />
              <span className="lh-title ml3">Treasurer - Society of Women Engineers Minnesota Professional Section (Spring 2017-Present)</span>
            </div>
            <div className="flex pa3 navy">
              <span className="w2">🛠</span>
              <span className="lh-title ml3">Product Design - Olmsted County Data Project</span>
            </div>
            <div className="flex pa3 navy">
              <span className="w2">🎨</span>
              <span className="lh-title ml3">Freelance painting, web design, and branding</span>
            </div>
          </div>
        <time className="f7 mb2 dib ttu tracked mt3 gray"><small>Last Updated: April 2018</small></time>
        </article>
				<div className="pv1 ph3 ph5-ns tc mtMinus5">
					<a href="#About">
				      <span className="bottom"></span>
				    </a>
				</div>
      </header>

			<ScrollableAnchor id={'About'}>
			  <div className="ph3 ph4-m ph5-l b--gradient">
			    <div className="f5 f3-m lh-copy">
			      <div className="cf dt-l w-100 pv4">
			        <div className="dtc-l v-mid mw6 pr3-l w-50-ns">
			          <Img className="w-100" sizes={data.iceQueen.sizes} alt=""/>
			        </div>
			        <div className="dtc-l v-mid f6 f5-m f4-l measure-l">
			          <p className="measure pv4-l center">
			          Aditi Rajagopal is a Software Engineer, Inventor, Affinity Group Leader, and SWE Advocate at IBM.
			          She earned her BSE in Computer Engineering and a Certificate in Entrepreneurship from University of Michigan in 2014. 
			          She is the FY18 Treasurer for the SWE-Minnesota section (the largest professional section in the country), and alumni of the SWE-UofM student section.
			          During her time at IBM, she has worked on Cloud Management Software, contributed to 2 Open Source projects, has filed 6 patents, and has 1 patent issued by the USPTO. 
			          Aditi s currently a Software Engineer for the IBM Container Service focused on Front-End Development and UI/UX - her primary expertise is in ReactJS and Ops.
			          She is also a freelance artist, avid twitter user.
			          </p>
			        </div>
			      </div>
			      <div className="cf">
			        <section className="fl w-100">
			          <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
			          <h2 className="f3 gray lh-title bb bw1 b--light-gray">
			            Thoughts
			          </h2>
			            <p className="f6 lh-copy measure">
			            merp
			            </p>
			          </div>
			          <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
			          <h2 className="f3 gray lh-title bb bw1 b--light-gray">
			            Projects
			          </h2>
			            <p className="f6 lh-copy measure">
			            derp
			            </p>
			          </div>
			          <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
			          <h2 className="f3 gray lh-title bb bw1 b--light-gray">
			            Details
			          </h2>
			            <p className="f6 lh-copy measure">

			            </p>
			          </div>
			          <div className="fl w-100 w-50-m w-25-l pa2-m pa3-l">
			            <h2 className="f3 gray lh-title bb bw1 b--light-gray">
			              Connect
			            </h2>
			            <ul className="list pl0 ml0 center mw6 br2">
			              <li className="pv1">
			                <a class="no-underline bg-animate bg-white hover-bg-light-blue black" href="https://twitter.com/Aditi_Rajagopal">twitter</a>
			              </li>
			              <li className="pv1">
			                <a class="no-underline bg-animate bg-white hover-bg-light-blue black" href="https://www.linkedin.com/in/aditirajagopal/">linkedin</a>
			              </li>
			              <li className="pv1">
			                <a class="no-underline bg-animate bg-white hover-bg-light-blue black" href="https://www.pinterest.com/aditirajagopal/">pinterest</a>
			              </li>
			            </ul>
			          </div>
			        </section>
			      </div>
			    </div>
			  </div>
			</ScrollableAnchor>
    </div>
  );
}

export const logoQuery = graphql`
  query logoQuery {
    ibeem: imageSharp(id: { regex: "/IBM/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    swe: imageSharp(id: { regex: "/SWE/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    } 
    iceQueen: imageSharp(id: { regex: "/icequeen/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`;