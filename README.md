BBH Persönlichkeitstest
=======================

This is a personality test, built for the [Buddenbrookhaus][bbh] museum in Lübeck,
Germany, to be shown at the exhibition ["What a family!"][ex].

It's based on [bbh-einbuergerungstest][einb], but now wrapped in [Electron][ele]
so it can make use of multiple displays.

Kiosk mode on Windows 10 Home
-----------------------------

Since Microsoft only offers a real kiosk mode on Windows >= Professional we had
to go a little different way. Killing explorer.exe to disable buttons and
gestures and using Electron's kiosk mode does the job quite well. There's an
autostart file called `start.bat` to be put in your startup directory.
(`C:\Users\<USERNAME>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`)


[bbh]: http://buddenbrookhaus.de
[ex]: https://buddenbrookhaus.de/de/What-a-family
[einb]: https://github.com/Chaotikum/bbh-einbuergerungstest
[ele]: https://electron.atom.io
