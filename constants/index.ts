
import google from "@/assets/images/google.png";
import onboarding1 from "@/assets/welcome/wedding_welcome1.png";
import onboarding2 from "@/assets/welcome/wedding_welcome2.png";
import onboarding3 from "@/assets/welcome/wedding_welcome3.png";
import hall from '@/assets/category/hall.png'
import props from '@/assets/category/props.png'
import photo from '@/assets/category/camera.png'
import decoration from '@/assets/category/circle.png'
import music from '@/assets/category/dj.png'
import mua from '@/assets/category/makeup-pouch.png'
import food from '@/assets/category/cutlery.png'
import jewelry from '@/assets/category/jewelry.png'
import invitations from '@/assets/category/wedding-invitation.png'
import car from '@/assets/category/jeep.png';
import BannerOne from "@/assets/banner/banner1.png"
import BannerTwo from "@/assets/banner/banner2.png"
import BannerThree from "@/assets/banner/banner3.png"
import BannerFour from "@/assets/banner/banner4.png"
import BannerFive from "@/assets/banner/banner5.png"
import map from "@/assets/images/map.jpg"
import check from "@/assets/images/check.png"
// import Category from "@/app/(tabs)/category";

export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
    hall,
    props,
    photo,
    decoration,
    music,
    mua,
    food,
    jewelry,
    invitations,
    car,
    BannerOne,
    BannerTwo,
    BannerThree,
    BannerFour,
    BannerFive,
    map,
    check
};

export const icons = {
    google,
};

export const onboarding = [
    {
        id: 1,
        title: "The perfect ride is just a tap away!",
        description:
            "Your journey begins with Ryde. Find your ideal ride effortlessly.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "Best car in your hands with Ryde",
        description:
            "Discover the convenience of finding your perfect ride with Ryde",
        image: images.onboarding2,
    },
    {
        id: 3,
        title: "Your ride, your way. Let's go!",
        description:
            "Enter your destination, sit back, and let us take care of the rest.",
        image: images.onboarding3,
    },
];
export const MenuList = [
    {title: 'Add Offers & Coupons',descp: '',route: '/(public)/profile/notification'},
    {title: 'Bookings',descp: '',route: '/(public)/profile/bookings'},
    {title: 'Chat',descp: '',route: '/(tabs)/chat'},
    {title: 'Location',descp: '',route: '/(public)/profile/location'},
    {title: 'Documents',descp: '',route: '/(public)/profile/documents'},
    {title: 'Notifications',descp: '',route: '/(public)/profile/notification'},
    {title: 'Help support',descp: '',route: '/(public)/profile/support'},
    {title: 'Terms & Condition',descp: '',route: '/(public)/profile/termsAndConditions'},
];
export const HomeSwiperImages = [
    {url: images.BannerThree},
    {url: images.BannerFive},
    {url: images.BannerTwo},
    {url: images.BannerFour},
];
export const categoryList = [
    {   CategoryId: 'CATLST001',
        CategoryName: 'Event Hall',
        categoryDisp: 'Properties for events',
        IconInfo: {type:'FontAwesome',name:'university',size:24,color:'#5E3023'},
        CategoryUrl: images.hall,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST002',
        CategoryName: 'Props',
        categoryDisp: 'Props for decorations and photoshoot',
        IconInfo: {type:'MaterialCommunityIcons',name:'sunglasses',size:24,color:'#5E3023'},
        CategoryUrl: images.props,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST003',
        CategoryName: 'Photos & Videos',
        categoryDisp: 'Capture moments & memories of events',
        IconInfo: {type:'FontAwesome',name:'camera-retro',size:24,color:'#5E3023'},
        CategoryUrl: images.photo,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST004',
        CategoryName: 'Decorations',
        categoryDisp: 'Backdrop and decoratios for lignting the stage and event',
        IconInfo: {type:'FontAwesome6',name:'award',size:24,color:'#5E3023'},
        CategoryUrl: images.decoration,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST005',
        CategoryName: 'Music & DJ',
        categoryDisp: 'DJ night & Music for Snageeth and other events',
        IconInfo: {type:'FontAwesome',name:'music',size:24,color:'#5E3023'},
        CategoryUrl: images.music,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST006',
        CategoryName: 'MUA',
        categoryDisp: 'cosmetic artist for make up',
        IconInfo: {type:'FontAwesome6',name:'wand-magic-sparkles',size:24,color:'#5E3023'},
        CategoryUrl: images.mua,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST007',
        CategoryName: 'Food & Beverages',
        categoryDisp: 'Catering for events',
        IconInfo: {type:'FontAwesome6',name:'burger',size:24,color:'#5E3023'},
        CategoryUrl: images.food,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST008',
        CategoryName: 'Invitations',
        categoryDisp: 'Desiging invitations for both digital and physical cards',
        IconInfo: {type:'FontAwesome5',name:'book-open',size:24,color:'#5E3023'},
        CategoryUrl: images.invitations,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST009',
        CategoryName: 'Arificial Jewels',
        categoryDisp: 'Collection of jewels for make over',
        IconInfo: {type:'MaterialCommunityIcons',name:'gold',size:24,color:'#5E3023'},
        CategoryUrl: images.jewelry,
        RedirectUrl: '/(auth)/welcome'
    },
    {   CategoryId: 'CATLST010',
        CategoryName: 'Vehical Convoie',
        categoryDisp: 'Bride & grooms escort & convoie for arrival and departure',
        IconInfo: {type:'FontAwesome5',name:'car',size:24,color:'#5E3023'},
        CategoryUrl: images.car,
        RedirectUrl: '/(auth)/welcome'
    },
]

export const hallList = [
    {
        Id: 'HALL0001',
        Name: "Guru A/C Function Hall",
        Rating:'4.5',
        Address: 'Hospet road, bly'
    },
    {
        Id: 'HALL0002',
        Name: "Alum Bhavan",
        Rating:'3.5',
        Address: 'ATp bypass'
    },
    {
        Id: 'HALL0003',
        Name: "Kamha Bhavan",
        Rating:'4.0',
        Address: 'Old court road, near cool corner'
    },
    {
        Id: 'HALL0004',
        Name: "Kanka Bhavan",
        Rating:'5.0',
        Address: 'Near Kurubara Hostel, Near sp circle'
    },{
        Id: 'HALL0005',
        Name: "NGK Function hall",
        Rating:'4.5',
        Address: 'Near Dollor colony, Talur road'
    },
]

export const propsList = [
    {
        Id: 'PROP0001',
        Name: 'Manjunath Studio',
        Rating:'2.0',
        Address:'Vadrabanda,KC Road, bellary'
    },
    {
        Id: 'PROP0002',
        Name: 'Tony & Jhonny',
        Rating:'4.0',
        Address:'Opp Reliance Digital, Infantry Road'
    },
]

export const cameraList = [
    {
        Id: 'PHOTOGRAHY0001',
        Name: 'MachaniClicks & MachiniPhotography',
        Rating:'5.0',
        Address:'Behind MG AutoMobiles, Patel Nagar'
    },
    {
        Id: 'PHOTOGRAHY0002',
        Name: 'BellaryEdits',
        Rating:'4.0',
        Address:'Beside TVS Service, parvati nagar'
    },
    {
        Id: 'PHOTOGRAHY0003',
        Name: 'Pavan Photo Studio',
        Rating:'2.5',
        Address:'Bank colony'
    }
]

export const decorationList = [
    {
        Id: 'DECOR0001',
        Name: 'Sangabula Decorations',
        Rating: '0.5',
        Address: 'decor addr'
    }
]

export const musicList = [
    {
        Id: 'MUSIC0001',
        Name: 'PRA DJ & Music',
        Rating: '3.5',
        Address: 'Beside St. Peter school'
    }
]

export const muaList = [
    {
        Id: 'MUA0001',
        Name: 'Kylie cosmetics & Beauty Parlour',
        Rating: '3.5',
        Address: 'Beside St. Peter school'
    }
]

export const foodList = [
    {
        Id: 'FOOD0001',
        Name: 'V/A Foods',
        Rating: '3.5',
        Address: 'near roots, Gandhi nagar'
    }
]

export const invitationList = [
    {
        Id: 'CARD0001',
        Name: 'Hanumanthu Printings & design',
        Rating: '3.0',
        Address: 'Deepak store, bangalore road'
    }
]

export const jewelList = [
    {
        Id: 'JEWEL0001',
        Name: 'RajMahal Jewelary',
        Rating: '1.5',
        Address: 'Near brucepet, Bangalore road'
    }
]

export const escortList = [
    {
        Id: 'ESCORT0001',
        Name: 'Kusuma Travels and Trips',
        Rating: '4.5',
        Address: 'Near mothi circle'
    }
]
export const southPlate = [
    {
        Id: 'FOODN0001',
        Type: 'Welcome Drink',
        List: ['Juice: Orange / mango / pineapple','MilkShake: Blackcurrent / Vanila / Strawberry'] ,
    },
    {
        Id: 'FOODN0002',
        Type: 'Staters',
        List: ['Veg bullet , Golden rings'] ,
    },
    {
        Id: 'FOODN0003',
        Type: 'Chutney',
        List: ['Lemon, Chintakaya'] ,
    },
    {
        Id: 'FOODN0004',
        Type: 'Fries',
        List: ['Buggi, Bendakai veypudu, Cut mirchi'] ,
    },
    {
        Id: 'FOODN0005',
        Type: 'Breads',
        List: ['Rumali Roti, Butter Naan, Butter Kulcha, Naan, Roti'] ,
    },
    {
        Id: 'FOODN0006',
        Type: 'Curries',
        List: ['Kaju masala, Paneer butter masala, Green peas masala'] ,
    },
    {
        Id: 'FOODN0007',
        Type: 'Rice',
        List: ['Veg Biriyani, Palak pulav,'] ,
    },
    {
        Id: 'FOODN0008',
        Type: 'Mandatory',
        List: ['White Rice', 'Sambar / Rasam', 'Papuu'] ,
    },
    {
        Id: 'FOODN0009',
        Type: 'Desert',
        List: ['IceCream: Chacolate / Pista / Strawberry / Vanila','Pan'] ,
    },
]
export const NorthPlate = [
    {
        Id: 'FOODS0001',
        Type: 'Welcome Drink',
        List: ['Juice: Orange / mango / pineapple','MilkShake: Blackcurrent / Vanila / Strawberry'] ,
    }
]

export const Vendors = [
    {VId: 1,Name: 'Shivaprasad KS', BrandName: 'Agustya Function Hall',zip: '583101',City: 'Bellary',State: 'Karnataka',Country: 'India',CountryCode: '+91',PhoneNumber: '9008471365',Email:'shiva@gmail.com',CategoryID: 1},
]
export const Products = [
    {ProductId: 1,VendorId: Vendors[0].VId, Description: '',Location: '',photos: [],},
]
export const Price = [
    {PriceId:1,VendorId: Vendors[0].VId,Amount: []},
]

export const Rules = [
    {},
]
export const Banquets = [
    {},
]
export const Comments = [
    {},
]