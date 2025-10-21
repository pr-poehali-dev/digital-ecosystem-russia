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
  const [energyFilter, setEnergyFilter] = useState<'all' | 'renewable' | 'nonrenewable'>('all');

  const totalEnergy = 5847;
  const renewableEnergy = 4246;
  const nonRenewableEnergy = 1601;

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
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-5 h-auto p-1">
            <TabsTrigger value="logistics" className="gap-2 px-6 py-3">
              <Icon name="Package" size={18} />
              Логистика
            </TabsTrigger>
            <TabsTrigger value="energy" className="gap-2 px-6 py-3">
              <Icon name="Zap" size={18} />
              Энергетика
            </TabsTrigger>
            <TabsTrigger value="ecology" className="gap-2 px-6 py-3">
              <Icon name="Leaf" size={18} />
              Экология
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2 px-6 py-3">
              <Icon name="BarChart3" size={18} />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="staff" className="gap-2 px-6 py-3">
              <Icon name="Users" size={18} />
              Кадры
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  energyFilter === 'all' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setEnergyFilter('all')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Zap" className="text-primary" size={24} />
                    <Badge variant={energyFilter === 'all' ? 'default' : 'outline'}>Всего</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalEnergy.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">МВт общая выработка</p>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  energyFilter === 'renewable' ? 'ring-2 ring-secondary' : ''
                }`}
                onClick={() => setEnergyFilter('renewable')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Leaf" className="text-secondary" size={24} />
                    <Badge variant={energyFilter === 'renewable' ? 'default' : 'outline'} className={energyFilter === 'renewable' ? 'bg-secondary' : ''}>ВИЭ</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{renewableEnergy.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">МВт возобновляемая</p>
                  <div className="mt-2 text-xs text-secondary font-medium">
                    {Math.round((renewableEnergy / totalEnergy) * 100)}% от общей
                  </div>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  energyFilter === 'nonrenewable' ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setEnergyFilter('nonrenewable')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Flame" className="text-accent" size={24} />
                    <Badge variant={energyFilter === 'nonrenewable' ? 'default' : 'outline'} className={energyFilter === 'nonrenewable' ? 'bg-accent' : ''}>Традиционная</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{nonRenewableEnergy.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">МВт невозобновляемая</p>
                  <div className="mt-2 text-xs text-muted-foreground font-medium">
                    {Math.round((nonRenewableEnergy / totalEnergy) * 100)}% от общей
                  </div>
                </CardContent>
              </Card>
            </div>

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
                    {energyFilter === 'all' && <Icon name="Zap" className="text-primary" size={20} />}
                    {energyFilter === 'renewable' && <Icon name="Leaf" className="text-secondary" size={20} />}
                    {energyFilter === 'nonrenewable' && <Icon name="Flame" className="text-accent" size={20} />}
                    {energyFilter === 'all' ? 'Все источники энергии' : energyFilter === 'renewable' ? 'Возобновляемые источники' : 'Невозобновляемые источники'}
                  </CardTitle>
                  <CardDescription>
                    {energyFilter === 'all' ? 'Полный перечень энергетических объектов' : 
                     energyFilter === 'renewable' ? 'Объекты ВИЭ' : 'Традиционные источники энергии'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(energyFilter === 'all' || energyFilter === 'renewable') && (
                    <>
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
                    </>
                  )}

                  {(energyFilter === 'all' || energyFilter === 'nonrenewable') && (
                    <>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                            <Icon name="Flame" className="text-accent" size={24} />
                          </div>
                          <div>
                            <div className="font-bold text-xl">892 МВт</div>
                            <div className="text-sm text-muted-foreground">ТЭЦ на угле</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-muted-foreground">-2%</div>
                          <div className="text-xs text-muted-foreground">за месяц</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon name="Zap" className="text-primary" size={24} />
                          </div>
                          <div>
                            <div className="font-bold text-xl">709 МВт</div>
                            <div className="text-sm text-muted-foreground">Газовые станции</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-muted-foreground">0%</div>
                          <div className="text-xs text-muted-foreground">за месяц</div>
                        </div>
                      </div>
                    </>
                  )}
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

          <TabsContent value="ecology" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Wind" style={{ color: '#00A86B' }} size={24} />
                    <Badge className="bg-secondary">Норма</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18 мкг/м³</div>
                  <p className="text-sm text-muted-foreground">Качество воздуха</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Droplet" className="text-primary" size={24} />
                    <Badge className="bg-secondary">Отлично</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6.8 pH</div>
                  <p className="text-sm text-muted-foreground">Качество воды</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Mountain" className="text-accent" size={24} />
                    <Badge className="bg-secondary">Допустимо</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0.8 ПДК</div>
                  <p className="text-sm text-muted-foreground">Состояние почвы</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Satellite" className="text-secondary" size={24} />
                    <Badge className="bg-secondary">Активно</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-sm text-muted-foreground">Датчиков онлайн</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wind" style={{ color: '#00A86B' }} size={20} />
                    Мониторинг качества воздуха
                  </CardTitle>
                  <CardDescription>Динамика показателей по основным загрязнителям</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={[
                      { time: '00:00', PM25: 15, PM10: 22, NO2: 18 },
                      { time: '04:00', PM25: 12, PM10: 19, NO2: 16 },
                      { time: '08:00', PM25: 18, PM10: 25, NO2: 22 },
                      { time: '12:00', PM25: 21, PM10: 28, NO2: 24 },
                      { time: '16:00', PM25: 19, PM10: 26, NO2: 21 },
                      { time: '20:00', PM25: 16, PM10: 23, NO2: 19 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="time" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line type="monotone" dataKey="PM25" stroke="#00A86B" strokeWidth={2} name="PM2.5" />
                      <Line type="monotone" dataKey="PM10" stroke="hsl(var(--primary))" strokeWidth={2} name="PM10" />
                      <Line type="monotone" dataKey="NO2" stroke="hsl(var(--accent))" strokeWidth={2} name="NO₂" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" style={{ color: '#00A86B' }} size={20} />
                    Датчики мониторинга
                  </CardTitle>
                  <CardDescription>Сеть экологического контроля по краю</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon name="Wind" className="text-secondary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Станция «Северная»</div>
                        <div className="text-sm text-muted-foreground">Норильск • Воздух + Вода</div>
                      </div>
                    </div>
                    <Badge className="bg-secondary">Онлайн</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon name="Droplet" className="text-secondary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Станция «Енисей»</div>
                        <div className="text-sm text-muted-foreground">Красноярск • Вода + Почва</div>
                      </div>
                    </div>
                    <Badge className="bg-secondary">Онлайн</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="Mountain" className="text-accent" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Станция «Промышленная»</div>
                        <div className="text-sm text-muted-foreground">Ачинск • Почва + Воздух</div>
                      </div>
                    </div>
                    <Badge variant="outline">Калибровка</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Satellite" className="text-primary" size={20} />
                  Спутниковый мониторинг
                </CardTitle>
                <CardDescription>Космический контроль экологической обстановки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="TreePine" className="text-secondary" size={20} />
                      <div className="font-medium">Лесные массивы</div>
                    </div>
                    <div className="text-2xl font-bold mb-1">94.2%</div>
                    <p className="text-sm text-muted-foreground">Площадь покрытия</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Flame" className="text-accent" size={20} />
                      <div className="font-medium">Очаги возгорания</div>
                    </div>
                    <div className="text-2xl font-bold mb-1">3</div>
                    <p className="text-sm text-muted-foreground">Активных точки</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="CloudRain" className="text-primary" size={20} />
                      <div className="font-medium">Водные объекты</div>
                    </div>
                    <div className="text-2xl font-bold mb-1">127</div>
                    <p className="text-sm text-muted-foreground">Под контролем</p>
                  </div>
                </div>
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
                <CardDescription>Данные собираются с IoT-датчиков, систем мониторинга и ERP-платформ в реальном времени</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-3 rounded-lg bg-muted/50 border border-muted-foreground/20">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Источники данных:</span> Телеметрия с месторождений, SCADA-системы энергообъектов, 
                      GPS-трекеры транспорта, экологические датчики качества воздуха и воды. Агрегация каждые 15 минут.
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="period" className="text-xs" />
                    <YAxis className="text-xs" label={{ value: 'Эффективность (%)', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                      formatter={(value: any) => [`${value}%`, '']}
                    />
                    <Line type="monotone" dataKey="недра" stroke="hsl(var(--primary))" strokeWidth={2} name="Недра" />
                    <Line type="monotone" dataKey="логистика" stroke="hsl(var(--accent))" strokeWidth={2} name="Логистика" />
                    <Line type="monotone" dataKey="энергетика" stroke="hsl(var(--secondary))" strokeWidth={2} name="Энергетика" />
                    <Line type="monotone" dataKey="экология" stroke="#00A86B" strokeWidth={2} name="Экология" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                    <span className="text-xs text-muted-foreground">Недра — телеметрия скважин</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))' }}></div>
                    <span className="text-xs text-muted-foreground">Логистика — GPS грузов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: 'hsl(var(--secondary))' }}></div>
                    <span className="text-xs text-muted-foreground">Энергетика — SCADA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#00A86B' }}></div>
                    <span className="text-xs text-muted-foreground">Экология — датчики воздуха</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-l-4 border-l-primary group hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      Блок «Недра»
                      <Icon name="HelpCircle" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    </CardTitle>
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
                  <div className="pt-2 mt-2 border-t opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-muted-foreground">📡 247 скважин • 1,284 датчика добычи</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent group hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      Блок «Логистика»
                      <Icon name="HelpCircle" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    </CardTitle>
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
                  <div className="pt-2 mt-2 border-t opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-muted-foreground">🚚 1,284 транспорта • GPS каждые 5 мин</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary group hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      Блок «Энергетика»
                      <Icon name="HelpCircle" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    </CardTitle>
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
                  <div className="pt-2 mt-2 border-t opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-muted-foreground">⚡ 87 объектов • SCADA реал-тайм</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4" style={{ borderLeftColor: '#00A86B' }} className="border-l-4 group hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      Блок «Экология»
                      <Icon name="HelpCircle" className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    </CardTitle>
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
                  <div className="pt-2 mt-2 border-t opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-muted-foreground">🌍 247 датчиков • воздух + вода</p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </TabsContent>

          <TabsContent value="staff" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Users" className="text-primary" size={24} />
                    <Badge variant="secondary">Активные</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12,847</div>
                  <p className="text-sm text-muted-foreground">Специалистов в базе</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="Briefcase" className="text-accent" size={24} />
                    <Badge className="bg-accent">Горячие</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">342</div>
                  <p className="text-sm text-muted-foreground">Открытых вакансий</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name="GraduationCap" className="text-secondary" size={24} />
                    <Badge className="bg-secondary">Доступно</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">67</div>
                  <p className="text-sm text-muted-foreground">Курсов повышения</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Briefcase" className="text-accent" size={20} />
                    Актуальные вакансии
                  </CardTitle>
                  <CardDescription>Самые востребованные позиции</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="HardHat" className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Инженер-геолог</div>
                        <div className="text-sm text-muted-foreground">Норильск • От 180,000 ₽</div>
                      </div>
                    </div>
                    <Badge className="bg-accent">23 заявки</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon name="Zap" className="text-secondary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Электромонтёр ВИЭ</div>
                        <div className="text-sm text-muted-foreground">Красноярск • От 120,000 ₽</div>
                      </div>
                    </div>
                    <Badge className="bg-accent">18 заявок</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon name="Brain" className="text-secondary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Инженер ML/AI</div>
                        <div className="text-sm text-muted-foreground">Красноярск • От 220,000 ₽</div>
                      </div>
                    </div>
                    <Badge className="bg-accent">15 заявок</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="Database" className="text-accent" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Data Scientist</div>
                        <div className="text-sm text-muted-foreground">Удалённо • От 180,000 ₽</div>
                      </div>
                    </div>
                    <Badge className="bg-accent">22 заявки</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Workflow" className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">MLOps-инженер</div>
                        <div className="text-sm text-muted-foreground">Норильск • От 200,000 ₽</div>
                      </div>
                    </div>
                    <Badge className="bg-accent">9 заявок</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Icon name="Lightbulb" className="text-accent" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">AI Product Manager</div>
                        <div className="text-sm text-muted-foreground">Красноярск • От 250,000 ₽</div>
                      </div>
                    </div>
                    <Badge className="bg-accent">7 заявок</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="GraduationCap" className="text-secondary" size={20} />
                    Популярные курсы
                  </CardTitle>
                  <CardDescription>Программы повышения квалификации</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Leaf" className="text-secondary" size={20} />
                      <div className="font-medium">Эксплуатация объектов ВИЭ</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">72 часа • СибГУ им. Решетнёва</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">47 из 60</span>
                        <span className="text-muted-foreground"> участников</span>
                      </div>
                      <Progress value={78} className="w-24 [&>div]:bg-secondary" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="HardHat" className="text-primary" size={20} />
                      <div className="font-medium">Промышленная безопасность</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">40 часов • КрасГАУ</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">35 из 40</span>
                        <span className="text-muted-foreground"> участников</span>
                      </div>
                      <Progress value={88} className="w-24 [&>div]:bg-primary" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="BarChart3" className="text-accent" size={20} />
                      <div className="font-medium">Анализ данных в энергетике</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">56 часов • СФУ</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">28 из 50</span>
                        <span className="text-muted-foreground"> участников</span>
                      </div>
                      <Progress value={56} className="w-24 [&>div]:bg-accent" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Brain" className="text-secondary" size={20} />
                      <div className="font-medium">Машинное обучение для инженеров</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">120 часов • СФУ</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">41 из 45</span>
                        <span className="text-muted-foreground"> участников</span>
                      </div>
                      <Progress value={91} className="w-24 [&>div]:bg-secondary" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Code" className="text-primary" size={20} />
                      <div className="font-medium">Python для анализа данных</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">80 часов • КрасГАУ</div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">33 из 40</span>
                        <span className="text-muted-foreground"> участников</span>
                      </div>
                      <Progress value={82} className="w-24 [&>div]:bg-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>



            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={20} />
                  Распределение специалистов
                </CardTitle>
                <CardDescription>По направлениям деятельности</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={[
                    { name: 'Геология/Недра', value: 3842 },
                    { name: 'Энергетика', value: 2934 },
                    { name: 'Логистика', value: 2156 },
                    { name: 'Экология', value: 1847 },
                    { name: 'Аналитика', value: 2068 },
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
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;