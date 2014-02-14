##process-gymnastics

#### 1.  What root-owned processes are running? 

```
Chases-MacBook-Pro:~ cblokker$ ps -u root
  UID   PID TTY           TIME CMD
    0     1 ??        23:56.66 /sbin/launchd
    0    11 ??         1:51.40 /usr/libexec/UserEventAgent (System)
    0    12 ??         0:17.46 /usr/libexec/kextd
    0    13 ??         4:42.23 /usr/libexec/taskgated -s
    0    14 ??         4:01.12 /usr/sbin/notifyd
    0    15 ??         0:27.66 /usr/sbin/securityd -i
    0    16 ??         0:07.59 /usr/libexec/diskarbitrationd
    0    17 ??         3:22.16 /System/Library/CoreServices/powerd.bundle/powerd
    0    18 ??         5:39.41 /usr/libexec/configd
    0    19 ??        12:52.49 /usr/sbin/syslogd
    0    21 ??         1:22.34 /usr/sbin/distnoted daemon
    0    22 ??         7:53.91 /usr/libexec/opendirectoryd
    0    24 ??         2:08.34 /usr/sbin/cfprefsd daemon
    0    25 ??         0:00.42 /usr/libexec/xpcd
    0    29 ??         0:03.05 com.apple.authd
    0    33 ??         3:18.01 /System/Library/CoreServices/coreservicesd
    0    39 ??         0:00.02 /usr/libexec/wdhelper
    0    40 ??         0:06.26 /usr/libexec/warmd
    0    44 ??         0:01.34 /usr/libexec/stackshot -t
    0    47 ??         0:08.45 /System/Library/CoreServices/SleepServicesD
    0    49 ??         0:01.86 /System/Library/PrivateFrameworks/GenerationalStorage.f
    0    54 ??        13:47.64 /System/Library/Frameworks/CoreServices.framework/Frame
  501    58 ??         3:13.04 /System/Library/CoreServices/loginwindow.app/Contents/M
    0    59 ??         0:00.22 /System/Library/CoreServices/logind
    0    61 ??         0:00.04 /usr/sbin/KernelEventAgent
    0    63 ??        68:53.55 /usr/libexec/hidd
    0    64 ??         6:13.32 /System/Library/Frameworks/CoreServices.framework/Versi
    0    66 ??         0:00.03 /sbin/dynamic_pager -F /private/var/vm/swapfile
    0    69 ??         2:58.89 /System/Library/CoreServices/launchservicesd
    0    75 ??         0:01.32 autofsd
    0    76 ??         0:29.53 /System/Library/PrivateFrameworks/ApplePushService.fram
    0    77 ??         0:02.93 /usr/libexec/aosnotifyd
    0    78 ??         2:28.44 /usr/libexec/airportd
    0    79 ??         0:00.05 /bin/sh /Library/Parallels/Parallels Service.app/Conten
    0    80 ??        12:39.11 /Applications/Leap Motion.app/Contents/MacOS/leapd
   88    98 ??       479:05.39 /System/Library/Frameworks/ApplicationServices.framewor
    0   119 ??         8:28.84 /System/Library/Frameworks/CoreServices.framework/Frame
    0   154 ??         0:00.54 /usr/libexec/networkd_privileged
    0   155 ??         0:12.44 /usr/libexec/usbd
    0   156 ??         0:01.66 /usr/sbin/ntpd -c /private/etc/ntp-restrict.conf -n -g 
    0   157 ??         0:01.96 /usr/sbin/cupsd -l
    0   158 ??         0:39.98 /usr/libexec/pacemaker -b -e 0.0001 -a 10
    0   169 ??         0:19.87 sysmond
    0   229 ??         0:00.98 /System/Library/Frameworks/OpenGL.framework/Versions/A/
    0   235 ??         0:06.57 com.apple.CodeSigningHelper
    0   251 ??         0:00.38 /System/Library/PrivateFrameworks/TCC.framework/Resourc
    0   258 ??         0:01.30 /Library/Parallels/Parallels Service.app/Contents/PlugI
    0   270 ??        31:33.27 /Library/Parallels/Parallels Service.app/Contents/MacOS
    0   278 ??         0:01.74 /usr/libexec/securityd_service
    0   294 ??         0:02.67 /System/Library/PrivateFrameworks/SoftwareUpdate.framew
    0   321 ??         0:02.18 /usr/sbin/filecoordinationd
    0   432 ??         3:40.52 /usr/libexec/sandboxd -n PluginProcess -n 
    0   436 ??        12:53.45 /System/Library/PrivateFrameworks/CoreSymbolication.fra
    0   465 ??         0:00.59 /sbin/launchd
    0   467 ??         0:00.13 /System/Library/Frameworks/CoreServices.framework/Frame
    0   596 ??         1:01.68 /usr/libexec/systemstatsd
    0   630 ??         0:00.12 com.apple.systemadministration.writeconfig
    0   954 ??        27:28.32 /usr/sbin/systemstats --xpc
    0  2057 ??         0:01.25 /System/Library/PrivateFrameworks/DiskImages.framework/
    0  2067 ??         0:01.65 /usr/libexec/syspolicyd
    0  2350 ??         0:44.13 /System/Library/PrivateFrameworks/PackageKit.framework/
    0  4581 ??         0:00.09 /usr/libexec/periodic-wrapper daily
    0 23883 ??         0:00.01 /usr/libexec/periodic-wrapper weekly
    0 24167 ??         0:00.01 /usr/sbin/aslmanager -s /var/log/eventmonitor
    0 24168 ??         0:00.00 /usr/sbin/aslmanager -s /var/log/performance
    0 40863 ??         0:03.84 /System/Library/PrivateFrameworks/DiskImages.framework/
    0 81097 ??         1:14.23 /System/Library/Frameworks/CoreMediaIO.framework/Resour
    0 97949 ??         0:00.07 /usr/sbin/ocspd
```

#### 2.  What processes are running on your account?
```
Chases-MacBook-Pro:~ cblokker$ ps -u cblokker
  UID   PID TTY           TIME CMD
  501   279 ??         3:32.41 /sbin/launchd
  501   282 ??         0:59.23 /usr/libexec/UserEventAgent (Aqua)
  501   283 ??         7:11.46 /usr/sbin/distnoted agent
  501   286 ??         2:35.56 /usr/sbin/cfprefsd agent
  501   295 ??         7:13.00 /Applications/Utilities/Terminal.app/Contents/MacOS/Ter
  501   301 ??         1:58.16 /System/Library/CoreServices/SystemUIServer.app/Content
  501   302 ??         5:26.50 /System/Library/CoreServices/Finder.app/Contents/MacOS/
  501   305 ??         0:05.14 /usr/libexec/xpcd
  501   306 ??         0:00.02 /usr/sbin/pboard
  501   307 ??         0:10.39 /usr/libexec/sharingd
  501   308 ??         1:58.41 /System/Library/PrivateFrameworks/TCC.framework/Resourc
  501   309 ??         2:14.35 /System/Library/Frameworks/ApplicationServices.framewor
  501   310 ??         0:06.21 /usr/libexec/librariand
  501   312 ??         0:07.72 /System/Library/PrivateFrameworks/Ubiquity.framework/Ve
  501   314 ??         1:07.02 /System/Library/PrivateFrameworks/CommerceKit.framework
  501   316 ??         0:10.60 /usr/sbin/usernoted
  501   317 ??         3:02.36 /System/Library/PrivateFrameworks/CalendarAgent.framewo
  501   322 ??         0:08.08 /usr/libexec/secd
  501   325 ??         1:03.80 com.apple.internetaccounts
  501   329 ??         0:15.33 com.apple.IconServicesAgent
  501   330 ??         0:01.48 /usr/libexec/lsboxd
  501   332 ??         0:03.08 /System/Library/PrivateFrameworks/IMCore.framework/imag
  501   333 ??         0:00.29 com.apple.imdpersistence.IMDPersistenceAgent
  501   334 ??         0:10.16 /System/Library/PrivateFrameworks/IDSCore.framework/ide
  501   338 ??         0:54.32 /System/Library/CoreServices/NotificationCenter.app/Con
  501   341 ??         0:00.31 com.apple.NotesMigratorService
  501   342 ??         0:00.60 /System/Library/Frameworks/Accounts.framework/Versions/
  501   346 ??         0:06.72 com.apple.ShareKitHelper
  501   348 ??         0:01.08 /System/Library/CoreServices/pbs
  501   353 ??         0:00.13 com.apple.appstore.PluginXPCService
  501   397 ??         0:02.27 /usr/libexec/WiFiKeychainProxy
  501   398 ??         0:00.23 /System/Library/CoreServices/SocialPushAgent.app/Conten
  501   404 ??         0:01.71 /System/Library/CoreServices/AppleIDAuthAgent
  501   407 ??         0:49.45 /Library/Printers/Dell/PDEs/printhelper.app/Contents/Ma
  501   408 ??         0:01.29 /Library/Parallels/Parallels Service.app/Contents/PlugI
  501   415 ??         0:26.78 /Users/cblokker/Library/Application Support/Spotify/Spo
  501   418 ??         0:03.06 /Applications/iTunes.app/Contents/MacOS/iTunesHelper.ap
  501   419 ??        69:05.51 /Applications/Google Drive.app/Contents/MacOS/Google Dr
  501   422 ??        57:11.17 /Applications/Leap Motion.app/Contents/MacOS/Leap Motio
  501   435 ??         0:00.18 /System/Library/Frameworks/Security.framework/Versions/
  501   448 ??         0:00.00 (Google Drive Ico)
    0   449 ??         0:00.00 (Google Drive Ico)
  501   464 ??         0:21.97 /System/Library/Frameworks/CoreServices.framework/Frame
  501   600 ??         0:00.92 com.apple.DataDetectorsDynamicData
  501   633 ??         0:19.54 /System/Library/Services/AppleSpell.service/Contents/Ma
  501   635 ??         0:00.92 com.apple.InputMethodKit.UserDictionary
  501  1610 ??         0:05.80 /System/Library/PrivateFrameworks/CloudServices.framewo
  501  1680 ??         0:08.91 /System/Library/CoreServices/rcd.app/Contents/MacOS/rcd
  501  2053 ??         0:05.89 /System/Library/PrivateFrameworks/DiskImages.framework/
  501  2532 ??         0:01.17 /System/Library/Frameworks/ApplicationServices.framewor
  501  4016 ??         0:00.28 /usr/libexec/USBAgent
  501  4019 ??         0:11.74 /Library/Application Support/Adobe/OOBE/PDApp/UWA/AAM U
  501  6141 ??         0:01.23 com.apple.CommerceKit.StoreAEService
  501  6159 ??         0:05.89 /System/Library/PrivateFrameworks/CommerceKit.framework
  501 12934 ??         0:00.16 /System/Library/PrivateFrameworks/KerberosHelper/Helper
  501 14243 ??         0:04.52 /System/Library/PrivateFrameworks/UniversalAccess.frame
  501 16515 ??         0:01.18 /System/Library/PrivateFrameworks/HelpData.framework/Ve
  501 17504 ??         0:33.28 /Library/PreferencePanes/Growl.prefPane/Contents/Resour
  501 21412 ??         0:01.24 /Applications/Steam.app/Contents/MacOS/osx32/ipcserver
  501 21664 ??         0:02.28 com.apple.geod
  501 24554 ??         1:54.77 /System/Library/CoreServices/Dock.app/Contents/MacOS/Do
  501 24556 ??         0:05.20 com.apple.dock.extra
  501 24584 ??         0:37.10 /System/Library/CoreServices/Dock.app/Contents/Resource
  501 29474 ??         9:57.18 /Users/cblokker/Downloads/Flux.app/Contents/MacOS/Flux 
  501 29490 ??         0:00.18 com.apple.BKAgentService
  501 29495 ??         0:00.96 /System/Library/CoreServices/ScopedBookmarkAgent
  501 33227 ??        12:39.97 /Applications/Microsoft Office 2011/Microsoft Word.app/
  501 33230 ??         0:05.32 /Library/Application Support/Microsoft/MAU2.0/Microsoft
  501 34728 ??         0:01.81 /System/Library/PrivateFrameworks/CommerceKit.framework
  501 34897 ??         0:01.69 /System/Library/Frameworks/ApplicationServices.framewor
  501 36988 ??         0:00.02 com.apple.menuextra.airport.keychainproxy
  501 42063 ??        43:21.89 /Applications/Spotify.app/Contents/MacOS/Spotify
  501 42068 ??         0:13.87 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 42069 ??         2:12.37 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 42070 ??         1:45.89 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 42073 ??         0:39.59 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 42692 ??         0:26.53 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 50137 ??         0:01.00 /usr/bin/ssh-agent -l
  501 51415 ??         0:11.10 SCREEN
  501 51465 ??         0:00.00 SCREEN
  501 51540 ??         0:00.00 SCREEN
  501 54558 ??         0:00.69 /System/Library/PrivateFrameworks/Lookup.framework/Reso
  501 59471 ??         0:00.62 /System/Library/Frameworks/InputMethodKit.framework/Res
  501 63669 ??         0:19.42 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 68044 ??        41:15.13 /Volumes/Sublime Text 2/Sublime Text 2.app/Contents/Mac
  501 68390 ??         0:16.38 /System/Library/PrivateFrameworks/DiskImages.framework/
  501 70057 ??         0:00.11 /System/Library/Frameworks/DiskArbitration.framework/Ve
  501 80986 ??       198:05.41 /Applications/Google Chrome.app/Contents/MacOS/Google C
  501 80989 ??       164:06.57 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80992 ??         1:10.15 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80993 ??         0:09.55 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80994 ??         0:18.62 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80995 ??         2:45.37 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80996 ??         1:09.76 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80997 ??         8:07.09 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80998 ??         0:13.59 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 80999 ??         1:36.41 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 81001 ??         0:27.77 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 81005 ??         0:33.17 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 81008 ??         0:11.67 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 81009 ??         0:33.07 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 81010 ??         0:52.55 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 86362 ??         0:06.52 /Applications/Spotify.app/Contents/Frameworks/Spotify H
  501 88114 ??         2:59.95 /Applications/Microsoft Office 2011/Microsoft Excel.app
  501 97748 ??         0:27.20 /Applications/VirtualBox.app/Contents/MacOS/VirtualBox
  501 97751 ??         0:04.05 /Applications/VirtualBox.app/Contents/MacOS/VBoxXPCOMIP
  501 97753 ??         0:09.11 /Applications/VirtualBox.app/Contents/MacOS/VBoxSVC --a
  501 97968 ??         1:36.97 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 97974 ??         0:03.01 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 97985 ??         0:22.64 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98151 ??         0:22.90 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98187 ??         0:02.15 /Applications/Preview.app/Contents/MacOS/Preview
  501 98194 ??         0:00.23 /System/Library/Image Capture/Support/Image Capture Ext
  501 98233 ??         0:01.27 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98258 ??         4:03.18 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98341 ??         0:02.28 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98349 ??         0:04.79 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98399 ??         0:01.05 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98406 ??         0:01.01 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98421 ??         0:08.95 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98462 ??         0:02.86 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98477 ??         0:00.53 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98488 ??         0:15.36 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98499 ??         0:18.21 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98585 ??         0:00.21 /System/Library/Frameworks/CoreServices.framework/Frame
  501 98602 ??         0:02.57 /System/Library/CoreServices/ReportCrash
  501 98606 ??         0:00.49 /Applications/Google Chrome.app/Contents/Versions/33.0.
  501 98607 ??         0:00.10 /System/Library/Frameworks/CoreServices.framework/Frame
    0  8295 ttys000    0:01.47 login -pf cblokker
  501  8297 ttys000    0:00.09 -bash
    0  8344 ttys001    0:00.02 login -pfl cblokker /bin/bash -c exec -la bash /bin/bas
  501  8345 ttys001    0:00.02 -bash
    0  9068 ttys003    0:00.08 login -pfl cblokker /bin/bash -c exec -la bash /bin/bas
  501  9069 ttys003    0:00.01 -bash
    0 51455 ttys004    0:00.02 login -pfl cblokker /bin/bash -c exec -la bash /bin/bas
  501 51456 ttys004    0:00.60 -bash
  501 51459 ttys004    0:00.00 ping localhost
  501 51462 ttys004    0:00.00 ping localhost
    0 98610 ttys004    0:00.00 ps -u cblokker
    0 51416 ttys005    0:00.02 login -pflq cblokker /bin/bash
  501 51417 ttys005    0:00.01 bash
  501 51421 ttys005    0:41.15 ping localhost
    0 51466 ttys006    0:00.01 login -pflq cblokker /bin/bash
  501 51467 ttys006    0:00.00 bash
    0 51541 ttys007    0:00.01 login -pflq cblokker /bin/bash
  501 51542 ttys007    0:00.00 bash

```

#### 3. Run a typical working set of applications 

##### a) Which application is using the most real memory?
```
Chases-MacBook-Pro:~ cblokker$ ps axo rss,command | sort -n | tail -1
	470856 /Applications/Google Chrome.app/Contents/Versions/33.0.1750.70/Google Chrome Helper.app/Contents/MacOS/Google Chrome Helper --type=renderer --lang=en-US --force-fieldtrials=AutocompleteDynamicTrial_2/PP_EnableEntitySuggest_R9_Beta_Control/ChromeSuggestions/Control r2/EmbeddedSearch/Group2 beta:r2 espv:210 use_cacheable_ntp:1 suppress_on_srp:1/ExtensionInstallVerification/None/GoogleNow/Default/OmniboxBundledExperimentV1/BetaHQPExperimentsControl/Prerender/PrerenderEnabled/PrerenderFromOmnibox/OmniboxPrerenderEnabled/PrerenderLocalPredictorSpec/LocalPredictor=Enabled:SideEffectFreeWhitelist=Enabled:MaxConcurrentPrerenders=2:PrerenderPriorityHalfLifeTimeSeconds=30/Test0PercentDefault/group_01/UMA-Dynamic-Binary-Uniformity-Trial/default/UMA-Population-Restrict/normal/UMA-Session-Randomized-Uniformity-Trial-5-Percent/group_05/UMA-Uniformity-Trial-1-Percent/group_25/UMA-Uniformity-Trial-10-Percent/group_03/UMA-Uniformity-Trial-100-Percent/group_01/UMA-Uniformity-Trial-20-Percent/group_01/UMA-Uniformity-Trial-5-Percent/group_15/UMA-Uniformity-Trial-50-Percent/group_01/ --enable-threaded-compositing --enable-deadline-scheduling --renderer-print-preview --disable-accelerated-video-decode --channel=80986.1546.1475626746
```


##### b) The most virtual memory?

```
Chases-MacBook-Pro:~ cblokker$ ps axo vsize,command | sort -n | tail -1
	4373880 /System/Library/CoreServices/Finder.app/Contents/MacOS/Finder
```


#### 4.  Login to my.cs.lmu.edu. Who else, other than root and you, has processes running at that time?

```
cblokker@ab201:~$ ps aux | grep -v root | grep -v cblokker
	USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
	syslog     694  0.0  0.1 185868  5732 ?        Sl    2013  14:41 rsyslogd -c5
	statd      710  0.0  0.0  25612  1524 ?        Ss    2013   0:00 rpc.statd -L
	102        722  0.0  0.0  24160   440 ?        Ss    2013   0:00 dbus-daemon --system --fork --activation=upstart
	daemon     914  0.0  0.0  16784   308 ?        Ss    2013   0:00 atd
	mysql      939  0.0  0.5 236620 21736 ?        Ssl   2013  26:38 /usr/sbin/mysqld
	postfix   1301  0.0  0.0  27224  1756 ?        S     2013   0:08 qmgr -l -t fifo -u
	aschne19  3246  0.0  0.2  30148  9440 pts/4    Ss+   2013   0:00 -bash
	www-data  5480  0.0  0.3 204416 12720 ?        S    15:18   0:00 /usr/sbin/apache2 -k start
	www-data  5557  0.0  0.3 204400 12712 ?        S    15:24   0:00 /usr/sbin/apache2 -k start
	www-data  5902  0.0  0.3 204392 12712 ?        S    15:35   0:00 /usr/sbin/apache2 -k start
	www-data  5930  0.0  0.3 204392 12708 ?        S    15:36   0:00 /usr/sbin/apache2 -k start
	www-data  5934  0.0  0.3 204916 13268 ?        S    15:38   0:00 /usr/sbin/apache2 -k start
	zkansil   8852  0.0  0.0  27036  1668 ?        Ss   Feb06   0:13 SCREEN ping www.google.com
	zkansil   8853  0.0  0.0  10604   960 pts/3    Ss+  Feb06   1:19 ping www.google.com
	www-data  9201  0.0  0.3 204408 12764 ?        S    15:40   0:00 /usr/sbin/apache2 -k start
	www-data  9230  0.0  0.3 204908 13216 ?        S    15:42   0:00 /usr/sbin/apache2 -k start
	www-data  9277  0.0  0.3 204668 13004 ?        S    15:49   0:00 /usr/sbin/apache2 -k start
	www-data  9306  0.0  0.3 204416 12776 ?        S    15:52   0:00 /usr/sbin/apache2 -k start
	www-data  9307  0.0  0.3 204392 12708 ?        S    15:54   0:00 /usr/sbin/apache2 -k start
	postfix  11923  0.0  0.0  38092  3128 ?        S     2013   0:03 tlsmgr -l -t unix -u -c
	1000     12689  0.0  0.0  73348  1800 ?        S    Feb09   0:00 sshd: keckadmin@pts/0
	1000     12690  0.0  0.2  30024  9240 pts/0    Ss+  Feb09   0:00 -bash
	aschne19 14083  0.0  0.2  30140  9452 pts/2    Ss+  Feb06   0:00 -bash
	ntp      18652  0.0  0.0  28824  1664 ?        Ss   19:14   0:00 /usr/sbin/ntpd -p /var/run/ntpd.pid -g -c /var/lib/ntp/ntp.conf.dhcp -u 110:119
	postfix  18871  0.0  0.0  27012  1608 ?        S    19:27   0:00 pickup -l -t fifo -u -c
	aschne19 22333  0.0  0.2  32920  8148 ?        Ss    2013  25:58 tmux attach
	akerawa2 24143  0.0  0.0  26904  1496 ?        Ss   Jan30   0:29 SCREEN
	akerawa2 24144  0.0  0.1  25972  5144 pts/1    Ss   Jan30   0:00 /bin/bash
	akerawa2 24200  0.0  0.0  10604   952 pts/1    S+   Jan30   2:40 ping www.yahoo.com
```

