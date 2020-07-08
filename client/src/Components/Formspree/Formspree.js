import React, { Component } from 'react'
import FormInput from './FormInput'
import Button from '../Button/Button'

export default class Formspree extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
      showForm: true,
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className='bg-gray-400'>
        <div className='container md:w-2/3 flex flex-col items-center py-16'>
          <div className='pt-4 w-full md:w-1/2'>
            <div className='text-center text-2xl my-2'>
              We'd love to hear from you!
            </div>
            <div className='text-center text-base text-gray-700'>
              Have a question about our services? Want to see if your particular
              vacation is one we can help with? We'd love to hear from you!
            </div>
            <div className='my-4'>
              <div className='text-center text-2xl text-gray-700'>
                TRAVEL EXPERIENCE CO.
              </div>
              <div className='text-center text-base text-gray-700'>
                Canton, Georgia 30114, United States
              </div>
              <div className='text-center text-base text-gray-700'>
                (770)-213-8787
              </div>
            </div>
          </div>
          <div
            style={{ display: !this.state.showForm ? 'block' : 'none' }}
            className='container md:w-2/3 flex flex-col items-center py-16'
          >
            <div className='text-3xl text-center uppercase'>Thank You!</div>
            <div className='text-xl text-center'>
              Someone will be in touch shortly.
            </div>
          </div>
          <form
            style={{ display: this.state.showForm ? 'block' : 'none' }}
            className='self-center w-full'
            onSubmit={this.submitForm}
            action='https://formspree.io/xrgyyoew'
            method='POST'
          >
            <FormInput
              label='Your Name'
              placeholder='Jane Doe'
              for='name'
              id='name'
              name='name'
              type='text'
            />
            <FormInput
              label='Email Address'
              placeholder='handle@domain.com'
              for='email'
              id='email'
              name='email'
              type='email'
              required
            />
            <FormInput
              label='Phone Number (optional)'
              placeholder='xxx-xxx-xxxx'
              for='phone'
              id='phone'
              name='phone'
              type='phone'
              pattern='[\(][0-9]{3}[\)]\[-. ][0-9]{3}\[-. ][0-9]{4}'
            />
            <div className='flex flex-wrap -mx-3 mb-2'>
              <div className='w-full px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-state'
                >
                  Select One
                </label>
                <div className='relative'>
                  <select
                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                    name='interest'
                  >
                    <option>I have a question about your services</option>
                    <option>
                      I'm interested in travelling within the next 3 months
                    </option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Message
                </label>
                <textarea
                  className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  for='message'
                  placeholder='Send us a message!'
                  id='message'
                  type='text'
                  rows='4'
                  name='message'
                />
              </div>
            </div>

            {status === 'SUCCESS' ? (
              <p>Thanks!</p>
            ) : (
              <Button label='Submit'></Button>
            )}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS', showForm: false })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
