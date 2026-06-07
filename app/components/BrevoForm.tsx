'use client'

import { useEffect } from 'react'

export default function BrevoForm() {
  useEffect(() => {
    // Load Brevo form scripts
    const script1 = document.createElement('script')
    script1.src = 'https://sibforms.com/forms/end-form/build/main.js'
    script1.defer = true
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = 'https://www.google.com/recaptcha/api.js?hl=en'
    script2.defer = true
    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />
      <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#EFF2F7' }}>
        <div id="sib-form-container" className="sib-form-container">

          <div id="error-message" className="sib-form-message-panel" style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '16px', color: '#661d1d', backgroundColor: '#ffeded', borderColor: '#ff4949', borderRadius: '3px', maxWidth: '540px' }}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <span className="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
            </div>
          </div>

          <div id="success-message" className="sib-form-message-panel" style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '16px', color: '#085229', backgroundColor: '#e7faf0', borderColor: '#13ce66', borderRadius: '3px', maxWidth: '540px' }}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <span className="sib-form-message-panel__inner-text">Your subscription has been successful.</span>
            </div>
          </div>

          <div id="sib-container" className="sib-container--large sib-container--vertical" style={{ maxWidth: '540px', textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', border: '1px solid #C0CCD9', borderRadius: '3px' }}>
            <form
              id="sib-form"
              method="POST"
              action="https://601fb65b.sibforms.com/serve/MUIFAOhcZQjee0B8BG1cSJtm9SQrdDebe3PTtrlAPTDBHU2quDIqX7KNdX9DQeNMymg1CTLobpcI_8tQkE1Xk9G6j45NpnZNH_uMSLTNk0ZTSoVSns42nV1bUO6xutAS3luH0Gwp8q1bibXy6gktIGrTBsTLYc6AC5WYYtqCN3bwoDTWasp4gzTJFbiN5OYuGmlCMEqW2Lgx5tsv"
              data-type="subscription"
            >
              <div style={{ padding: '8px 0' }}>
                <p style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '14px', fontWeight: 700, color: '#3C4858' }}>The London Brief</p>
              </div>

              <div style={{ padding: '8px 0' }}>
                <p style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '12px', color: '#3C4858' }}>I talk about things I see that can move markets. Subscribe to learn with me.</p>
              </div>

              <div style={{ padding: '8px 0' }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <div className="entry__field">
                        <input
                          className="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          defaultValue=""
                          placeholder="EMAIL"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>
                    <label className="entry__specification" style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '12px', color: '#8390A4' }}>
                      Provide your email address to subscribe.
                    </label>
                  </div>
                </div>
              </div>

              <div style={{ padding: '8px 0' }}>
                <div className="sib-optin sib-form-block">
                  <div className="form__entry entry_mcq">
                    <div className="form__label-row">
                      <div className="entry__choice">
                        <label>
                          <input type="checkbox" className="input_replaced" value="1" id="OPT_IN" name="OPT_IN" />
                          <span className="checkbox checkbox_tick_positive"></span>
                          <span style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '14px', color: '#3C4858' }}>
                            I agree to receive your newsletters and accept the data privacy statement.
                          </span>
                        </label>
                      </div>
                    </div>
                    <label className="entry__specification" style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '12px', color: '#8390A4' }}>
                      You may unsubscribe at any time using the link in our newsletter.
                    </label>
                  </div>
                </div>
              </div>

              <div style={{ padding: '8px 0' }}>
                <div
                  className="g-recaptcha sib-visible-recaptcha"
                  id="sib-captcha"
                  data-sitekey="6LcTF5UqAAAAAJLPBJazuUwWYnr0wqdTdPojs0fV"
                  data-callback="handleCaptchaResponse"
                />
              </div>

              <div style={{ padding: '8px 0', textAlign: 'left' }}>
                <button
                  className="sib-form-block__button"
                  style={{ fontFamily: 'Helvetica,sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', backgroundColor: '#3E4857', border: 'none', borderRadius: '3px', padding: '8px 16px', cursor: 'pointer' }}
                  form="sib-form"
                  type="submit"
                >
                  SUBSCRIBE
                </button>
              </div>

              <input type="text" name="email_address_check" defaultValue="" className="input--hidden" />
              <input type="hidden" name="locale" defaultValue="en" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}