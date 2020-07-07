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
          name: 'Caribbean',
          pageLink: 'caribbean',
        },
        {
          id: 2,
          name: 'Europe',
          pageLink: 'europe',
        },
        {
          id: 3,
          name: 'Asia',
          pageLink: 'asia',
        },
        {
          id: 4,
          name: 'North America',
          pageLink: 'north-america',
        },
        {
          id: 5,
          name: 'Australia',
          pageLink: 'australia',
        },
      ],
    },
    {
      id: 2,
      pageLink: 'Vacations',
      subLinks: [
        {
          id: 1,
          name: 'All-Inclusives',
          pageLink: 'all-inclusives',
        },
        {
          id: 2,
          name: 'Fishing Trips',
          pageLink: 'fishing-trips',
        },
        {
          id: 3,
          name: 'Golf Packages',
          pageLink: 'golf-packages',
        },
        {
          id: 4,
          name: 'Bed & Breakfast',
          pageLink: 'bed-and-breakfast',
        },
        {
          id: 5,
          name: 'Cruises',
          pageLink: 'cruises',
        },
        {
          id: 6,
          name: 'Ski Packages',
          pageLink: 'ski-packages',
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
