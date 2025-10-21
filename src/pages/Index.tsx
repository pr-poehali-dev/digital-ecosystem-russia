import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const energyData = [
  { name: 'Янв', выработка: 4200, потребление: 3800 },
  { name: 'Фев', выработка: 4500, потребление: 4100 },
  { name: 'Мар', выработка: 4800, потребление: 4300 },
  { name: 'Апр', выработка: 5100, потребление: 4600 },
  { name: 'Май', выработка: 5400, потребление: 4900 },
  { name: 'Июн', выработка: 5800, потребление: 5200 },
];

const logisticsData = [
  { name: 'ЖД', value: 65, status: 'active' },
  { name: 'Авто', value: 45, status: 'active' },
  { name: 'Трубопровод', value: 88, status: 'warning' },
  { name: 'Склады', value: 72, status: 'active' },
];

const analyticsData = [
  { period: '00:00', недра: 82, логистика: 65, энергетика: 78, экология: 91 },
  { period: '04:00', недра: 85, логистика: 71, энергетика: 82, экология: 89 },
  { period: '08:00', недра: 91, логистика: 78, энергетика: 88, экология: 86 },
  { period: '12:00', недра: 88, логистика: 85, энергетика: 92, экология: 84 },
  { period: '16:00', недра: 93, логистика: 82, энергетика: 89, экология: 87 },
  { period: '20:00', недра: 87, логистика: 75, энергетика: 85, экология: 90 },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('logistics');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">ЦЭНК</h1>
                <p className="text-sm text-muted-foreground">Цифровая экосистема недропользования и энергетики</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1">
                <Icon name="Activity" size={14} />
                Онлайн
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-fade-in">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Mountain" className="text-primary" size={24} />
                <Badge variant="secondary">+12%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-sm text-muted-foreground">Активных месторождений</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="TrendingUp" className="text-secondary" size={24} />
                <Badge className="bg-secondary">+8%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,847</div>
              <p className="text-sm text-muted-foreground">МВт энергии</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Truck" className="text-accent" size={24} />
                <Badge variant="outline">В пути</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-sm text-muted-foreground">Грузовых единиц</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Icon name="Leaf" className="text-secondary" size={24} />
                <Badge className="bg-secondary">Норма</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91%</div>
              <p className="text-sm text-muted-foreground">Эко-рейтинг</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 h-auto p-1">
            <TabsTrigger value="logistics" className="gap-2 px-6 py-3">
              <Icon name="Package" size={18} />
              Логистика
            </TabsTrigger>
            <TabsTrigger value="energy" className="gap-2 px-6 py-3">
              <Icon name="Zap" size={18} />
              Энергетика
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2 px-6 py-3">
              <Icon name="BarChart3" size={18} />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="logistics" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Truck" className="text-accent" size={20} />
                    Загрузка транспортных каналов
                  </CardTitle>
                  <CardDescription>Текущая нагрузка на логистическую сеть</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {logisticsData.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground">{item.value}%</span>
                      </div>
                      <Progress 
                        value={item.value} 
                        className={item.status === 'warning' ? '[&>div]:bg-accent' : '[&>div]:bg-secondary'}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    Активные маршруты
                  </CardTitle>
                  <CardDescription>Грузопотоки в реальном времени</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Icon name="Train" className="text-secondary" size={20} />
                        </div>
                        <div>
                          <div className="font-medium">Норильск → Красноярск</div>
                          <div className="text-sm text-muted-foreground">432 вагона • Руда</div>
                        </div>
                      </div>
                      <Badge className="bg-secondary">В пути</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <Icon name="Truck" className="text-accent" size={20} />
                        </div>
                        <div>
                          <div className="font-medium">Канск → Ачинск</div>
                          <div className="text-sm text-muted-foreground">87 автофургонов • Уголь</div>
                        </div>
                      </div>
                      <Badge variant="outline">Загрузка</Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name="Waves" className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="font-medium">Трубопровод №7</div>
                          <div className="text-sm text-muted-foreground">Газ • 2840 м³/ч</div>
                        </div>
                      </div>
                      <Badge className="bg-secondary">Активен</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Globe" className="text-secondary" size={20} />
                  Карта инфраструктуры
                </CardTitle>
                <CardDescription>Объекты логистической сети Красноярского края</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <div className="text-center space-y-2">
                    <Icon name="Map" className="text-muted-foreground mx-auto" size={48} />
                    <p className="text-sm text-muted-foreground">Интерактивная карта маршрутов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-secondary" size={20} />
                    Выработка и потребление
                  </CardTitle>
                  <CardDescription>МВт • Динамика за полугодие 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={energyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="name" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="выработка" 
                        stroke="hsl(var(--secondary))" 
                        fill="hsl(var(--secondary))" 
                        fillOpacity={0.3}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="потребление" 
                        stroke="hsl(var(--primary))" 
                        fill="hsl(var(--primary))" 
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wind" className="text-secondary" size={20} />
                    Объекты ВИЭ
                  </CardTitle>
                  <CardDescription>Возобновляемые источники энергии</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <Icon name="Sun" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-xl">847 МВт</div>
                        <div className="text-sm text-muted-foreground">Солнечная энергия</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-secondary">+15%</div>
                      <div className="text-xs text-muted-foreground">за месяц</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="Wind" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-xl">1,243 МВт</div>
                        <div className="text-sm text-muted-foreground">Ветровая энергия</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">+22%</div>
                      <div className="text-xs text-muted-foreground">за месяц</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon name="Droplet" className="text-accent" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-xl">2,156 МВт</div>
                        <div className="text-sm text-muted-foreground">Гидроэнергия</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-accent">+8%</div>
                      <div className="text-xs text-muted-foreground">за месяц</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" className="text-accent" size={20} />
                  Распределение энергии
                </CardTitle>
                <CardDescription>По типам потребителей</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={[
                    { name: 'Промышленность', value: 45 },
                    { name: 'Жилой сектор', value: 28 },
                    { name: 'Транспорт', value: 15 },
                    { name: 'Сельское хоз.', value: 12 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="value" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" className="text-primary" size={20} />
                  Интегральная эффективность систем
                </CardTitle>
                <CardDescription>Показатели работы всех блоков экосистемы за 24 часа</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="period" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="недра" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="логистика" stroke="hsl(var(--accent))" strokeWidth={2} />
                    <Line type="monotone" dataKey="энергетика" stroke="hsl(var(--secondary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="экология" stroke="#00A86B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Блок «Недра»</CardTitle>
                    <Icon name="Mountain" className="text-primary" size={20} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">88%</div>
                  <p className="text-sm text-muted-foreground">Средняя эффективность</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="TrendingUp" size={16} className="text-secondary" />
                    <span className="text-secondary font-medium">+3% за сутки</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Блок «Логистика»</CardTitle>
                    <Icon name="Package" className="text-accent" size={20} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">76%</div>
                  <p className="text-sm text-muted-foreground">Средняя эффективность</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="TrendingUp" size={16} className="text-secondary" />
                    <span className="text-secondary font-medium">+1% за сутки</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Блок «Энергетика»</CardTitle>
                    <Icon name="Zap" className="text-secondary" size={20} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">86%</div>
                  <p className="text-sm text-muted-foreground">Средняя эффективность</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="TrendingUp" size={16} className="text-secondary" />
                    <span className="text-secondary font-medium">+2% за сутки</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4" style={{ borderLeftColor: '#00A86B' }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Блок «Экология»</CardTitle>
                    <Icon name="Leaf" style={{ color: '#00A86B' }} size={20} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold">88%</div>
                  <p className="text-sm text-muted-foreground">Средняя эффективность</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Minus" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground font-medium">Без изменений</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={20} />
                  Блок «Кадры»
                </CardTitle>
                <CardDescription>Специалисты и образовательные программы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">12,847</div>
                    <p className="text-sm text-muted-foreground">Специалистов в базе</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">342</div>
                    <p className="text-sm text-muted-foreground">Открытых вакансий</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">67</div>
                    <p className="text-sm text-muted-foreground">Курсов повышения</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
