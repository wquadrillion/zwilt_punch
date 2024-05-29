import './faq.scss'
import { useState } from 'react';
import pointer from '../../../assets/faq--pointer.svg';
import { useMediaQuery } from 'react-responsive';

export default function FAQ() {
    const ismediumcreen = useMediaQuery({ query: '(max-width: 1130px)' });

    let index = 0;
    let index1 = 0;

    const faqArray = [
        {
            questions: [
                {
                    section1: 'General',
                    title: 'I want to work part-time, is that possible',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },
                {
                    title: 'I want to work part-time??',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },
                {
                    title: 'How long are the average projects?',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },
                {
                    title: 'How does the payment workss?',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                }, {
                    title: 'How does the payment works?',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },

            ]
        },
        {

            questions: [
                {
                    section1: 'General',
                    section2: 'Joining Process',
                    title: 'I want to work part-time',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },
                {
                    title: 'I want to work part-time, is that doable',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },
                {
                    title: 'How long are the average projects in general?',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },
                {
                    title: 'How does the payment works at the moment?',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                }, {
                    title: 'How does the payment works with you?',
                    body: `Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities Absolutely! We understand the need for flexible working arrangements and are committed to supporting part-time work options whenever possible. Here's how you can explore part-time opportunities with us:`,
                },

            ]
        }
    ]

    return (
        <div className='faq--container'>
            <p className='faq--container--texta'>Frequently asked questions</p>

            <div className='faq--container1'>
                {
                    faqArray.map((faq) => (
                        <div className='faq--container11' key={index++}>
                            {
                                faq.questions.map((faqQ) => (
                                    <div className='faq--container11--div' key={index1++}>
                                        <p className='faq--container11--texta' style={{ display: faqQ.section1 && !ismediumcreen ? 'flex' : 'none' }}>{faqQ.section1}</p>
                                        <p className='faq--container11--textb' style={{ display: faqQ.section2  && !ismediumcreen? 'flex' : 'none', borderRight: faqQ.section2 && !ismediumcreen? 'solid .5px #E8E8E8' : '' }}>{faqQ.section2}</p>
                                        <div className='faq--container11--div1'>
                                            <div>
                                                <p>{faqQ.title}</p>
                                            </div>
                                            <img className='pointer--div' alt='' src={pointer} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}