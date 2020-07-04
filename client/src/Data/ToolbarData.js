import React from 'react'
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiYoutubeLine,
} from 'react-icons/ri'

export default {
  menuLinks: [
    {
      id: 1,
      pageLink: 'Destinations',
      subLinks: [
        {
          id: 1,
          pageLink: 'Caribbean',
        },
        {
          id: 2,
          pageLink: 'Europe',
        },
        {
          id: 3,
          pageLink: 'Asia',
        },
        {
          id: 4,
          pageLink: 'North America',
        },
        {
          id: 5,
          pageLink: 'Australia',
        },
      ],
    },
    {
      id: 2,
      pageLink: 'Vacations',
      subLinks: [
        {
          id: 1,
          pageLink: 'All-Inclusives',
        },
        {
          id: 2,
          pageLink: 'Fishing Packages',
        },
        {
          id: 3,
          pageLink: 'Golf Packages',
        },
        {
          id: 4,
          pageLink: 'Bed & Breakfast',
        },
        {
          id: 5,
          pageLink: 'Cruises',
        },
        {
          id: 6,
          pageLink: 'Ski Packages',
        },
      ],
    },
    {
      id: 3,
      pageLink: 'services',
      subLinks: [
        {
          id: 1,
          name: 'Group Travel',
          pageLink: 'group-travel',
        },
        {
          id: 2,
          name: 'Family Travel',
          pageLink: 'family-travel',
        },
        {
          id: 3,
          name: 'Guided Tours',
          pageLink: 'guided-tours',
        },
        {
          id: 4,
          name: 'Destination Weddings & Honeymoons',
          pageLink: 'destination-weddings-and-honeymoons',
        },
        {
          id: 5,
          name: 'Corporate Incentive Travel',
          pageLink: 'corporate-incentive-travel',
        },
      ],
    },
  ],
  socialMedia: [
    {
      id: 1,
      icon: <RiFacebookBoxLine />,
      url: 'https://www.facebook.com/Travel-Experience-Co-702276983472230/',
      color: 'text-facebook',
    },
    {
      id: 2,
      icon: <RiInstagramLine />,
      url: 'https://www.instagram.com/travel_experience_co/',
      color: 'text-instagram',
    },
    {
      id: 3,
      icon: <RiTwitterLine />,
      url: 'https://twitter.com/TRAVELEXPCO',
      color: 'text-twitter',
    },
    {
      id: 4,
      icon: <RiYoutubeLine />,
      url: null,
      color: 'text-youtube',
    },
  ],
}
