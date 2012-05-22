#!/bin/bash

# Batches of max 100
SCREEN_NAME_1='aberdeenuni,AbertayUni,AberUni,angliaruskin,astonuniversity,BangorUni,UniOfBath,BathSpaUni,uniofbeds,MyBCU,BoltonUni,bournemouthuni,BradfordUni,uniofbrighton,bruneluni,bucksnewuni,Cambridge_Uni,canterburyccuni,uochester,chiuni,CityUniLondon,covcampus,CumbriaUni,dmuleicester,durham_uni,uel_news,edgehill,UniofEdinburgh,EdinburghNapier,Uni_of_Essex,uniofexeter,ucfalmouth,uniglam,GlasgowUni,CaledonianNews,uniofglos,glyndwruni,GoldsmithsUOL,unigreenwich,HeriotWattUni,HuddersfieldUni,UniOfHull,imperialcollege,KeeleUniversity,unikent,kingscollegelon,LancasterUni,universityleeds,leedsmet,LeedsTrinity,uniofleicester,unilincoln,LJMU,londonmetuni,lsenews,lsbu,lborouniversity,AdmissionsUoM,manmetuni,ucpmarjon,NewUniPress,newman_uni,newportuni,UniNorthants,UniofNottingham,trentuni,openuniversity,uniofoxford,oxford_brookes,plymuni,portsmouthuni,QMUniversity,QMUL,queensubelfast,unirdg_news,RobertGordonUni,SalfordUni,sheffielduni,SOASFeed,unisouthampton,solentofficial,univofstandrews,YourStMarys,StaffsUni,StirUni,unistrathclyde,uniofsurrey,SwanseaUni,TeessideUni,trinitystdavid,ucfalmouth,UCS_NEWS,uclnews,uniofeastanglia,ulsteruni,uwebristol,cardiffmet,warwickuni,westlondonguru'

SCREEN_NAME_2='UniWestScotland,UniWestminster,worcester_uni,uniofyork,Yorkstjohn'

URL_HEAD='http://api.twitter.com/1/users/lookup.json?screen_name='

curl $URL_HEAD$SCREEN_NAME_1 >  'uk_uni_twitter.tmp'
curl $URL_HEAD$SCREEN_NAME_2 >> 'uk_uni_twitter.tmp'

cat 'uk_uni_twitter.tmp' | sed 's/\]\[/,/g' > 'uk_uni_twitter.json'

rm 'uk_uni_twitter.tmp'