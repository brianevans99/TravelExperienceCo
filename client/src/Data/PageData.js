import allInclusives from '../Assets/Images/allInclusives.jpg'
import fishingTrips from '../Assets/Images/fishingTrips.jpg'
import golfPackages from '../Assets/Images/golfPackages.jpg'
import bedAndBreakfast from '../Assets/Images/bedAndBreakfast.jpg'
import cruises from '../Assets/Images/cruises.jpg'
import skiPackages from '../Assets/Images/skiPackages.jpg'
import caribbean from '../Assets/Images/caribbean.jpg'
import europe from '../Assets/Images/europe.jpg'
import asia from '../Assets/Images/asia.jpg'
import hawaii from '../Assets/Images/hawaii.jpg'
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
        'When you need a break from the fast, hectic pace of everyday life, Caribbean island destinations are the perfect getaway. Their clear blue water, white sandy beaches and swaying palms make them one of the most prestigious tourist destinations in the world.',
      heroTextPos: 'md:justify-end items-center',
      heroTextSize: 'md:w-1/3 md:mr-16 lg:mr-32',
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
        'Paris - Rome - Barcelona - London - Dublin.  The national diversity, natural beauty, amazing history and culinary spectrum are sure to leave any tourist giddy with wonder.',
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
        "Take a trip to the most populous continent on earth and discover the rich cultures that span 30% of the Earth's land area.",
      heroTextPos: 'md:justify-start items-center',
      heroTextSize: 'md:w-1/3 md:ml-16 lg:ml-48',
    },
    {
      id: 4,
      name: 'Hawaii',
      heroImg: hawaii,
      heroAlt: 'Hawaiian Destinations by Travel Experience Co.',
      heroImgPos: 'bg-center md:bg-left',
      background:
        'bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-0 md:dark-left',
      heroText:
        "Stunning sunsets, amazing canyons, incredible beaches, breathtaking waterfalls. Whether it's a family retreat or a corporate getaway, the Hawaiian islands have it all. Contact TEC today and plan your escape to paradise.",
      heroTextPos: 'md:justify-start items-center md:items-start',
      heroTextSize: 'md:w-1/2 md:ml-16 lg:ml-24 md:mt-24 lg:mt-48',
    },
    {
      id: 5,
      name: 'Australia',
      heroImg: australia,
      heroAlt: 'Australian Destinations by Travel Experience Co.',
      heroImgPos: 'bg-bottom',
      background: 'bg-black bg-opacity-50',
      heroText:
        "Snorkel the Great Barrier Reef, explore the Outback wilderness, or visit the historic Sydney Opera House.  Australia delivers culture, adventure and excitement from it's rainforests, beaches and bustling metropolitan cities. Plan today!",
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
        'Planning a trip for you and your 5 friends? Who takes the lead? TEC does. Leave the travel details to us so you can enjoy the ride.',
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
        'Are you ready for that next milestone in your life? A stress-free travel plan for your wedding awaits. Let TEC plan the perfect trip for your perfect day.',
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
        'A trip to Disney World, a spring break getaway or a family reunion at the ski lodge. TEC has got you and your family accomodations covered.',
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
        "Whether you’re traveling alone or with a group, TEC pairs you with a professional guide who will enrich your trip with a unique experience. See the world's iconic attractions with VIP passes, hotels, and transportation handled, and discover perks that self-planners aren't privy to. ",
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
        'Business travel is a must for some. Let Travel Experience Co. handle the stress of planning your corporate junket and transform it to a peaceful getaway.',
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
        'Did you know that some all inclusives span entire islands? All inclusive resorts exist to pamper you and your companions, and TEC exists to unlock secrets that will make your trip even better. Paradise is calling!',
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
        'Travel Experience Co. has the scoop on the perfect charter for your deep sea voyage or secluded lake excursion. Cast your line with TEC for a catch of a lifetime.',
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
        "Does your bucket list include a scenic landscape, 18 holes and luxurious accomodations? Golfing trip packages by TEC will get you there. You work on your swing, we'll handle the details",
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
        'Enjoy a quaint experience when you book a bed & breakfast getaway with TEC.',
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
        'Ready to sail the open sea? From one night dining to 14-day trans-Atlantic cruises, TEC offers a magical experience for your family trip or romantic getaway.',
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
        'White powder and majestic views are just a click away! Shred your favorite mountain or discover a new one with a ski package vacation from TEC.',
      heroTextPos: 'md:justify-end items-center',
      heroTextSize: 'lg:w-1/2 md:mr-8',
    },
  ],
}
