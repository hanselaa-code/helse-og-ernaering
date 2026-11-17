import {
  Activity,
  AlertTriangle,
  Apple,
  BatteryCharging,
  Bone,
  BookOpen,
  CheckCircle2,
  Dna,
  Droplets,
  Dumbbell,
  Eye,
  Flame,
  FlaskConical,
  Globe,
  Heart,
  Layers,
  Leaf,
  Lock,
  Moon,
  RefreshCw,
  Scale,
  Scissors,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  Thermometer,
  TrendingUp,
  Utensils,
  Wind,
  Zap,
} from 'lucide-react';

interface TraitIconProps {
  name: string;
  className?: string;
}

export function TraitIcon({ name, className = 'w-4 h-4' }: TraitIconProps) {
  switch (name) {
    case 'flame':
      return <Flame className={className} />;
    case 'dna':
      return <Dna className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'zap':
      return <Zap className={className} />;
    case 'layers':
      return <Layers className={className} />;
    case 'leaf':
      return <Leaf className={className} />;
    case 'dumbbell':
      return <Dumbbell className={className} />;
    case 'flask':
      return <FlaskConical className={className} />;
    case 'shield':
      return <ShieldCheck className={className} />;
    case 'heart':
      return <Heart className={className} />;
    case 'alert':
      return <AlertTriangle className={className} />;
    case 'sun':
      return <Sun className={className} />;
    case 'eye':
      return <Eye className={className} />;
    case 'bone':
      return <Bone className={className} />;
    case 'droplets':
      return <Droplets className={className} />;
    case 'activity':
      return <Activity className={className} />;
    case 'utensils':
      return <Utensils className={className} />;
    case 'lock':
      return <Lock className={className} />;
    case 'scissors':
      return <Scissors className={className} />;
    case 'refresh':
      return <RefreshCw className={className} />;
    case 'battery':
      return <BatteryCharging className={className} />;
    case 'wind':
      return <Wind className={className} />;
    case 'thermometer':
      return <Thermometer className={className} />;
    case 'trending':
      return <TrendingUp className={className} />;
    case 'moon':
      return <Moon className={className} />;
    case 'smile':
      return <Smile className={className} />;
    case 'scale':
      return <Scale className={className} />;
    case 'apple':
      return <Apple className={className} />;
    case 'globe':
      return <Globe className={className} />;
    case 'search':
      return <Search className={className} />;
    case 'book':
      return <BookOpen className={className} />;
    case 'check':
      return <CheckCircle2 className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}
