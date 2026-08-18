import type { ComponentType } from 'react';
import type { PortraitProps } from './types';
import MaryMotherOfGod from './MaryMotherOfGod';
import Joseph from './Joseph';
import FrancisOfAssisi from './FrancisOfAssisi';
import ThereseOfLisieux from './ThereseOfLisieux';
import AnthonyOfPadua from './AnthonyOfPadua';
import Nicholas from './Nicholas';
import Patrick from './Patrick';
import MichaelTheArchangel from './MichaelTheArchangel';
import GabrielTheArchangel from './GabrielTheArchangel';
import RaphaelTheArchangel from './RaphaelTheArchangel';
import JoanOfArc from './JoanOfArc';
import JohnPaulII from './JohnPaulII';
import MotherTeresaOfCalcutta from './MotherTeresaOfCalcutta';
import PadrePio from './PadrePio';
import JohnBosco from './JohnBosco';
import FrancisXavier from './FrancisXavier';
import ClareOfAssisi from './ClareOfAssisi';
import Dominic from './Dominic';
import AugustineOfHippo from './AugustineOfHippo';
import Monica from './Monica';
import ThomasAquinas from './ThomasAquinas';
import Benedict from './Benedict';
import CatherineOfSiena from './CatherineOfSiena';
import BernadetteSoubirous from './BernadetteSoubirous';
import JuanDiego from './JuanDiego';
import KateriTekakwitha from './KateriTekakwitha';
import MartinDePorres from './MartinDePorres';
import MartinOfTours from './MartinOfTours';
import VincentDePaul from './VincentDePaul';
import ElizabethAnnSeton from './ElizabethAnnSeton';
import MariaGoretti from './MariaGoretti';
import Lucy from './Lucy';
import Cecilia from './Cecilia';
import Agatha from './Agatha';
import Anne from './Anne';
import Joachim from './Joachim';
import ElizabethMotherOfJohnTheBaptist from './ElizabethMotherOfJohnTheBaptist';
import JohnTheBaptist from './JohnTheBaptist';
import George from './George';
import Christopher from './Christopher';
import Sebastian from './Sebastian';
import Valentine from './Valentine';
import CosmasAndDamian from './CosmasAndDamian';
import Perpetua from './Perpetua';
import Felicity from './Felicity';
import MaximilianKolbe from './MaximilianKolbe';
import OscarRomero from './OscarRomero';
import JoseSanchezDelRio from './JoseSanchezDelRio';
import CarloAcutis from './CarloAcutis';
import PierGiorgioFrassati from './PierGiorgioFrassati';
import GemmaGalgani from './GemmaGalgani';
import RitaOfCascia from './RitaOfCascia';
import Philomena from './Philomena';
import Dymphna from './Dymphna';
import Jude from './Jude';
import Peter from './Peter';
import Paul from './Paul';
import Andrew from './Andrew';
import JamesTheGreater from './JamesTheGreater';
import JohnTheApostle from './JohnTheApostle';
import Matthew from './Matthew';
import MarkTheEvangelist from './MarkTheEvangelist';
import LukeTheEvangelist from './LukeTheEvangelist';
import PhilipTheApostle from './PhilipTheApostle';
import Bartholomew from './Bartholomew';
import ThomasTheApostle from './ThomasTheApostle';
import Matthias from './Matthias';
import Stephen from './Stephen';
import Lawrence from './Lawrence';
import Agnes from './Agnes';
import RoseOfLima from './RoseOfLima';
import TeresaOfAvila from './TeresaOfAvila';
import JohnVianney from './JohnVianney';
import FaustinaKowalska from './FaustinaKowalska';
import CatherineLaboure from './CatherineLaboure';
import LouisDeMontfort from './LouisDeMontfort';
import IgnatiusOfLoyola from './IgnatiusOfLoyola';
import FrancisDeSales from './FrancisDeSales';
import AlphonsusLiguori from './AlphonsusLiguori';
import JohnHenryNewman from './JohnHenryNewman';
import JosephineBakhita from './JosephineBakhita';
import KatharineDrexel from './KatharineDrexel';
import AndreBessette from './AndreBessette';
import JohnOfTheCross from './JohnOfTheCross';
import TeresaBenedictaOfTheCross from './TeresaBenedictaOfTheCross';
import HildegardOfBingen from './HildegardOfBingen';
import Scholastica from './Scholastica';
import BrigidOfIreland from './BrigidOfIreland';
import Columba from './Columba';
import ThomasMore from './ThomasMore';
import GiannaBerettaMolla from './GiannaBerettaMolla';
import DamienOfMolokai from './DamienOfMolokai';
import JuniperoSerra from './JuniperoSerra';
import IsidoreTheFarmer from './IsidoreTheFarmer';
import IsidoreOfSeville from './IsidoreOfSeville';
import CatherineOfAlexandria from './CatherineOfAlexandria';
import PaulMiki from './PaulMiki';
import IsaacJogues from './IsaacJogues';
import JeanDeBrebeuf from './JeanDeBrebeuf';
import Genevieve from './Genevieve';
import MaryMagdalene from './MaryMagdalene';

export const portraits: Record<string, ComponentType<PortraitProps>> = {
  'mary-mother-of-god': MaryMotherOfGod,
  joseph: Joseph,
  'francis-of-assisi': FrancisOfAssisi,
  'therese-of-lisieux': ThereseOfLisieux,
  'anthony-of-padua': AnthonyOfPadua,
  nicholas: Nicholas,
  patrick: Patrick,
  'michael-the-archangel': MichaelTheArchangel,
  'gabriel-the-archangel': GabrielTheArchangel,
  'raphael-the-archangel': RaphaelTheArchangel,
  'joan-of-arc': JoanOfArc,
  'john-paul-ii': JohnPaulII,
  'mother-teresa-of-calcutta': MotherTeresaOfCalcutta,
  'padre-pio': PadrePio,
  'john-bosco': JohnBosco,
  'francis-xavier': FrancisXavier,
  'clare-of-assisi': ClareOfAssisi,
  dominic: Dominic,
  'augustine-of-hippo': AugustineOfHippo,
  monica: Monica,
  'thomas-aquinas': ThomasAquinas,
  benedict: Benedict,
  'catherine-of-siena': CatherineOfSiena,
  'bernadette-soubirous': BernadetteSoubirous,
  'juan-diego': JuanDiego,
  'kateri-tekakwitha': KateriTekakwitha,
  'martin-de-porres': MartinDePorres,
  'martin-of-tours': MartinOfTours,
  'vincent-de-paul': VincentDePaul,
  'elizabeth-ann-seton': ElizabethAnnSeton,
  'maria-goretti': MariaGoretti,
  lucy: Lucy,
  cecilia: Cecilia,
  agatha: Agatha,
  anne: Anne,
  joachim: Joachim,
  'elizabeth-mother-of-john-the-baptist': ElizabethMotherOfJohnTheBaptist,
  'john-the-baptist': JohnTheBaptist,
  george: George,
  christopher: Christopher,
  sebastian: Sebastian,
  valentine: Valentine,
  'cosmas-and-damian': CosmasAndDamian,
  perpetua: Perpetua,
  felicity: Felicity,
  'maximilian-kolbe': MaximilianKolbe,
  'oscar-romero': OscarRomero,
  'jose-sanchez-del-rio': JoseSanchezDelRio,
  'carlo-acutis': CarloAcutis,
  'pier-giorgio-frassati': PierGiorgioFrassati,
  'gemma-galgani': GemmaGalgani,
  'rita-of-cascia': RitaOfCascia,
  philomena: Philomena,
  dymphna: Dymphna,
  jude: Jude,
  peter: Peter,
  paul: Paul,
  andrew: Andrew,
  'james-the-greater': JamesTheGreater,
  'john-the-apostle': JohnTheApostle,
  matthew: Matthew,
  'mark-the-evangelist': MarkTheEvangelist,
  'luke-the-evangelist': LukeTheEvangelist,
  'philip-the-apostle': PhilipTheApostle,
  bartholomew: Bartholomew,
  'thomas-the-apostle': ThomasTheApostle,
  matthias: Matthias,
  stephen: Stephen,
  lawrence: Lawrence,
  agnes: Agnes,
  'rose-of-lima': RoseOfLima,
  'teresa-of-avila': TeresaOfAvila,
  'john-vianney': JohnVianney,
  'faustina-kowalska': FaustinaKowalska,
  'catherine-laboure': CatherineLaboure,
  'louis-de-montfort': LouisDeMontfort,
  'ignatius-of-loyola': IgnatiusOfLoyola,
  'francis-de-sales': FrancisDeSales,
  'alphonsus-liguori': AlphonsusLiguori,
  'john-henry-newman': JohnHenryNewman,
  'josephine-bakhita': JosephineBakhita,
  'katharine-drexel': KatharineDrexel,
  'andre-bessette': AndreBessette,
  'john-of-the-cross': JohnOfTheCross,
  'teresa-benedicta-of-the-cross': TeresaBenedictaOfTheCross,
  'hildegard-of-bingen': HildegardOfBingen,
  scholastica: Scholastica,
  'brigid-of-ireland': BrigidOfIreland,
  columba: Columba,
  'thomas-more': ThomasMore,
  'gianna-beretta-molla': GiannaBerettaMolla,
  'damien-of-molokai': DamienOfMolokai,
  'junipero-serra': JuniperoSerra,
  'isidore-the-farmer': IsidoreTheFarmer,
  'isidore-of-seville': IsidoreOfSeville,
  'catherine-of-alexandria': CatherineOfAlexandria,
  'paul-miki': PaulMiki,
  'isaac-jogues': IsaacJogues,
  'jean-de-brebeuf': JeanDeBrebeuf,
  genevieve: Genevieve,
  'mary-magdalene': MaryMagdalene,
};
