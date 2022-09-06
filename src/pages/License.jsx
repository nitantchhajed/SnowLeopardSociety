import { Box, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function License() {
  const { theme } = useThemeContext();

  return (
    <Box
      sx={{
        height: "100vh",
        pt: { xs: 6, md: 12 },
        background: theme && theme,
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "x-large",  md: "3.2rem", sm:"30px",xs:"20px"  },
          color: theme == "white" ? "gray" : "gray",
          fontWeight: "bold",
          marginTop:{sm:"50px",xs:"50px"},
          my: 2,
          py: { xs: 2, md: 8 },
        }}
      >
        SLS LICENSE AGREEMENT
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "medium", md: "1.4rem" },
            color: theme == "white" ? "black" : "white",
            fontWeight: "bold",
            textAlign: "center",
            px: { xs: "5%", md: "5%" },
          }}
        >
          This Snow Leopard Society NFT (“SLS NFT”) License Agreement (the “License”) is a legally
          binding agreement entered into between MetaSimba LLC and you. When you acquire SLS NFT,
          you own all personal property rights to the token underlying the SLS NFT, but you do not own
          the associated artwork, brand, or other intellectual property associated with that SLS NFT,
          except for the specific licensed rights set forth below.
          </Typography>


<Typography
  sx={{
    fontSize: { xs: "medium", md: "1.4rem" },
    color: theme == "white" ? "black" : "white",
    fontWeight: "bold",
    textAlign: "center",
    px: { xs: "5%", md: "5%" },
  }}
>
          
<h1 sx={{
            // fontSize: { xs: "medium", md: "1.4rem" },
            color: theme == "white" ? "black" : "white",
            fontWeight: "bold",
            textAlign: "center",
          }}>
          1. DEFINITIONS

        </h1>
  “Snow Leopard Society NFT” is also referred to as SLS NFT
  “SLS NFT” means any SLS themed or branded NFT created by or on behalf of MetaSimba LLC
  “SLS NFT Art” means any digital creation, art, design, and drawings associated with a specific
  SLS NFT.
<br/>
"NFT"; means any blockchain-tracked, non-fungible token, such as those conforming to the
ERC-721A, ERC-721, ERC-1155 or other non-fungible token standard.

“Creator” means the entity which released to the public the purchased nft, and related art, on
behalf of its author, i.e., MetaSimba LLC.
“you” or “your” means a lawful owner of an SLS NFT
“Effective date” means the date on which this agreement, as defined hereinafter, is attached to
the purchased NFT for the first time and shall be deemed entering into force.

“Owner” means the current owner of the NFT. in case of transfer of ownership, including via
resale, the recipient becomes the sole owner of the purchased NFT. there can be several
different owners of each nft throughout time but only one owner at a time. owner shall include
the primary owner and all subsequent owners.
MetaSimba LLC,” “us,” “we,” or “our” means MetaSimba LLC, and/or its affiliates
“Commercial Use” means any activity that is performed with the intent to generate revenue,
such as sale or transfer of items (including NFTs) on any marketplace, creating and selling
merchandise or books or video games

“SLS NFT Trademarks” means any, and all logos, trademarks, service marks, and trade dress
associated with SLS NFT, slsnft.io, snowleopardsociety.io, the SLS NFTs, and MetaSimba LLC,
including the “SLS NFT, or any other names of SLS NFT related characters or products or
service developed by us.

“Own” means, with respect to an NFT, an NFT that one has purchased or otherwise rightfully
acquired from a legitimate source, where proof of such purchase is recorded on the relevant
blockchain, thus becoming the owner of the purchased NFT.

“Primary assignment” means the first assignment by the creator of those certain rights, title and
interest on the art to the primary owner, as detailed in article 3 of the agreement, as defined
hereinafter.

“Primary owner” means the individual or entity qualifying as owner on the effective date and
party to the primary assignment.

“Purchased NFT means an NFT that one has purchased, or acquired in any way, and thus
owns.

“Resale” means the sale by the owner of the purchased NFT, and rights to the art, to a
subsequent buyer, which shall own the purchased NFT and rights to the art (to the extent the
rights to the art were transferable upon sale) upon its effective purchase and thus become its
new owner.

“Secondary assignment” means, in case of resale, any and all assignment by the owner of all its
rights, title and interest in and to the intellectual property rights on the art (to the extent actually
assignable) to the subsequent buyer of the purchased NFT.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
      2. PURPOSE
</h1>


This ownership assignment agreement is intended to govern the terms and conditions of
assignment of rights, title, and interest in and to the intellectual property rights on the art to
which this agreement is attached (hereinafter the “agreement”).

the agreement shall govern the primary assignment under which the creator assigns to the
primary owner certain intellectual property rights on the art and all secondary assignments
between the owner and subsequent buyers of the purchased NFT, where applicable.

The agreement shall be effective as of the effective date and remain in force as long as it is still
attached to the purchased NFT. by acquiring the purchased NFT, and related art, in any way
whatsoever, the owner hereby acknowledges having read the content of this agreement and
agrees to abide by its terms and conditions set forth herein.

This agreement shall apply to the primary assignment and all secondary assignments to the
extent no other written agreement has been concluded between the parties to such assignment.
in case of contradiction between the specific agreement and the agreement, the provisions of
the agreement shall prevail.

In creating this agreement, we acknowledge that the way people create, use, and monetize their
NFT is evolving and changing. We have developed this agreement seeking to protect the hard
work and creativity of the creators, on the one hand, while granting owners the freedom and
flexibility to fully enjoy their SLS NFT and related art. We are open to our community’s feedback
on this agreement and may revise it and publish amended versions as needed.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
    3. SHARING YOUR SLS NFT ART and PROMOTING YOUR SNOW LEOPARD SOCIETY PROJECTS
</h1>

We want to know about you and your SLS NFT art or projects! Feel free to share pictures, art of
you and your friends and family with your SLS NFT art. We also to know about and consider
promoting your SLS NFT projects, where appropriate, regardless of whether those projects are
for your own personal, non-commercial use, or whether they are commercial projects. if you are
getting started on a project where you intend to make commercial use of your SLS NFT and

related art, please let us know by describing your project, here, so that we can ensure that your
project complies with this agreement, and if it does, how we can best support you. Similarly, if
you expect to exceed the $500,000 limitation on annual gross revenue from commercial use set
forth below, in order to ensure you do not breach this agreement and the license conveyed,
within fifteen (15) days of your having an reasonable expectation of exceeding that threshold,
please contact us here and email us at [admin@metasimba.io], to request a discussion
regarding entering into a broader license agreement or obtaining an exemption. as the creator,
we retain authority and sole discretion to grant or deny exemptions, as well as further or broader
licenses.


<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
    4. ASSIGNMENT &amp; LIMITED LICENSE TO USE
</h1>

PERSONAL USE

In consideration of the purchase price, as defined hereinafter, and subject to the primary owner
continued compliance with the terms of this agreement and all applicable laws, the creator
hereby grants a limited, worldwide, nonexclusive license (without the right to sublicense) to the
primary owner to copy, access and use their SLS NFT and related art for the primary owner’s
own personal, non-commercial use, provided that the primary owner keeps all copyright and
other proprietary notices intact.

COMMERCIAL USE

Primary owner is also granted a limited, worldwide, nonexclusive license (without the right to
sublicense) to copy, access, use and otherwise exploit the primary owner’s SLS NFT and
related art, for the sole purpose of commercializing their own merchandise, which shall include
the right to produce and sell tangible merchandise (by way of example only, this includes
merchandise such as t-shirts, hats, and mugs) as well as digital goods (collectively, “user
goods”) that includes, contains, or consists of the graphical image of the primary owner’s SLS
NFT, provided that such commercial use does not result in the primary owner earning more than
five hundred thousand dollars ($500,000), or its equivalent in Ethereum or any currency, in
gross revenue in any twelve month period, directly or indirectly, including but not limited to
through any and all related entities and family members.

THIS LIMITED LICENSE FOR COMMERCIAL USE IS SUBJECT TO THE FOLLOWING
CONDITIONS:

Primary owner does not have any right to modify or present its snow leopard society nft or
related art in any way or any context that depicts hatred, intolerance, violence, cruelty, or
anything else that could reasonably be found to constitute hate speech, be offensive,
demeaning, or otherwise infringe upon the rights of others or the snow leopard society
community;
Primary owner may not use their Snow Leopard Society NFT or related art to advertise, market,
or sell any third party product or service;
Primary owner may not use the name “Snow Leopard Society”, “SLS” or any Snow Leopard
Society logo or trademark, the name of any Snow Leopard Society characters (as applicable),
or any animation, characters, themes, or other material related to the digital content; and
Primary owner may not combine its SLS NFT with any other SLS NFT or modified Snow
Leopard Society NFT art that it does not own, except on explicit permission of that SLS NFT
owner; and
The primary owner may not attempt to trademark, copyright, or otherwise acquire additional
intellectual property rights in or to “Snow Leopard Society ” or any SLS NFT or related art.



<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
    5. WARRANTIES AND INDEMNIFICATION
</h1>

IN THE EVENT THAT A PRIMARY OWNER MAKES USE OF THE LIMITED, WORLDWIDE,
NONEXCLUSIVE LICENSE (WITHOUT THE RIGHT TO SUBLICENSE) TO COPY, ACCESS,
USE AND OTHERWISE EXPLOIT THE PRIMARY OWNER’S SNOW LEOPARD SOCIETY
NFT AND RELATED ART FOR CERTAIN COMMERCIAL PURPOSES AS ALLOWED FOR BY
THIS AGREEMENT, PRIMARY OWNER REPRESENTS AND WARRANTS THAT THEY WILL
TAKE ALL NECESSARY STEPS TO UNDERTAKE THEIR COMMERCIAL ACTIVITIES IN A
LEGAL MANNER, INCLUDING BUT NOT LIMITED TO FORMING ANY NEEDED
CORPORATE ENTITY, BECOMING DULY ORGANIZED, VALIDLY EXISTING AND DULY
QUALIFIED TO DO BUSINESS IN ALL JURISDICTIONS WHERE THOSE ACTIVITIES ARE
CARRIED OUT, AS WELL AS REMAINING IN GOOD STANDING UNDER AND ABIDING BY
ALL APPLICABLE LAWS, RULES AND REGULATIONS THAT RELATE TO THOSE
ACTIVITIES. PRIMARY OWNER ALSO REPRESENTS AND WARRANTS THAT THEY HAVE
REQUISITE POWER AND AUTHORITY TO CARRY OUT THEIR COMMERCIAL ACTIVITIES,
AND THAT INCLUDES BUT IS NOT LIMITED TO, HAVING SUFFICIENT INSURANCE TO
ENSURE THEY CAN MEET THEIR OBLIGATIONS TO THEIR CUSTOMERS AND
INDEMNIFICATION OBLIGATIONS TO THE CREATORS.

MOREOVER, THE PRIMARY OWNER (THE “INDEMNIFYING PARTY”) SHALL INDEMNIFY,
DEFEND, AND HOLD HARMLESS THE CREATOR FROM AND AGAINST ANY LOSSES,
DAMAGES, CLAIMS, ACTIONS, DEMANDS, JUDGMENTS, LIABILITY AND/OR SUITS
INCLUDING REASONABLE ATTORNEYS’ FEES, AS INCURRED, THAT MAY BE ASSERTED
BY ANY THIRD PARTIES ARISING OUT OF OR RELATED TO THE PRIMARY OWNER’S
USE OF THE SNOW LEOPARD SOCIETY NFT AND RELATED ART FOR COMMERCIAL
PURPOSES, AS WELL AS ANY BREACH OF SUCH INDEMNIFYING PARTY’S
WARRANTIES AND REPRESENTATIONS IN THIS AGREEMENT.


<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
6. TERM AND TERMINATION
</h1>

THE FOREGOING LIMITED LICENSES APPLY ONLY DURING THE PERIOD THAT THE
PRIMARY OWNER OWNS THE SNOW LEOPARD SOCIETY NFT ASSOCIATED WITH ITS
SNOW LEOPARD SOCIETY MODEL. THESE LICENSES TERMINATE IMMEDIATELY AT
SUCH A POINT THAT THE PRIMARY OWNER NO LONGER OWNS ITS SLS NFT.
MOREOVER, IF YOU EXCEED THE SCOPE OF THE LICENSES GRANTED IN SECTION 3
HEREIN WITHOUT ENTERING INTO A BROADER LICENSE AGREEMENT WITH OR
OBTAINING AN EXEMPTION, YOU ACKNOWLEDGE AND AGREE THAT: (I) YOU ARE IN
BREACH OF THIS LICENSE; (II) IN ADDITION TO ANY REMEDIES THAT MAY BE
AVAILABLE TO CREATOR AT LAW OR IN EQUITY, THE CREATOR MAY IMMEDIATELY
TERMINATE THIS LICENSE, WITHOUT THE REQUIREMENT OF NOTICE; AND (III) YOU
WILL BE RESPONSIBLE TO REIMBURSE CREATOR FOR ANY COSTS AND EXPENSES
INCURRED BY CREATOR DURING THE COURSE OF ENFORCING THE TERMS OF THIS
LICENSE AGAINST YOU.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
7. OWNERSHIP RIGHTS
</h1>


THE PURCHASE OF A SNOW LEOPARD SOCIETY NFT MEANS THAT THE PRIMARY
OWNER HAS FULL OWNERSHIP RIGHTS IN THE SNOW LEOPARD SOCIETY NFT,
INCLUDING THE RIGHT TO STORE, SELL AND TRANSFER THE NFT. HOWEVER,
PRIMARY OWNER ACKNOWLEDGES AND AGREES THAT THIS PURCHASE OF THE
SNOW LEOPARD SOCIETY NFT DOES NOT PROVIDE ANY RIGHTS, EXPRESS OR
IMPLIED, IN (INCLUDING, WITHOUT LIMITATION, ANY COPYRIGHTS OR OTHER
INTELLECTUAL PROPERTY RIGHTS IN OR TO) THE SNOW LEOPARD SOCIETY
ASSOCIATED WITH THE NFT OTHER THAN THE LIMITED LICENSES GRANTED IN
SECTION 3 ABOVE. THE PRIMARY OWNER’S RIGHTS AND INTEREST IN ITS SNOW

LEOPARD SOCIETY NFT, ITS ASSOCIATED SNOW LEOPARD SOCIETY, ANY DERIVATIVE
SNOW LEOPARD SOCIETY NFT ART, AND ANY ART PROVIDED BY THESE TERMS WILL
IMMEDIATELY TERMINATE UPON ANY SUBSEQUENT SALE, TRANSFER,
DISPOSSESSION, BURNING, OR OTHER RELINQUISHMENT OF THEIR SNOW LEOPARD
SOCIETY NFT.

ANY USE OF THE ART OTHER THAN AS EXPRESSLY AUTHORIZED HEREIN, WITHOUT
THE PRIOR EXPLICIT WRITTEN PERMISSION OF SNOW LEOPARD SOCIETY, IS
STRICTLY PROHIBITED AND SHALL IMMEDIATELY TERMINATE THE RIGHT TO ACCESS
AND USE THE SNOW LEOPARD SOCIETY WEBSITE (AS DEFINED IN SNOW LEOPARD
SOCIETY TERMS OF SERVICE) AND ALL RIGHTS AND LICENSES GRANTED BY THESE
TERMS. SUCH UNAUTHORIZED USE MAY ALSO VIOLATE APPLICABLE LAWS
INCLUDING COPYRIGHT AND TRADEMARK LAWS AND APPLICABLE COMMUNICATIONS
REGULATIONS AND STATUTES.

NOTHING IN THIS AGREEMENT SHALL BE INTERPRETED AS GRANTING ANY LICENSE
OF INTELLECTUAL PROPERTY RIGHTS TO YOU OTHER THAN AS EXPLICITLY SET
FORTH IN THIS AGREEMENT.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
8. SECONDARY ASSIGNMENT
</h1>

The primary owner and, where applicable, all subsequent owners, shall have the right to resell
the purchased nft (“resale”), and related art, on a marketplace that allows the purchase and sale
of NFT the owner shall provide its best efforts to resell the purchased nft on a marketplace
which (i) cryptographically verifies each nft owner’s rights to display the art in order to list it for
sale, to ensure that only the actual owner can display the art for resale, and (ii) provides for a
percentage of the resale price to be automatically granted to the creator upon resale.

Any such subsequent owner or owner(s), shall have the right to license, assign or otherwise
transfer to a third-party all or part of the intellectual property rights on the art hereby granted as
per this agreement, for any purpose whatsoever.

In case of transfer of ownership of the purchased nft, in any way whatsoever, including resale,
the owner agrees to assign to the subsequent buyer of the purchased nft all rights on the related

art detailed in article 3 of this agreement, under the same conditions, to the extent such rights
have not been previously transferred to a third-party in compliance with the agreement.

This agreement shall govern any resale as long as it is still attached to the purchased NFT and
provided no other agreement has been concluded between the owner and the subsequent
buyer, which shall only apply between the parties of said agreement.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
9. COMPENSATION
</h1>


It is expressly agreed that all intellectual property rights assigned to the primary owner, as per
the primary assignment, or to the subsequent owners, as per a secondary assignment, are
granted in consideration of the price paid by the owner to purchase the purchased nft, as listed
on the nft marketplace on which it is acquired (the “purchase price”), where applicable, which
shall be deemed fixed and definitive.

notwithstanding the foregoing, the creator shall also be entitled to a compensation on any resale
of the complete work in accordance with the percentage of commission determined by the nft
marketplace on which said resale is completed.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
10. MORAL RIGHTS
</h1>

The creator shall have the right to enforce on behalf of the author, all moral rights of the author
of the art, as provided by applicable law, which shall remain perpetual, inalienable,
imprescriptible and, in general, absolute.

the owner hereby undertakes to abide, and make its contractors, including licensees and
subsequent buyers, and third parties abide by the author’s moral rights in any and all use of the
art, and in particular the following rights:

<h2></h2>
<span style={{fontSize:"1.9rem"}}>(i)</span> right of authorship, which shall entitle the creator to demand and claim at any time that the

author’s chosen name be mentioned on any mode of publication of the art; and
<br/>
<span style={{fontSize:"1.9rem"}}>(ii)</span> right to preserve the integrity of the art, which shall entitle the creator to oppose any
modification, deletion, or addition likely to alter the art, or any use of the art that may alter its
spirit, devaluate it or otherwise be deemed prejudicial to the reputation of the author.

<br/>
<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
11. TRADEMARKS AND PROMOTION
</h1>

When using the snow leopard society NFT and related art, in any way whatsoever, including but
not limited to its publication, exploitation, and/or promotion, the owner shall not use the
trademarks, service marks, or proprietary words or symbols of the creator, to the extent
otherwise permitted by applicable law or by written agreement of the creator.
By exception, when using the art for non-commercial purposes only, the owner shall have the
right to reference the creator by using the denomination “Snow Leopard Society”, “SLS” or other
denomination(s) that the creator may direct from time to time, unless informed otherwise by the
creator. Owner shall take care that such use shall not, in any way whatsoever, damage or
adversely impact the creator reputation.

The creator shall have the right but not the obligation, at its sole discretion, to promote, including
through social media, any public use of the art by the owner, unless the owner informs the
creator otherwise. The owner shall not use the art in a way that would or could present the
creator as endorsing, recommending, or favoring, in any way whatsoever, the owner and/or its
use of the art, without the express written permission of the creator.

The trademarks, service marks, trade names and logos, including Snow Leopard Society, and
any third-party marks used and displayed through the services are trademarks of the creators,
its licensors, affiliates, or sponsors, and may not be used by a primary owner other than to
factually describe its SLS NFT or Snow Leopard Society enhancement when listing it for sale or
distribution or for non-commercial purposes. We retain the right to monitor and police the use of
our trademarks, including but not limited to: (a) take all reasonable measures, including without
limitations bringing civil actions for trademark infringement, to stop the use of marks which, in
our sole judgment, are the same as or confusingly similar to our trademarks and (b) take all
reasonable measures, including without limitations bringing proceedings in the United States
patent and trademark office or elsewhere, to prevent the registration of marks which, in our sole
judgment, are the same as or confusingly similar to the trademarks.

<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
12. COOPERATION
</h1>
The creator and the owner shall cooperate in good faith and reasonably assist each other in the
prosecution of legal proceedings involving the art, or derivative works therefrom, including
proceedings conducted for the purpose of protecting any and all intellectual property rights on
the art from infringement.

The creator shall have the right to protect and defend, including through litigation, the rights
attached to the art in the event of the owner’s inaction on written notice by the creator to the
owner.


<h1 sx={{
      fontSize: { xs: "medium", md: "1.4rem" },
      color: theme == "white" ? "black" : "white",
      fontWeight: "bold",
      textAlign: "center",
    }}>
13. GOVERNING LAW
</h1>

If any provision in this agreement shall be held to be illegal, invalid or unenforceable, in whole or
in part, the provision shall apply with whatever deletion or modification is necessary so that the
provision is legal, valid and enforceable and gives effect to the initial intention of the parties.

the validity of this agreement and any of its terms and provisions, as well as the rights and
duties of the parties hereunder, shall be governed, interpreted, and enforced in accordance with
the laws of the United States of America for federal law questions and the state of Pennsylvania
for state law questions.
        </Typography>

        <Box style={{height:"100px"}}>

        </Box>
      </Box>
    </Box>
  );
}
