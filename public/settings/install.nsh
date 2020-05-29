!macro customUnInstall
    SetRegView 64
     DeleteRegKey HKCU "Software\MindSolution\vehecle_system"

    SetRegView 32
     DeleteRegKey HKCU "Software\MindSolution\vehecle_system"
 !macroend