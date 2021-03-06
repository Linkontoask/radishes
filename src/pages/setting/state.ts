import { SettingState, BasicEffect } from '@/interface/index'

export const state: SettingState = {
  source: ['qq', 'kuwo', 'migu'],
  sourceAll: [
    { name: 'QQ音乐', value: 'qq', disabled: true },
    { name: '酷我音乐', value: 'kuwo', disabled: true },
    { name: '咪咕音乐', value: 'migu', disabled: true },
    { name: '百度音乐', value: 'baidu' },
    { name: 'JOOX', value: 'joox' },
    { name: '酷狗音乐', value: 'kugou' },
    { name: '虾米音乐', value: 'xiami' }
    // { name: 'Youtube', value: 'youtube' }
  ],
  bitRate: 3.2e5,
  basicEffect: [BasicEffect.FADE],
  convolver: '原唱',
  upgrade: true,
  convolverAll: [
    '原唱',
    'AcademicQuadrangle',
    'AliceInBones',
    'Amaranth',
    'ArroyoEnsenada',
    'Avenue52UnderpassLARiver',
    'Avenue60UnderpassLARiver',
    'BarMonsieurRicard',
    'Batcave',
    'BatteryBenson',
    'BatteryBrannan',
    'BatteryPowell',
    'BatteryQuarles',
    'BatteryRandol',
    'BatteryTolles',
    'BiomedicalSciences',
    'BlackSunGarden',
    'Blaupunkt tube radio.C',
    'Blaupunkt tube radio',
    'BoulevardRosemontUnderpass',
    'ByronGlacier',
    'Car radio close',
    'Car radio wide',
    'CaribooRdUnderGaglardiWay',
    'CarpenterCenter',
    'CastilloDeLosTresReyesDelMorro',
    'CastilloDeLosTresReyesDelMorroArch',
    'CastilloDeLosTresReyesDelMorroCourtyard',
    'CastilloDeLosTresReyesDelMorroSalasDeExposicion',
    'CathedralRoom',
    'CCRMAStairwell',
    'CedarCreekWinery',
    'Church Schellingwoude',
    'CleftRidgeArch',
    'CliffOfTheDawn',
    'Commerical&5Underpass',
    'ConradPrebysConcertHallSeatF111',
    'ConventionCenterSteps',
    'ConvocationMall',
    'CornOnTheLeash',
    'CPMC264',
    'CPMCNorthStairwell',
    'Cranbrook Art Museum',
    'DevilsPunchbowl',
    'DipwayArch',
    'DiscoveryRoom',
    'DivorceBeach',
    'DrainageTunnel',
    'EchoBridge',
    'Erres tube radio v2.2',
    'Erres tube radio.C',
    'ExerciseAndNutritionSciences',
    'Factory Hall',
    'FatMansMisery',
    'FatMansSqueeze',
    'FishCreekTrestleBridge',
    'FooToFly',
    'FortalezaDeSanCarlosDeLaCabana ',
    'FortWordenPillbox',
    'FortWordenTunnel',
    'FourPointsRoom270',
    'Fredman_Mono_Vintage30_Solid',
    'Fredman_Mono_Vintage30_SPARC',
    'Fredman_Mono_Vintage30_Tube',
    'FremontTroll',
    'GalbraithHall',
    'GeiselLibrary',
    'GraffitiHallway',
    'GreedSacrifice',
    'GreenBasketCase',
    'HaleHolisticYogaStudio',
    'HarborEntranceControlPost',
    'HartwellTavern',
    'Hawxhurst',
    'HepnerHall',
    'HopkinsDriveUnderpass',
    'HumanitiesSocialSciencesCourtyard',
    'iron box mono',
    'Iron speaker.2',
    'IslaMujeresCave',
    'JFKUnderpass',
    'LakeMerrittBART',
    'LawrenceWelkCave',
    'LionsGateBridge',
    'LittlefieldLobby',
    'LoveLibrary',
    'MillsArtMuseum',
    'MillsGreekTheater',
    'Mono_3DoorTonite_Solid',
    'Mono_3DoorTonite_SPARC',
    'Mono_3DoorTonite_Tube',
    'Mono_AlterYourEyes_Solid',
    'Mono_AlterYourEyes_SPARC',
    'Mono_AlterYourEyes_Tube',
    'Mono_Bushlyerine_Solid',
    'Mono_Bushlyerine_SPARC',
    'Mono_Bushlyerine_Tube',
    'Mono_TheSpringsArentAlright_Solid',
    'Mono_TheSpringsArentAlright_SPARC',
    'Mono_TheSpringsArentAlright_Tube',
    'NancyLakeTunnel',
    'Natatorium',
    'NaturalSciences',
    'NaumburgBandshell',
    'OldSouthBridge',
    'OutbackClimbingCenter',
    'PA horn in hall',
    'PabellonCulturalDeLaRepublica',
    'PabstBrewery',
    'PacificHall',
    'PepperCanyonHall',
    'PortageCreekTunnel',
    'PortTownsendSkatepark',
    'PurgatoryChasm',
    'Qasgiq',
    'QuadracciPavilion',
    'RacquetballCourt',
    'RedBridge',
    'RiverMountainsLoopTrailAqueduct',
    'SaltonSeaDrainagePipe',
    'SanDiegoSupercomputerCenter',
    'ScorpYouLikeAHurricane',
    'SewardWaterfrontPark',
    'Sleeping Giant Tower',
    'Small portable ambient',
    'Small portable',
    'Small speaker mono',
    'Small speaker.2',
    'Space4ArtGallery',
    'SpoonGarden',
    'SquareVictoriaDome',
    'StanleyParkCauseway',
    'StanleyParkCliffs',
    'StanleyParkDriveUnderpass',
    'SteinmanFoundationRecordingSuite',
    'SteinmanHall',
    'Stereo_FooTender_Solid',
    'Stereo_FooTender_SPARC',
    'Stereo_FooTender_Tube',
    'Stereo_NickelOnTheFloor_Solid',
    'Stereo_NickelOnTheFloor_SPARC',
    'Stereo_NickelOnTheFloor_Tube',
    'Stereo_PaddleControl_Solid',
    'Stereo_PaddleControl_SPARC',
    'Stereo_PaddleControl_Tube',
    'Stereo_ThreeDaysAnimal_Solid',
    'Stereo_ThreeDaysAnimal_SPARC',
    'Stereo_ThreeDaysAnimal_Tube',
    'StorageTankNo7',
    'StrathconaStairwellMcGill',
    'SweetChildOfGun',
    'SwitzerStUnderEHarborDr',
    'TelephoneWash',
    'TheSlot',
    'TijuanaAqueductTunnel',
    'TijuanaMall',
    'TonyKnowlesCoastalTrailTunnel',
    'ToolPot',
    'TransitCenter',
    'TunnelToHeaven',
    'TunnelToHell',
    'Very small speaker mono',
    'walkman-EQ',
    'WalkwayUnderECampusDr',
    'WangenheimRareBooksRoom',
    'WarrenLectureHall2005',
    'WaterplacePark',
    'WoodruffLane'
  ]
}
