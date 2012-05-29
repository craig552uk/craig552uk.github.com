#!/bin/bash

# Batches of max 100
SCREEN_NAME_1='AberUni,angliaruskin,astonuniversity,BangorUni,BathSpaUni,BirkbeckNews,MyBCU,bournemouthuni,bruneluni,bucksnewuni,canterburyccuni,cardiffmet,cardiffuni,CSSDLondon,conservatoiredd,covcampus,dmuleicester,edgehill,EdinburghNapier,CaledonianNews,gsofa,glyndwruni,GoldsmithsUOL,guildhallschool,HarperAdamsUC,HeriotWattUni,HeythropCollege,imperialcollege,IOE_London,kingscollegelon,LeedsMusic,leedsmet,LeedsTrinity,LiverpoolHopeUK,LJMU,LondonBSchool,londonmetuni,lsenews,LSHTMpress,lsbu,lborouniversity,newman_uni,oxford_brookes,plymuni,QMUniversity,QMUL,ravensbourneuk,rosebruford,RoyalAcadMusic,RoyalAgCollege,RCAevents,rcmlatest,rcstweets,rhbncalumni,solentofficial,mysgul,YourStMarys,StaffsUni,swanseamet,SwanseaUni,TeessideUni,AUCBPress,CityUniLondon,icrnews,LIPALiverpool,manmetuni,trentuni,openuniversity,queensubelfast,RobertGordonUni,RoyalVetCollege,SOASnewsroom,School_Pharmacy,aberdeenuni,UniOfBath,unibirmingham,BoltonUni,BradfordUni,uniofbrighton,bristoluni,UniOfBuckingham,Cambridge_Uni,uclan,chiuni,uniofeastanglia,uel_news,UniofEdinburgh,Uni_of_Essex,uniofexeter,GlasgowUni,unigreenwich,HuddersfieldUni,UniOfHull,KeeleUniversity,unikent,LancasterUni,universityleeds,uniofleicester,unilincoln,livuninews'

SCREEN_NAME_2='AdmissionsUoM,NewUniPress,UniNorthants,UniofNottingham,uniofoxford,portsmouthuni,unirdg_news,SalfordUni,sheffielduni,unisouthampton,univofstandrews,StirUni,unistrathclyde,uniofsurrey,SussexUni,UniWestScotland,newportuni,warwickuni,westlondonguru,UniWestminster,_UoW,wlv_uni,worcester_uni,uniofyork,TrinityLaban,UCS_NEWS,ucfalmouth,uclnews,ucpmarjon,UCA_creative,AbertayUni,uniofbeds,uochester,CumbriaUni,derbyuni,durham_uni,uniglam,uniofglos,UniofHerts,ArtsHotlist,ThinkUHI,uwebristol,ulsteruni,trinitystdavid,writtlecollege,Yorkstjohn'

URL_HEAD='http://api.twitter.com/1/users/lookup.json?screen_name='

curl $URL_HEAD$SCREEN_NAME_1 >  'uk_uni_twitter.tmp'
curl $URL_HEAD$SCREEN_NAME_2 >> 'uk_uni_twitter.tmp'

cat 'uk_uni_twitter.tmp' | sed 's/\]\[/,/g' > 'uk_uni_twitter.json'

rm 'uk_uni_twitter.tmp'