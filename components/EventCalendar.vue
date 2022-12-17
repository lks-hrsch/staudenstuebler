<template>
    <div>
        <div class="bg-white rounded shadow overflow-hidden">
            <div class="flex items-center justify-between py-2 px-6">
                <div>
                    <span class="text-lg font-bold text-gray-800">{{ monthNames[month] }}</span>
                    <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
                </div>
                <div class="border rounded-lg px-1" style="padding-top: 2px;">
                    <button type="button"
                        class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                        :class="{ 'cursor-not-allowed opacity-25': month == 0 }" :disabled="month == 0 ? true : false"
                        @click="month--; getNoOfDays()">
                        <svg class="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div class="border-r inline-flex h-6"></div>
                    <button type="button"
                        class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
                        :class="{ 'cursor-not-allowed opacity-25': month == 11 }" :disabled="month == 11 ? true : false"
                        @click="month++; getNoOfDays()">
                        <svg class="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="-mx-1 -mb-1">
                <div class="grid grid-cols-7">
                    <div v-for="(day, index) in dayNames" :key="index" class="col-span-1">
                        <div class="px-2 py-2">
                            <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">{{ day }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-7 border-t border-l">
                    <div v-for="blankday in blankDays" class="col-span-1">
                        <div class="text-center border-r border-b px-4 pt-2 h-32"></div>
                    </div>

                    <div v-for="date, index in noOfDays" :key="index" class="col-span-1">
                        <div class="px-4 pt-2 border-r border-b relative h-32">
                            <div class="inline-flex w-6 h-6 items-center justify-center text-center leading-none rounded-full transition ease-in-out duration-100"
                                :class="{ 'bg-red-400 text-white': isToday(date) == true }">
                                {{ date }}</div>
                            <div class="overflow-y-auto mt-1">
                                <div
                                    v-for="event in getEventsForDate(year, month, date)">
                                    <div
                                        class="px-2 py-1 rounded-lg mt-1 overflow-hidden border" :class="{'border-green-200 text-green-800 bg-green-100' : event.eventIsIntern, 'border-red-200 text-red-800 bg-red-100' : !event.eventIsIntern}">
                                        <p class="text-sm truncate leading-tight">{{ event.eventTitle }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-for="blankday in blankDaysAfter" class="col-span-1">
                        <div class="text-center border-r border-b px-4 pt-2 h-32"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['events'],
    data() {
        return {
            month: '',
            year: '',
            noOfDays: [],
            blankDays: [],
            blankDaysAfter: [],
        }
    },
    mounted() {
        let today = new Date()
        this.month = today.getMonth()
        this.year = today.getFullYear()
        this.getNoOfDays()
    },
    computed: {
        monthNames() {
            return ['Jannuar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
        },
        dayNames() {
            return ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
        }
    },
    methods: {
        isToday(date) {
            const today = new Date()
            const d = new Date(this.year, this.month, date)

            return today.toDateString() === d.toDateString() ? true : false
        },
        getNoOfDays() {
            let daysInMonth = new Date(this.year, this.month + 1, 0).getDate()
            let dayOfWeek = new Date(this.year, this.month).getDay()
            //   https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
            let shiftedDayOfWeek = dayOfWeek - (dayOfWeek == 0 ? -6 : 1) // adjust when day is sunday

            let blankDaysArray = []
            for (var i = 1; i <= shiftedDayOfWeek; i++) {
                blankDaysArray.push(i)
            }

            let daysArray = []
            for (var i = 1; i <= daysInMonth; i++) {
                daysArray.push(i)
            }

            let blankDaysAfterArray = []
            for (var i = 1; i <= 42 - shiftedDayOfWeek - daysInMonth; i++) {
                blankDaysAfterArray.push(i)
            }

            this.blankDays = blankDaysArray
            this.blankDaysAfter = blankDaysAfterArray
            this.noOfDays = daysArray
        },
        getEventsForDate(year, month, day) {
            let date = new Date(year, month, day).getTime();
            var eventList = [];
            
            this.events.forEach(element => {
                let eventDatesList = element.eventDate.map(e => e.getTime());
                console.log(eventDatesList);
                if (eventDatesList.includes(date)) {
                    eventList.push(element)
                }
            });
            
            return eventList;
        }
    }
}
</script>