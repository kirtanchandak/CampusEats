import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-gray-100 bg-gray-800 pt-4 z-0 mt-0">
        <div className="px-6 sm:px-4 xl:px-0 md:max-w-screen my-0 mx-8 flex flex-col space-y-6 pb-4">
          <div className="flex flex-row  items-center justify-center sm:justify-start pb-6 mt-2 border-b border-solid border-gray6">
            <div className="hidden sm:block font-semibold">
              Register your own shop
              <a
                href="/"
                className="i157fg5d inline-flex ml-4 px-4 py-2 border-2 rounded-md hover:bg-white hover:text-[#1F2937] focus:bg-white focus:text-[#1F2937]"
              >
                Get Started
              </a>
            </div>
            <a href="/" className="i157fg5d block sm:hidden">
              Start a new group
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-1/3 mb-3">
              <h2>Your Account</h2>
              <ul>
                <li className="my-1">
                  <a
                    href="signup/"
                    className="ds-font-small hover:no-underline text-gray4 hover:text-white cursor-pointer"
                  >
                    Sign up
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="/login"
                    className="ds-font-small hover:no-underline text-gray4 hover:text-white cursor-pointer"
                  >
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center items-start">
            <div>
              <h2 className="mb-3">Follow us</h2>
              <div className="flex flex-row space-x-8 mb-6">
                <a
                  href="/"
                  aria-label="Societal-Serve on Twitter"
                  data-element-name="footer-twitterSocialLink"
                  data-event-label="Twitter follow us"
                >
                  <div
                    data-icon-c="icon-11"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="injected-svg text-gray3 fill-current"
                        data-src="../../assets/icons/icons8-twitter.svg"
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        data-icon="icon-11"
                      >
                        <title>twitter</title>
                        <path d="M22 5.92406C21.2641 6.25041 20.4733 6.47098 19.6433 6.57017C20.4905 6.06233 21.1411 5.2582 21.4475 4.30008C20.6547 4.77026 19.7765 5.11175 18.8419 5.2958C18.0933 4.49834 17.027 4 15.8468 4C13.5807 4 11.7434 5.83716 11.7434 8.10315C11.7434 8.42474 11.7798 8.73792 11.8497 9.03822C8.43952 8.86711 5.41607 7.23355 3.3923 4.75109C3.0391 5.35711 2.83675 6.06196 2.83675 6.81393C2.83675 8.23746 3.56121 9.4934 4.6622 10.2292C3.98954 10.2079 3.35689 10.0233 2.80361 9.71601C2.80332 9.73313 2.80332 9.75032 2.80332 9.76759C2.80332 11.7557 4.21771 13.4141 6.09481 13.791C5.75047 13.8848 5.38798 13.9349 5.01372 13.9349C4.74933 13.9349 4.49226 13.9092 4.24178 13.8613C4.76389 15.4915 6.27923 16.6778 8.07476 16.7109C6.67047 17.8114 4.9012 18.4674 2.97882 18.4674C2.64765 18.4674 2.32101 18.448 2 18.4101C3.81587 19.5743 5.97271 20.2536 8.28992 20.2536C15.8372 20.2536 19.9644 14.0012 19.9644 8.57895C19.9644 8.40104 19.9604 8.22408 19.9525 8.04814C20.7542 7.46962 21.4499 6.74692 22 5.92406Z"></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="/"
                  aria-label="Meetup on YouTube"
                  data-element-name="footer-youtubeSocialLink"
                  data-event-label="Youtube follow us"
                >
                  <div
                    data-icon-c="icon-12"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        className="injected-svg text-gray3 fill-current"
                        data-src="https://secure.meetupstatic.com/next/images/design-system-icons/social-youtube.svg"
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        data-icon="icon-12"
                      >
                        <title>youtube</title>
                        <path d="M12,4 C2.172,4 2,4.874 2,11.7 C2,18.526 2.172,19.4 12,19.4 C21.828,19.4 22,18.526 22,11.7 C22,4.874 21.828,4 12,4 Z M15.205,12.034 L10.715,14.13 C10.322,14.312 10,14.108 10,13.674 L10,9.726 C10,9.293 10.322,9.088 10.715,9.27 L15.205,11.366 C15.598,11.55 15.598,11.85 15.205,12.034 Z"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="ds-font-small flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-gray4 pt-2">
            <span className="text-white">© 2023 CampusEats</span>
            <a
              href="/"
              data-event-label="Terms of Service"
              className="ds-font-small hover:no-underline text-gray4 hover:text-white cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="/"
              className="ds-font-small hover:no-underline text-gray4 hover:text-white cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="ds-font-small hover:no-underline text-gray4 hover:text-white cursor-pointer"
            >
              Cookie Policy
            </a>
            <a
              href="/"
              className="ds-font-small hover:no-underline text-gray4 hover:text-white cursor-pointer"
            >
              Help
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
