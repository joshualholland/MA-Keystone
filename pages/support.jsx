import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled from 'styled-components';

import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import Footer from "../client/components/Footer";


const Support = () => {
    return (
        <>
            <Head>
                <title>Morgan Ashley Salon | Support</title>
            </Head>
            <Navbar />
            <Banner
                bannerImage={"/images/support/IMG_4372.jpg"}
                sectionName="support"
                content="SUPPORT"
            />
            <Section>
                <Text>Morgan Ashley Studio Salon is committed to ensuring our customers and team stay healthy and safe. In the wake of the COVID-19 pandemic and in accordance with the Department of Health &amp; our governor, we have made the difficult decision to close the salon temporarily. If you have an appointment booked during the temporary closure we will be reaching out to you to reschedule.</Text>
                <Text>If you are interested in ways that you can help support the salon and our team during this time, please consider purchasing a <Link target='_blank' href='https://na0.meevo.com/EgiftApp/home?tenantId=100041'>gift card</Link> or donate to our <Link target='_blank' href=' https://www.gofundme.com/f/fundraising-for-covid19-relief-for-our-staff'>GoFundme</Link> campaign. We can’t wait to see your smiling faces in a couple of weeks!</Text>
                <Text>Thank you so much for your support during this unprecedented time. We can’t wait to come back ready to serve you! Please don't hesitate to reach out to us if we can help you in any way!</Text>
            </Section>
            <Footer />
        </>
    )
}

const Section = styled.section`
    margin: 0 auto;
    max-width: 1080px;
    padding: 16px;
`

const Text = styled.h4`
    margin: 50px 0;
`

const Link = styled.a`
    color: #FFD700;
`

export default Support;