import { picture } from "react-icons-kit/ikons/picture";
import { microsoft } from "react-icons-kit/ikons/microsoft";
import { twitter } from "react-icons-kit/ikons/twitter";
import { apple } from "react-icons-kit/ikons/apple";
import { u1F3EE } from "react-icons-kit/noto_emoji_regular/u1F3EE";
import { playCircleO } from "react-icons-kit/fa/playCircleO";
import { heart } from "react-icons-kit/ikons/heart";
import {u1F491} from 'react-icons-kit/noto_emoji_regular/u1F491'
import {u1F4A1} from 'react-icons-kit/noto_emoji_regular/u1F4A1'
import {u26BD} from 'react-icons-kit/noto_emoji_regular/u26BD'
import {u1F6B9} from 'react-icons-kit/noto_emoji_regular/u1F6B9'

export default {
  mk: {
    aboutus: {
      heroImg:
        "https://d26p6gt0m19hor.cloudfront.net/assets/donations/general/the-spring-background-4a0669e65a1c0d601de41b2598e23d21.jpg",
      firstHero: {
        h1: "Кој е САНOTO ?",
        p: `Ние сме родители и пријатели на децата лекувани од рак и нивните семејства, соединети во мисија за подробрување на квалитетот на лекување и животот на заболените деца и нивните родители.`,
        buttonText: "Дознај Повеќе"
      },
      squares: [
        {
          icon: heart,
          // heading: "Share your support",
          content:
            "Обезбедуваме подобри услови на хемато-онколошкото оддление на Клиниката за детски болести во Скопје, ги едуцираме родителите, децата, медицинскиот персонал, волонтерите и пошироката јавност."
        },
        {
          icon: heart,
          // heading: "Share your supportg",
          content:
            "На секое дете заболено од рак, мора да му биде достапнo најдоброто можно лекување и нега, психосоцијална поддршка на целото семејство за да може полесно да го помине долготрајното, болно и мачно лекување."
        },
        {
          icon: heart,
          // heading: "Share your supportd",
          content:
            "Унапредувањето на квалитетот на лекување и животот на децата заболени од рак во Македонија е заедничка мисија за сите нас, во која секој може да допринесе на свој начин."
        },
        {
          icon: heart,
          // heading: "Share your supports",
          content:
            "Многу е важно континуирано да се залагаме за правата на децата и нивните семејства, уважувајќи ги различностите и почитувајќи ја посебноста на секој поединец."
        }
      ]
    },
    homepage: {
      testimonialContent: {
        testimonials: [
          {
            icon: u1F491,
            color: "#2d2d2d",
            heading:
              "Љубов е потрбена на сите. Во САНО може да најдете пријатели кои ќе се погрижат за Вас и ќе ви помогнат во најтешките моменти.",
            quote:
              "Откако дојдов во САНО, за првпат некој ме прифати каква штп сум ",
              person: "Марија [Член]",
            title: "Љубов"
          },
          {
            icon: u1F4A1,
            color: "#2d2d2d",
            heading:
              "Вниманието е значајно на сите. Па затоа ние во САНО секојпат сме тука за вас да ви помогнеме во проблемите кои ги имате",
            quote:
              "Премногу фини се сите во САНО.",
            person: "Стефанија [Член]",
            title: "Внимание"
          },
          {
            icon: u26BD,
            color: "#2d2d2d",
            heading:
              "Не треба никој да биде раздвоен",
            quote:
              "Во САНО поминав многу време поминато во многу дружба и забава. Во ниту еден момент не се осетив осамено или пак игнорирано",
            person: "Бил [Член]",
            title: "Дружба"
          },
          {
            icon: u1F6B9,
            color: "#2d2d2d",
            heading:
              "Помошта е добредојдена од секаде.",
            quote:
              "Не сум волонтирал претходно, но ова ми беше прекрасно искуство каде што се здружив со нови луѓе.",
            person: "Мартин [Волонтер]",
            title: "Волонтерство"
          }
        ],
        heading: "",
        sprite:
          "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-mars-cec3617ae7bd18a8baf716974ea51ca2.png",
        h1: "Вие може да имате огромно влијание",
        buttonText: "Дознај Повеќе"
      },
      statisticInformation: {
        sprite:
          "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-saturn-5a8595e0d8f85155761f87bf3d8ef574.png",
        h1: `Помогни и ти`,
        p1: ` Низ разни работилници и советувања даваме психо-социјална поддршка во остварувањата на законските права, обезбедуваме подобри услови на хемато-онколошкото оддление на Клиниката за детски болести во Скопје, ги едуцираме родителите, децата, медицинскиот персонал, волонтерите и пошироката јавност.`
      },
      welcomeContent: {
        h1: "Зошто САНО?",
        p:
          "Подобрување на квалитетот на лекување и животот на заболените деца и нивните родители.",
        buttonText: "Погледнете го видеото"
      },
      resources: {
        images: {
          illustration:
            "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg",
          people:
            "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/water-crisis-large-048145ec31eeb4be77749ea35680b6d3.jpg"
        }
      }
    },
    header: {
      logo: {
        icon: u1F3EE,
        buttonText: "САНО"
      },
      navbar: {
        menuLinks: [
          { path: "about-us", name: "За нас" },
          { path: "gallery", name: "Галерија" },
          { path: "contact-us", name: "Контакт" },
          { path: "projects", name: "Проекти" }
        ],
        engageButtons: [
          { path: "donate", name: "Донирај" },
          { path: "volunteer", name: "Приклучи се" }
        ]
      }
    },
    footer: {
      address: "Октомвриска Револуција 32/15",
      location: "Скопје, Македонија 1000",
      mail: "infosano@yahoo.com",
      fbLink: "https://www.facebook.com/SANO-1503652413077758",
      igLink: "https://www.instagram.com/sano.ngo",
      buttonText: "Дознај Повеќе"
    },
    contactus: {
      h2: "",
      p: "",
      form: {
        errorText: {
          fullName: "Не внесовте име",
          subject: "Не внесовте тема",
          message: "Не внесовте порака",
          emailInput: {
            email: "Внесовте неправилен емаил",
            required: "Не внесовте емаил"
          }
        },
        inputs: {
          fullName: "Вашето име",
          email: "Вашиот емаил",
          message: "Вашата порака",
          subject: "Тема",
          buttonText: "Испрати"
        }
      },
      address: "Oktomvriska Revolucija 32/15",
      location: "Скопје, Македонија 1000",
      phone: "070 380 812",
      mail: "infosano@yahoo.com"
    },
    gallery: {
      images: {
        img1:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71905663_2298646186911706_7998509868694634496_n.jpg?_nc_cat=100&_nc_oc=AQlNC7rLU4oCs1dn9NRCyJV-h2_s82OCUJ71LUOOjuGrFs5Y_NnSXJnzlHq5OdBSN6Y&_nc_ht=scontent-sof1-1.xx&oh=ed5671e7a4386cd159fae1135a468710&oe=5E5CCB4D",
        img2:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/72295125_2298617896914535_1352948903359545344_n.jpg?_nc_cat=110&_nc_oc=AQkXVp8crkhzWLhuWm2_fgjMXYac2ik5GivOcOVN7yjSLBz0j5X8x40BPLNte2j2_wk&_nc_ht=scontent-sof1-1.xx&oh=b867c4a262e9879b8008638c796621eb&oe=5E1B265B",
        img3:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/69381743_2219973771445615_311384471830003712_n.jpg?_nc_cat=100&_nc_oc=AQmCO-0_NklMT3Sf8dqC2FDUAEbYU41rcIISNBEYzaLBJScq2DXsW3O3YTWxMZ5EX7s&_nc_ht=scontent-sof1-1.xx&oh=05bb5cd9d04eb4b86989baf168765743&oe=5E19063A",
        img4:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/66806386_2140648796044780_213745459871612928_n.jpg?_nc_cat=110&_nc_oc=AQmy_j5kEw5Fdc9O424R-2lu9GY7-PKTlIIDdiBmWeq_ZtK3ZKjyfqycOfB2wNvEjNE&_nc_ht=scontent-sof1-1.xx&oh=fd54ce91ba120c2226143436c20c997b&oe=5E64C586",
        img5:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/66448203_2140648392711487_2867048673336885248_n.jpg?_nc_cat=110&_nc_oc=AQkdRpxXblWWo2QOeYd1zd4Wx4nBGxRGcDpnGzSwPD2vi2IHxl_oyda8fsCalVqzK2g&_nc_ht=scontent-sof1-1.xx&oh=e8c6009174339d096b934996ab1e2b70&oe=5E17C82D",
        img6:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/60294938_2045188615590799_5650627083932532736_n.jpg?_nc_cat=105&_nc_oc=AQmXgRf51uE4HIv6b4LfukCxIJwgmP0X6LotTWwCGrHBHDP6V3hUpu7JawY-C_KEtdw&_nc_ht=scontent-sof1-1.xx&oh=6c0b10b95527f1972f66621c593108f0&oe=5E4DB5DB",
        img7:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/45371619_1774104149365915_4682688003993239552_n.jpg?_nc_cat=107&_nc_oc=AQlYd9rLPnLHu7z_uwlIuziOhvVpAMOW8MBlXkN3QhEvwvTrk6Ur5e2nfyGXLuK1dfg&_nc_ht=scontent-sof1-1.xx&oh=570770d580e097336f2cd680e4114072&oe=5E533DA9"
      },
      classes: {
        img1: "highlight-box",
        img2: "highlight-box",
        img3: "",
        img4: "highlight-tall",
        img5: "",
        img6: "highlight-box",
        img7: "highlight-tall"
      }
    }
  },
  eng: {
    aboutus: {
      heroImg:
        "https://d26p6gt0m19hor.cloudfront.net/assets/donations/general/the-spring-background-4a0669e65a1c0d601de41b2598e23d21.jpg",
      firstHero: {
        h1: "Join The Spring to invest in clean water and sustainability.",
        p: `Give monthly, and you’ll become a part of The Spring, a passionate
        community invested in a world where everyone has clean water.`,
        buttonText: "Learn More"
      },
      squares: [
        {
          icon: picture,
          heading: "Share your support",
          content:
            "Support one of our many fundraisers raising money for cancer awareness.",
          link: "Send support"
        },
        {
          icon: twitter,
          heading: "Share your supportg",
          content:
            "Support one of our many fundraisers raising money for cancer awareness.",
          link: "Send support"
        },
        {
          icon: playCircleO,
          heading: "Share your supportd",
          content:
            "Support one of our many fundraisers raising money for cancer awareness.",
          link: "Send support"
        },
        {
          icon: microsoft,
          heading: "Share your supports",
          content:
            "Support one of our many fundraisers raising money for cancer awareness.",
          link: "Send support"
        }
      ]
    },
    homepage: {
      testimonialContent: {
        testimonials: [
          {
            icon: picture,
            color: "red",
            heading:
              "In Africa alone, women spend 40 billion hours a year walking for water.",
            quote:
              "Access to clean water gives communities more time to grow food, earn an income, and go to school -- all of which fight poverty.",
            person: "List [Member]",
            title: "Time"
          },
          {
            icon: microsoft,
            color: "blue",
            heading:
              "Diseases from dirty water kill more people every year than all forms of violence, including war.",
            quote:
              "43% of those deaths are children under five years old. Access to clean water and basic sanitation can save around 16,000 lives every week.",
            person: "Maria [Volunteer]",
            title: "Health"
          },
          {
            icon: twitter,
            color: "green",
            heading:
              "Women are responsible for 72% of the water collected in Sub-Saharan Africa.",
            quote:
              "When a community gets water, women and girls get their lives back. They start businesses, improve their homes, and take charge of their own futures.",
            person: "Bill [Member]",
            title: "Empowerment"
          },
          {
            icon: apple,
            color: "yellow",
            heading: "Clean water helps keep kids in school, especially girls.",
            quote:
              "Less time collecting water means more time in class. Clean water and proper toilets at school means teenage girls don’t have to stay home for a week out of every month.",
            person: "George [Volunteer]",
            title: "Education"
          }
        ],
        heading: "",
        sprite:
          "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-mars-cec3617ae7bd18a8baf716974ea51ca2.png",
        h1: "Your can have a huge impact",
        buttonText: "Learn More"
      },
      statisticInformation: {
        sprite:
          "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/brush-saturn-5a8595e0d8f85155761f87bf3d8ef574.png",
        h1: "663 million people in the world live without clean water",
        p1: `That’s nearly 1 in 10 people worldwide. Or, twice the population
          of the United States. The majority live in isolated rural areas
          and spend hours every day walking to collect water for their
          family. Not only does walking for water keep children out of
          school or take up time that parents could be using to earn money,
          but the water often carries diseases that can make everyone sick.`,
        p2: ` But access to clean water means education, income and health -
          especially for women and kids.`
      },
      welcomeContent: {
        h1: "Why Water?",
        p:
          "For people in developing countries, clean water can change everything.",
        buttonText: "Watch our video"
      },
      resources: {
        images: {
          illustration:
            "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/hero-large-27870530f60dba9eb6f828d938dda6f1.jpg",
          people:
            "https://d26p6gt0m19hor.cloudfront.net/assets/static-pages/whywater/water-crisis-large-048145ec31eeb4be77749ea35680b6d3.jpg"
        }
      }
    },
    header: {
      logo: {
        icon: u1F3EE,
        logoImage:
          "https://scontent.fskp2-1.fna.fbcdn.net/v/t1.0-9/29695158_1505439182899081_2428008730019178701_n.jpg?_nc_cat=100&_nc_oc=AQkFXN3Kj9wME90bH9KVi40BWiCuIfxY2gEsao8pmuJMLDr8Xbo4Ji16do9-BxZtyVk&_nc_ht=scontent.fskp2-1.fna&oh=5757160b0e6b5b9d0ab903137f290727&oe=5E18FB72",
        buttonText: "SANO"
      },
      navbar: {
        menuLinks: [
          { path: "about-us", name: "About Us" },
          { path: "gallery", name: "Gallery" },
          { path: "contact-us", name: "Contant Us" },
          { path: "projects", name: "Projects" }
        ],
        engageButtons: [
          { path: "donate", name: "Donate" },
          { path: "volunteer", name: "Get Involved" }
        ]
      }
    },
    footer: {
      address: "Oktomvriska Revolucija 32/15",
      location: "Skopje, Macedonia 1000",
      mail: "infosano@yahoo.com",
      fbLink: "https://www.facebook.com/SANO-1503652413077758",
      igLink: "https://www.instagram.com/sano.ngo",
      buttonText: "Learn More"
    },
    contactus: {
      h2: "",
      p: "",
      form: {
        errorText: {
          fullName: "Ne vnesovte ime",
          subject: "Ne vnesovte tema",
          message: "Ne vnesovte poraka",
          emailInput: {
            email: "Vnesovte nepravilen email",
            required: "Ne vnesovte email"
          }
        },
        inputs: {
          fullName: "Vaseto ime",
          email: "Vasiot email",
          message: "Vasata poraka",
          subject: "Tema",
          buttonText: "Isprati"
        }
      },
      address: "Oktomvriska Revolucija 32/15",
      location: "Skopje, Macedonia 1000",
      phone: "+ 01 234 567 89",
      mail: "infosano@yahoo.com"
    },
    gallery: {
      images: {
        img1:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/71905663_2298646186911706_7998509868694634496_n.jpg?_nc_cat=100&_nc_oc=AQlNC7rLU4oCs1dn9NRCyJV-h2_s82OCUJ71LUOOjuGrFs5Y_NnSXJnzlHq5OdBSN6Y&_nc_ht=scontent-sof1-1.xx&oh=ed5671e7a4386cd159fae1135a468710&oe=5E5CCB4D",
        img2:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/72295125_2298617896914535_1352948903359545344_n.jpg?_nc_cat=110&_nc_oc=AQkXVp8crkhzWLhuWm2_fgjMXYac2ik5GivOcOVN7yjSLBz0j5X8x40BPLNte2j2_wk&_nc_ht=scontent-sof1-1.xx&oh=b867c4a262e9879b8008638c796621eb&oe=5E1B265B",
        img3:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/69381743_2219973771445615_311384471830003712_n.jpg?_nc_cat=100&_nc_oc=AQmCO-0_NklMT3Sf8dqC2FDUAEbYU41rcIISNBEYzaLBJScq2DXsW3O3YTWxMZ5EX7s&_nc_ht=scontent-sof1-1.xx&oh=05bb5cd9d04eb4b86989baf168765743&oe=5E19063A",
        img4:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/66806386_2140648796044780_213745459871612928_n.jpg?_nc_cat=110&_nc_oc=AQmy_j5kEw5Fdc9O424R-2lu9GY7-PKTlIIDdiBmWeq_ZtK3ZKjyfqycOfB2wNvEjNE&_nc_ht=scontent-sof1-1.xx&oh=fd54ce91ba120c2226143436c20c997b&oe=5E64C586",
        img5:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/66448203_2140648392711487_2867048673336885248_n.jpg?_nc_cat=110&_nc_oc=AQkdRpxXblWWo2QOeYd1zd4Wx4nBGxRGcDpnGzSwPD2vi2IHxl_oyda8fsCalVqzK2g&_nc_ht=scontent-sof1-1.xx&oh=e8c6009174339d096b934996ab1e2b70&oe=5E17C82D",
        img6:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/60294938_2045188615590799_5650627083932532736_n.jpg?_nc_cat=105&_nc_oc=AQmXgRf51uE4HIv6b4LfukCxIJwgmP0X6LotTWwCGrHBHDP6V3hUpu7JawY-C_KEtdw&_nc_ht=scontent-sof1-1.xx&oh=6c0b10b95527f1972f66621c593108f0&oe=5E4DB5DB",
        img7:
          "https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/45371619_1774104149365915_4682688003993239552_n.jpg?_nc_cat=107&_nc_oc=AQlYd9rLPnLHu7z_uwlIuziOhvVpAMOW8MBlXkN3QhEvwvTrk6Ur5e2nfyGXLuK1dfg&_nc_ht=scontent-sof1-1.xx&oh=570770d580e097336f2cd680e4114072&oe=5E533DA9"
      },
      classes: {
        img1: "highlight-box",
        img2: "highlight-box",
        img3: "",
        img4: "highlight-tall",
        img5: "",
        img6: "highlight-box",
        img7: "highlight-tall"
      }
    }
  }
};
