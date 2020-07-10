// import defaultImg from '../Assets/Images/defaultImg.jpg'
import allInclusives from '../Assets/Images/allInclusives.jpg'
import fishingTrips from '../Assets/Images/fishingTrips.jpg'
import golfPackages from '../Assets/Images/golfPackages.jpg'
import bedAndBreakfast from '../Assets/Images/bedAndBreakfast.jpg'
import cruises from '../Assets/Images/cruises.jpg'
import skiPackages from '../Assets/Images/skiPackages.jpg'
import caribbean from '../Assets/Images/caribbean.jpg'
import europe from '../Assets/Images/europe.jpg'
import asia from '../Assets/Images/asia.jpg'
import northAmerica from '../Assets/Images/northAmerica.jpg'
import australia from '../Assets/Images/australia.jpg'
import groupTravel from '../Assets/Images/groupTravel.jpg'
import familyTravel from '../Assets/Images/familyTravel.jpg'
import guidedTours from '../Assets/Images/guidedTours.jpg'
import destWedding from '../Assets/Images/destWedding.jpg'
import corporateTravel from '../Assets/Images/corporateTravel.jpg'

export default {
  destinations: [
    {
      id: 1,
      name: 'Caribbean',
      heroImg: caribbean,
      heroAlt: 'Caribbean Destinations by Travel Experience Co.',
      heroImgPos: 'bg-center md:bg-right md:bg-top',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-right',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-end items-center',
      heroTextSize: 'md:w-1/3 md:mr-16 lg:mr-64',
    },
    {
      id: 2,
      name: 'Europe',
      heroImg: europe,
      heroAlt: 'European Destinations by Travel Experience Co.',
      heroImgPos: 'bg-bottom',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center',
      heroTextSize: 'md:w-1/3 md:ml-16 lg:ml-48',
    },
    {
      id: 3,
      name: 'Asia',
      heroImg: asia,
      heroAlt: 'Asian Destinations by Travel Experience Co.',
      heroImgPos: 'bg-center md:bg-right',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center',
      heroTextSize: 'md:w-1/3 md:ml-16 lg:ml-48',
    },
    {
      id: 4,
      name: 'North America',
      heroImg: northAmerica,
      heroAlt: 'North American Destinations by Travel Experience Co.',
      heroImgPos: 'bg-bottom md:bg-right-top',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center md:items-start',
      heroTextSize: 'md:w-1/2 md:ml-16 lg:ml-48 md:mt-24 lg:mt-48',
    },
    {
      id: 5,
      name: 'Australia',
      heroImg: australia,
      heroAlt: 'Australian Destinations by Travel Experience Co.',
      heroImgPos: 'bg-bottom',
      background: 'bg-black bg-opacity-50',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'justify-center items-start md:items-end',
      heroTextSize: 'md:w-1/2 md:mb-24 mt-24',
    },
  ],
  services: [
    {
      id: 1,
      name: 'Group Travel',
      heroImg: groupTravel,
      heroAlt: 'Group Travel by Travel Experience Co.',
      heroImgPos: 'bg-bottom',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-top',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-start',
      heroTextSize: 'md:w-1/2 lg:w-1/3 md:mt-16 mt-24 md:ml-8',
    },
    {
      id: 2,
      name: 'Destination Weddings & Honeymoons',
      heroImg: destWedding,
      heroAlt: 'Destination Weddings & Honeymoons by Travel Experience Co.',
      heroImgPos: 'bg-center md:bg-top',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-bottom',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center md:items-end',
      heroTextSize: 'md:w-3/5 lg:w-2/5 md:mb-16 md:ml-8',
    },
    {
      id: 3,
      name: 'Family Travel',
      heroImg: familyTravel,
      heroAlt: 'Family Travel by Travel Experience Co.',
      heroImgPos: 'bg-right-bottom md:bg-right',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-end md:items-start',
      heroTextSize: 'md:w-1/2 lg:w-1/3 mb-24 md:mt-24 md:ml-8',
    },
    {
      id: 4,
      name: 'Guided Tours',
      heroImg: guidedTours,
      heroAlt: 'Guided Tours by Travel Experience Co.',
      heroImgPos: 'bg-center md:bg-left-bottom',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-bottom',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center md:items-end',
      heroTextSize: 'md:w-1/2 lg:w-1/3 md:mb-24 md:ml-8',
    },
    {
      id: 5,
      name: 'Corporate Incentive Travel',
      heroImg: corporateTravel,
      heroAlt: 'Corporate Incentive Travel by Travel Experience Co.',
      heroImgPos: 'bg-center',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-bottom',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center md:items-end',
      heroTextSize: 'md:w-1/2 lg:w-1/3 md:mb-24 md:ml-8',
    },
  ],
  vacations: [
    {
      id: 1,
      name: 'All Inclusives',
      heroImg: allInclusives,
      heroAlt: 'All Inclusives Travel by Travel Experience Co.',
      heroImgPos: 'bg-right',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center',
      heroTextSize: 'md:w-1/2 lg:w-2/5 md:ml-16 lg:ml-24',
    },
    {
      id: 2,
      name: 'Fishing Trips',
      heroImg: fishingTrips,
      heroAlt: 'Fishing Trip Packages by Travel Experience Co.',
      heroImgPos: 'bg-center',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-right',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-end items-center',
      heroTextSize: 'md:w-1/2 lg:w-2/5 md:ml-16 lg:ml-24',
    },
    {
      id: 3,
      name: 'Golf Packages',
      heroImg: golfPackages,
      heroAlt: 'Golfing Packages by Travel Experience Co.',
      heroImgPos: 'bg-top-left',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-right',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-end items-center',
      heroTextSize: 'md:w-1/2 lg:w-2/5 md:mr-16 lg:mr-24',
    },
    {
      id: 4,
      name: 'Bed & Breakfast',
      heroImg: bedAndBreakfast,
      heroAlt: 'Bed & Breakfast Packages by Travel Experience Co.',
      heroImgPos: 'bg-center md:bg-left',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-start items-center',
      heroTextSize: 'sm:w-1/2 lg:w-2/5 md:ml-16 lg:ml-24',
    },
    {
      id: 5,
      name: 'Cruises',
      heroImg: cruises,
      heroAlt: 'Cruise Packages by Travel Experience Co.',
      heroImgPos: 'bg-center lg:bg-top-right',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-right',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-end items-start',
      heroTextSize: 'md:w-1/2 lg:w-1/3 mt-16 md:mr-8',
    },
    {
      id: 6,
      name: 'Ski Packages',
      heroImg: skiPackages,
      heroAlt: 'Snow Ski Packages by Travel Experience Co.',
      heroImgPos: 'bg-left-bottom',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-right',
      heroText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      heroTextPos: 'md:justify-end items-center',
      heroTextSize: 'md:w-1/2 lg:w-1/3  md:mr-8',
    },
  ],
}
